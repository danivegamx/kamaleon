/* Kamaleon Framework ver. 0.1b
    Developed by Daniel Vega, Mexico
*/

// Global vars.
var geo = navigator.geolocation, // Access to the geolocalization.
    base_url, // URL of Yahoo Services
    options ={}; // Options for the conection. None for now.

geo.getCurrentPosition(function(position) {
    var lat = position.coords.latitude,
        lon = position.coords.longitude;

    $('#city').html(lat);
    $('#state').html(lon);

    base_url = "http://api.openweathermap.org/data/2.5/weather";
    var query = "lat=" + lat + "&lon=" + lon + "&units=metric&APPID=721fed692072cb97940bf8ad128baaec";

    $.getJSON(base_url+"?"+query, function(weather) {
        processWeather(weather)
    });

},

function(err){
  console.error("No location. Code: " + err.code)
},

options);

// This function processes the weather JSON sent from processGeo() function.
function processWeather(weather)
{
    //var fuzzySet = [weather.main.temp];
    var fuzzySet = [100];

    $('#weather').html(fuzzySet[0]+"° C");
    fuzzy(fuzzySet);
}

// Fuzzy rules and ranges for temperature.
function fuzzy(fuzzySet)
{
      if(fuzzySet[0] < 0) // Very Cold
        defuzzy(1);
      if(fuzzySet[0] > 0 && fuzzySet[0] < 20) // Cold
        defuzzy(2);
      if(fuzzySet[0] > 20 && fuzzySet[0] < 27) // Tempered
        defuzzy(3);
      if(fuzzySet[0] > 27 && fuzzySet[0] < 35) // Hot
        defuzzy(4);
      if(fuzzySet[0] > 35) // Very Hot
        defuzzy(5);
}

// This function will do the actions. Defuzzy.
function defuzzy(action)
{
  if(action == 1) // Switch to very hot.
    $('body').animate().css({'background':'#c0392b'});
  if(action == 2) // Switch to hot.
    $('body').animate().css({'background':'#f39c12'});
  if(action == 4) // Switch to cold.
    $('body').animate().css({'background':'#27ae60'});
  if(action == 5) // Switch to very cold.
    $('body').animate().css({'background':'#2980b9'});
}
