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

  cityName.appendChild(cityText);
  date.appendChild(dateText);
  cityDate.append(cityName, date);
  weatherInfo.append(cityDate);

  console.log(weatherInfo);
}

export { renderData };
