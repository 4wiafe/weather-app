import { mapData } from "./dataMapper.js"; 

const cityInput = document.querySelector(".search-bar");
const trimmed = cityInput.trim();
const weatherInfo = document.querySelector(".weather-info");

async function renderData() {
  const data = await mapData(trimmed);

  weatherInfo.innerHTML = "";
}
