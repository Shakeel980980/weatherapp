import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { listItemTextClasses } from "@mui/material";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';

export default function WeatherDetail({ info }) {
  let snowfall =
    "https://img.freepik.com/free-vector/snowman-blue-background_1048-3988.jpg?semt=ais_hybrid";
  let rainy =
    "https://img.freepik.com/free-vector/pouring-rain-green-urban-park-cartoon_107791-15529.jpg?semt=ais_hybrid";
  let cloudy =
    "https://img.freepik.com/free-photo/closeup-large-gray-clouds_1182-942.jpg?semt=ais_hybrid";

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.temp >= 30 ? cloudy : info.temp >= 15 ? snowfall : rainy}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
          <br />
          {info.temp >= 30 ? <BrightnessHighIcon/> : info.temp >= 15 ? <AcUnitIcon/> : <ThunderstormIcon/>}
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: "text.secondary" }}
          component="span"
        >
          <div> Temprature : {info.temp} &nbsp; C</div>
          <div> Humidituy : {info.humidituy} </div>
          <div> Temp-Max : {info.tempMax} </div>
          <div> Temp-Min : {info.tempMin} </div>
          <div> Weather : {info.weather} </div>
          <p>
            <b>
              Wherever you go, no matter what the weather, always bring your own
              sunshine.
            </b>
          </p>
        </Typography>
      </CardContent>
    </Card>
  );
}
