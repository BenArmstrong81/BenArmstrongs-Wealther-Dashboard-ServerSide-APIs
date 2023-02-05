// WeatherDashboard API Key:
    // Key: 3600fb05ffbd82c86b36fdbf2ee15d74
    // Name: BenArm-WealtherDB	
const apiKey = "3600fb05ffbd82c86b36fdbf2ee15d74";

//-----------------3x API URL's needed are:
// 1) Direct geocoding - Coordinates by location name URL:
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}
// 2) Current Weather:
// https://api.openweathermap.org/data/2.5/weather?lat=" + latEl + "&lon=" + lonEl + "&units=metric&appid=" + apiKey;
// 3) 5 day forescast API URL:
// https://api.openweathermap.org/data/2.5/forecast?lat=" + latEL + "&lon=" + lon + "&appid=" + apikey;


//-----------------Event Listener added to Form:
var onSubmit = document.querySelector('#submit-btn');
console.log(onSubmit);
onSubmit.addEventListener('click', submitFunction);

function submitFunction(event){
    event.preventDefault();
    var city = document.getElementById('city-name').value;
    console.log(city);
    getCityElements(city);
    //make a function to save past searches to local history 
    localStorage.setItem('cities', JSON.stringify([city]));
}

//-----------------1st Find GeolocationCoordinates by city - this is entered by user
async function getCityElements(cityName){
var latEl;
var lonEl;
await fetch("http://api.openweathermap.org/geo/1.0/direct?q=" + cityName + "&appid=" + apiKey + "&limit=5")
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.table(JSON.stringify(data));
    console.log(data);
    latEl = data[0].lat;
    lonEl = data[0].lon;
    // console.log(latEl);
    // console.log(lonEl);
  });
  console.log(latEl);
  console.log(lonEl);

//   TEST using Adelaide:
//   https://api.openweathermap.org/data/2.5/weather?lat=-34.9281805&lon=138.5999312&units=imperial&appid=3600fb05ffbd82c86b36fdbf2ee15d74

//-----------------2nd with the lat and lon from the first API call, run this into the "Current Weather":
await fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + latEl + "&lon=" + lonEl + "&units=metric&appid=" + apiKey)
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data);
    var currentEl = document.getElementById('searched-city')
    if(currentEl.innerHTML){
        currentEl.innerHTML= '';   
    }
        // function to create Current Weather Card
  //---------------------------FUNCTION: for Displaying the date in header 

//   var rightNow = dayjs().format('dddd, MMMM DD');
  var currentCard = document.createElement('div')
  currentCard.classList.add('current-card', 'p-3' ,'border', 'rounded' ,'border-dark');
  var currentWeatherCardTitle = document.createElement('h2');
  currentWeatherCardTitle.innerHTML= "<b>Current Weather In: " + cityName + dayjs().format(' dddd, DD-MM-YYYY') + '</b>';
  var currentIcon = document.createElement('p');
  currentIcon.innerHTML= '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon + '@2x.png">';
  var currentTemp= document.createElement('p');
  currentTemp.innerHTML='<b>Current Temperature: </b>' + Math.round(data.main.temp *10)/10 + '°C';
  var feelsLike = document.createElement('p');
  feelsLike.innerHTML='<b>Feels Like: </b>' + Math.round(data.main.feels_like *10)/10 + '°C';
  var minTemp = document.createElement('p');
  minTemp.innerHTML='<b>Minimum Temperature: </b>' + Math.round(data.main.temp_min *10)/10 + '°C';
  var maxTemp = document.createElement('p');
  maxTemp.innerHTML='<b>Minimum Temperature: </b>' + Math.round(data.main.temp_max *10)/10 + '°C';
  var currentWind = document.createElement('p');
  currentWind.innerHTML ='<b>Wind Speed: </b>' + data.wind.speed + ' KMs PerHour';
  var currentHumidity = document.createElement('p');
  currentHumidity.innerHTML= '<b>Humidity: </b>' + data.main.humidity + '%';
  currentCard.append(currentWeatherCardTitle, currentIcon, currentTemp, feelsLike, minTemp, maxTemp, currentWind, currentHumidity);
  currentEl.append(currentCard)
})

