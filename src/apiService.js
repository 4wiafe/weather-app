async function getWeather(city) {
  const apiKey = "9F5MJ9SWTS6TM6Q2B3U3GFYMF";
  
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${apiKey}`
    );
    const weatherData = await response.json();
    return weatherData;
  } catch (error) {
    throw new Error("Oops! Something went wrong.", error);
  }
} 

export { getWeather };
