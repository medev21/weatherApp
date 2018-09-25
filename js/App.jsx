import React, { Component } from "react";
import Axios from "axios";
import Autosuggest from 'react-autosuggest';

let cities;

fetch("../public/cities.json").then((res) => {
	return res.json();
}).then((json) => {
	let values = json;
	cities = values.cities;	
});

const getSuggestions = value => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0 ? [] : cities.filter(city =>
		
		city.name.toLowerCase().slice(0, inputLength) === inputValue
	);
};

// When suggestion is clicked, Autosuggest needs to populate the input
// based on the clicked suggestion. Teach Autosuggest how to calculate the
// input value for every given suggestion.
const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <span>{suggestion.name}</span>
);

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			value: '',
			suggestedCities: [],
			cityWeatherData: []
		}
	};


	componentDidMount(){
		// this.fetchCityWeather();
	}

	onChange = (event, { newValue }) => {
	    this.setState({
	      value: newValue
	    });
	    console.log(this.state.value);
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		this.setState({
	      suggestedCities: getSuggestions(value)
	    });
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
	    this.setState({
	      suggestedCities: []
		});
	};

	renderSuggestionsContainer = ({ containerProps, children, query }) => {
		return (
	    	<div {...containerProps}>
	    		{children}
	    		<h5>I like showing up.</h5>
	    	</div>
	    );
	};

	fetchCityWeather = (cityId) => {
		Axios.get('http://api.openweathermap.org/data/2.5/forecast',{
			params: {
				id: cityId,
				APPID: process.env.WEATHER_API
			}
		})
		.then((response) => {
			console.log(response);
		})
		.catch((error) => {
			console.log(error);
		})
	};

	onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
		console.log(suggestion);
		console.log(method);
		let cityId = suggestion.id;
		fetchCityWeather(cityId);
	}

	render() {
		const { value, suggestedCities } = this.state;

	    // Autosuggest InputProps
	    const inputProps = {
	      placeholder: 'Type your city',
	      value,
	      onChange: this.onChange
	    };



	    // Finally, render it!
	    return (
		    <Autosuggest
		    	suggestions={suggestedCities}
		        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
		        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
		        getSuggestionValue={getSuggestionValue}
		        renderSuggestion={renderSuggestion}
		        inputProps={inputProps} 
		        shouldRenderSuggestions = {(v) => v.trim().length > 0}
		        renderSuggestionsContainer={this.renderSuggestionsContainer}
		        onSuggestionSelected={this.onSuggestionSelected}
		    />
	    );
	}
}

export default App;

// const key = process.env.WEATHER_API;
// const { value, suggestedCities } = this.state;