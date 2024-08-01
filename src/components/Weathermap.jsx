import React, { useState,useEffect, useRef } from 'react'
import 'leaflet/dist/leaflet.css';
import {MapContainer,TileLayer,LayersControl,Marker, Tooltip} from 'react-leaflet'
import marker from "../assets/maker.webp"
import { Icon } from 'leaflet';
import { useSelector } from 'react-redux';
export default function Weathermap(){

const data= useSelector(state=>state.data)
const position=data.data?.curentdata?.coord
const theme = useSelector(state => state.theme.theme)


const mapRef = useRef(null);
useEffect(()=>{
    if (mapRef.current &&position){
      mapRef.current.setView(position,11);
    }
  },[position] )
if (!position) {
  
    return (
      <>
        <div className={`flex  px-8 py-8 mt-8 h-[35rem] w-[70%] min-w-[27rem] rounded-xl ${theme === "light" ? "bg-black text-white border-2 border-white shadow-md shadow-white " : "bg-white text-black "} shadow-md py-2 font-bold`}>
        <div className="flex items-center justify-center w-full ">
      <div role="status">
        <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-100 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only text-white">Loading...</span>
      </div>
    </div>
        </div>
      </>
    );
  }

    return(
        <div className={`flex flex-col px-8 py-8 mt-8 mb-8 w-[70%] min-w-[27rem] rounded-xl ${theme === "light" ? "bg-black text-white " : "bg-white text-black"} shadow-md py-2 font-bold`}>
      <MapContainer  ref={mapRef} center={position}  zoom={11} className='w-full rounded-xl h-[35rem] '>
      <LayersControl>
        <TileLayer 
   attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" >&copy; OpenStreetMap contributors</a> <a href="https://openweathermap.org/copyright">&copy; openweather contributors'
   url={`https://api.maptiler.com/maps/streets-v2/256/{z}/{x}/{y}.png?key=${import.meta.env.VITE_MAPKEY}`}
   />

          <Marker position={position} icon={new Icon({iconUrl:marker, iconSize: [45, 47], iconAnchor: [12, 41]})} >
         
        <Tooltip>your location</Tooltip>

    </Marker>
    
   
    
    <LayersControl.Overlay  name='satelite'>
        <TileLayer 
   attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" >&copy; OpenStreetMap contributors</a> <a href="https://openweathermap.org/copyright">&copy; openweather contributors'
   url={`https://api.maptiler.com/maps/satellite/256/{z}/{x}/{y}.jpg?key=${import.meta.env.VITE_MAPKEY}`}
   />
    </LayersControl.Overlay>
    <LayersControl.Overlay  name='temp'>
        <TileLayer 
   attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" >&copy; OpenStreetMap contributors</a> <a href="https://openweathermap.org/copyright">&copy; openweather contributors'
   url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${import.meta.env.VITE_APIKEY}`}
   />
    </LayersControl.Overlay>
    <LayersControl.Overlay  name='pressure'>
        <TileLayer 
   attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" >&copy; OpenStreetMap contributors</a> <a href="https://openweathermap.org/copyright">&copy; openweather contributors'
   url={`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${import.meta.env.VITE_APIKEY}`}
   />
    </LayersControl.Overlay>
    <LayersControl.Overlay  name='wind'>
        <TileLayer 
   attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" >&copy; OpenStreetMap contributors</a> <a href="https://openweathermap.org/copyright">&copy; openweather contributors'
   url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${import.meta.env.VITE_APIKEY}`}
   />
    </LayersControl.Overlay>
    <LayersControl.Overlay  name='clouds'>
        <TileLayer 
   attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" >&copy; OpenStreetMap contributors</a> <a href="https://openweathermap.org/copyright">&copy; openweather contributors'
   url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${import.meta.env.VITE_APIKEY}`}
   />
    </LayersControl.Overlay>
    <LayersControl.Overlay  name='precipitation'>
        <TileLayer 
   attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" >&copy; OpenStreetMap contributors</a> <a href="https://openweathermap.org/copyright">&copy; openweather contributors'
   url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${import.meta.env.VITE_APIKEY}`}
   />
    </LayersControl.Overlay>
    
    

    </LayersControl>
    

      </MapContainer>
     
      </div>
    )
}
