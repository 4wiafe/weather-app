import "./styles.css"; 
import bgImage from "./assets/images/weather_bg.jpg";
import { renderData } from "./uiRender.js";

const button = document.querySelector(".search-btn");
const searchBar = document.querySelector(".search-bar");

button.addEventListener("click", () => {
  console.log(searchBar.value);
  renderData(searchBar.value);
});
