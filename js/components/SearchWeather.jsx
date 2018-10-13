import React, { Component } from "react";
import Axios from "axios";
import Autosuggest from 'react-autosuggest';
import apis from '../utils/apis';
import Background from '../../images/introImageC.jpg'

let suggestions;

apis.getCities().then((result) => {

	suggestions = result.data.cities;

}).catch((error) => {
	console.log("SearchWeather Error", error)
	suggestions = [];
});



const getSuggestions = (value) => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0 ? [] : suggestions.filter(city =>
	
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

class SearchWeather extends Component {

	onChange = (event, { newValue }) => {
	    this.props.onChange(newValue);
	};

	// Autosuggest will call this function every time you need to update suggestions.
	// You already implemented this logic above, so just use it.
	onSuggestionsFetchRequested = ({ value }) => {
		// this.setState({
	 //      suggestedCities: getSuggestions(value)
	 //    });

	    let cities = getSuggestions(value);
	    this.props.onSuggestedCities(cities);
	};

	// Autosuggest will call this function every time you need to clear suggestions.
	onSuggestionsClearRequested = () => {
	 //    this.setState({
	 //      suggestedCities: []
		// });
		this.props.onClearSuggestions();
	};

	renderSuggestionsContainer = ({ containerProps, children, query }) => {
		return (
	    	<div {...containerProps}>
	    		{children}
	    		<h5>Select your city</h5>
	    	</div>
	    );
	};

	fetchCityWeather = (cityId) => {
		
		apis.getWeather(cityId).then((res) => {
			let data = res.data;
			let boolean = !this.props.suggestData.isWeatherRendering;
			console.log(boolean);
			this.props.onSelectCity(cityId, boolean, data); //pass data to parent
		}).catch((error) => {
			console.log(error);
			let data = [];
		});
	};

	onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {

		if(method == 'click' || method == "enter"){
			let cityId = suggestion.id;
			this.fetchCityWeather(cityId);
		}
	};

	render(){
		const value = this.props.suggestData.value;
		const suggestedCities = this.props.suggestData.suggestedCities;

	    // Autosuggest InputProps
	    const inputProps = {
	      placeholder: 'Type your city',
	      value,
	      onChange: this.onChange
	    };

	    const introStyle = {
	    	backgroundImage: `url(${Background})`,
	    	backgroundSize: "cover",
	    	backgroundPosition: "center",
	    	backgroundRepeat: "no-repeat"
	    }

		return(
			<div className="searchContainer" style={introStyle}>
				<div className="headerSection">
					<h2>Weather Scan</h2>
				</div>
				<div className="searchSection">
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
			    </div>
			</div>
			
		);
	}
}

export default SearchWeather;