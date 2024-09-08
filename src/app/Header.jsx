"use client"
import React from "react"
import axios from "axios";
import { useState } from "react";
// import SearchBar from "./components/SearchBox"
export default function Header(){
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);
     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;
    const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
    });
    setCity('');
    setLoading(false);
  };
    return (
        <>
        <div className="w-screen bg-[#252525] text-neutral-300 py-5 px-3 flex justify-between">
            
           <form 
                onSubmit={fetchWeather}
                className="flex justify-between w-1/2 items-center m-auto p-3 bg-transparent border border-gray-300 text-white rounded-2xl"
                >
            <input
                onChange={(e) => setCity(e.target.value)}
                className='bg-transparent border-none text-white focus:outline-none text-2xl'
                type='text'
                placeholder='Search city'
                />
        </form> 

        </div>
        </>

    )
}