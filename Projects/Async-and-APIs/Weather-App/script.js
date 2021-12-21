// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let apiKey = "112eaceaf05e5ca75e1692cec5d4a11e";
let cityName = "denver";
let unitType = "imperial";
const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#city-search-btn");
const currentCity = document.querySelector("#current-city");
const currentTemp = document.querySelector("#current-temp");
const tempLow = document.querySelector("#temp-low");
const tempHigh = document.querySelector("#temp-high");
const description = document.querySelector("#description");


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
    currentCity.textContent = `Current City: ${weatherJSON.name}`;
    currentTemp.textContent = `Current Temperature ${weatherJSON.main.temp}`;
    tempLow.textContent = `Today's Low ${weatherJSON.main.temp_min}`;
    tempHigh.textContent = `Today's High ${weatherJSON.main.temp_max}`;
    description.textContent = `The current weather looks like: ${weatherJSON.weather[0].description}`;
}

getWeather(cityName);
