import React, { Component } from "react";
import Axios from "axios";

class App extends Component {

	constructor(props){
		super(props);
		// this.state = {}
	}


	componentDidMount(){
		this.fetchCities()
	}

	//functions
	fetchCities(){
		fetch("../public/cities.json").then((res) => {
			console.log(res)
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
			<h1>hello world</h1>
		)
	}
}

export default App;