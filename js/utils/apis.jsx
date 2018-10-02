import Axios from "axios";
// import cities from "./public/cities.json"

//local file
let cities = "./public/cities.json";


export default {
	// getCities: function(cb){
	// 	return  Axios.get(cities).then((res) => {
	// 		console.log("from apis", res.data.cities);
	// 		return res.data.cities;
	// 	}).catch((error) => {
	// 		console.log("from apis.jsx", error);
	// 		[];
	// 	});
	// },

	getCities: function(){
		return new Promise((resolve, reject) => {
			Axios.get(cities)
				.then(response => { resolve(response)})
				.catch(error => { reject(error)})
		}); 
	},
	// getCities: function(){
	// 	return fetch("../public/cities.json").then((res) => {
	// 		console.log("from fetch first", res)
	// 		return res.json();
	// 	}).then((json) => {
	// 		console.log("from fetch sec", json.cities)
	// 		json.cities;	
	// 	});
	// },
	getTest: function(){
		return 'hello';
	}
	//add api for weather
};