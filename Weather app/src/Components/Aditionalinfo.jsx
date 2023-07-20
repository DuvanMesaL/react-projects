import {CardAditionalInfo} from './AditionalinfoCard.jsx';
import {ProgressBar} from './ComponentsForComponents/Humidity.jsx';
import { Wind } from './ComponentsForComponents/WindStatus.jsx';
import useWeatherData from '../Wheather_obtain.jsx';

export function AditionalInfo() {
    const { weatherData } = useWeatherData();

    // Check if weather data is available
    if (weatherData && weatherData.currentDayData && weatherData.currentDayData.length > 0) {
        // Destructuring the required properties from the current day's weather data
        const { wind: { speed: windSpeed }, main: { humidity, pressure }, visibility } = weatherData.currentDayData[0];

        // convert visibility from meters to miles
        const visibilityInMiles = (visibility / 1609.34).toFixed(0);
        const windspeedfix = windSpeed.toFixed(0);

        return (
            <section className="Wheather-pronostic-aditional-info">
                <article className="Tittle-Aditional-info-content">
                    <h1 className="Aditional-info-Title">
                        Today's Hightlights
                    </h1>
                </article>
                <div className="container-Aditional-info">
                    <article className="Wheather-Todays-Aditional-info-Card-container">
                        <>
                            <CardAditionalInfo
                                title = "Wind status"
                                data = {`${windspeedfix}`}
                                datacomplement = "mph"
                                content = { 
                                    <Wind/>
                                }
                                NewClassName = "Wind-Status-Card"
                            />
                            <CardAditionalInfo
                                title = "Humidity"
                                data = {`${humidity}`}
                                datacomplement= "%"
                                content=
                                {
                                    <ProgressBar percentage={humidity} />
                                }
                                NewClassName = "Humidity-Status-Card"
                            />
                        </>
                    </article>
                    <article className="Wheather-Todays-Aditional-info-Card-container">
                        <CardAditionalInfo
                            title = "Visibility"
                            data = {`${visibilityInMiles}`}
                            datacomplement = "miles"  // cambiar 'm' a 'mi' si se desea en millas
                            NewClassName = "Visibility-Status-Card"
                        />
                        <CardAditionalInfo
                            title = "Air Pressure"
                            data = {`${pressure}`}
                            datacomplement = "hPa"
                            NewClassName = ""
                        />
                    </article>
                </div>
            </section>
        )
    } else {
        // Render a loading spinner or some kind of placeholder here
        return (
            <div>Loading...</div>
        )
    }
}

