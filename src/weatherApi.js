import axios from "axios"

export const weatherApi=()=>{

    const getWeather=async(city)=>{
    try {
        const response= await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APIKEY}`,{
          
        })
        const response1= await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&exclude=current,minutely,hourly,alerts&&appid=${import.meta.env.VITE_APIKEY}`)    
        const response2= await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_APIKEY}`)
        
        const curentdata=  await  response.data
        const hourlydata= await response1.data
        const dailydata=await response2.data
        console.log(curentdata.coord)
        const {lon,lat}=curentdata.coord
        console.log(lon,lat)

        const response3 = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_APIKEY}`)   
        const airdata=await response3.data
        return {
            curentdata,
            hourlydata,
            dailydata ,
            airdata 

              }
    } catch (error) {
        
    }
   
    }
const getWeatherbylocation=async()=>{

    const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve,reject);
      });
          const { latitude,longitude}=position.coords
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${import.meta.env.VITE_APIKEY}`);
          const response1 = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${import.meta.env.VITE_APIKEY}`);
          const response2= await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&exclude=current,minutely,hourly,alerts&&appid=${import.meta.env.VITE_APIKEY}`) 
          const response3 = await axios.get(`https://api.openweathermap.org/data/2.5/air_pollution/forecast?lat=${latitude}&lon=${longitude}&appid=${import.meta.env.VITE_APIKEY}`)   
          const dailydata=await response.data
          const curentdata=await response1.data
          const hourlydata=await response2.data
          const airdata=await response3.data
          return {
            curentdata,
            dailydata,
            hourlydata,
            airdata
          }
}

    return {
        getWeather,
        getWeatherbylocation
    }

}