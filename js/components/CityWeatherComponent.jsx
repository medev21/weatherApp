//this is the cityweathercomponent
import React, { Component } from "react";

class CityWeather extends Component {

	render(){

		let cityWeatherData = this.props.weatherData;

		if(cityWeatherData.length != 0){
			let city = cityWeatherData.city;
			let today = cityWeatherData.list[0];
			console.log(today);
		}
		


		return(
			<h2>hello this is the CityWeatherComponent</h2>
		);
	}

}

export default CityWeather;