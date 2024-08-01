import React, { useEffect,useRef,useState } from 'react'
import "./app.css"
import clear_icon from  "../Assets/clear.png"
import cloud_icon from '../Assets/cloud.png'
import drizzle_icon from '../Assets/drizzle.png'
import rain_icon from '../Assets/rain.png'
import snow_icon from '../Assets/snow.png'
// import wind_icon from '../Assets/wind_icon'
// import humidity_icon from '../Assets/humidity_icon'
 const API_KEY="c16eac0ff43f3142aef074f12bdf738a"
const App = () => {
  const [weatherData, setWeatherdata]=useState(false);

  const inputref=useRef();
 const allIcons={
  "01d":clear_icon,
  "01n":clear_icon,
  "02d":cloud_icon,
  "02n":cloud_icon,
  "03d":cloud_icon, 
  "03n":cloud_icon,
  "04d":drizzle_icon,
  "04n":drizzle_icon,
  "09d":rain_icon,
  "09n":rain_icon,
  "10d":rain_icon,
  "10n":rain_icon,
  "13d":snow_icon,
  "13n":snow_icon,


}
    const search=async(city)=>{
    if (city==='') {
      alert("enter city name");
      return;
    }
try {
  const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
  const res=await fetch(url);
  const data=await res.json();
  if (!res.ok) {
    alert("city not found")
  }
  console.log(data);
  const icon=allIcons[data.weather[0].icon] || clear_icon
  setWeatherdata({
    humidity:data.main.humidity,
    name:data.name,
    temp:Math.floor(data.main.temp),
    wind:data.wind.speed,
    icon:icon
    
  })
} catch (error) {
  setWeatherdata(false)
  console.error("error in fetching weather data ")
}
    }
  
  useEffect(()=>{
    search("London")
  },[])

  return (
    <div className="weather-card">
    <div className="search" >
      <input type="search" ref={inputref} name='city' placeholder="enter city name" spellCheck="false" />
      <button onClick={()=>search(inputref.current.value)}>
       <img src="..\Assets\search.png"  alt=""/>
      </button>
    </div>
    {weatherData?<>
      <div className="weather">
      <img
        className="weather-icon"
        src={weatherData.icon}
        alt="weather-icon"
      />
      <h1 className="temp">{weatherData.temp}°C </h1>
      <h2 className="city">{weatherData.name}</h2>
      <div className="details">
        <div style={{ display: 'flex' }} className="col">
          <img
            className="humi"
            src="https://static-00.iconduck.com/assets.00/humidity-icon-2048x1675-xxsge5os.png"
            alt="humidity-icon"
          />
          <div className="info">
            <p className="humidity">{weatherData.humidity}%</p>
            <p>Humidity</p>
          </div>
        </div>
        <div className="col">
          <img
            src="https://cdn-icons-png.flaticon.com/512/136/136712.png"
            alt="wind-speed-icon"
          />
          <div className="info">
            <p className="wind">{weatherData.wind}km/h</p>
            <p>Wind Speed</p>
          </div>
        </div>
      </div>
    </div>
    </>:<></>}
   

    </div>
  )
}

export default App
