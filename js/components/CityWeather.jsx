//this is the cityweathercomponent
import React, { Component } from "react";
import apis from "../utils/apis";

// let weatherData;

// apis.getWeather().then((res) => {
// 	console.log("CityWeather success", res);	
// }).catch((error) => {
// 	console.log("CityWeather Error", error)
// });

class CityWeather extends Component {

	// getFahrenheit = () => {

	// };

	// componentWillMount = () => {
	// 	console.log("mounted after click");
	// };

	// getWeather = (cityID) => {
	// 	apis.getWeather().then((res) => {
	// 		console.log("CityWeather success", res.data);
	// 		res;	
	// 	}).catch((error) => {
	// 		console.log("CityWeather Error", error)
	// 	});
	// }

	render(){

		const cityID = this.props.city;
		const weatherData = this.props.weatherData;

		// const weatherData = apis.getWeather(cityID).then((res) => {
		// 	return res
		// }).catch((error) => {
		// 	console.log(error);
		// });

		if(cityID != 0){

			console.log('before api call', weatherData);

			apis.getWeather(cityID).then((res) => {
				this.props.onWeatherDataChange(res.data)
			}).catch((error) => {
				console.log(error);
			});

		}
		// else{
		// 	weatherData = []
		// }



		// const weatherData = cityID === 0 ? [] : apis.getWeather(cityID).then((res) => { res });

		console.log("cityWeather render", weatherData);



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