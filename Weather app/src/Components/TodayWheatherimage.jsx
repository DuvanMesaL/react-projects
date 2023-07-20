import React from 'react';
import useWeatherData from '../Wheather_obtain.jsx'; // Asegúrate de usar la ruta correcta
import weatherImages from './ComponentsForComponents/WeatherImages.jsx';  // Asegúrate de usar la ruta correcta

const TodayWeatherLogo = () => {
    const { weatherData } = useWeatherData();  // obtener weatherData de useWeatherData

    let weatherImage;

    if (weatherData && weatherData.currentDayData && weatherData.currentDayData.length > 0) {
        const weatherCondition = weatherData.currentDayData[0].weather[0].main;
        weatherImage = weatherImages[weatherCondition];
    }

    return(
        <section className="weather-container-img">
            <div className="background-image">
            </div>
            <div className="today-image">
                {weatherImage && <img src={weatherImage} alt="Weather icon"/>}
            </div>
        </section>
    )
}

export default TodayWeatherLogo;
