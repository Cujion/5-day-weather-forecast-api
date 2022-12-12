// // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={40aa3e5aaeb88d084ff46beb25e47310}

// var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=new york&appid=40aa3e5aaeb88d084ff46beb25e47310"

// fetch(apiUrl)
// .then(res => res.json())
// .then(data => console.log(data))

// 0,7,15,23,31,39

var cityInput = document.querySelector("#city-input");
var searchBtn = document.querySelector("#searchbtn");
var notify = document.querySelector("#notify");
var searchHistory = document.querySelector("search-history");
// var previousSearch = document.querySelector("#previous-search");
var weatherContainer = document.querySelector("#weather-container");
var currentDay = document.querySelector("#current-day");
var fiveDay = document.querySelector("#five-day");

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

var displayFiveDay = function(city) {
    fiveDay.innerHTML = null;
    // current city container
    var dayOne = document.createElement("div");
    dayOne.className = "col-lg-2 col-md-5 col-sm-12 bg-secondary mb-2 mx-2 border border-white text-white";
    // current city name
    var dateOne = document.createElement("h3");
    dateOne.className = "date-one text-center";
    dateOne.textContent = "(" + dayjs().add(1, "day").format("M/D/YYYY") + ")";
    console.log(dateOne.innerHTML)
    // weather icon
    var icon = city.list[7].weather[0].icon;
    var weatherIcon = document.createElement("img");
    weatherIcon.className = "weather-icon mx-auto d-block";
    weatherIcon.src = "https://openweathermap.org/img/w/"+icon+".png"
    // current temp 
    var currentTemp = document.createElement("div");
    currentTemp.className = "current-temp";
    var currentTempK = city.list[7].main.temp;
    var currentTempF = ((currentTempK - 273.15) * 1.8) + 32;
    currentTemp.textContent = "Temperature: " + currentTempF.toFixed() + " ℉"
    // current wind
    var currentWind = document.createElement("div");
    currentWind.className = "current-wind";
    currentWind.textContent = "Wind: " + city.list[7].wind.speed + " MPH";
    // current humidity
    var currentHumidity = document.createElement("div");
    currentHumidity.className = "current-humidity"
    currentHumidity.textContent = "Humidity: " + city.list[7].main.humidity + " %";

    // current city container
    var dayTwo = document.createElement("div");
    dayTwo.className = "col-lg-2 col-md-5 col-sm-12 bg-secondary mb-2 mx-2 border border-white text-white";
    // current city name
    var dateTwo = document.createElement("h3");
    dateTwo.className = "date-two text-center";
    dateTwo.textContent = "(" + dayjs().add(2, "day").format("M/D/YYYY") + ")";
    console.log(dateTwo.innerHTML)
    // weather icon
    var icon2 = city.list[15].weather[0].icon;
    var weatherIcon2 = document.createElement("img");
    weatherIcon2.className = "weather-icon2 mx-auto d-block";
    weatherIcon2.src = "https://openweathermap.org/img/w/"+icon2+".png"
    // current temp 
    var currentTemp2 = document.createElement("div");
    currentTemp2.className = "current-temp2";
    var currentTempK2 = city.list[15].main.temp;
    var currentTempF2 = ((currentTempK2 - 273.15) * 1.8) + 32;
    currentTemp2.textContent = "Temperature: " + currentTempF2.toFixed() + " ℉"
    // current wind
    var currentWind2 = document.createElement("div");
    currentWind2.className = "current-wind2";
    currentWind2.textContent = "Wind: " + city.list[15].wind.speed + " MPH";
    // current humidity
    var currentHumidity2 = document.createElement("div");
    currentHumidity2.className = "current-humidity2"
    currentHumidity2.textContent = "Humidity: " + city.list[15].main.humidity + " %";

        // current city container
    var dayThree = document.createElement("div");
    dayThree.className = "col-lg-2 col-md-5 col-sm-12 bg-secondary mb-2 mx-2 border border-white text-white";
    // current city name
    var dateThree = document.createElement("h3");
    dateThree.className = "date-three text-center";
    dateThree.textContent = "(" + dayjs().add(3, "day").format("M/D/YYYY") + ")";
    console.log(dateThree.innerHTML)
    // weather icon
    var icon3 = city.list[23].weather[0].icon;
    var weatherIcon3 = document.createElement("img");
    weatherIcon3.className = "weather-icon3 mx-auto d-block";
    weatherIcon3.src = "https://openweathermap.org/img/w/"+icon3+".png"
    // current temp 
    var currentTemp3 = document.createElement("div");
    currentTemp3.className = "current-temp3";
    var currentTempK3 = city.list[23].main.temp;
    var currentTempF3 = ((currentTempK3 - 273.15) * 1.8) + 32;
    currentTemp3.textContent = "Temperature: " + currentTempF3.toFixed() + " ℉"
    // current wind
    var currentWind3 = document.createElement("div");
    currentWind3.className = "current-wind3";
    currentWind3.textContent = "Wind: " + city.list[23].wind.speed + " MPH";
    // current humidity
    var currentHumidity3 = document.createElement("div");
    currentHumidity3.className = "current-humidity3"
    currentHumidity3.textContent = "Humidity: " + city.list[23].main.humidity + " %";

        // current city container
    var dayFour = document.createElement("div");
    dayFour.className = "col-lg-2 col-md-5 col-sm-12 bg-secondary mb-2 mx-2 border border-white text-white";
    // current city name
    var dateFour = document.createElement("h3");
    dateFour.className = "date-four text-center";
    dateFour.textContent = "(" + dayjs().add(4, "day").format("M/D/YYYY") + ")";
    console.log(dateFour.innerHTML)
    // weather icon
    var icon4 = city.list[31].weather[0].icon;
    var weatherIcon4 = document.createElement("img");
    weatherIcon4.className = "weather-icon4 mx-auto d-block";
    weatherIcon4.src = "https://openweathermap.org/img/w/"+icon4+".png"
    // current temp 
    var currentTemp4 = document.createElement("div");
    currentTemp4.className = "current-temp4";
    var currentTempK4 = city.list[31].main.temp;
    var currentTempF4 = ((currentTempK4 - 273.15) * 1.8) + 32;
    currentTemp4.textContent = "Temperature: " + currentTempF4.toFixed() + " ℉"
    // current wind
    var currentWind4 = document.createElement("div");
    currentWind4.className = "current-wind4";
    currentWind4.textContent = "Wind: " + city.list[31].wind.speed + " MPH";
    // current humidity
    var currentHumidity4 = document.createElement("div");
    currentHumidity4.className = "current-humidity4"
    currentHumidity4.textContent = "Humidity: " + city.list[31].main.humidity + " %";

        // current city container
    var dayFive = document.createElement("div");
    dayFive.className = "col-lg-2 col-md-5 col-sm-12 bg-secondary mb-2 mx-2 border border-white text-white";
    // current city name
    var dateFive = document.createElement("h3");
    dateFive.className = "date-five text-center";
    dateFive.textContent = "(" + dayjs().add(5, "day").format("M/D/YYYY") + ")";
    console.log(dateFive.innerHTML)
    // weather icon
    var icon5 = city.list[39].weather[0].icon;
    var weatherIcon5 = document.createElement("img");
    weatherIcon5.className = "weather-icon5 mx-auto d-block";
    weatherIcon5.src = "https://openweathermap.org/img/w/"+icon5+".png"
    // current temp 
    var currentTemp5 = document.createElement("div");
    currentTemp5.className = "current-temp5";
    var currentTempK5 = city.list[39].main.temp;
    var currentTempF5 = ((currentTempK5 - 273.15) * 1.8) + 32;
    currentTemp5.textContent = "Temperature: " + currentTempF5.toFixed() + " ℉"
    // current wind
    var currentWind5 = document.createElement("div");
    currentWind5.className = "current-wind5";
    currentWind5.textContent = "Wind: " + city.list[39].wind.speed + " MPH";
    // current humidity
    var currentHumidity5 = document.createElement("div");
    currentHumidity5.className = "current-humidity5"
    currentHumidity5.textContent = "Humidity: " + city.list[39].main.humidity + " %";
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

var fetchResults = function(cityInput) {
var apiUrl = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityInput + "&appid=40aa3e5aaeb88d084ff46beb25e47310";

fetch(apiUrl)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);
        displayCurrentCity(data);
        displayFiveDay(data);
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

var previousCity = JSON.parse(localStorage.getItem("previousCity") || "[]");

var SaveSearchedCity = function(search) {
    var search = cityInput.value.trim();
    if (previousCity.includes(search)) {
        return;
    } else {
        previousCity.push(search)
        localStorage.setItem("previousCity", JSON.stringify(previousCity));
        postPreviousCity();
    }
}

var postPreviousCity = function() {
    // if (previousCity.length > 0) {
    //     searchHistory.innerHTML = "";
    for (i = 0; i < previousCity.length; i++) {
        var previousSearchBtn = document.createElement("button")
        previousSearchBtn.className = "previous-btn btn-lg btn-dark w-100 my-2 border border-white"
        previousSearchBtn.textContent = previousCity[i];
        searchHistory.appendChild(previousSearchBtn);
        }
    // } else {
    //     searchHistory.innerHTML = "";
    // }
}

postPreviousCity();
