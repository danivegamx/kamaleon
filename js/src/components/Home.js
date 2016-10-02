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
		/*
		geo.getCurrentPosition(function(position) {
    		lat = position.coords.latitude;
        	lon = position.coords.longitude;

        	self.setState({ lat:lat, lon:lon });

		    query = "lat=53.9045&lon=27.5615&units=metric&APPID=721fed692072cb97940bf8ad128baaec";

		    $.getJSON(base_url+"?"+query, function(weather) {
		        self.setState({temp:weather.main.temp})
		        fuzzySet = [weather.main.temp];
		        Kamaleon.fuzzy(fuzzySet);
		    });
		});
		*/

		self.setState({ lat:53.9045, lon:27.5615 });
		self.setState({temp:18.54});
		fuzzySet = [this.state.temp];
		Kamaleon.fuzzy(fuzzySet);
	},

	/*
	*	TODO React-required;
	*	Method to render all the components.
	*	@return jsxViewController
	*/
	render() {
		return (
			<div>
				<div className="row">
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
					<div className="row">
						<div className="medium-4 columns">
							<div className="div2 lateral">
								<img src="images/sec.png" />
							</div>
						</div>
						<div className="medium-8 columns">
							<div className="div2">
								Kamaleon it's a Front-End library built in React.js that includes a fuzzy logic system for data comparison and DOM modification to improve user experience (UX) on WebApps.
								<br></br>
								<p>Improved for EPAM's Software Engineering Conference 2016 @ Minsk, Belarus.</p>
							</div>
							<div className="row">
								<div className="medium-6 columns">
									<div className="div2">
										SLIDES:<br></br>
										https://www.slid.es/danivegamx/sec2016
									</div>
								</div>
								<div className="medium-6 columns">
									<div className="div2">
										REPOSITORY:<br></br>
									https://www.github.com/danivegamx/kamaleon
									</div>
								</div>
							</div>
							<div className="div2">
								@ Minsk, Belarus.
							</div>
						</div>
					</div>
				</div>
				<footer>
				    EPAM SEC FALL 2016
				</footer>
			</div>
		);
	}
});

module.exports = App; // Export module to global usage.
