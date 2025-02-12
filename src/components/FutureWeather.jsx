import React, { useContext } from 'react';
import { weatherContext } from '../context/WeatherProvider';

const FutureWeather = () => {
  const { nextDays } = useContext(weatherContext);

  // Example indices for weather data points
  const indices = [7, 15, 23, 31, 39];
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];


  // Function to calculate and format future dates
  const formatDate = (dt) => {
    const d = new Date(dt * 1000);
    const date = d.getDate();
    const month = months[d.getMonth()]
    return `${date},${month}`;
  };
  const formatDay = (dt) => {
    const date = new Date(dt * 1000);
    const day = days[date.getDay()]
    return day;
  }

  return (
    <>
      <h1 className='text-gray-200 m-3'>5 Days Forecast</h1>
      <div className=" bg-[#121212] rounded-3xl px-7 py-5">
        {nextDays && nextDays.list ? (
          indices.map((index, i) => {
            const weather = nextDays.list[index];
            return (
              <div key={i} className="mt-3">
                {weather?.main?.temp !== undefined ? (
                  <>
                    <div className='flex items-center text-center justify-between'>
                      <p className="text-xl text-gray-200">{Math.round(weather.main.temp)}<sup className='text-sm'>°C</sup></p>
                      <p className="text-sm text-gray-400">{formatDate(weather.dt)}</p>
                      <p className="text-sm text-gray-400">{formatDay(weather.dt)}</p>
                    </div>
                  </>
                ) : (
                  <p className="text-gray-400">Data unavailable</p>
                )}
              </div>
            );
          })
        ) : (
          <p className="text-gray-400">Loading weather data...</p>
        )}
      </div>
    </>
  );
};

export default FutureWeather;
