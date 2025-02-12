import React, { useContext } from 'react'
import { weatherContext } from '../context/WeatherProvider'

const AirQuality = () => {
    const { pollution, curWeather } = useContext(weatherContext);
    const covertTime = (unimaxTime) => {
        const date = new Date(unimaxTime * 1000);
        let amPm= '';
        const hours = date.getHours();
        const min = date.getMinutes();
        if (hours > 12)
             amPm = 'pm';
        else
            amPm = 'am';
        const time = `${hours}:${min} ${amPm}`
        return time;
    }
    const visibility = (curWeather.visibility)/1000

    return (
        <div className='bg-[rgb(29,29,29)] p-8 rounded-3xl'>
            <p className='text-gray-400 font-medium'>Todays Highlights</p>
            <div className='columns-2 mt-4'>
                <div className='bg-[#121212] rounded-3xl  p-6'>
                    <div className='flex justify-between items-center'>
                        <p className='text-gray-700'>Air Quality Index</p>
                    </div>
                    <div className='columns-5 mt-4 '>
                        <div>
                            <i className="fa-solid fa-wind mt-4 text-[40px] text-gray-200 "></i>
                        </div>
                        <div>
                            <p className='text-gray-700'>PM2.5</p>
                            <p className='text-3xl text-gray-200 mt-2'>{Math.round(pollution.list[0].components.pm2_5)}</p>
                        </div>
                        <div>
                            <p className='text-gray-700'>SO<sub className='text-gray-700'>2</sub></p>
                            <p className='text-3xl text-gray-200 mt-2'>{Math.round(pollution.list[0].components.so2)}</p>
                        </div>
                        <div>
                            <p className='text-gray-700'>NO<sub className='text-gray-700'>2</sub></p>
                            <p className='text-3xl text-gray-200 mt-2'>{Math.round(pollution.list[0].components.no2)}</p>
                        </div>
                        <div>
                            <p className='text-gray-700'>O<sub className='text-gray-700'>3</sub></p>
                            <p className='text-3xl text-gray-200 mt-2'>{Math.round(pollution.list[0].components.o3)}</p>
                        </div>
                    </div>
                </div>
                <div className='bg-[#121212] mt-3 rounded-3xl  p-6 '>
                    <div className='flex items-center'>
                        <p className='text-gray-700'>Sunset & Sunrise</p>
                    </div>
                    <div className='columns-2 mt-4'>
                        <div className='flex items-center gap-8'>
                            <i className="fas fa-sun text-[40px] text-gray-200 "></i>
                            <div>
                                <p className='text-gray-700'>Sunrise</p>
                                <h1 className='text-2xl text-gray-200 mt-2'>{covertTime(curWeather.sys.sunrise)}</h1>
                            </div>
                        </div>
                        <div className='flex items-center gap-8'>
                            <i className="fas fa-moon text-[40px] text-gray-200 "></i>
                            <div>
                                <p className='text-gray-700 '>Sunset</p>
                                <h1 className='text-2xl text-gray-200 mt-2'>{covertTime(curWeather.sys.sunset)}</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-4 columns-4 '>
                <div className='bg-[#121212] rounded-3xl p-5'>
                    <p className='text-gray-700'>Humidity</p>
                    <div className='flex justify-between mt-2 p-3'>
                        <i className="fas fa-tint text-[40px] text-gray-200"></i>
                        <p className='text-3xl text-gray-200 mt-1'>{curWeather.main.humidity}%</p>
                    </div>
                </div>
                <div className='bg-[#121212]  rounded-3xl p-5 '>
                    <p className='text-gray-700'>Pressure</p>
                    <div className='flex gap-10 mt-2 p-3' >
                        <i className="fas fa-tint text-[40px] text-gray-200"></i>
                        <p className='text-3xl text-gray-200 mt-1'>{curWeather.main.pressure}<span className=' text-gray-200 text-2xl'>hPa</span></p>
                    </div>
                </div>
                <div className='bg-[#121212] rounded-3xl  p-5 '>
                    <p className='text-gray-700'>Visibility</p>
                    <div className='flex gap-10 mt-2 p-3'>
                        <i className="fas fa-eye text-[40px] text-gray-200"></i>
                        <p className='text-3xl text-gray-200 mt-1'>{visibility}<span className='text-2xl text-gray-200'>Km</span></p>
                    </div>
                </div>
                <div className='bg-[#121212] rounded-3xl  p-5 '>
                    <p className='text-gray-700'>Feels Like</p>
                    <div className='flex gap-10 mt-2 p-3'>
                        <i className="fas fa-temperature-low text-[40px] text-gray-200"></i>
                        <p className='text-3xl text-gray-200 mt-1'>{Math.round(curWeather.main.feels_like)}<sup>°C</sup></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AirQuality
