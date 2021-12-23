let apiKey = "112eaceaf05e5ca75e1692cec5d4a11e";
let cityName = "denver";
let unitType = "imperial";
const unitTypeParas = document.querySelectorAll(".unit-type-p");
const fahrenheitP = document.querySelector("#fahrenheit");
const celsiusP = document.querySelector("#celsius");
const weatherInfo = document.querySelector("#weather-info");
const cityInput = document.querySelector("#city-input");
const searchButton = document.querySelector("#city-search-btn");
const currentCity = document.createElement("h2");
const currentTemp = document.createElement("h2");
const tempLow = document.createElement("h3");
const tempHigh = document.createElement("h3");
const description = document.createElement("h3");
const humidity = document.createElement("h3");
const windSpeed = document.createElement("h3");

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
        clearOnError();
    } else {
        currentCity.textContent = `Current City: ${weatherJSON.name}, ${weatherJSON.sys.country}`;
        currentTemp.textContent = `Temperature: ${Math.round(weatherJSON.main.temp)}°`;
        description.textContent = `Looks like: ${weatherJSON.weather[0].description}`;
        tempLow.textContent = `Low: ${Math.round(weatherJSON.main.temp_min)}°`;
        tempHigh.textContent = `High: ${Math.round(weatherJSON.main.temp_max)}°`;
        humidity.textContent = `Humidity: ${weatherJSON.main.humidity}%`;
        if (unitType === "imperial") {
            windSpeed.textContent = `Wind Speed: ${Math.round(weatherJSON.wind.speed)} MPH`;
        } else {
            windSpeed.textContent = `Wind Speed: ${Math.round(weatherJSON.wind.speed)} KPH`;
        }
        weatherInfo.append(currentCity);
        weatherInfo.append(currentTemp);
        weatherInfo.append(description);
        weatherInfo.append(tempLow);
        weatherInfo.append(tempHigh);
        weatherInfo.append(humidity);
        weatherInfo.append(windSpeed);
    }
}

function clearOnError() {
    currentTemp.textContent = "";
    description.textContent = "";
    tempLow.textContent = "";
    tempHigh.textContent = "";
    humidity.textContent = "";
    windSpeed.textContent = "";
}

getWeather(cityName);
