import React, { Component } from 'react';
import iconPaths from '../utils/conditionIcon.js';

class WeatherIcon extends Component {

	getPath = (code) => {

		let icon = iconPaths.icons.find(icon => icon.code === code);

		console.log(icon);

		if(icon){
			return icon.path.join(" ");
		}else{
			console.warn(`icon ${code} does not exist`);
			return ''
		}

	};

	render(){

		let path = this.getPath(this.props.code)

		return(
			<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="150"
	 viewBox="0 0 30 30" style={{enableBackground:"new 0 0 30 30"}} xmlSpace="preserve">
			<path style={{fill: "#fff"}} d={path}/>
		</svg>
		);
	};
};

export default WeatherIcon;