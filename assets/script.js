// Create constants
const searchButtonEl = document.getElementById("search-button");
const cityNameEl = document.getElementById("city-name");
const cityEntryEl = document.getElementById("city-entry");
const currentTempEl = document.getElementById("temperature");
const currentHumidityEl = document.getElementById("humidity");
const historyE1 = document.getElementById("history");
const currentWindEl = document.getElementById("wind-speed");
const currentUVEl = document.getElementById("UV-index");
let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

// API Info 
const APIKey = "b842b435591c968a7fcf07de7e4f3de5";


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


// Locate City Name, API -> use it to request from open weather api
let cityID = response.data.id;
let forecastURL = "https://api.openweathermap.org/data/2.5/forecast?id=" + cityID + "&appid=" + APIKey;
fetch(forecastURL)
.then(function(response) {
    console.log(response);
    const forecastEl = document.querySelectorAll(".forecast");
    for (i = 0; i < forecastEl.length; i++) {
        forecastEl[i].innerHTML = "";
        const forecastIndex = i*8 + 4;
        const forecastDate = newDate(response.data.list[forecastIndex].dt * 1000);
        const forecastDay = forecastDate.getDate();
        const forecastMonth = forecastDate.getMonth() + 1;
        const forecastYear = forecastDate.getFullYear();
        const forecastDateEl = document.createElement("p");
        forecastDateEl.setAttribute("class","mt-3 mb-0 forecast-date");
        forecastDateEl.innerHTML = forecastMonth + "/" + forecastDay + "/" + forecastYear;
        forecastEl[i].append(forecastDateEl);
        const forecastWeatherEl = document.createElement("img");
        forecastWeatherEl.setAttribute("src","https://openweathermap.org/img/wn/" + response.data.list[forecastIndex].weather[0].icon + "@2x.png");
        forecastWeatherEl.setAttribute("alt",response.data.list[forecastIndex].weather[0].description);
        forecastEl[i].append(forecastWeatherEl);
        const forecastTempEl = document.createElement("p");
        forecastTempEl.innerHTML = "Temp: " + k2f(response.data.list[forecastIndex].main.temp) + " &#176F";
        forecastEl[i].append(forecastTempEl);
        const forecastHumidityEl = document.createElement("p");
        forecastHumidityEl.innerHTML = "Humidity: " + response.data.list[forecastIndex].main.humidity + "%";
        forecastEl[i].append(forecastHumidityEl);
        }
    })

}

// Local Storage, save city


// Event Listeners/Search History under nav

searchButtonEl.addEventListener("click", function() { 
    searchTerm = cityEntryEl.value;
    getWeather(searchTerm);
    searchHistory.push(searchTerm);
    localStorage.setItem("search", JSON.stringify(searchHistory));


// Create Search History, button?

getSearchHistory();
})

function getSearchHistory() {
    historyEl.innerHTML = "";
    for (let i = 0; i < searchHistory.length; i++) {
        const historySelect = document.createElement("input");
            historySelect.setAttribute("type","text");
            historySelect.setAttribute("readonly",true);
            historySelect.setAttribute("class", "form-control d-block bg-white");
            historySelect.setAttribute("value", searchHistory[i]);
            historySelect.addEventListener("click",function() {
                getWeather(historySelect.value);
            })
            historyEl.append(historySelect);
    }
}

getSearchHistory();
if (searchHistory.length > 0) {
    getWeather(searchHistory[searchHistory.length - 1]);
}