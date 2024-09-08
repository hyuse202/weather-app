"use client"
import Head from 'next/head';
import Image from 'next/image';
import axios from 'axios';
import { useState } from 'react';
import { BsSearch } from 'react-icons/bs';
import WeatherDetails from './components/WeatherDetails';
// import Spinner from '../components/Spinner';

export default function Home() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${process.env.NEXT_PUBLIC_WEATHER_KEY}`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data);
      // console.log(response.data);
    });
    setCity('');
    setLoading(false);
  };

 {
    return (
      <div>
        {/* Overlay */}
        <div className='absolute top-0 left-0 right-0 bottom-0 bg-gray-300' />
        {/* Background image */}


        {/* Search */}
        <div className='relative flex justify-between items-center  bg-[#252525] w-full m-auto pt-4 px-4 text-neutral-200 z-10'>
          <form
            onSubmit={fetchWeather}
            className='flex justify-between items-center w-1/2 mb-4 m-auto p-3 bg-transparent border border-white text-neutrail-300 rounded-2xl'
          >
            <div>
              <input
                onChange={(e) => setCity(e.target.value)}
                className='bg-transparent border-none text-white focus:outline-none text-2xl'
                type='text'
                placeholder='Search city'
              />
            </div>
            <button onClick={fetchWeather}>
              <BsSearch size={20} />
            </button>
          </form>
        </div>

        {/* Weather */}
        {weather.main && <WeatherDetails data={weather} />}
      </div>
    );
  }
}