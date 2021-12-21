// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
let apiKey = "112eaceaf05e5ca75e1692cec5d4a11e";
let cityName = "London";

async function getWeather() {
    let response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`, {mode: "cors"});
    return console.log(response);
}

getWeather();