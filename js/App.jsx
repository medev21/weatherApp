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

	console.log(cities[0].name);

	return inputLength === 0 ? [] : cities.filter(city =>
		
		city.name.toLowerCase().slice(0, inputLength) === inputValue
		// city.name.toLowerCase() === inputValue

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
			suggestedCities: []
		}
	};


	// componentDidMount(){
	// 	// this.fetchCities();
	// }

	onChange = (event, { newValue }) => {
	    this.setState({
	      value: newValue
	    });
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

	shouldRenderSuggestions = () => {

	}

	renderSuggestionsContainer = ({ containerProps, children, query }) => {
		return (
	    	<div {...containerProps}>
	    		{children}
	    		<h5>I like showing up.</h5>
	    	</div>
	    );
	}


	render() {
		const { value, suggestedCities } = this.state;

	    // Autosuggest InputProps
	    const inputProps = {
	      placeholder: 'Type a programming language',
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
		    />
	    );
	}
}

export default App;

// const key = process.env.WEATHER_API;
// const { value, suggestedCities } = this.state;