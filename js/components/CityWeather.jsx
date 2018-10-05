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

		console.log("cityWeather render", weatherData);

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
			<h2>hello this is the CityWeatherComponent</h2>
		);
	}

}

export default CityWeather;