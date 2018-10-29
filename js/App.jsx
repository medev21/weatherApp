import React, { Component } from "react";
import CityWeather from './components/CityWeather';
import SearchWeather from './components/SearchWeather';
import SearchWeatherMaps from './components/SearchWeatherMaps'


class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			value: '',
			suggestedCities: [],
			weatherData: [],
			currentWeather: [],
			cityID: 0,
			address: '',
			latitude: null,
			longitude: null,
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

	//Maps Javascritps/ react-places-autocomplete

	handleOnChangeMaps = (address) => {
		this.setState({
			address: address
		});
	};

	handleSelectedCity = (lat, long, bool, data) => {
		this.setState({
			isWeatherRendering: bool,
			latitude: lat,
			longitude: long,
			weatherData: data
		});
	}

	render() {

		let isWeatherRendering = this.state.isWeatherRendering;
		let weatherComponent;
		let searchWeatherComponent;

		if(isWeatherRendering){
			weatherComponent = <CityWeather city={this.state.cityID} weatherData={this.state.weatherData} onWeatherDataChange={this.handleWeatherDataChange}/>
		}else if(!isWeatherRendering){
			{/*searchWeatherComponent = <SearchWeather suggestData={{value: this.state.value, suggestedCities: this.state.suggestedCities, isWeatherRendering: this.state.isWeatherRendering}} 
	    		onSelectCity={this.handleCity} 
	    		onChange={this.handleOnChange} 
	    		onSuggestedCities={this.handleSuggestedCities}  
	    		onClearSuggestions={this.handleClearSuggetions}
	    	/>*/}

	    	searchWeatherComponent = <SearchWeatherMaps suggestData={{address: this.state.address, isWeatherRendering: this.state.isWeatherRendering}} 
	    		onChange={this.handleOnChangeMaps} 
	    		onSelect={this.handleSelectedCity}
	    	/>
		}

	    // Finally, render it!
	    return (
	    	<div className="mainContainer">
	    		{searchWeatherComponent}
			    {weatherComponent}
		    </div>
	    );
	}
}

export default App;