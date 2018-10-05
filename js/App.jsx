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

	handleCity = (cityID, boolean,data) => {
		this.setState({
			cityID: cityID,
			isWeatherRendering: boolean,
			weatherData: data
		});
	};

	handleSuggestedCities = (cities) => {
		this.setState({
	      suggestedCities: cities
	    });
	};

	handleClearSuggetions = () => {
		this.setState({
	      suggestedCities: []
	    });
	};

	handleOnChange = (newValue) => {
		this.setState({
	    	value: newValue
	    });
	};

	render() {

		let isWeatherRendering = this.state.isWeatherRendering;
		let weatherComponent;
		let searchWeatherComponent;

		if(isWeatherRendering){
			weatherComponent = <CityWeather city={this.state.cityID} weatherData={this.state.weatherData} onWeatherDataChange={this.handleWeatherDataChange}/>
		}else if(!isWeatherRendering){
			searchWeatherComponent = <SearchWeather suggestData={{value: this.state.value, suggestedCities: this.state.suggestedCities, isWeatherRendering: this.state.isWeatherRendering}} 
	    		onSelectCity={this.handleCity} 
	    		onChange={this.handleOnChange} 
	    		onSuggestedCities={this.handleSuggestedCities}  
	    		onClearSuggestions={this.handleClearSuggetions}
	    	/>
		}



	    // Finally, render it!
	    return (
	    	<div>
	    		{/*<SearchWeather suggestData={{value: this.state.value, suggestedCities: this.state.suggestedCities, isWeatherRendering: this.state.isWeatherRendering}} 
	    		onSelectCity={this.handleCity} 
	    		onChange={this.handleOnChange} 
	    		onSuggestedCities={this.handleSuggestedCities}  
	    		onClearSuggestions={this.handleClearSuggetions}
	    		/>*/}
	    		{searchWeatherComponent}
			    {weatherComponent}
		    </div>
	    );
	}
}

export default App;

// const key = process.env.WEATHER_API;
// const { value, suggestedCities } = this.state;