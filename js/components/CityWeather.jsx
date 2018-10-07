//this is the cityweathercomponent
import React, { Component } from "react";
import apis from "../utils/apis";

class CityWeather extends Component {

	// getFahrenheit = () => {

	// };

	// componentWillMount = () => {
	// 	console.log("mounted after click");
	// };

	render(){

		let cityID = this.props.city;
		let weatherData = this.props.weatherData;

		let currentWeather = weatherData.list[0];
		let temp = currentWeather.main.temp;
		let maxTemp = currentWeather.main.temp_max;
		let minTemp = currentWeather.main.temp_min;
		let condition = currentWeather.weather[0].main;

		console.log("cityWeather render", currentWeather);
		console.log("cityWeather render", temp);
		console.log("cityWeather render", maxTemp);
		console.log("cityWeather render", minTemp);
		console.log("cityWeather render", condition);


		// if(cityWeatherData.length != 0){
		// 	let city = cityWeatherData.city;
		// 	let today = cityWeatherData.list[0];

		// 	let temp = today.main.temp;
		// 	let tempMax = today.main.temp_max;
		// 	let tempMin = today.main.temp_min;
		// 	let weather = today.weather[0].main;
		// 	console.log(today);
		// 	console.log(weather);
		// }
		


		return(
			<div>
				<h2>condition</h2>
				<p>{condition}</p>

				<br/>
				<h2>current temp</h2>
				<p>{temp}</p>

				<br/>
				<h2>max temp</h2>
				<p>{maxTemp}</p>
				<br/>
				<h2>min temp</h2>
				<p>{minTemp}</p>
			</div>

			
		);
	}

}

export default CityWeather;


			// 	<br>
			// 	<h2>current temp</h2>
			// 	<p>{temp}</p>
			// </div>
			// 	<br>
			// 	<h2>max temp</h2>
			// 	<p>{maxTemp}</p>
			// 	<br>
			// 	<h2>min temp</h2>
			// 	<p>{minTemp}</p>