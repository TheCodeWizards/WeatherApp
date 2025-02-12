import React, { useContext, useRef } from 'react'
import { weatherContext } from '../context/WeatherProvider'

const Header = () => {
    const { getCity,getLocation } = useContext(weatherContext);
    const city = useRef();
    const handleSearch =(e)=>{
        if(e.key === "Enter"){
        getCity(city.current.value)
        city.current.value = '';
        }
    }
    return (
        <div className='flex justify-between items-center pt-5'>
            <div className='flex items-center'>
                <img src="https://cdn-icons-png.flaticon.com/512/7133/7133364.png" alt="" style={{ width: '50px' }} />
                <h1 className='text-2xl mt-2 font-semibold'>Mossam</h1>
            </div>
            <div className='w-[29%] bg-[#313131] flex items-center  rounded-full px-4'>
                <span onClick={()=>{getCity(city.current.value),city.current.value = ''}} className='rounded-full px-1 cursor-pointer '><i className="fa-solid fa-magnifying-glass"></i></span>
                <input type="text" onKeyDown={handleSearch} className='bg-[#313131] w-full rounded-full px-4 outline-none py-3 placeholder:text-gray-300' ref={city} placeholder='Search City' />
            </div>
            <button onClick={()=>getLocation()} className='bg-purple-700 rounded-full cursor-pointer  font-medium px-5 py-2 hover:bg-purple-800 duration-75'><i className="fa-solid me-2 fa-location-crosshairs"></i>Current Position</button>
        </div>
    )
}

export default Header
