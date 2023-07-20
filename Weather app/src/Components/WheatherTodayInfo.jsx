import { IoLocationSharp } from 'react-icons/io5';

const TodayWheatherInfoContainer = ({ weatherData, unit, cityName, convertToFahrenheit }) => {

    if (!weatherData || !weatherData.currentDayData || weatherData.currentDayData.length === 0) {
        return <div>Loading...</div>;
    }

    const currentWeather = weatherData.currentDayData[0];
    let temp = currentWeather.main.temp;

    // Convert temperature to Fahrenheit if the unit is 'F'
    if (unit === 'F') {
        temp = convertToFahrenheit(temp);
    }

    return (
        <section className="wheather-today-info">
            <div className="Today-Grade-Info">
                <h1 className='Grade-For-Weather-Today'>
                    {Math.round(temp)}
                </h1>
                <span className='Grade-Simb-For-Grades'>°{unit}</span> 
            </div>
            <div className="Weather">
                <h3 className='Weather-Info-Today'>
                    {currentWeather.weather[0].description}
                </h3>
            </div>
            <div className="date-Today-info">
                <span className='Date'>today</span>
                <span className='Date-midle Date'>‧</span>
                <span className='Date'>
                    {new Date().toLocaleDateString()}
                </span>
            </div>
            <div className="Location-Today-Info">
                <IoLocationSharp className='Location-Logo-Today-Weather' size={25} />
                <h5>{cityName}</h5>
            </div>
        </section>
    );
    
}

export default TodayWheatherInfoContainer;
