// global variables
var cityInput = document.querySelector("#city-input");
var searchBtn = document.querySelector("#searchbtn");
var clearSearchBtn = document.querySelector("#clearsearch");
var previousBtn = document.querySelector("previous-btn");
var notify = document.querySelector("#notify");
var searchHistory = document.querySelector("#search-history");
var weatherContainer = document.querySelector("#weather-container");
var currentDay = document.querySelector("#current-day");
var fiveDay = document.querySelector("#five-day");
var apiKey = "40aa3e5aaeb88d084ff46beb25e47310";
var today = dayjs();
$("#currentDay").text(today.format("dddd, MMMM D, YYYY h:mm A"));

var displayCurrentCity = function(city) {
    currentDay.innerHTML = null;
    // current city container
    var currentCity = document.createElement("div");
    currentCity.className = "col-11 current-city bg-secondary border border-white text-white w-100";
    // current city name
    var cityName = document.createElement("h2");
    cityName.className = "city-name text-center";
    cityName.textContent = city.city.name + " " + "(" + dayjs().format("M/D/YYYY") + ")";
    // current weather icon
    var icon = city.list[0].weather[0].icon;
    var weatherIcon = document.createElement("img");
    weatherIcon.className = "weather-icon mx-auto d-block";
    weatherIcon.src = "https://openweathermap.org/img/w/"+icon+".png";
    // current temp 
    var currentTemp = document.createElement("p");
    currentTemp.className = "current-temp ml-2";
    var currentTempK = city.list[0].main.temp;
    var currentTempF = ((currentTempK - 273.15) * 1.8) + 32;
    currentTemp.textContent = "Temperature: " + currentTempF.toFixed() + " ℉";
    // current wind
    var currentWind = document.createElement("p");
    currentWind.className = "current-wind ml-2";
    currentWind.textContent = "Wind: " + city.list[0].wind.speed + " MPH";
    // current humidity
    var currentHumidity = document.createElement("p");
    currentHumidity.className = "current-humidity ml-2";
    currentHumidity.textContent = "Humidity: " + city.list[0].main.humidity + " %";
    currentDay.appendChild(currentCity);
    currentCity.append(cityName, weatherIcon, currentTemp, currentWind, currentHumidity);
};

