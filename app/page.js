'use client'

import Image from "next/image";
import { useState } from "react"; 
import { BsSearch } from 'react-icons/bs';
import axios from 'axios'; 
import Weather from "./components/Weather";
import Loader from './components/Loader';




export default function Home() {
  const [city, setCity] = useState(''); 
  const [weather, setWeather] = useState({}); 
  const [loading, setLoading] = useState(false);  
  
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.NEXT_PUBLIC_API_KEY}`;

 
  const fetchWeather = async (e) => { 
    e.preventDefault();
    setLoading(true);
    axios.get(url).then((response) => {
      setWeather(response.data); 
    });
    setCity('');
    setLoading(false); 
  }

  if(loading) {
    return <Loader />
  }
  else {
 
  return (
    <div>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/40 z-[1]' />

      {/* Background image */}
      <Image 
        src='https://images.unsplash.com/photo-1566996694954-90b052c413c4?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' 
        alt='weather'
        layout='fill' 
        className='object-cover'
      /> 

      {/* Search */}
      <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-20'>
        <form onSubmit={fetchWeather} className='flex items-center justify-between w-full p-3 m-auto text-white bg-transparent border border-gray-300 rounded-2xl'>
          <div>
            <input 
              onChange={(e) => setCity(e.target.value)}
              className='text-2xl text-white bg-transparent border-none focus:outline-none' 
              type='text' 
              placeholder='Search for a city' 
            />
          </div>
          <button onClick={fetchWeather}>
            <BsSearch size={20} />
          </button>
        </form>
      </div>

      {/* Weather data */}
      {weather.main && <Weather data={weather} />}
    </div>
  );

}
}
