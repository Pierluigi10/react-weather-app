/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import moment from "moment";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
// const API_KEY = "b7e88f5530d434448d216c34fb206639";

function WeatherFetch() {
  // const city = "berlin"
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState("");
  const [feels_like, setFeelsLike] = useState("");
  const [mainTemp, setMainTemp] = useState("");
  const [description, setDescription] = useState("");
  const [humidity, setHumidity] = useState("");
  const [id, setId] = useState("");
  const [iconID, setIconID] = useState([]);
  const [country, setCountry] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  const loadPageData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    // const url = `api.openweathermap.org/data/2.5/forecast?id={city ID}&appid={API key}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setMainTemp(data.main.temp);
      setFeelsLike(data.main.feels_like);
      setDescription(
        data.weather[0].description.charAt(0).toUpperCase() +
          data.weather[0].description.slice(1)
      );
      setHumidity(data.main.humidity);
      setIconID(data.weather[0].icon);
      setDisplayCity(city.charAt(0).toUpperCase() + city.slice(1));
      // console.log(data.id);
      setId(data.id);
      setCountry(
        data.sys.country.charAt(0) + data.sys.country.charAt(1).toLowerCase()
      );
      setSunrise(data.sys.sunrise);
      setSunset(data.sys.sunset);
      console.log(data);
    }
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    loadPageData();
    setId();
  };

  let errorMessage = "";
  if (city === "" && id === undefined) {
    errorMessage = "Please enter your city";
  }
  if (city !== "" && id === undefined) {
    errorMessage = "Check your city";
  }

  return (
    <div className="weatherFetch_container">
      <form onSubmit={handleSubmit}>
        <label>
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="chooseCity"
            placeholder="Choose your city"
          />
        </label>
        <button className="button" type="submit">
          check
        </button>
      </form>

      {id && (
        <div className="info">
          <div className="mainInfo">
            <span className="location">
              <a
                target="_blank"
                href={`https://en.wikipedia.org/wiki/${displayCity}`}
                rel="noreferrer"
              >
                {displayCity}, {country}
              </a>
            </span>
            <span className="mainTemp">{mainTemp}℃</span>
          </div>
          <div className="elements">
            Feels like: <span className="numbers">{feels_like}℃</span>
          </div>
          <div className="elements">
            Humidity: <span className="numbers">{humidity}%</span>
          </div>
          <div className="description">
            <p className="elements">{description}</p>
            <img
              className="image"
              src={`http://openweathermap.org/img/wn/${iconID}@2x.png`}
              alt="icon"
            />
          </div>
          <div className="elements moreInfo">
            <p className="sunrise">
              Sunrise: <span className="numbers">{moment.unix(sunrise).format("hh:mm:ss a")}</span>
            </p>
            <p className="sunset">
              Sunset:<span className="numbers"> {moment.unix(sunset).format("hh:mm:ss a")}</span>
            </p>
          </div>
        </div>
      )}
      <div
        className={`errorMessage ${
          city === "" ? "pleaseMessage" : "checkMessage"
        }`}
      >
        {errorMessage}
      </div>
    </div>
  );
}
export default WeatherFetch;
