import React, { useState } from 'react'
import Header from './components/Header'
import CurrentWeather from './components/CurrentWeather'
import AirQuality from './components/AirQuality'
import FutureWeather from './components/FutureWeather'
import HourlyUpdate from './components/HourlyUpdate'

const App = () => {
  return (
    <div className='bg-black h-screen w-full px-8  '>
      <Header />
      <div className='flex justify-between w-full mt-6   items-start'>
        <div>
        <CurrentWeather />
        <FutureWeather/>
        </div>
        <div>
        <AirQuality />
        <HourlyUpdate/>
        </div>
      
      </div>
    </div>
  )
}

export default App
