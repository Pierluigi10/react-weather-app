// import { useEffect, useState } from "react";
// import "./App.css";
// import { CityComponent } from "./Components/CityComponent";

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// function App() {
//   // const city = "london";
//   const [weather, setWeather] = useState([]);
//   const [city, setCity] = useState("");

//   const fetchData = async (url, callback) => {
//     const response = await fetch(url, { method: "GET" });
//     const data = await response.json();
//     callback(data);
//   };

//   useEffect(() => {
//     fetchData(
//       `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
//       (data) => {
//         setWeather(data);
       
//         // setCity(data)
//         console.log(data);
//       }
//     );
//   }, [city]);
//   return (
//     <div className="App">
//       <h2>City: {weather.name} </h2>
//             <CityComponent setCity={setCity} fetchWeather={fetchData} />
//     </div>
//   );
// }

// export default App;

import React from 'react';

import './App.css';
import WeatherFetch from "./Components/WeatherFetch"
function App() {
  return (
    <div className="App">
      <WeatherFetch/>
    </div>
  );
}

export default App;