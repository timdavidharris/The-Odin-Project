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
const humidity = document.querySelector("#humidity");
const windSpeed = document.querySelector("#wind-speed");
const fahrenheitP = document.querySelector("#fahrenheit");
const unitTypeParas = document.querySelectorAll(".unit-type-p");
const celsiusP = document.querySelector("#celsius");

(function tempConversionSetUp() {
    fahrenheitP.textContent = "fahrenheit";
    celsiusP.textContent = "celsius";
    fahrenheitP.setAttribute("class", "active");
    celsiusP.setAttribute("class", "inactive");
})();

unitTypeParas.forEach((para) => {
    para.addEventListener("click", () => {
    if (fahrenheitP.className === "active") {
        fahrenheitP.setAttribute("class", "inactive");
        celsiusP.setAttribute("class", "active");
    } else {
        fahrenheitP.setAttribute("class", "active");
        celsiusP.setAttribute("class", "inactive");
    }
    getWeather(cityName);
    });
});

searchButton.addEventListener("click", () => {
    cityName = cityInput.value;
    getWeather(cityName);
});

async function getWeather(cityName) {
    fahrenheitP.className === "active" ? unitType = "imperial" : unitType = "metric";
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=${unitType}&appid=${apiKey}`, {mode: "cors"});
    let weatherJSON = await response.json();
    return displayWeatherInfo(weatherJSON);
}

function displayWeatherInfo(weatherJSON) {
    if (weatherJSON.name === undefined) {
        currentCity.textContent = "Error: City Name Not Found";
        emptyInfo();
    } else {
        currentCity.textContent = `Current City: ${weatherJSON.name}, ${weatherJSON.sys.country}`;
        currentTemp.textContent = `Current Temperature: ${weatherJSON.main.temp}°`;
        tempLow.textContent = `Today's Low: ${weatherJSON.main.temp_min}°`;
        tempHigh.textContent = `Today's High: ${weatherJSON.main.temp_max}°`;
        description.textContent = `The current weather: ${weatherJSON.weather[0].description}`;
        humidity.textContent = `Humidity: ${weatherJSON.main.humidity}%`;
        if (unitType === "imperial") {
            windSpeed.textContent = `Wind Speed: ${weatherJSON.wind.speed} MPH`;
        } else {
            windSpeed.textContent = `Wind Speed: ${weatherJSON.wind.speed} KPH`;
        }
    }
}

function emptyInfo() {
    currentTemp.textContent = "";
        tempLow.textContent = "";
        tempHigh.textContent = "";
        description.textContent = "";
        humidity.textContent = "";
        windSpeed.textContent = "";
}

getWeather(cityName);
