import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const API_KEY = "b7e88f5530d434448d216c34fb206639";
  const city = "london";
  const [weather, setWeather] = useState();

  const fetchData = async (url, callback) => {
    const response = await fetch(url, { method: "GET" });
    const data = await response.json();
    callback(data);
  };

  useEffect(() => {
    fetchData(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`,
      (data) => {
        setWeather(data);
        console.log(data);
      }
    );
  }, []);
  return (
    <div className="App">
      <h2>City: {weather.name} </h2>
    </div>
  );
}

export default App;
