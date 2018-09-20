import React, { Component } from "react";
import Axios from "axios";

class App extends Component {

	render(){
		const key = process.env.WEATHER_API;

		Axios({
		  method:'get',
		  url:'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=' + key
		})
		  .then(function(response) {
		  	console.log(response);
		});


		console.log(key);
		return (
			<h1>hello world</h1>
		)
	}
}

export default App;