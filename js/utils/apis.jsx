import Axios from "axios";
// import cities from "./public/cities.json"

//local file
const cities = "./public/cities.json";
const weatherKey = process.env.WEATHER_API;



export default {

	getCities: function(){
		return new Promise((resolve, reject) => {
			Axios.get(cities)
				.then(response => { resolve(response)})
				.catch(error => { reject(error)})
		}); 
	},

	getWeather: function(cityID){
		return new Promise((resolve, reject) => {
			Axios.get("/public/sampleWeather.json")
				.then((response) => { resolve(response) })
				.catch((error) => { reject(error) });
		});
	},

	// getWeather: function(cityID){
	// 	return new Promise((resolve, reject) => {
	// 		Axios.get('http://api.openweathermap.org/data/2.5/forecast',{
	// 			params: {
	// 				id: cityID,
	// 				APPID: weatherKey
	// 			}
	// 		})
	// 		.then((response) => {
	// 			resolve(response)
	// 		})
	// 		.catch((error) => {
	// 			reject(error)
	// 		});
	// 	});
	// },

	getTest: function(){
		return 'hello';
	}
};