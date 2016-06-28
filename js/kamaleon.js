/* Kamaleon Framework ver. 0.1b
    Developed by Daniel Vega, Mexico
*/

// Global vars.
var geo = navigator.geolocation, // Access to the geolocalization.
    base_url, // URL of Yahoo Services
    options ={}, // Options for the conection. None for now.
    grades; // Temperature.

geo.getCurrentPosition(function(position) {
    var lat = position.coords.latitude,
        lon = position.coords.longitude;

        base_url = "http://api.openweathermap.org/data/2.5/weather";
        var query = "lat=" + lat + "&lon=" + lon + "&units=metric&APPID=721fed692072cb97940bf8ad128baaec";


    $.getJSON(base_url+"?"+query, function(weather) {
        console.log(weather.main.temp)
    });

},

function(err){
  console.error("We couldn't obtain localization." + err.code)
},

options);

// This next function processes the geolocalization info in JSON and makes an AJAX
//  petition for the weather.
function processGeo(dat)
{
    var res = dat.query.results.Result,
        cid = res.city,
        sta = res.statecode,
        woeid = res.woeid;

  $('#city').html(cid);
  $('#state').html(sta);
  var query = 'SELECT * FROM weather.forecast WHERE woeid="'+woeid+'" AND u="c"';
  query = encodeURIComponent(query);

    $.ajax({
        url: base_url+"q="+query,
        dataType: 'jsonp',
        jsonpCallback: 'processWeather',
        data: { format:'json'}
    });
}

// This function processes the weather JSON sent from processGeo() function.
function processWeather(dat)
{
    var obgrados = dat.query.results.channel,
        grados = obgrados.item.condition.temp,
        centigrados = obgrados.units.temperature;

    grades = 50;
    $('#weather').html(grados+"° "+centigrados);
    fuzzy();
}

// Fuzzy rules and ranges for temperature.
function fuzzy()
{
  if(grades < 0) // Very Cold
    defuzzy(1);
  if(grades > 0 && grades < 20) // Cold
    defuzzy(2);
  if(grades > 20 && grades < 27) // Tempered
    defuzzy(3);
  if(grades > 27 && grades < 35) // Hot
    defuzzy(4);
  if(grades > 35) // Very Hot
    defuzzy(5);
}

// This function will do the actions. Defuzzy.
function defuzzy(action)
{
  if(action==1) // Switch to very hot.
    $('body').animate().css({'background':'#c0392b'});
  if(action==2) // Switch to hot.
    $('body').animate().css({'background':'#f39c12'});
  if(action==4) // Switch to cold.
    $('body').animate().css({'background':'#27ae60'});
  if(action==5) // Switch to very cold.
    $('body').animate().css({'background':'#2980b9'});
}
