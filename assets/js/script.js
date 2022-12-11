// // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={40aa3e5aaeb88d084ff46beb25e47310}

// var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=new york&appid=40aa3e5aaeb88d084ff46beb25e47310"

// fetch(apiUrl)
// .then(res => res.json())
// .then(data => console.log(data))

var cityInput = document.querySelector("#city-input");
var searchBtn = document.querySelector("#searchbtn");
var notify = document.querySelector("#notify");
var previousSearch = document.querySelector("#previous-search");
var weatherContainer = document.querySelector("#weather-container");
var currentDay = document.querySelector("#current-day");
var fiveDay = document.querySelector("#five-day");

var displayCurrentCity = function(city) {
    currentDay.innerHTML = null;
    // current city container
    var currentCity = document.createElement("div");
    currentCity.className = "col-11 current-city bg-secondary border border-white text-white w-100";
    // current city name
    var cityName = document.createElement("h2");
    cityName.className = "city-name text-center";
    cityName.textContent = city.name + " " + "(" + dayjs().format("M/D/YYYY") + ")";
    console.log(cityName.innerHTML)
    // weather icon
    var icon = city.list[0].weather[0].icon;
    var weatherIcon = document.createElement("img");
    weatherIcon.className = "weather-icon mx-auto d-block";
    weatherIcon.src = "https://openweathermap.org/img/w/"+icon+".png"
    // current temp 
    var currentTemp = document.createElement("p");
    currentTemp.className = "current-temp ml-2";
    var currentTempK = city.list[0].main.temp;
    var currentTempF = ((currentTempK - 273.15) * 1.8) + 32;
    currentTemp.textContent = "Temperature: " + currentTempF.toFixed() + " ℉"
    // current wind
    var currentWind = document.createElement("p");
    currentWind.className = "current-wind ml-2";
    currentWind.textContent = "Wind: " + city.list[0].wind.speed + " MPH";
    // current humidity
    var currentHumidity = document.createElement("p");
    currentHumidity.className = "current-humidity ml-2"
    currentHumidity.textContent = "Humidity: " + city.list[0].main.humidity + " %";
    currentDay.appendChild(currentCity);
    currentCity.append(cityName, weatherIcon, currentTemp, currentWind, currentHumidity);
};

var fetchResults = function(cityInput) {
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=40aa3e5aaeb88d084ff46beb25e47310";

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        displayCurrentCity(data);
    })
    .catch(function (error) {
        console.log(error);
    });
};

var handleSearch = function() {
    notify.classList.add("hidden")
    var search = cityInput.value.trim();
    if (search === "") {
        notify.classList.remove("hidden");
    } else {
        fetchResults(search);
        console.log(search);
    }
};


searchBtn.addEventListener("click", handleSearch);

var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY h:mm A"))