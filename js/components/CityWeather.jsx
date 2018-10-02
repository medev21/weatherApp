//this is the cityweathercomponent
import React, { Component } from "react";
import apis from "../utils/apis";

let weatherData;

apis.getWeather().then((res) => {
	console.log("CityWeather success", res);	
}).catch((error) => {
	console.log("CityWeather Error", error)
});

class CityWeather extends Component {

	// getFahrenheit = () => {

	// };

	render(){

		const city = this.props.city;

		console.log("cityWeather render", city);

		// let cityWeatherData = this.props.weatherData;

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