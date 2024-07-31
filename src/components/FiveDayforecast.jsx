import React from 'react'
import { FaCloudRain } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const FiveDayforecast = () => {
    const data = useSelector(state => state.data)
    const fivedaydata = data.data?.dailydata?.list

    const fivedayforecast = fivedaydata && fivedaydata
        .filter((_, index) => index % 8 === 0)
        .map((item, index) => {  // Added `index` parameter here
            const icon = item.weather[0].icon
            return (
                <div key={index} className='grid grid-cols-5 items-start justify-items-center gap-x-4 border-b border-black'>
                    {item.weather[0].main} 
                    <img src={`https://openweathermap.org/img/wn/${icon}.png`} alt='weather icon'/>
                    <p>{item.dt_txt.split(' ')[0]}</p>
                    <p>{Math.floor(item.main.temp)}°C</p>
                    <p className='flex items-center gap-1'>
                        <FaCloudRain /> {parseInt(item.pop * 100)}%
                    </p>
                </div>
            )
        })

    return (
        <div className=''>
            {fivedayforecast}
        </div>
    )
}

export default FiveDayforecast
