// WeatherDashboard API Key:

// Key: 3600fb05ffbd82c86b36fdbf2ee15d74
// Name: BenArm-WealtherDB	

const APIKey = "3600fb05ffbd82c86b36fdbf2ee15d74";

const searchURL = document.getElementById("#cityWeather");
const searchForm = document.querySelector('#form');
const cityName = document.getElementById("#searched-city");

// Direct geocoding - Coordinates by location name URL:
// http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

// 5 day forescast API URL:
// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//-----------------Event Listener: When user inputs City they wish to search the weather for:
// searchForm.addEventListener('submit', submitSearch);
// console.log(searchedCity.value);

//-----------------1st Find GeolocationCoordinates by city - this is entered by user
// var latLon = "http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit=5&appid=" + APIKey;
var QueryLatLon = "http://api.openweathermap.org/geo/1.0/direct?q=adelaide&limit=5&appid=" + APIKey;
// console.table(latLon);

fetch(QueryLatLon)
.then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.table(JSON.stringify(data));
    
    // let lat = [];
    // let lon = [];

    // for (var i = 0; i < data.length; i++) {
    //   LatLong.push([data[i].lat, data[i].lon]);
    // }

    // var selected = cityName;

    // for (var i = 0; i < LatLong.length; i++) {
    //   var opt = LatLong[i][0];
    //   var val = LatLong[i][1];
    //   var el = document.createElement("searched-city");
    //   el.textContent = opt;
    //   el.value = val;
    //   selected.appendChild(el);
    // }
    return;
  });


//-----------------2nd with the lat and lon from the first API call, run this into the 5 day forescast
function getWeatherElements (){

  var requestURL = "api.openweathermap.org/data/2.5/forecast?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

  fetch(requestURL)
    .then(function (response) {
      // In order to use the data, it must first be parsed. Use .json() when the
      // API response format is JSON.
      return response.json();
    })
    .then(function (data) {
      // console.table(data);

      let activities = [];

      for (var i = 0; i < data.length; i++) {
        activities.push([data[i].name, data[i].url]);
      }

      var select = CmbRadioStation;

      for (var i = 0; i < activities.length; i++) {
        var opt = activities[i][0];
        var val = activities[i][1];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = val;
        select.appendChild(el);
      }

      // console.table(activities);
    });


  console.log(requestURL);
}


// console.log(requestURL);

// fetch(requestURL);