
import React from "react";
import './../styles/App.css';

const App = () => {
  const [weather, setWeather] = useState({ temperature: 25, conditions: "Sunny" });
  const threshold = 20;

  const handleTemperatureChange = (event) => {
    setWeather({ ...weather, temperature: event.target.value });
  };

  const handleConditionsChange = (event) => {
    setWeather({ ...weather, conditions: event.target.value });
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div className="temperature" style={{ color: weather.temperature > threshold ? "red" : "blue" }}>
        {weather.temperature}°C
      </div>
      <div className="conditions">{weather.conditions}</div>
      <form>
        <label>
          Temperature:
          <input type="number" value={weather.temperature} onChange={handleTemperatureChange} />
        </label>
        <br />
        <label>
          Conditions:
          <input type="text" value={weather.conditions} onChange={handleConditionsChange} />
        </label>
      </form>
    </div>
  );
}

export default App
