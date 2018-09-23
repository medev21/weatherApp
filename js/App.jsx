import React, { Component } from "react";
import Axios from "axios";

const cities = [];

fetch("../public/cities.json").then((res) => {
	return res.json();
}).then((json) => {
	let values = json;
	cities.push(values.cities);
	// console.log(cities);
});

const getSuggestions = value => {
	const inputValue = value.trim().toLowerCase();
	const inputLength = inputValue.length;

	return inputLength === 0 ? [] : languages.filter(lang =>
		lang.name.toLowerCase().slice(0, inputLength) === inputValue
	);
};

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			cityOptions: [],
			value: '',
			suggestedCities: []
		}
	}


	// componentDidMount(){
	// 	// this.fetchCities();
	// }

	// //functions
	// fetchCities = () => {
	// 	fetch("../public/cities.json").then((res) => {
	// 		return res.json();
	// 	}).then((json) => {
	// 		let values = json;
	// 		this.setState({cityOptions: values.cities})
	// 		console.log(values);
	// 	});
	// };

	// // Teach Autosuggest how to calculate suggestions for any given input value.
	// const getSuggestions = value => {
	//   const inputValue = value.trim().toLowerCase();
	//   const inputLength = inputValue.length;

	//   return inputLength === 0 ? [] : languages.filter(lang =>
	//     lang.name.toLowerCase().slice(0, inputLength) === inputValue
	//   );
	// };

	// // When suggestion is clicked, Autosuggest needs to populate the input
	// // based on the clicked suggestion. Teach Autosuggest how to calculate the
	// // input value for every given suggestion.
	// const getSuggestionValue = suggestion => suggestion.name;

	// // Use your imagination to render suggestions.
	// const renderSuggestion = suggestion => (
	//   <div>
	//     {suggestion.name}
	//   </div>
	// );

	// onChange = (event, { newValue }) => {
	//     this.setState({
	//       value: newValue
	//     });
	// };

	// // Autosuggest will call this function every time you need to update suggestions.
	// // You already implemented this logic above, so just use it.
	// onSuggestionsFetchRequested = ({ value }) => {
	// 	this.setState({
	//       suggestions: getSuggestions(value)
	//     });
	// };

	// // Autosuggest will call this function every time you need to clear suggestions.
	// onSuggestionsClearRequested = () => {
	//     this.setState({
	//       suggestions: []
	// });


	render(){
		// const key = process.env.WEATHER_API;
		// const { value, suggestedCities } = this.state;

	 //    // Autosuggest InputProps
	 //    const inputProps = {
	 //      placeholder: 'Type a programming language',
	 //      value,
	 //      onChange: this.onChange
	 //    };

	    // Finally, render it!
	    return (
	    	<h1>hello world</h1>
	      /*<Autosuggest
	        suggestions={suggestedCities}
	        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
	        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
	        getSuggestionValue={getSuggestionValue}
	        renderSuggestion={renderSuggestion}
	        inputProps={inputProps}
	      />*/
	    )



		/*return (
			<div>
				<h1>hello world</h1>
				<select>{
					this.state.cityOptions.map((option, key) => 
						<option key={key}>{option}</option>
					)
				}</select>
			</div>
		)*/
	}
}

export default App;