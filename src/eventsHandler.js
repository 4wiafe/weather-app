import { renderData } from "./uiRender";

const searchBar = document.querySelector(".search-bar");
const searchButton = document.querySelector(".search-btn");

searchButton.addEventListener("click", () => {
  const inputValue = searchBar.value.trim();
  
  renderData(inputValue);
});
