

//local file
let cities = "./public/cities.json";


export defaulit {
	getCities: function(){
		return Axios.get("./public/cities.json").then((res) => {
			return res;
		}).then((json) => {
			console.log(json.data.cities);
			return json.data.cities;s
		}).catch((error) => {
			console.log(error);
		});
	}
	//add api for weather
};