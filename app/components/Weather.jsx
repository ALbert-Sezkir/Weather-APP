import Image from 'next/image'
import React from 'react'

const Weather = ({data}) =>{
  console.log(data)

  return (
    <div>
      <div>
        <div>
      <Image src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
      alt='/' 
      width='100'
      height='100'

      />

      <p>{data.weather[0].main} </p>
        </div>



      </div>


    </div>
  )
}

export default Weather