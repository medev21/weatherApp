//this is the cityweathercomponent
import React, { Component } from "react";

class CityWeather extends Component {

	// (280.89K − 273.15) × 9/5 + 32

	getFahrenheit = (now, minimum, maximum) => {

		let arr = [now , minimum , maximum];
		let result = [];

		for (let value of arr) {
			let num = (value - 273.15) * 9/5 + 32;
			result.push(Math.round(num));
		}
		let temp = result[0];
		let minTemp = result[1];
		let maxTemp = result[2];

		console.log(result);

		return {temp, minTemp, maxTemp};
	};

	render(){

		let cityID = this.props.city;
		let weatherData = this.props.weatherData;

		let currentWeather = weatherData.list[0];
		let condition = currentWeather.weather[0].main;


		let {temp, minTemp, maxTemp} = this.getFahrenheit(currentWeather.main.temp, currentWeather.main.temp_min, currentWeather.main.temp_max);

		// console.log(temp);
		console.log(temp, minTemp, maxTemp);

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