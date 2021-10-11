import "./App.css";
import WeatherFetch from "./Components/WeatherFetch";
import Api from "./.netlify/functions/api";

let serverURL;

fetch(".netlify/functions/api")
  .then((response) => response.json())
  .then((json) => {
    serverURL = json.api;
  });

function App() {
  return (
    <div className="App">
      <h1 className="appLabel">React Weather App</h1>
      <WeatherFetch />
    </div>
  );
}

export default App;
