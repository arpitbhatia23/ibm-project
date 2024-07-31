import React from 'react'
import { BsFillSunsetFill } from 'react-icons/bs'
import { WiSunrise } from 'react-icons/wi'
import { useSelector } from 'react-redux'

const SunriseandSunset = () => {
    const data =useSelector(state=>state.data)
    const theme = useSelector(state => state.theme.theme)
  const sunrise=data.data?.curentdata?.sys.sunrise*1000
  const sunrisetime = sunrise ? new Date(sunrise).toLocaleTimeString() : "N/A"
  const sunset=data.data?.curentdata?.sys.sunset*1000
  const sunsettime = sunrise ? new Date(sunset).toLocaleTimeString() : "N/A"
    return (
    <div className='flex justify-center items-center w-full'>
    <div className={`flex  justify-between px-4 h-auto w-full max-w-2xl rounded-xl ${theme === "light" ? "bg-black text-white" : "bg-white text-black"} shadow-md py-2 font-bold`}>
     
    <div className='flex-col justify-center items-center'><WiSunrise size={35}/> {sunrisetime}</div> 
    <div className='flex-col justify-center items-center'><BsFillSunsetFill size={35}/> {sunsettime}</div> 


    </div>
    </div>
  )
}

export default SunriseandSunset
