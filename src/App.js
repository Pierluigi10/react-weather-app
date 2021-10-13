import "./App.css";
import WeatherFetch from "./Components/WeatherFetch";


function App() {
  return (
    <div className="App">
      <h1 className="appLabel">What's the weather like? </h1>
      <WeatherFetch />
    </div>
  );
}

export default App;
