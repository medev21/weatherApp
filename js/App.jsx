import React, { Component } from "react";
import CityWeather from './components/CityWeather';
import SearchWeather from './components/SearchWeather';




class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			value: '',
			suggestedCities: [],
			// cityWeatherData: [],
			currentWeather: [],
			cityID: 0,
		}
	};

	handleCity = (cityID) => {
		console.log(cityID);
		this.setState({
			cityID: cityID
		});

		console.log("app.jsx handlecity", this.state.cityID);
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
	    		<SearchWeather suggestData={{value: this.state.value, suggestedCities: this.state.suggestedCities}} onSelectCity={this.handleCity} onChange={this.handleOnChange} onSuggestedCities={this.handleSuggestedCities}/>
			    <CityWeather city={this.state.cityID}/>
		    </div>
	    );
	}
}

export default App;

// const key = process.env.WEATHER_API;
// const { value, suggestedCities } = this.state;