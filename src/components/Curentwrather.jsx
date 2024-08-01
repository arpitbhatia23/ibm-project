import React from 'react'
import { RiCelsiusLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
import Time from './Time'
import Weatherdetail from './Weatherdetail'
import SunriseandSunset from './SunriseandSunset'
import { CiLocationOn } from 'react-icons/ci'

const Curentwrather = () => {
    const data = useSelector(state => state.data)
    console.log(data)
    const theme = useSelector(state => state.theme.theme)
    
    return (
        <div className='flex flex-col items-center py-8'>
            <div className={`flex flex-col px-4 h-auto w-full min-w-[27rem] rounded-xl ${theme === "light" ? "bg-black text-white border-2 border-white shadow-md shadow-white" : "bg-white text-black"} shadow-md py-2 font-bold`}>
                <div>Curentwrather</div>
                <div className='flex items-center'>
           <CiLocationOn size={25} className='font-bold' /> {data.data?.curentdata?.name}
           </div>                <div className='flex py-8 px-4 items-center gap-x-2 text-2xl'>
                    <img className="w-20" src={`https://openweathermap.org/img/wn/${data?.data?.curentdata?.weather[0].icon}.png`} alt="Weather Icon"/>
                    <div>{Math.floor(data?.data?.curentdata?.main?.temp)}</div>
                    <div><RiCelsiusLine size={20} /></div>
                    <div className='flex flex-col font-thin text-sm'>
                        <div>{data?.data?.curentdata?.weather[0]?.main}</div>
                        <div className='flex items-center'>{data?.data?.curentdata?.main.feels_like} <RiCelsiusLine size={10} /></div>
                    </div>
                </div>
                <div className='flex px-2 font-semibold'>
                    {`There will mostly be ${data?.data?.curentdata?.weather[0]?.main}. The high will be ${Math.floor(data?.data?.curentdata?.main?.temp_max)}`} <RiCelsiusLine size={15} />
                </div>
            </div>
            <Weatherdetail/>
            
            <SunriseandSunset/>
        </div>
    )
}

export default Curentwrather
