import { mapData } from "./dataMapper.js"; 

const weatherInfo = document.querySelector(".weather-info");

async function renderData(inputValue) {
  weatherInfo.innerHTML = "";
  
  const data = await mapData(inputValue);

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
  const weatherIcon = document.createElement("div");
  weatherIcon.className = "weather-icon";
  weatherIcon.textContent = `${data.icon}`;
  const temperature = document.createElement("div");
  temperature.className = "temperature";
  tempValue = document.createElement("p");
  tempValue.textContent = `${data.temp} ℃`;
  const description = document.createElement("p");
  description.className = "description";

  cityName.appendChild(cityText);
  date.appendChild(dateText);
  cityDate.append(cityName, date);
  temperature.appendChild(tempValue);
  weatherStatus.append(
    weatherIcon,
    temperature,
    description
  );
  weatherInfo.append(cityDate, weatherStatus);

  console.log(weatherInfo);
}

export { renderData };
