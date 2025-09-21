async function getWeather() {
  try {
    const response = await fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/accra?key=9F5MJ9SWTS6TM6Q2B3U3GFYMF");
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (error) {
    throw new Error("Oops! Something went wrong.", error);
  }
} 

export { getWeather };