//-----------------3rd with the lat and lon from the first API call, run this into the "5 Day Forescast":
await fetch("https://api.openweathermap.org/data/2.5/forecast?lat=" + latEl + "&lon=" + lonEl + "&units=metric&appid=" + apiKey)
  .then(function (response) {
    // In order to use the data, it must first be parsed. Use .json() when the
    // API response format is JSON.
    return response.json();
})
.then(function (data) {
  console.table(JSON.stringify(data));
  console.log(data);
    // function to make five day forecast card
var timeEl = data.list.filter((e) => e.dt_txt.includes('15:00:00'))
var fiveDayEl = document.getElementById('forecast')
if(fiveDayEl.innerHTML){
    fiveDayEl.innerHTML='';   
}
for ( var i = 0; i < timeEl.length; i++) {
    console.log(timeEl[i].main);
    var fiveDayCard = document.createElement('div')
    fiveDayCard.classList.add('five-day-card','m-3', 'p-3' ,'border', 'rounded' ,'border-dark');
    var fiveDayDate = document.createElement('h3')
    fiveDayDate.innerHTML= timeEl[i].dt_txt.slice(0, 10);
    console.log(timeEl[i])
    var fiveDayIcon = document.createElement('p');
    fiveDayIcon.innerHTML= '<img src="http://openweathermap.org/img/wn/' + timeEl[i].weather[0].icon + '@2x.png">';
    var fiveDayTemp = document.createElement('p');
    fiveDayTemp.innerHTML ="<b>Temperature: </b>" + Math.round(timeEl[i].main.temp *10)/10 + '°C';
    var fiveDayTempMin = document.createElement('p');
    fiveDayTempMin.innerHTML ="<b>Minimum Temperature: </b>" + Math.round(timeEl[i].main.temp_min *10)/10 + '°C';
    var fiveDayTempMax = document.createElement('p');
    fiveDayTempMax.innerHTML ="<b>Maximum Temperature: </b>" + Math.round(timeEl[i].main.temp_max *10)/10 + '°C';
    var fiveDayWind = document.createElement('p');
    fiveDayWind.innerHTML ="<b>Wind Speed: </b>" + timeEl[i].wind.speed + ' KMs PerHour';
    var fiveDayHumidity = document.createElement('p');
    fiveDayHumidity.innerHTML ="<b>Humidity: </b>" + timeEl[i].main.humidity + '%';
    fiveDayCard.append(fiveDayDate,fiveDayIcon, fiveDayTemp, fiveDayTempMin, fiveDayTempMax, fiveDayWind, fiveDayHumidity);
    fiveDayEl.append(fiveDayCard);
}
});
}

//-----------------------------Save Selected Radio Station to Local Storage
function SaveToLocalStorage(RadioStationName, RadioUrl) {
  if (RadioUrl == "") {
    var error = document.getElementById("Popup_DropDown")
    error.textContent = "Please select a Radio Station"
    error.classList.toggle("show");
  }
  else {
    var RadioStation = RadioStationName;
    var RadioStationLink = RadioUrl;
    let save = [];
    save = JSON.parse(localStorage.getItem('PlayList')) || [];
    console.table(save);
    save.push([RadioStation, RadioStationLink]);
    localStorage.setItem("PlayList", JSON.stringify(save));
    AddPlayList();
  }
}
//-----------------------------Add Local Storage data to Left Menu Play List (favourites)
function AddPlayList() {
  //localStorage.removeItem("PlayList");
  var ul = document.querySelector('#MenuList');
  var listLength = ul.children.length;
  if (listLength != 0) {
    for (i = 0; i < listLength; i++) {
      ul.removeChild(ul.children[0]);
    }
  }
  let LocPlaylist = [];
  LocPlaylist = JSON.parse(localStorage.getItem('PlayList'));
  if (LocPlaylist != null) {
    for (var i = 0; i < LocPlaylist.length; i++) {
      var opt = LocPlaylist[i][0];
      var val = LocPlaylist[i][1];
      var el = document.createElement('li');
      el.textContent = opt;
      el.val = val;
      leftMenu.appendChild(el);
    }
  }
}

