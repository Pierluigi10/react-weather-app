/* eslint-disable react-hooks/exhaustive-deps */
// import React, { useState, useEffect } from "react";

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

// function WeatherFetch() {
//   // const city = "berlin"
//   const [city, setCity] = useState("");
//   const [displayCity, setDisplayCity] = useState("");
//   const [feels_like, setFeelsLike] = useState("");
//   const [mainTemp, setMainTemp] = useState("");
//   const [description, setDescription] = useState("");
//   const [main, setMain] = useState("");
//   // const [iconID, setIconID] = useState([]);

//   const loadPageData = async () => {
//     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&unit=metric&appid=${API_KEY}`;
//     // const url = `https://api.openweathermap.org/data/2.5/weather?q=ber&appid=${API_KEY}`;
//     const response = await fetch(url);
//     if (response.ok) {
//       const data = await response.json();
//       setMainTemp(data.main.temp);
//       setFeelsLike(data.main.feels_like);
//       setDescription(data.weather[0].description);
//       setMain(data.weather[0].main);
//       // setIconID(data.weather[0].icon);
//       setDisplayCity(city);
//     }
//   };

//   useEffect(() => {
//     loadPageData();
//   }, [city]);

//   return (
//     <>
//       <div>
//         <input
//           type="text"
//           value={city}
//           onChange={(e) => setCity(e.target.value)}
//         />
//       </div>

//       <p>
//         Temperature for {displayCity}: {mainTemp}℃
//       </p>
//       <p>Feels like: {feels_like}℃</p>
//       <p>Weather Parameter: {main}</p>
//       <p>Description: {description}</p>
//       {/* <img
//         src={`http://openweathermap.org/img/wn/${iconID}@2x.png`}
//         alt="icon"
//       /> */}
//     </>
//   );
// }
// export default WeatherFetch;

import { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

function PageShowcaseFetchTryCatch() {
  const [temperature, setTemperature] = useState("");
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState("");

  const loadPageData = async () => {
    // const url = 'https://raw.githubusercontent.com/edwardtanguay/fbwd01linksedward/main/src/data/links.json';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=ber&appid=${API_KEY}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setTemperature((data.main.temp - 273.15).toFixed(1));
      setDisplayCity(city);
    }
  };

  useEffect(() => {
    loadPageData();
  }, [city]);

  return (
    <div className="page page_showcaseFetchTryCatch">
      <h2 className="title">Showcase: Fetch Try/Catch</h2>
      <p className="description">
        An info page that displays showcase fetch try catch
      </p>
      <div className="dataArea">
        <div>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div>
          Temp for {displayCity}: {temperature}° C
        </div>
      </div>
    </div>
  );
}

export default PageShowcaseFetchTryCatch;
