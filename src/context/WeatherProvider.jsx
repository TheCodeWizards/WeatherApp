import React, { createContext, useEffect, useState } from 'react'
import CurrentWeather from './CurrentWeather';
import NextFiveDaysWeather from './NextFiveDaysWeather';
import Pollution from './Pollution'
export const weatherContext = createContext();
const WeatherProvider = ({ children }) => {
  const apiKey = 'af664d8837e85bdf1f3c0ddc79ec8772';
  const [nextDays, setFiveDays] = useState();
  const [curWeather, setCurWeather] = useState({
    name: '',
    main: {
      temp: '',
      feels_like: '',
      humidity: '',
      pressure: '',
    },
    visibility: '',
    sys: {
      country: '',
      sunsrise: '',
      sunset: '',
    },
    weather: [
      {
        main: '',
        description: '',
      }
    ]
  });
  const [pollution, setPollution] = useState({
    list: [{
      components: {
        co: '',
        no: '',
        no2: '',
        so2: '',
        pm2_5: '',
        o3: '',
      }
    }
    ]
  });

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {

        // For next five days weather
        NextFiveDaysWeather(position.coords.latitude, position.coords.longitude, apiKey)
          .then((res) => setFiveDays(res))
          .catch((error) => console.log(error));

        // For current weather
        CurrentWeather(position.coords.latitude, position.coords.longitude, apiKey)
          .then((res) => setCurWeather(res))
          .catch((error) => console.log(error));

          // For air Pollution
        Pollution(position.coords.latitude, position.coords.longitude, apiKey)
          .then((res) => setPollution(res))
          .catch((error) => console.log(error));
      })
    } else {
      console.log('Gealocation doest not supported by the browser');
    }
  }
  useEffect(() => {
    getLocation();
  }, []);
  const fetchWeather = (url,setState)=>{
    fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network call issue ");
      }
      return response.json();
    })
    .then((res) => setState(res))
    .catch((error) => console.log(error));

  }
  const getCity = (city) => {
    const basedUrl = `https://api.openweathermap.org/data/2.5`;
    fetchWeather(`${basedUrl}/weather?&units=metric&appid=${apiKey}&q=${city}`,setCurWeather);
    fetchWeather(`${basedUrl}/forecast?&units=metric&appid=${apiKey}&q=${city}`,setFiveDays);
    fetchWeather(`${basedUrl}/air_pollution?&units=metric&appid=${apiKey}&q=${city}`,setPollution);
      
  }
  return (
    <weatherContext.Provider value={{ nextDays, curWeather, pollution, getCity,getLocation }}>
      {children}
    </weatherContext.Provider>
  )
}

export default WeatherProvider
