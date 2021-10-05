// import React from "react";
// import { useState, useEffect } from "react";

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// export const CityComponent = (props) => {
// const [citySearch, setCitySearch] = useState("");
// const [weather, setWeather] = useState([]);
// // const [city, setCity] = useState("");

// const fetchData = async (url, callback) => {
//   const response = await fetch(url, { method: "GET" });
//   const data = await response.json();
//   callback(data);
// };

// useEffect(() => {
//   fetchData(
//     `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&appid=${API_KEY}`,
//     (data) => {
//       setWeather(data);
//       // setCity(data)
//       console.log(data);
//     }
//   );
// }, [citySearch]);
// const getCityName = (e) => {
//   const search = e.target.value;
//   setCitySearch(search);
// };

// const changeCitySearch = (e) => {
//   const search = e.target.value;
//   setCitySearch(search);
// };

// // const handleKeyPress = (e) => {
// //   if (e.key === "Enter") {
// //     changeCitySearch();
// //   }
// // };

// return (
//   <div className="cityComponent">
//     {/* <p className="chooseCity">Choose your city</p>
//     <form className="cityForm" onSubmit={fetchData}>
//       <input
//         type="text"
//         placeholder="City"
//         onChange={(e) => setCity(e.target.value)}
//       />
//       <button type={"submit"}> Search</button>
//     </form> */}

//     <label htmlFor="">Choose your city</label>
//     <input
//       className="searchInput"
//       onChange={(e) => changeCitySearch(e)}
//       // onKeyPress={handleKeyPress}
//       value=""
//       type="text"
//       name="q"
//       aria-label="Search through site content"
//     />
//     <button onclick={getCityName}>click</button>
//   </div>
// );

import React from "react";

export const CityComponent = (props) => {
  const { setCity, fetchWeather } = props;
  return (
    <div className="cityComponent">
      {/* <img src="/icons/perfect-day.svg" alt="" className="weatherLogo" /> */}
      <p className="chooseCity">Choose your city</p>
      <form className="cityForm" onSubmit={fetchWeather}>
        <input
          type="text"
          placeholder="City"
          onChange={(e) => setCity(e.target.value)}
        />
        {/* <button type={"submit"}> Search</button> */}
      </form>
    </div>
  );
};

// setTemperature(data.main.temp - 273.15);

// setDesc(data.weather[0].main);

// {/* {Math.round(temperature * 100) / 100} ℉ */}
// {Math.round(temperature * 100) / 100} ℃ - {desc}
