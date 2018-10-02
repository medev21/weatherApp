import Axios from "axios";

//local file
let cities = "./public/cities.json";


export default {
	getCities: function(){
		return  Axios.get("./public/cities.json").then((res) => {
			console.log("from apis", res.data.cities);
			resolve(res.data.cities);
		// }).then((json) => {
		// 	console.log(json);
		// 	json.data.cities;
		}).catch((error) => {
			console.log("from apis.jsx", error);
			[]
		});
	},
	getTest: function(){
		return 'hello';
	}
	//add api for weather
};