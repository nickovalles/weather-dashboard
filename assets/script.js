// Create constants
const searchButtonEl = document.getElementById("search-button");
const cityNameEl = document.getElementById("city-name");
const cityEntryEl = document.getElementById("city-entry");
const currentTempEl = document.getElementById("temperature");
const currentHumidityEl = document.getElementById("humidity");
const currentWindEl = document.getElementById("wind-speed");
const currentUVEl = document.getElementById("UV-index");
var searchHistory = JSON.parse(localStorage.getItem("search")) || [];
console.log(searchHistory);

// API Info 
const APIKey = "b776531cc2c9f6ed2bb5784b21325065";


// Button Click, read form
function getWeather(cityName) {
    // Refer https://openweathermap.org/current#name
    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid" + APIKey;
    fetch(weatherURL)
    .then(function(response) {
        console.log(response);
    })

        const currentDate = newDate(response.data.dt*1000);
        console.log(currentDate);
        
        const day = currentDate.getDate();
        const month = currentDate.getMonth() + 1;
        const year = currentDate.getFullYear();
        cityNameEl.innerHTML = response.data.name + " (" + month + "/" + day + "/" + year + ") ";
        currentTempEl.innerHTML = "Temperature: " + k2f(response.data.main.temp) + "&#176F";
        currentHumidityEl.innerHTML = "Humidity: " + response.data.main.humidity + "%";
        currentWindEl.innerHTML = "Wind Speed: " + response.data.wind.speed + " MPH";
    let lat = response.data.coord.lat;
    let lon = response.data.coord.lon;
    let UVWeatherURL = "https://api.openweathermap.org/data/2.5/uvi/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey + "&cnt=1";
    fetch(UVWeatherURL)
    .then(function(response) {
        letUVIndex = document.createElement("span");
        UVIndex.setAttribute("class", "badge badge-danger");
        UVIndex.innerHTML = response.data[0].value;
        currentUVEl.innerHTML = "UV Index: ";
        currentUVEl.append(UVIndex);
    });

}

// Locate City Name, API

// Local Storage, save city

// 5 Day Forecast Request & Display It

// Event Listeners/Search History under nav

// Create Search History, button?