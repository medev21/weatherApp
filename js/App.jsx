import React, { Component } from "react";

class App extends Component {

	render(){
		const key = process.env.WEATHER_API;
		console.log(key);
		return (
			<h1>hello world</h1>
		)
	}
}

export default App;