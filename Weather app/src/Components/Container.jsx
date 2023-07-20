import React, { useState } from 'react';
import useWeatherData from '../Wheather_obtain.jsx';
import {AditionalInfo} from './Aditionalinfo.jsx';
import TodayWheatherLogo from './TodayWheatherimage.jsx';
import TodayWheatherInfoContainer from './WheatherTodayInfo.jsx';
import WheatherTodayPronosticTopAsideButtons from './WheatherTodayButtons.jsx';
import WheatherPronosticTopInfoButtons from './WheatherPronosticTopInfoButtons.jsx';
import WheatherPronosticHeaderInfoCard from './WheatherPronosticHeaderInfoCard.jsx';
import SideBarMenu from './SideBarMenu';

export function ContainerWheatherApp() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { weatherData, setUnit, unit, convertToFahrenheit, setQuery, cityName } = useWeatherData(); // Use cityName here
    const [activeButton, setActiveButton] = useState('C'); // Inicialmente el botón ºC es el activo.

    const openMenu = () => setIsMenuOpen(true);
    const closeMenu = () => setIsMenuOpen(false);

    const handleChangeUnit = (newUnit) => {
        setUnit(newUnit);
        setActiveButton(newUnit);
    }

    return(
        <section className="Body-Container-Wheather-Page">
            <article className="Container-Wheather-Page">
                {isMenuOpen && <SideBarMenu closeMenu={closeMenu} setQuery={setQuery} />}
                <aside className="Search-for-Places-section"> 
                    <WheatherTodayPronosticTopAsideButtons onMenuButtonClick={openMenu} />
                    <TodayWheatherLogo/>
                    <TodayWheatherInfoContainer 
                        weatherData={weatherData} 
                        unit={unit} 
                        cityName={cityName}
                        convertToFahrenheit={convertToFahrenheit} // Add this line
                    />
                </aside>
                <main className="Wheather-Pronostic-Info-Section">
                    <WheatherPronosticTopInfoButtons 
                        activeButton={activeButton} 
                        handleChangeUnit={handleChangeUnit} 
                    />
                    <WheatherPronosticHeaderInfoCard
                        weatherData={weatherData}
                        unit={unit}
                        convertToFahrenheit={convertToFahrenheit}
                    />
                    <AditionalInfo/>
                    <section className="Wheather-pronostic-bottom">
                        <p className='footer-info'>Created by -</p><a className="user" href="#">Duvan Mesa</a> <p className='footer-info'>- devChallenges.io</p>
                    </section>
                </main>
            </article>
        </section>
    )
}