var displayFiveDay = function(city) {
    fiveDay.innerHTML = null;
    // day one container
    var dayOne = document.createElement("div");
    dayOne.className = "col-lg-2 col-md-5 col-sm-12 bg-secondary mb-2 mx-2 border border-white text-white";
    // date one
    var dateOne = document.createElement("h3");
    dateOne.className = "date-one text-center mt-2";
    dateOne.textContent = "(" + dayjs().add(1, "day").format("M/D/YYYY") + ")";
    // day one weather icon
    var icon = city.list[7].weather[0].icon;
    var weatherIcon = document.createElement("img");
    weatherIcon.className = "weather-icon mx-auto d-block";
    weatherIcon.src = "https://openweathermap.org/img/w/"+icon+".png";
    // day one temp
    var currentTemp = document.createElement("div");
    currentTemp.className = "current-temp mb-1";
    var currentTempK = city.list[7].main.temp;
    var currentTempF = ((currentTempK - 273.15) * 1.8) + 32;
    currentTemp.textContent = "Temperature: " + currentTempF.toFixed() + " ℉";
    // day one wind
    var currentWind = document.createElement("div");
    currentWind.className = "current-wind mb-1";
    currentWind.textContent = "Wind: " + city.list[7].wind.speed + " MPH";
    // day one humidity
    var currentHumidity = document.createElement("div");
    currentHumidity.className = "current-humidity mb-2"
    currentHumidity.textContent = "Humidity: " + city.list[7].main.humidity + " %";

    // day two container
    var dayTwo = document.createElement("div");
    dayTwo.className = "col-lg-2 col-md-5 col-sm-12 bg-secondary mb-2 mx-2 border border-white text-white";
    // date two
    var dateTwo = document.createElement("h3");
    dateTwo.className = "date-two text-center mt-2";
    dateTwo.textContent = "(" + dayjs().add(2, "day").format("M/D/YYYY") + ")";
    // day two weather icon
    var icon2 = city.list[15].weather[0].icon;
    var weatherIcon2 = document.createElement("img");
    weatherIcon2.className = "weather-icon2 mx-auto d-block";
    weatherIcon2.src = "https://openweathermap.org/img/w/"+icon2+".png";
    // day two temp
    var currentTemp2 = document.createElement("div");
    currentTemp2.className = "current-temp2 mb-1";
    var currentTempK2 = city.list[15].main.temp;
    var currentTempF2 = ((currentTempK2 - 273.15) * 1.8) + 32;
    currentTemp2.textContent = "Temperature: " + currentTempF2.toFixed() + " ℉";
    // day two wind
    var currentWind2 = document.createElement("div");
    currentWind2.className = "current-wind2 mb-1";
    currentWind2.textContent = "Wind: " + city.list[15].wind.speed + " MPH";
    // day two humidity
    var currentHumidity2 = document.createElement("div");
    currentHumidity2.className = "current-humidity2 mb-2";
    currentHumidity2.textContent = "Humidity: " + city.list[15].main.humidity + " %";

    // day three container
    var dayThree = document.createElement("div");
    dayThree.className = "col-lg-2 col-md-5 col-sm-12 bg-secondary mb-2 mx-2 border border-white text-white";
    // date three
    var dateThree = document.createElement("h3");
    dateThree.className = "date-three text-center mt-2";
    dateThree.textContent = "(" + dayjs().add(3, "day").format("M/D/YYYY") + ")";
    // day three weather icon
    var icon3 = city.list[23].weather[0].icon;
    var weatherIcon3 = document.createElement("img");
    weatherIcon3.className = "weather-icon3 mx-auto d-block";
    weatherIcon3.src = "https://openweathermap.org/img/w/"+icon3+".png";
    // day three temp
    var currentTemp3 = document.createElement("div");
    currentTemp3.className = "current-temp3 mb-1";
    var currentTempK3 = city.list[23].main.temp;
    var currentTempF3 = ((currentTempK3 - 273.15) * 1.8) + 32;
    currentTemp3.textContent = "Temperature: " + currentTempF3.toFixed() + " ℉";
    // day three wind
    var currentWind3 = document.createElement("div");
    currentWind3.className = "current-wind3 mb-1";
    currentWind3.textContent = "Wind: " + city.list[23].wind.speed + " MPH";
    // day three humidity
    var currentHumidity3 = document.createElement("div");
    currentHumidity3.className = "current-humidity3 mb-2";
    currentHumidity3.textContent = "Humidity: " + city.list[23].main.humidity + " %";

    // day four container
    var dayFour = document.createElement("div");
    dayFour.className = "col-lg-2 col-md-5 col-sm-12 bg-secondary mb-2 mx-2 border border-white text-white";
    // date four
    var dateFour = document.createElement("h3");
    dateFour.className = "date-four text-center mt-2";
    dateFour.textContent = "(" + dayjs().add(4, "day").format("M/D/YYYY") + ")";
    // day four weather icon
    var icon4 = city.list[31].weather[0].icon;
    var weatherIcon4 = document.createElement("img");
    weatherIcon4.className = "weather-icon4 mx-auto d-block";
    weatherIcon4.src = "https://openweathermap.org/img/w/"+icon4+".png";
    // day four temp
    var currentTemp4 = document.createElement("div");
    currentTemp4.className = "current-temp4 mb-1";
    var currentTempK4 = city.list[31].main.temp;
    var currentTempF4 = ((currentTempK4 - 273.15) * 1.8) + 32;
    currentTemp4.textContent = "Temperature: " + currentTempF4.toFixed() + " ℉";
    // day four wind
    var currentWind4 = document.createElement("div");
    currentWind4.className = "current-wind4 mb-1";
    currentWind4.textContent = "Wind: " + city.list[31].wind.speed + " MPH";
    // day four humidity
    var currentHumidity4 = document.createElement("div");
    currentHumidity4.className = "current-humidity4 mb-2";
    currentHumidity4.textContent = "Humidity: " + city.list[31].main.humidity + " %";

    // day five container
    var dayFive = document.createElement("div");
    dayFive.className = "col-lg-2 col-md-5 col-sm-12 bg-secondary mb-2 mx-2 border border-white text-white";
    // date five
    var dateFive = document.createElement("h3");
    dateFive.className = "date-five text-center mt-2";
    dateFive.textContent = "(" + dayjs().add(5, "day").format("M/D/YYYY") + ")";
    // day five weather icon
    var icon5 = city.list[39].weather[0].icon;
    var weatherIcon5 = document.createElement("img");
    weatherIcon5.className = "weather-icon5 mx-auto d-block";
    weatherIcon5.src = "https://openweathermap.org/img/w/"+icon5+".png";
    // day five temp
    var currentTemp5 = document.createElement("div");
    currentTemp5.className = "current-temp5 mb-1";
    var currentTempK5 = city.list[39].main.temp;
    var currentTempF5 = ((currentTempK5 - 273.15) * 1.8) + 32;
    currentTemp5.textContent = "Temperature: " + currentTempF5.toFixed() + " ℉"
    // day five wind
    var currentWind5 = document.createElement("div");
    currentWind5.className = "current-wind5 mb-1";
    currentWind5.textContent = "Wind: " + city.list[39].wind.speed + " MPH";
    // day five humidity
    var currentHumidity5 = document.createElement("div");
    currentHumidity5.className = "current-humidity5 mb-2";
    currentHumidity5.textContent = "Humidity: " + city.list[39].main.humidity + " %";
    // appending container to all the children elements for each day
    fiveDay.appendChild(dayOne);
    dayOne.append(dateOne, weatherIcon, currentTemp, currentWind, currentHumidity);
    fiveDay.appendChild(dayTwo);
    dayTwo.append(dateTwo, weatherIcon2, currentTemp2, currentWind2, currentHumidity2);
    fiveDay.appendChild(dayThree);
    dayThree.append(dateThree, weatherIcon3, currentTemp3, currentWind3, currentHumidity3);
    fiveDay.appendChild(dayFour);
    dayFour.append(dateFour, weatherIcon4, currentTemp4, currentWind4, currentHumidity4);
    fiveDay.appendChild(dayFive);
    dayFive.append(dateFive, weatherIcon5, currentTemp5, currentWind5, currentHumidity5);
};
// fetch results function to be able to display data
var fetchResults = function(cityInput) {
var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=${apiKey}`;
// fetch response
fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        saveSearchedCity(data.city.name);
        displayCurrentCity(data);
        displayFiveDay(data);
    })
    .catch(function (error) {
        console.log(error);
    });
};
// function to grab search text input and fetch results on search criteria
var handleSearch = function() {
    notify.classList.add("hidden")
    var search = cityInput.value.trim();
    // if no search input bootstrap modal will display
    if (search === "") {
        notify.classList.remove("hidden");
    } else {
        fetchResults(search);
        search = "";
    }
};
// event listener for search button pressed
searchBtn.addEventListener("click", handleSearch);
// checking local storage for an input
var previousCity = JSON.parse(localStorage.getItem("previousCity") || "[]");
// grabbing search input and storing it in local storage 
var saveSearchedCity = function(search) {
    var search = cityInput.value.trim();
    if (previousCity.includes(search)) {
        return;
    } else {
        previousCity.push(search)
        localStorage.setItem("previousCity", JSON.stringify(previousCity));
        postPreviousCity();
    }
};
// creating button for previous cities search that are stored in local storage
var postPreviousCity = function() {
        searchHistory.innerHTML = "";
    for (i = 0; i < previousCity.length; i++) {
        var previousSearchBtn = document.createElement("button");
        previousSearchBtn.className = "previous-btn btn-lg btn-dark w-100 my-2 border border-white"
        previousSearchBtn.textContent = previousCity[i];
        if (searchHistory.innerHTML === null) {
            return;
        }
        searchHistory.appendChild(previousSearchBtn);
        previousSearchBtn.addEventListener("click", (event) => {
            var rePopBtn = event.target.innerHTML
            fetchResults(rePopBtn);
        })
    }
};


// clear search button to clear local storage on click
clearSearchBtn.addEventListener("click", function() {
    localStorage.clear();
  });

postPreviousCity();
