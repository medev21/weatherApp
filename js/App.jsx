import React, { Component } from "react";
import CityWeather from './components/CityWeather';
import SearchWeather from './components/SearchWeather';




class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			value: '',
			suggestedCities: [],
			cityWeatherData: [],
			currentWeather: [],
		}
	};

	handleCityWeatherData = (city) => {
		this.setState({
			cityWeatherData: city
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
	}

	render() {

	    // Finally, render it!
	    return (
	    	<div>
	    		<SearchWeather suggestData={{value: this.state.value, suggestedCities: this.state.suggestedCities}} onSelectCity={this.handleCityWeatherData} onChange={this.handleOnChange} onSuggestedCities={this.handleSuggestedCities}/>
			    <CityWeather weatherData={this.state.cityWeatherData}/>
		    </div>
	    );
	}
}

export default App;

// const key = process.env.WEATHER_API;
// const { value, suggestedCities } = this.state;