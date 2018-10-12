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

	getInitialTemp = () => {
		let currentWeather = this.state.weather.list[0];
		let current = currentWeather.main.temp;
		let min = currentWeather.main.temp_min;
		let max = currentWeather.main.temp_max;

		return {current, min, max};
	};

	getCelsius = () => {
		let tempObj = this.getInitialTemp();
		let result = [];

		for(let value in tempObj){
			if(tempObj.hasOwnProperty(value)){
				let num = tempObj[value] - 273.15;
				result.push(Math.round(num));
			}
		}

		this.handleTempChange(result);
		
	};	

	getFahrenheit = () => {
		let tempObj = this.getInitialTemp();
		let result = [];

		for(let value in tempObj){
			if(tempObj.hasOwnProperty(value)){
				let num = (tempObj[value] - 273.15) * 9/5 + 32;
				result.push(Math.round(num));
			}
		}

		this.handleTempChange(result);
	};

	componentDidMount = () => {
		this.getFahrenheit();
	};

	convertCelsius = () => { this.getCelsius(); };

	convertFahrenheit = () => { this.getFahrenheit(); };

	handleTempChange = (result) => {
		this.setState({
			current: result[0],
			min: result[1],
			max: result[2]
		});
	};

	renderTemp = () => {

		let element = 
			<div>
				<h2>condition</h2>		

				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 30 30" style={{enableBackground:"new 0 0 30 30"}} height="40" xmlSpace="preserve">
<path style={{fill: "#fff"}} d="M13.19,9.21c0-0.5,0.18-0.93,0.53-1.28c0.36-0.36,0.78-0.53,1.28-0.53c0.49,0,0.92,0.18,1.27,0.53
	c0.35,0.36,0.53,0.78,0.53,1.28s-0.18,0.93-0.53,1.29c-0.35,0.36-0.78,0.54-1.27,0.54c-0.49,0-0.92-0.18-1.28-0.54
	S13.19,9.71,13.19,9.21z M14.07,9.21c0,0.26,0.09,0.48,0.27,0.67c0.19,0.19,0.41,0.28,0.67,0.28c0.26,0,0.48-0.09,0.67-0.28
	s0.28-0.41,0.28-0.67c0-0.26-0.09-0.48-0.28-0.66c-0.19-0.18-0.41-0.28-0.67-0.28c-0.26,0-0.48,0.09-0.67,0.27
	C14.16,8.72,14.07,8.94,14.07,9.21z"/>
</svg>

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