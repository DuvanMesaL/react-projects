import React from 'react';
import DayCard from './ComponentsForComponents/DayCard.jsx';

const WheatherPronosticHeaderInfoCard = ({weatherData, unit, convertToFahrenheit}) => {
    return (
        <section className="Wheather-Pronostic-header-info-Card">
            {weatherData && weatherData.nextFiveDaysData && weatherData.nextFiveDaysData.map((dailyData, i) => (
                dailyData.length > 0 && (
                    <DayCard 
                        key={i}
                        weatherData={dailyData[0]}
                        unit={unit}
                        convertToFahrenheit={convertToFahrenheit}
                    />
                )
            ))}
        </section>
    );
};

export default WheatherPronosticHeaderInfoCard;
