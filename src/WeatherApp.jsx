import SearchBox from "./WeatherSearchBox";
import WeatherDetail from "./WeatherDetail";
import { useState } from "react";
import './weatherapp.css'

export default function Weatherapp() {
  let [weatehrinfo, setweatehrinfo] = useState({
    city: "Burewala",
    temp: 25.24,
    humidituy: 33,
    tempMin: 24.5,
    tempMax: 27.6,
    feelsLike: "clear",
    weather: "haze",
  });
  let updateInfo = (result) => {
    setweatehrinfo(result);
  };
  return (
    <div className="weatherapp">
      <h1>Search the Weather </h1>
      <SearchBox updateInfo={updateInfo} />
      <br />
      <WeatherDetail info={weatehrinfo} />
    </div>
  );
}
