import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Hourlyforcast from './Hourlyforcast'
import FiveDayforecast from './FiveDayforecast'
import { NavLink } from 'react-router-dom'

const Detailforcast = () => {
  const theme=useSelector(state=>state.theme.theme)
const[click,setclick]=useState(true)
  return (
    <div className={`flex justify-center items-center py-8 px-8  `}>
    <div className={`flex-col  justify-center items-start py-8 h-[40rem] w-full min-w-[30rem] rounded-xl ${theme==="light"?"bg-black text-white shadow-md shadow-white border-2 border-white":"bg-white text-black"}`}>
         {/* <Hourlyforcast/> */}
         {/* <FiveDayforecast/> */}
        <ul className=' flex justify-center items-start gap-4 font-bold  py-10 text-xl'>
         <li onClick={()=>setclick(true) }className={click?"underline text-xl ":""}>24 hour forecast </li>
        <li  onClick={()=>setclick(false) }className={click?" ":"underline text-xl"}>5 day forecast</li>
       
        </ul>
        {
          click?<Hourlyforcast/>:<FiveDayforecast/>
        }
    </div>
  
</div>
  )
}

export default Detailforcast
