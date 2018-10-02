import React, { Component } from "react";
import Axios from "axios";
import Autosuggest from 'react-autosuggest';
import apis from '../utils/apis';

// let cities;

// fetch("../public/cities.json").then((res) => {
// 	return res.json();
// }).then((json) => {
// 	let values = json;
// 	cities = values.cities;	
// });

// const getCities = () => {
// 	Axios.get("./public/cities.json").then((res) => {
// 		return res;
// 	}).then((json) => {
// 		console.log(json.data.cities);
// 		return json.data.cities;
// 	}).catch((error) => {
// 		console.log(error);
// 	});
// };

let suggestions;

apis.getCities().then((result) => {

	suggestions = result.data.cities;
	console.log("api.getCities", cities);
	console.log(inputValue);

	// return inputLength === 0 ? [] : cities.filter(city =>
	
	// 	city.name.toLowerCase().slice(0, inputLength) === inputValue
	// );

}).catch((error) => {
	//error
});



const getSuggestions = (value) => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	// const cities = apis.getCities().then(result => result).catch(error => error);

	console.log("getSuggestions", suggestions);

	return inputLength === 0 ? [] : suggestions.filter(city =>
	
		city.name.toLowerCase().slice(0, inputLength) === inputValue
	);


	// let suggestions = apis.getCities().then((result) => {

	// 	let cities = result.data.cities;
	// 	console.log("api.getCities", cities);
	// 	console.log(inputValue);

	// 	return inputLength === 0 ? [] : cities.filter(city =>
		
	// 		city.name.toLowerCase().slice(0, inputLength) === inputValue
	// 	);

	// }).catch((error) => {
	// 	//error
	// });

	// console.log("getSuggestions", suggestions);

	// return suggestions;





	// console.log('calling from getSuggestions');
	// console.log(cities);


	// return inputLength === 0 ? [] : cities.filter(city =>
		
	// 	city.name.toLowerCase().slice(0, inputLength) === inputValue
	// );


	// const inputValue = value.trim().toLowerCase();
	// const inputLength = inputValue.length;

	

	// apis.getCities().then(cities => {
	// 	let filteredCities = inputLength === 0 ? [] : cities.filter(city =>
	// 		city.name.toLowerCase().slice(0, inputLength) === inputValue
	// 	);

	// 	return cb(filteredCities)
	// });
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

	    console.log("onSuggestionsFetchRequested", cities);

	    this.props.onSuggestedCities(cities);
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
		//fetching sample request
		Axios.get("/public/sampleWeather.json").then((response) => {
			if(response.status === 200){
				return response.data
			}
			else{
				console.log('fetchCityWeather - something went wrong');
			}
			
		})
		.catch((error) => {
			console.log(error);
		});

		//fetching Openweather map
		// const weatherKey = process.env.WEATHER_API;
		// Axios.get('http://api.openweathermap.org/data/2.5/forecast',{
		// 	params: {
		// 		id: cityId,
		// 		APPID: weatherKey
		// 	}
		// })
		// .then((response) => {
		// 	console.log(response);
		// })
		// .catch((error) => {
		// 	console.log(error);
		// })
	};

	onSuggestionSelected = (event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }) => {
		console.log(suggestion);
		console.log(method);

		if(method == 'click'){
			let cityId = suggestion.id;
			let data = this.fetchCityWeather(cityId);
			this.props.onSelectCity(data); //pass data to parent
		}
	};


	componentDidMount = () => {
		console.log('componentDidMount');
	}


	render(){
		const value = this.props.suggestData.value;
		const suggestedCities = this.props.suggestData.suggestedCities;

		console.log(suggestedCities);

	    // Autosuggest InputProps
	    const inputProps = {
	      placeholder: 'Type your city',
	      value,
	      onChange: this.onChange
	    };

		return(
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

export default SearchWeather;