/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;







function WeatherFetch() {
  // const city = "berlin"
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState("");
  const [feels_like, setFeelsLike] = useState("");
  const [mainTemp, setMainTemp] = useState("");
  const [description, setDescription] = useState("");
  const [main, setMain] = useState("");
  const [id, setId] = useState("");
  const [iconID, setIconID] = useState([]);

  const loadPageData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=ber&appid=${API_KEY}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setMainTemp(data.main.temp);
      setFeelsLike(data.main.feels_like);
      setDescription(data.weather[0].description);
      setMain(data.weather[0].main);
      setIconID(data.weather[0].icon);
      setDisplayCity(city);
      setId(data.id)
    }
  };

  useEffect(() => {
    loadPageData();
  }, [city]);


  // useEffect(() => {
  //  window.myWidgetParam ? window.myWidgetParam : (window.myWidgetParam = []);
  //   window.myWidgetParam.push({
  //     id: 11,
  //     cityid: "3172394",
  //     appid: "b7e88f5530d434448d216c34fb206639",
  //     units: "metric",
  //     containerid: "openweathermap-widget-11",
  //   });
  //   (function () {
  //     let script = document.createElement("script");
  //     script.async = true;
  //     script.charset = "utf-8";
  //     script.src =
  //       "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js";
  //     let s = document.getElementsByTagName("script")[0];
  //     s.parentNode.insertBefore(script, s);
  //   })();
  
  // script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/d3.min.js";
  // script.async = true;
  
  // document.body.appendChild(script);;
  // }, []);

  return (
    <>
      <div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>

      <p>
        Temperature for {displayCity}: {mainTemp}℃
      </p>
      <p>id: {id}</p>
      <p>Feels like: {feels_like}℃</p>
      <p>Weather Parameter: {main}</p>
      <p>Description: {description}</p>
      <img
        src={`http://openweathermap.org/img/wn/${iconID}@2x.png`}
        alt="icon"
      />
    </>
  );
}
export default WeatherFetch;
