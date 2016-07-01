var React = require('react');

/* Main Component */
var App = React.createClass({

	
	getInitialState() {
		return {
			lat : "",
			lon : "",
			temp : ""
		};
	},

	componentDidMount() {
		var self = this,
			fuzzySet = [],
			geo = navigator.geolocation, // Access to the geolocalization.
    		base_url = "http://api.openweathermap.org/data/2.5/weather", // URL of Open Weather.
    		query, // Query for latitud & longitud.
    		lat, lon; // Coordinates.

		geo.getCurrentPosition(function(position) {
    		lat = position.coords.latitude;
        	lon = position.coords.longitude;

        	self.setState({ lat:lat, lon:lon });

		    query = "lat=" + lat + "&lon=" + lon + "&units=metric&APPID=721fed692072cb97940bf8ad128baaec";

		    /*$.getJSON(base_url+"?"+query, function(weather) {
		        self.setState({temp:weather.main.temp})
		        fuzzySet = [weather.main.temp];
		        Kamaleon.fuzzy(fuzzySet);
		    });*/

			self.setState({temp:90});
			fuzzySet = [90];
			Kamaleon.fuzzy(fuzzySet);
		});

	},

	/*
	*	TODO React-required;
	*	Method to render all the components.
	*	@return jsxViewController
	*/
	render() {
		return (
			<div>
				<div id="div3">
				    <span id="data_wrapper">
				      <span id="city">{this.state.lat}</span>,&nbsp;
				      <span id="state">{this.state.lon}</span>
				      <span id="weather">{this.state.temp}</span>
				    </span>
				    <img src="images/bg.png" />
				</div>
				<div id="div1">
					<h1 id="titlek">Kamaleon</h1>
				</div>
				<div id="div2">
				    Kamaleon es un framework de Front-End para mejorar la experiencia de usuario (UX) basado en Temperatura y hora del día; Desarrollado para WebApps con un sistema de Lógica Difusa (Fuzzy Logic) y React.js.
				    
				    <p>#FeelTheFuture</p>
				</div>
				<footer>
				    Campus Party 2016 #CPMX7
				</footer>
			</div>
		);
	}
});

module.exports = App; // Export module to global usage.