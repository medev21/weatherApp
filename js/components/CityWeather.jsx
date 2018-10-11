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
				<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="40"
	 viewBox="0 0 30 30" style={{enableBackground:"new 0 0 30 30"}} xmlSpace="preserve">
<path style={{fill: "#fff"}} d="M4.61,16.88c0-1.15,0.36-2.17,1.08-3.07c0.72-0.9,1.63-1.48,2.74-1.73c0.31-1.37,1.02-2.49,2.11-3.37s2.35-1.32,3.76-1.32
	c1.38,0,2.61,0.43,3.69,1.28s1.78,1.95,2.1,3.29h0.33c0.9,0,1.73,0.22,2.49,0.65s1.37,1.03,1.81,1.79c0.44,0.76,0.67,1.58,0.67,2.48
	c0,0.88-0.21,1.7-0.63,2.45s-1,1.35-1.73,1.8c-0.73,0.45-1.54,0.69-2.41,0.72H9.41c-1.34-0.06-2.47-0.57-3.4-1.53
	C5.08,19.37,4.61,18.22,4.61,16.88z M6.32,16.88c0,0.87,0.3,1.62,0.9,2.26s1.33,0.98,2.19,1.03h11.19c0.86-0.04,1.59-0.39,2.19-1.03
	c0.61-0.64,0.91-1.4,0.91-2.26c0-0.88-0.33-1.63-0.98-2.27c-0.65-0.64-1.42-0.96-2.32-0.96H18.8c-0.11,0-0.17-0.06-0.17-0.18
	l-0.07-0.57c-0.11-1.08-0.58-1.99-1.4-2.72c-0.82-0.73-1.77-1.1-2.86-1.1c-1.09,0-2.05,0.37-2.85,1.1
	c-0.81,0.73-1.27,1.64-1.37,2.72l-0.08,0.57c0,0.12-0.07,0.18-0.2,0.18H9.27c-0.84,0.1-1.54,0.46-2.1,1.07S6.32,16.05,6.32,16.88z"
	/>
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