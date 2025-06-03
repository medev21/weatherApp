// DEPENDENCIES
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchLocation } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from "react";
// COMPONENTS
import WeatherIcon from "src/components/WeatherIcon";
// TYPES
import { WeatherResponse } from "src/types/openweatherapi";
// UTILS
import { apis } from 'src/utils/apis';

library.add(faSearchLocation)

interface CityWeatherProps {
	weatherData: WeatherResponse;
	searchMode: () => void;
}

function CityWeather({ weatherData, searchMode}: CityWeatherProps){
	// TODO: HANDLE UNDEFINED/NULL WEATHERDATA
	const cityName = weatherData.name;
	const condition = weatherData.weather[0].description;
	const iconCode = weatherData.weather[0].icon;

	const [fahrenheit, setFahrenheit] = useState(true);
	const [current, setCurrent] = useState(0);
	const [min, setMin] = useState(0);
	const [max, setMax] = useState(0);
	const [imageURL, setImageURL] = useState('')

	useEffect(() => {
		getFahrenheit();
		getImageCondition();
	}, []);

	function getInitialTemp () {
		let currentWeather = weatherData;
		let current = currentWeather.main.temp;
		let min = currentWeather.main.temp_min;
		let max = currentWeather.main.temp_max;

		return {current, min, max};
	};

	function getCelsius () {
		const tempObj = getInitialTemp();
		const result: number[] = Object.values(tempObj).map(kelvin => (
			Math.round(kelvin - 273.15)
		));


		handleTempChange(result, false);
	};	

	function getFahrenheit () {
		const tempObj = getInitialTemp();
		const result: number[] = Object.values(tempObj).map(kelvin => (
			Math.round((kelvin - 273.15) * 9/5 + 32)
		))

		handleTempChange(result, true);
	};

	async function getImageCondition ()  {
		let hours = new Date().getHours(); //get current hour
		const editedCondition = condition.replace(/\s+/g, '-').toLowerCase();
		let query = hours > 6 && hours < 17 ? editedCondition + '-morning' : editedCondition + '-night';


		const imgResponse = await apis.getRandomImageFromUnsplah(query)
		setImageURL(imgResponse.urls.full)
	};

	function handleSearchMode() {
		searchMode();
	};



	function convertCelsius () { getCelsius(); };

	function convertFahrenheit(){ getFahrenheit(); };

	function handleTempChange(result: number[], bool: boolean) {
		setCurrent(result[0])
		setMin(result[1])
		setMax(result[2])
		setFahrenheit(bool)
	};

	const backgroundImage = {
		backgroundImage: `url(${imageURL})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat"
	}




	return(
		<div className="currentWeatherContainer" style={backgroundImage}>

			<div className="searchSection">
				<FontAwesomeIcon 
					icon={['fas', 'search-location']} 
					size="4x" 
					onClick={handleSearchMode}
				/>
			</div>

			<div className="cityNameSection"><h2>{cityName}</h2></div>

			<div className="conditionSection">
				<div className="weatherStatus">
					<div className="weatherIcon">
						<WeatherIcon code={iconCode}/>
					</div>
					<div className="weatherCondition">
						<p>{condition}</p>
					</div>
				</div>
				<div className="currentTempBox">

					<div className="currentTemp">
						<div className="tempNum">
							{current}
						</div>
						<div className="degreeImg">
							<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
			viewBox="12.5 6.5 5 5" enableBackground="new 0 0 30 30" height="50" xmlSpace="preserve">
	<path style={{fill: "#fff"}} d="M13.19,9.21c0-0.5,0.18-0.93,0.53-1.28c0.36-0.36,0.78-0.53,1.28-0.53c0.49,0,0.92,0.18,1.27,0.53
		c0.35,0.36,0.53,0.78,0.53,1.28s-0.18,0.93-0.53,1.29c-0.35,0.36-0.78,0.54-1.27,0.54c-0.49,0-0.92-0.18-1.28-0.54
		S13.19,9.71,13.19,9.21z M14.07,9.21c0,0.26,0.09,0.48,0.27,0.67c0.19,0.19,0.41,0.28,0.67,0.28c0.26,0,0.48-0.09,0.67-0.28
		s0.28-0.41,0.28-0.67c0-0.26-0.09-0.48-0.28-0.66c-0.19-0.18-0.41-0.28-0.67-0.28c-0.26,0-0.48,0.09-0.67,0.27
		C14.16,8.72,14.07,8.94,14.07,9.21z"/>
	</svg>
						</div>

					</div>
					<div className="tempConversionBox">
						<div className={fahrenheit ? 'highlightBtn tempButton' : 'tempButton'} onClick={convertFahrenheit}>
							F
						</div>
						<div className={fahrenheit ? 'tempButton' : 'highlightBtn tempButton'} onClick={convertCelsius}>
							C
						</div>
					</div>
				</div>
				<div className="highLowTempBox">
					<div className="lowTemp">
						<p>Low <span>{min}</span></p>
					</div>
					<div className="highTemp">
						<p>High <span>{max}</span></p>
					</div>
				</div>
			</div>
		</div>

		
	);

}

export default CityWeather;