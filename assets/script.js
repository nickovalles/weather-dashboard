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


