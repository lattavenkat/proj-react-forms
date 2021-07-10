import React, { useState } from "react";
import Form from "./Components/Form";
import Weather from "./Components/Weather";
import './Components/weatherforecast/myweatherdesign.css';


export default function weatherapi() {
  const [weather, setWeather] = useState([]);
  const APIKEY = "c3408966e373bf10ed4c68de6b3f5068";

  async function fetchData(e) {
    const city = e.target.elements.city.value;
    // const country = e.target.elements.country.value
    e.preventDefault();
    const apiData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${APIKEY}&units=metric`)
      .then((res) => res.json())
      .then((data) => data);
    if (city) {
      setWeather({
        data: apiData,
        city: apiData.city,
        // country: apiData.sys.country,
        description: apiData.weather.description,
        temperature: Math.round((apiData.main.temp * 9) / 5 - 459.67),
        error: "",
      });
    } else {
      setWeather({
        data: "",
        city: "",
        description: "",
        temperature: "",
        error: "Please Type A City And Country",
      });
    }
  }

  return (
    <div>
      <h3> </h3>
      <ul>
        <li>W</li>
        <li>E</li>
        <li>A</li>
        <li>T</li>
        <li>H</li>
        <li>E</li>
        <li>R</li>
        <li>A</li>
        <li>P</li>
        <li>P</li>
        <li>L</li>
        <li>I</li>
        <li>C</li>
        <li>A</li>
        <li>T</li>
        <li>I</li>
        <li>O</li>
        <li>N</li>
      </ul>

      <Form getWeather={fetchData} />
      <div className="go">
        <Weather
          city={weather.city}
          // country={weather.country}
          description={weather.description}
          temperature={weather.temperature}
          error={weather.error}
        />

        {console.log(weather.data)}
      </div>
     
    </div>
  );
}
