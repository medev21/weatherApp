import React, { Component } from "react";
import Axios from "axios";

class App extends Component {

	constructor(props){
		super(props);
		this.state = {
			cityOptions: []
		}
	}


	componentDidMount(){
		this.fetchCities();
		console.log(this.state.cityOptions);
	}

	//functions
	fetchCities(){
		fetch("../public/cities.json").then((res) => {
			return res.json();
		}).then((json) => {
			let values = json;
			this.setState({cityOptions: values.cities})
			console.log(values);
		});
	}
	render(){
		const key = process.env.WEATHER_API;

		// Axios({
		//   method:'get',
		//   url:'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + key
		// })
		//   .then(function(response) {
		//   	console.log(response);
		// });



		return (
			<div>
				<h1>hello world</h1>
				<select>{
					this.state.cityOptions.map((option, key) => 
						<option key={key}>{option}</option>
					)
				}</select>
			</div>
		)
	}
}

export default App;