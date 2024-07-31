import React from 'react'
import { FaCloudRain } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Hourlyforcast = () => {
  const data = useSelector(state => state.data)
  const hourlydata = data.data?.hourlydata?.list
  const hourlyforcast = hourlydata && hourlydata.slice(0, 8).map((item, index) => {
    const date = new Date(item.dt * 1000); // Convert timestamp to milliseconds
    const timeString = date.toLocaleTimeString(); // Format time
const icon=item.weather[0].icon
    return (
      <div key={index} className=' grid grid-cols-5 items-center justify-items-center gap-x-4 border-b border-black '>

       {item.weather[0].main} <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt='image'/>
        <p>{item.dt_txt.split(' ')[1]} </p>
        <p>{Math.floor(item.main.temp)}°C</p>
        <p className='flex items-center gap-1'> <FaCloudRain/> {parseInt(item.pop*100)}%</p>
      </div>
    )
  });

  return (
    <div>
    
      {hourlyforcast}
    </div>
  )
}

export default Hourlyforcast
