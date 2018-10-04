import React, { Component } from "react";
import CityWeather from './components/CityWeather';
import SearchWeather from './components/SearchWeather';




class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			value: '',
			suggestedCities: [],
			weatherData: [],
			currentWeather: [],
			cityID: 0,
			isWeatherRendering: false
		}
	};

	handleCity = (cityID, boolean) => {
		this.setState({
			cityID: cityID,
			isWeatherRendering: boolean
		});
	};

	handleSuggestedCities = (cities) => {
		this.setState({
	      suggestedCities: cities
	    });
	};

	handleOnChange = (newValue) => {
		this.setState({
	    	value: newValue
	    });
	};

	handleWeatherDataChange = (weatherData) => {
		this.setState({
			weatherData: weatherData
		});
	};


	render() {

		let isWeatherRendering = this.state.isWeatherRendering;
		let weatherComponent;

		if(isWeatherRendering){
			weatherComponent = <CityWeather city={this.state.cityID} weatherData={this.state.weatherData} onWeatherDataChange={this.handleWeatherDataChange}/>
		}

	    // Finally, render it!
	    return (
	    	<div>
	    		<SearchWeather suggestData={{value: this.state.value, suggestedCities: this.state.suggestedCities}} onSelectCity={this.handleCity} onChange={this.handleOnChange} onSuggestedCities={this.handleSuggestedCities}/>
			    {weatherComponent}
		    </div>
	    );
	}
}

export default App;

// const key = process.env.WEATHER_API;
// const { value, suggestedCities } = this.state;