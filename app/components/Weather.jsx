import Image from 'next/image'
import React from 'react'

const Weather = ({ data }) => {
  

  const { dt, name, main, wind, weather: weatherInfo } = data;
  const iconUrl = `http://openweathermap.org/img/wn/${weatherInfo[0].icon}@2x.png`;
  const date = new Date(dt * 1000).toLocaleString('en-GB', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className='relative flex flex-col justify-between max-w-[500px] w-full h-[50vh] m-auto p-4 text-gray-300 z-10'>
      <div className='relative flex justify-between pt-12'>
        <div className='flex flex-col items-center'>
          <Image 
            src={iconUrl} 
            alt={weatherInfo[0].description} 
            width={100}
            height={100}
          />
          <p className='text-2xl'>{weatherInfo[0].main}</p>
        </div>
        <p className='text-9xl'>{main.temp.toFixed(0)}&#176;</p>
      </div>
      {/* Bottom */}
      <div className='relative p-8 rounded-md bg-black/50'>
        <p className='pb-6 text-2xl text-center'>Weather in {name}</p>
        <p className='pb-6 text-xl text-center'>{date}</p>
        <div className='flex justify-between text-center'>
          <div>
            <p className='text-2xl font-bold'>{main.feels_like.toFixed(0)}&#176;</p>
            <p className='text-xl'>Feels Like</p>
            <p>{weatherInfo[0].description.charAt(0).toUpperCase() + weatherInfo[0].description.slice(1)}.</p>
          </div>
          <div>
            <p className='text-2xl font-bold'>{main.humidity}%</p>
            <p className='text-xl'>Humidity</p>
          </div>
          <div>
            <p className='text-2xl font-bold'>{wind.speed.toFixed(0)} MPH</p>
            <p className='text-xl'>Winds</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Weather