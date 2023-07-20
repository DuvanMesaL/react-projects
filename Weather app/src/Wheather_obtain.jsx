import { useState, useEffect } from 'react';

const apiKey = '78198ffd73a4983fb9d3abf0879c62f4';

const useWeatherData = (initialQuery = "London", initialUnit = 'C') => {
    const [weatherData, setWeatherData] = useState(null);
    const [query, setQuery] = useState(initialQuery);
    const [unit, setUnit] = useState(initialUnit);
    const [cityName, setCityName] = useState('');

    const convertToFahrenheit = (tempCelsius) => {
        return (tempCelsius * 9/5) + 32;
    }

    const switchToCelsius = () => {
        setUnit('C');
    };

    const switchToFahrenheit = () => {
        setUnit('F');
    };

    useEffect(() => {
        const getWeather = async () => {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&units=metric&appid=${apiKey}`);
            const data = await response.json();
            if (data && data.list) {
                setCityName(data.city.name);
                // Group the data by date
                const dataByDate = data.list.reduce((acc, cur) => {
                    const date = cur.dt_txt.split(' ')[0]; // extract the date
                    if (!acc[date]) {
                        acc[date] = [];
                    }
                    acc[date].push(cur);
                    return acc;
                }, {});

                // Extract the data for the current day and the next five days
                const dates = Object.keys(dataByDate).sort();
                const currentDayData = dataByDate[dates[0]];
                const nextFiveDaysData = dates.slice(1, 6).map(date => dataByDate[date]);

                setWeatherData({ nextFiveDaysData, currentDayData });
            } else {
                console.error("Invalid data:", data);
            }
        }
        getWeather();
    }, [query]);

    return { weatherData, cityName, setQuery, unit, setUnit, convertToFahrenheit, switchToCelsius, switchToFahrenheit }; // Return cityName
};

export default useWeatherData;
