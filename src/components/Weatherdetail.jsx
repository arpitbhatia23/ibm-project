import React from 'react'
import { MdAir } from 'react-icons/md'
import { RiCelsiusLine } from 'react-icons/ri'
import { useSelector } from 'react-redux'
const Weatherdetail = () => {
    const theme=useSelector(state=>state.theme.theme)
    const data=useSelector(state=>state.data)

  return (
    <div className='flex justify-center items-center py-2'>
    <div className={`grid grid-cols-3 h-auto min-w-3xl max-w-6xl gap-x-16 gap-y-6  px-6 py-6 justify-items-center rounded-xl   font-bold`}>
        <div className={`${theme==="light"?"bg-black text-white  border-2 border-white shadow-md shadow-white":"bg-white text-black"} rounded-none md:rounded-lg min-w-full h-auto flex-col  px-4 py-6  items-center justify-center font-semibold `}>
        <div className='flex justify-center items-center'>  <MdAir/> AirQuailty</div>
        <div className='text-center'>{data.data?.airdata?.list[0]?.main?.aqi}aqi</div> 
        </div>

        <div className={`${theme==="light"?"bg-black text-white  border-2 border-white shadow-md shadow-white":"bg-white text-black"} rounded-none md:rounded-lg min-w-full h-auto px-4 py-6 flex-col items-center justify-center font-semibold  `}>
        <div className='flex justify-center items-center'>  <MdAir/>wind</div>
        <div className='text-center'>{(data.data?.curentdata?.wind.speed)}km/sec</div> 
        </div>

      
        <div className={`${theme==="light"?"bg-black text-white  border-2 border-white shadow-md shadow-white":"bg-white text-black"} rounded-none md:rounded-lg min-w-full h-auto  px-4 py-6 flex-col items-center justify-center font-semibold `}>
        <div className='flex justify-center items-center'>  <MdAir/>hiumidity</div>
        <div className='text-center'>{data.data?.curentdata?.main?.humidity}%</div> 
        </div>

        <div className={`${theme==="light"?"bg-black text-white  border-2 border-white shadow-md shadow-white":"bg-white text-black"} rounded-none md:rounded-lg px-4 py-6 min-w-full h-auto  flex-col items-center justify-center font-semibold `}>
        <div className='flex justify-center items-center'>  <MdAir/> visibility</div>
        <div className='text-center'>{(data.data?.curentdata?.visibility)/1000}km</div> 
        </div>

        <div className={`${theme==="light"?"bg-black text-white  border-2 border-white shadow-md shadow-white":"bg-white text-black"} rounded-none md:rounded-lg px-4 py-6 min-w-full h-auto flex-col items-center justify-center font-semibold `}>
        <div className='flex justify-center items-center'>  <MdAir/> pressure</div>
        <div className='text-center'>{data.data?.curentdata?.main?.pressure} hPa</div> 
        </div>

        <div className={`${theme==="light"?"bg-black text-white  border-2 border-white shadow-md shadow-white":"bg-white text-black"} px-6 py-6 rounded-none md:rounded-lg min-w-full h-auto  flex-col items-center justify-center font-semibold `}>
        <div className='flex justify-center items-center'>  <MdAir/> feels_like</div>
        <div className='flex items-center justify-center text-center'>{data.data?.curentdata?.main?.feels_like}<RiCelsiusLine/></div> 
        </div>
      

        </div>
          
    </div>
  )
}

export default Weatherdetail
