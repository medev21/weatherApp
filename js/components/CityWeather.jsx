//this is the cityweathercomponent
import React, { Component } from "react";

class CityWeather extends Component {

	constructor(props){
		super(props);
		this.state = {
			fahrenheit: true,
			cityID: this.props.city,
			weather: this.props.weatherData,
			condition: this.props.weatherData.list[0].weather[0].main,
			current: 0,
			min: 0,
			max: 0
		}
	};

	getCurrentTemp = () => {
		let currentWeather = this.state.weather.list[0];
		let current = currentWeather.main.temp;
		let min = currentWeather.main.temp_min;
		let max = currentWeather.main.temp_max;

		return {current, min, max};
	};

	getCelsius = () => {
		let {current, min, max} = this.getCurrentTemp();
		let arr = [current, min, max];
		let result = [];

		for (let value of arr) {
			let num = value - 273.15;
			result.push(Math.round(num));
		}

		this.setState({
			current: result[0],
			min: result[1],
			max: result[2]
		});
	};	

	getFahrenheit = () => {
		let {current, min, max} = this.getCurrentTemp();
		let arr = [current, min, max];
		let result = [];

		for (let value of arr) {
			let num = (value - 273.15) * 9/5 + 32;
			result.push(Math.round(num));
		}

		this.setState({
			current: result[0],
			min: result[1],
			max: result[2]
		});
	};

	componentDidMount = () => {
		this.getFahrenheit();
	};


	renderTemp = () => {

		let element = 
			<div>
				<h2>condition</h2>
				<p>{this.state.condition}</p>

				<br/>
				<h2>current temp</h2>
				<p>{this.state.current}</p>

				<br/>
				<h2>max temp</h2>
				<p>{this.state.max}</p>
				<br/>
				<h2>min temp</h2>
				<p>{this.state.min}</p>
			</div>;
		

		return element;
	};

	convertCelsius = () => { this.getCelsius(); };

	convertFahrenheit = () => { this.getFahrenheit(); };

	render(){

		return(
			<div>
				{this.renderTemp()}
				<button style={{ background: "green"}} onClick={this.convertCelsius}>convert celsius</button>
				<button style={{ background: "blue"}} onClick={this.convertFahrenheit}>convert fahrenheit</button>
			</div>

			
		);
	}

}

export default CityWeather;