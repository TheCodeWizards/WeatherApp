import React, { useContext, useEffect, useState } from "react";
import { weatherContext } from "../context/WeatherProvider";
import ReactAnimatedWeather from "react-animated-weather";

const HourlyUpdate = () => {
    const { nextDays } = useContext(weatherContext);

    const indices = [0, 1, 2, 3, 4, 5, 6, 7];

    // Map weather conditions to icons
    const weatherIcons = {
        Clear: { day: "CLEAR_DAY", night: "CLEAR_NIGHT" },
        Clouds: { day: "PARTLY_CLOUDY_DAY", night: "PARTLY_CLOUDY_NIGHT" },
        Rain: { day: "RAIN", night: "RAIN" },
        Snow: { day: "SNOW", night: "SNOW" },
        Mist: { day: "FOG", night: "FOG" },
        Fog: { day: "FOG", night: "FOG" },
        Thunderstorm: { day: "RAIN", night: "RAIN" },
        Drizzle: { day: "SLEET", night: "SLEET" },
        Default: { day: "CLEAR_DAY", night: "CLEAR_NIGHT" },
    };

    // Convert timestamp to 12-hour time and determine day/night
    const convertTime = (dt) => {
        const date = new Date(dt * 1000);
        const hour = date.getHours();
        const amPm = hour >= 12 ? "pm" : "am";
        const formattedHour = hour % 12 || 12; // Convert to 12-hour format
        const isDay = hour >= 6 && hour <= 18; // Day: 6 AM to 6 PM
        return { time: `${formattedHour} ${amPm}`, isDay };
    };

    if (!nextDays?.list) {
        return <p className="text-gray-400">Loading weather data...</p>;
    }

    return (
        <>
            <p className="mt-3 text-gray-200 px-2">Today at</p>
            <div className="flex gap-4 mt-3">
                {indices.map((index) => {
                    const weatherData = nextDays.list[index];
                    if (!weatherData) return null;

                    const { dt, main, weather } = weatherData;
                    const { time, isDay } = convertTime(dt);
                    const condition = weather[0]?.main || "Default";
                    const icon = weatherIcons[condition]?.[isDay ? "day" : "night"] || weatherIcons.Default.day;

                    return (
                        <div
                            key={index}
                            className="py-2 px-5 flex-1 flex flex-col items-center gap-2 rounded-2xl bg-[rgb(29,29,29)]"
                        >
                            <p className="text-gray-400 mb-1 text-sm">{time}</p>
                            <ReactAnimatedWeather icon={icon} size={35} color="#fff" />
                            <p className="text-gray-400 mt-1 text-sm">
                                {Math.round(main?.temp )}°
                            </p>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default HourlyUpdate;
