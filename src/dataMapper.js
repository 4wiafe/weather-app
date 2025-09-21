import { getWeather } from "./apiService.js"; 

async function mapData(city) {
  const weatherData = await getWeather(city);
  const collected = {
    city: weatherData.address,
    date: new Date(weatherData.currentConditions.datetimeEpoch * 1000).toDateString(),
    icon: weatherData.currentConditions.icon,
    temp: weatherData.currentConditions.temp,
    description: weatherData.currentConditions.conditions,
    humidity: weatherData.currentConditions.humidity,
    windspeed: weatherData.currentConditions.windspeed
  };
}
