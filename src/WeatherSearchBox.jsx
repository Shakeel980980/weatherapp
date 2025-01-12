import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { useState } from "react";
import './weatherapp.css'
import { colors } from "@mui/material";

export default function SearchBox({ updateInfo }) {
  let [city, setcity] = useState("");
  let [error, seterror]= useState(false);
  const URL_Link = "https://api.openweathermap.org/data/2.5/weather";
  const URL_Key = "d9b95bb5a04f1787f06a996e2f7fa910";

  let getWeatherInfo = async () => {
    try{
      let response = await fetch(
        `${URL_Link}?q=${city}&appid=${URL_Key}&units=metric`
      );
      let responcejson = await response.json();
      console.log(responcejson);
      let result = {
        city: responcejson.name,
        temp: responcejson.main.temp,
        humidituy: responcejson.main.humidity,
        tempMin: responcejson.main.temp_min,
        tempMax: responcejson.main.temp_max,
        feelsLike: responcejson.main.feels_like,
        weather: responcejson.weather[0].description,
      };
      console.log(result);
      return result;
    }catch(error){
      throw error;
    }
    
  };
  let handleChange = (event) => {
    setcity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try{
      event.preventDefault();
      console.log(city);
      setcity("");
      let info = await getWeatherInfo();
      updateInfo(info);
    }catch(err){
      seterror(true);
    }
    
  };
  return (
    <div >
      <form onSubmit={handleSubmit}>
        <TextField
        className="searchbox"
          id="outlined-basic"
          label="City"
          variant="outlined"
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>

        <Button variant="contained" endIcon={<SendIcon />} type="Submit">
          Search
        </Button>
        <div>{error && <p><b style={{color:"red"}}>No Such Place Occur!</b></p>}</div>
      </form>
    </div>
  );
}
