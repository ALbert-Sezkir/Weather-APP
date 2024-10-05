
import Image from 'next/image'
import React from 'react'

const Weather = ({data}) => {
 console.log('Weather data:', data)

  return (
    <div className='relative flex flex-col justify-between max-w[500px] w-full h-[90vh] m-auto p-4 text-gray-300 z-10'>
      <div>
        <div>
      <Image 
      src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
      alt='/' 
      width={100}
      height={100}

      />

      <p>{data.weather[0].main} </p>
        </div>
        <p>{data.main.temp.toFixed(0)}&#176;</p>



      </div>


    </div>
  )
}

export default Weather

// import Image from 'next/image';
// import React from 'react';

// const Weather = ({ data }) => {
//   console.log(data);

//   // Check if data and data.weather are defined
//   if (!data || !data.weather || !data.weather[0]) {
//     return <p>No weather data available</p>;
//   }

//   return (
//     <div>
//       <div>
//         <div>
//           <Image 
//             src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} 
//             alt={data.weather[0].description} 
//             width={100} 
//             height={100} 
//           />
//           <p>{data.weather[0].main}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Weather;