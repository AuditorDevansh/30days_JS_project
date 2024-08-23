const apiKey = "660d358ee9a5745cd5063a56d04ea9b7"; // Add API Key here
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="; // Add API URL 

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
});

async function checkWeather(city) {  //Await fun wait for api response

    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"; 
    }
    else {
        var data = await response.json(); // await for the saving of data in json

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "/Weather App/weather-app-img/images/clouds.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "/Weather App/weather-app-img/images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "/Weather App/weather-app-img/images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "/Weather App/weather-app-img/images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }




}


