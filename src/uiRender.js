import { mapData } from "./dataMapper.js"; 

const weatherInfo = document.querySelector(".weather-info");

async function renderData(inputValue) {
  const data = await mapData(inputValue);

  weatherInfo.innerHTML = "";

  const cityDate = document.createElement("div");
  cityDate.className = "city-date";
  const cityName = document.createElement("div");
  cityName.className = "city";
  const cityText = document.createElement("p");
  cityText.textContent = `📍${data.city}`;

  const date = document.createElement("div");
  date.className = "date";
  const dateText = document.createElement("p");
  dateText.textContent = `${data.date}`;

  const weatherStatus = document.createElement("div");
  weatherStatus.className = "weather-status";
  const weatherIcon = document.createElement("img");
  weatherIcon.className = "weather-icon";
  weatherIcon.src = `./src/assets/icons/${data.icon}.png`;
  const temperature = document.createElement("div");
  temperature.className = "temperature";
  const tempValue = document.createElement("p");
  tempValue.textContent = `${data.temp} ℃`;
  const description = document.createElement("p");
  description.className = "description";
  description.textContent = `${data.description}`;

  const humidityWindspeed = document.createElement("div");
  humidityWindspeed.className = "humidity-speed";
  const humidity = document.createElement("div");
  humidity.className = "humidity";
  const humidityText = document.createElement("p");
  humidityText.textContent = `💧Humidity ${data.humidity}`;
  const windspeed = document.createElement("div");
  windspeed.className = "wind-speed";
  const windspeedValue = document.createElement("p");
  windspeedValue.textContent = `💨 Windspeed ${data.windspeed}mph`;

  cityName.appendChild(cityText);
  date.appendChild(dateText);
  cityDate.append(cityName, date);
  temperature.appendChild(tempValue);
  weatherStatus.append(
    weatherIcon,
    temperature,
    description
  );
  humidity.appendChild(humidityText);
  windspeed.appendChild(windspeedValue);
  humidityWindspeed.append(humidity, windspeed);
  weatherInfo.append(
    cityDate,
    weatherStatus,
    humidityWindspeed
  );
}

export { renderData };
