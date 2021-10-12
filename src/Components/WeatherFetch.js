/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";

// const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const API_KEY = "b7e88f5530d434448d216c34fb206639";

function WeatherFetch() {
  // const city = "berlin"
  const [city, setCity] = useState("");
  const [displayCity, setDisplayCity] = useState("");
  const [feels_like, setFeelsLike] = useState("");
  const [mainTemp, setMainTemp] = useState("");
  const [description, setDescription] = useState("");
  // const [main, setMain] = useState("");
  const [humidity, setHumidity] = useState("");
  const [id, setId] = useState("");
  const [iconID, setIconID] = useState([]);
  // const [showForm, setShowForm] = useState(false);

  const loadPageData = async () => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    // const url = `https://api.openweathermap.org/data/2.5/weather?q=ber&appid=${API_KEY}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setMainTemp(data.main.temp);
      setFeelsLike(data.main.feels_like);
      setDescription(data.weather[0].description);
      // setMain(data.weather[0].main);
      setHumidity(data.main.humidity);
      setIconID(data.weather[0].icon);
      setDisplayCity(city);
      // console.log(data.id);
      setId(data.id);
      console.log(data);
    }
  };

  // useEffect(() => {
  //   loadPageData();
  // }, [city]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    loadPageData();
    // setShowForm(true);
    setId();
  };

  // const handleSubmit = (evt) => {
  //   if(id !== ""){
  //   evt.preventDefault();
  //   loadPageData();
  //   // setShowForm(true);
  //   setId();

  // } else {
  //   setMessage("Please enter a city");
  //   }
  // };

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
        <input className="button" type="submit" />
      </form>

      {id && (
        <div className="info">
          <p className="elements temperature">
            Temperature for{" "}
            <span className="location">
              {" "}
              <a
                target="_blank"
                href={`https://en.wikipedia.org/wiki/${displayCity}`}
                rel="noreferrer"
              >
                {displayCity}
              </a>
            </span>
            : {mainTemp}℃
          </p>
          {/* <p>id: {id}</p> */}
          <p className="elements temperature">Feels like: {feels_like}℃</p>
          <p className="elements">Humidity: {humidity}%</p>
          <div className="description">
            <p className="elements">{description}</p>
            <img
              className="image"
              src={`http://openweathermap.org/img/wn/${iconID}@2x.png`}
              alt="icon"
            />
          </div>
        </div>
      )}
      {errorMessage}
    </div>
  );
}
export default WeatherFetch;
