import React, { useContext, useEffect, useState } from 'react'
import ReactAnimatedWeather from 'react-animated-weather'
import { weatherContext } from '../context/WeatherProvider'

const CurrentWeather = () => {
  const { curWeather } = useContext(weatherContext);
  const [icon, setIcon] = useState('CLOUDY');

  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const d = new Date();
  const day = days[d.getDay()]
  const month = months[d.getMonth()]
  const date = d.getDate();

  const weather = curWeather.weather[0].main;
  useEffect(() => {
    switch (weather) {
      case "Clouds":
        setIcon("CLOUDY");
        break;
      case "Haze":
        setIcon("CLEAR_DAY");
        break;
      case 'Rain':
        setIcon("RAIN");
        break;
      case 'Snow':
        setIcon("SNOW");
        break;
      case 'DUST':
        setIcon("WIND");
        break;
      case 'Drizzle':
        setIcon("SLEET")
        break;
      case "Fog":
        setIcon("FOG");
        break;
      case "Mist":
        setIcon("FOG");
        break;
      case "Smoke":
        setIcon("FOG");
        break;
      case "Tornado":
        setIcon("WIND");
        break;
      default:
        setIcon("CLEAR_DAY");
    }
  }, [weather])

  return (
    <>
      <div className='bg-[rgb(29,29,29)]  px-7 py-5 w-[350px]  rounded-3xl'>
        <p className='text-gray-400 '>Now</p>
        <div className='flex justify-between gap-10 items-center me-2'>
          <div>
            <h1 className='text-[90px] '>{Math.round(curWeather.main.temp)}<sup className='text-3xl mb-[-120px]'>°C</sup></h1>
          </div>
          <ReactAnimatedWeather icon={icon} size={110} color='#fff'></ReactAnimatedWeather>
        </div>
        <p className='text-gray-400 capitalize '>{curWeather.weather[0].description}</p>
        <hr className='text-gray-400 my-3' />
        <p className='text-gray-400 text-sm font-medium'><i className="fa-solid text-gray-200 me-2 fa-calendar-days"></i>{day} {date} , {month}</p>
        <p className='text-gray-400 mt-2 text-sm font-medium'><i className="fa-solid fa-location-dot text-gray-200 me-2"></i>{curWeather.name},{curWeather.sys.country}</p>
      </div>
    </>
  )
}

export default CurrentWeather;
