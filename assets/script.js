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
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid" + APIKey;
    axios.get(queryURL)
    .then(function(response) {
        console.log(response);
    })

}

// Locate City Name, API

// Local Storage, save city

// 5 Day Forecast Request & Display It

// Event Listeners/Search History under nav

// Create Search History, button?