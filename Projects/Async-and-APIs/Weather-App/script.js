// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let apiKey = "112eaceaf05e5ca75e1692cec5d4a11e";
let cityName = "denver";
let unitType = "imperial";
const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#city-search-btn");

searchButton.addEventListener("click", () => {
    cityName = cityInput.value;
    getWeather(cityName);
});

async function getWeather(cityName) {
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unitType}&appid=${apiKey}`, {mode: "cors"});
    let weatherJSON = await response.json();
    return displayWeatherInfo(weatherJSON);
}

function displayWeatherInfo(weatherJSON) {
    console.log(weatherJSON.name);
    console.log(weatherJSON.main.temp);
    console.log(weatherJSON.main.temp_min);
    console.log(weatherJSON.main.temp_max);
    console.log(weatherJSON);
    console.log(weatherJSON.weather[0].description);
}

getWeather(cityName);
