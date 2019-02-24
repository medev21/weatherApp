//this is the cityweathercomponent
import React, { Component } from "react";
import WeatherIcon from "./weatherIcons.jsx";
import apis from '../utils/apis.jsx';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';

library.add(faSearchLocation)

class CityWeather extends Component {

	constructor(props){
		super(props);
		this.state = {
			// fahrenheit: true,
			// cityID: this.props.city,
			// weather: this.props.weatherData,
			// cityName: this.props.weatherData.name,
			// condition: this.props.weatherData.weather[0].description,
			// iconCode: this.props.weatherData.weather[0].icon,
			// current: 0,
			// min: 0,
			// max: 0,
			// imageURL: ''

			fahrenheit: true,
			cityID: 519188,
			weather: {
				coord: {
				lon: 139.01,
				lat: 35.02
				},
				weather: [
				{
				id: 800,
				main: "Clear",
				description: "clear sky",
				icon: "01n"
				}
				],
				base: "stations",
				main: {
				temp: 285.514,
				pressure: 1013.75,
				humidity: 100,
				temp_min: 285.514,
				temp_max: 285.514,
				sea_level: 1023.22,
				grnd_level: 1013.75
				},
				wind: {
				speed: 5.52,
				deg: 311
				},
				clouds: {
				all: 0
				},
				dt: 1485792967,
				sys: {
				message: 0.0025,
				country: "JP",
				sunrise: 1485726240,
				sunset: 1485763863
				},
				id: 1907296,
				name: "Tawarano",
				cod: 200
				},
			cityName: "Novinki",
			condition: "broken clouds",
			iconCode: "04n",
			current: 0,
			min: 0,
			max: 0,
			imageURL: ''
		}
	};

	getInitialTemp = () => {
		let currentWeather = this.state.weather;
		console.log(currentWeather);
		let current = currentWeather.main.temp;
		let min = currentWeather.main.temp_min;
		let max = currentWeather.main.temp_max;

		return {current, min, max};
	};

	getCelsius = () => {
		let tempObj = this.getInitialTemp();
		let result = [];
		let bool = false;

		for(let value in tempObj){
			if(tempObj.hasOwnProperty(value)){
				let num = tempObj[value] - 273.15;
				result.push(Math.round(num));
			}
		}

		this.handleTempChange(result, bool);
	};	

	getFahrenheit = () => {
		let tempObj = this.getInitialTemp();
		let result = [];
		let bool = true;

		for(let value in tempObj){
			if(tempObj.hasOwnProperty(value)){
				let num = (tempObj[value] - 273.15) * 9/5 + 32;
				result.push(Math.round(num));
			}
		}

		this.handleTempChange(result, bool);
	};

	getImageCondition = () => {
		let hours = new Date().getHours(); //get current hour
		let condition = this.state.condition;
		condition = condition.replace(/\s+/g, '-').toLowerCase();
		let query = hours > 6 && hours < 17 ? condition + '-morning' : condition + '-night';
		console.log(query);

		apis.getRandomImage(query).then((res) => {
			let data = res.data;
			let url = data.urls.full;
			this.setState({imageURL: url});
		}).catch((error) => {
			console.log("getImageCondition", error);
		});

	};

	handleSearchMode = () => {
		this.props.searchMode();
	};

	componentDidMount = () => {
		this.getFahrenheit();
		this.getImageCondition();
	};

	convertCelsius = () => { this.getCelsius(); };

	convertFahrenheit = () => { this.getFahrenheit(); };

	handleTempChange = (result, bool) => {
		this.setState({
			current: result[0],
			min: result[1],
			max: result[2],
			fahrenheit: bool
		});
	};

	render(){

		const backgroundImage = {
	    	backgroundImage: `url(${this.state.imageURL})`,
	    	backgroundSize: "cover",
	    	backgroundPosition: "center",
	    	backgroundRepeat: "no-repeat"
	    }

		return(
			<div className="currentWeatherContainer" style={backgroundImage}>

				<div className="searchSection">
					<FontAwesomeIcon 
						icon={['fa', 'search-location']} 
						size="4x" 
						onClick={this.handleSearchMode}
					/>
				</div>

				<div className="cityNameSection"><h2>{this.state.cityName}</h2></div>

				<div className="conditionSection">
					<div className="weatherStatus">
						<div className="weatherIcon">
							<WeatherIcon code={this.state.iconCode}/>
						</div>
						<div className="weatherCondition">
							<p>{this.state.condition}</p>
						</div>
					</div>
					<div className="currentTempBox">

						<div className="currentTemp">
							<div className="tempNum">
								{this.state.current}
							</div>
							<div className="degreeImg">
								<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			 viewBox="12.5 6.5 5 5" style={{enableBackground:"new 0 0 30 30"}} height="50" xmlSpace="preserve">
		<path style={{fill: "#fff"}} d="M13.19,9.21c0-0.5,0.18-0.93,0.53-1.28c0.36-0.36,0.78-0.53,1.28-0.53c0.49,0,0.92,0.18,1.27,0.53
			c0.35,0.36,0.53,0.78,0.53,1.28s-0.18,0.93-0.53,1.29c-0.35,0.36-0.78,0.54-1.27,0.54c-0.49,0-0.92-0.18-1.28-0.54
			S13.19,9.71,13.19,9.21z M14.07,9.21c0,0.26,0.09,0.48,0.27,0.67c0.19,0.19,0.41,0.28,0.67,0.28c0.26,0,0.48-0.09,0.67-0.28
			s0.28-0.41,0.28-0.67c0-0.26-0.09-0.48-0.28-0.66c-0.19-0.18-0.41-0.28-0.67-0.28c-0.26,0-0.48,0.09-0.67,0.27
			C14.16,8.72,14.07,8.94,14.07,9.21z"/>
		</svg>
							</div>

						</div>
						<div className="tempConversionBox">
							<div className={this.state.fahrenheit ? 'highlightBtn tempButton' : 'tempButton'} onClick={this.convertFahrenheit}>
								F
							</div>
							<div className={this.state.fahrenheit ? 'tempButton' : 'highlightBtn tempButton'} onClick={this.convertCelsius}>
								C
							</div>
						</div>
					</div>
					<div className="highLowTempBox">
						<div className="lowTemp">
							<p>Low <span>{this.state.min}</span></p>
						</div>
						<div className="highTemp">
							<p>High <span>{this.state.max}</span></p>
						</div>
					</div>
				</div>
			</div>

			
		);
	}

}

export default CityWeather;