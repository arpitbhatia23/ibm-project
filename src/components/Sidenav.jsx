import React from 'react'
import { NavLink } from 'react-router-dom'

const Sidenav = ({className}) => {
    const nav=[
        {
            id:1,
            link:"/",
            name:"DASHBOARD"

        },
        {
            id:2,
            link:"/weathermap",
            name:"WEATHER MAP"
            
        },
        {
            id:3,
            link:"/weathernews",
            name:"NEWS"
            
        },
    ]
  return (
    <div className={`absolute left-4 z-[4000]  my-4 mx-4 w-36 ${className} h-[41rem]  shadow-md rounded-xl`}>

        {
            nav?nav.map((items)=>(
                <div key={items.id}>
                    <ul className='py-8 px-2 flex justify-center '>
                 <NavLink to={items.link}><li>{items.name}</li></NavLink>   

                    </ul>

                </div>
            )):null
        }
      
    </div>
  )
}

export default Sidenav
