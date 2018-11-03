import Axios from "axios";

//local file
const cities = "./public/city.list.json";
const weatherKey = process.env.WEATHER_API;
const unsplashkey = process.env.UNSPLASH_API;

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

	getCurrentWeatherLatLong: function(lat, long){
		return new Promise((resolve, reject) => {
			Axios.get('http://api.openweathermap.org/data/2.5/weather',{
				params: {
					lat: lat,
					lon: long,
					APPID: weatherKey
				}
			})
			.then((response) => {
				resolve(response)
			})
			.catch((error) => {
				reject(error)
			});
		});
	},

	getRandomImage: function(query){
		return new Promise((resolve, reject) => {
			Axios.get('https://api.unsplash.com/photos/random',{
				params: {
					query: query,
					client_id: unsplashkey
				}
			})
			.then((response) => {
				resolve(response)
			})
			.catch((error) => {
				reject(error)
			});
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