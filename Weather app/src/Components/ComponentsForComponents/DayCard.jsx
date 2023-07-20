import React from 'react';
import weatherImages from './WeatherImages.jsx'; 

const DayCard = ({ weatherData, unit, convertToFahrenheit }) => {

    const forecastDate = new Date(weatherData.dt * 1000);
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    const weatherCondition = weatherData.weather[0].main;
    
    const img = weatherImages[weatherCondition];
    
    let date = forecastDate.toLocaleDateString();

    if (
        forecastDate.getDate() === today.getDate() &&
        forecastDate.getMonth() === today.getMonth() &&
        forecastDate.getFullYear() === today.getFullYear()
    ) {
        date = 'Today';
    } else if (
        forecastDate.getDate() === tomorrow.getDate() &&
        forecastDate.getMonth() === tomorrow.getMonth() &&
        forecastDate.getFullYear() === tomorrow.getFullYear()
    ) {
        date = 'Tomorrow';
    }

    const maxTemperature = Math.round(unit === 'C' ? weatherData.main.temp_max : convertToFahrenheit(weatherData.main.temp_max));
    const minTemperature = Math.round(unit === 'C' ? weatherData.main.temp_min : convertToFahrenheit(weatherData.main.temp_min));

    return (
        <article className="Card-container">
            <section className="top-info-Card">
                <h1 className="Date-Card">
                    {date}
                </h1>
            </section>
            <section className="img-wheather-card">
                <img className="Image-card-wheather" src={img} alt='Date img wheather' />
            </section>
            <section className="Grade-Info-card">
                <h1 className="Max-temperature-info info-grade">
                    {maxTemperature}°{unit}
                </h1>
                <h1 className="Min-temperature-info info-grade">
                    {minTemperature}°{unit}
                </h1>
            </section>
        </article>
    );
};

export default DayCard;
