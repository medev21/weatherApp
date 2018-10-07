//this is the cityweathercomponent
import React, { Component } from "react";

class CityWeather extends Component {

	getCelsius = (now, minimum, maximum) => {
		let arr = [now , minimum , maximum];
		let result = [];

		for (let value of arr) {
			let num = value - 273.15;
			result.push(Math.round(num));
		}

		let tempCels = result[0];
		let minCels = result[1];
		let maxCels = result[2];

		return {tempCels, minCels, maxCels}
	};	

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

	convertCelsius = () => {
		console.log("i'm converting...")
	}

	render(){

		let cityID = this.props.city;
		let weatherData = this.props.weatherData;
		let currentWeather = weatherData.list[0];
		let condition = currentWeather.weather[0].main;
		let kelvintemp = currentWeather.main.temp;
		let kelvinMin = currentWeather.main.temp_min;
		let kelvinMax = currentWeather.main.temp_max;


		let {temp, minTemp, maxTemp} = this.getFahrenheit(kelvintemp, kelvinMin, kelvinMax);
		let {tempCels, minCels, maxCels} = this.getCelsius(kelvintemp, kelvinMin, kelvinMax);

		// console.log(temp);
		console.log(temp, minTemp, maxTemp);
		console.log(tempCels, minCels, maxCels);

		//create a button

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
				<button onClick={this.convertCelsius}>convert</button>
			</div>

			
		);
	}

}

export default CityWeather;