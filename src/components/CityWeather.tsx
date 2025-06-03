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
import DegreeIcon from 'src/components/DegreeIcon';

library.add(faSearchLocation)

interface CityWeatherProps {
	weatherData: WeatherResponse;
	searchMode: () => void;
}

interface TempMetrics {
	tempCurrent: number;
	tempMin: number;
	tempMax: number;
}

function CityWeather({ weatherData, searchMode}: CityWeatherProps){
	const cityName = weatherData.name;
	const condition = weatherData.weather[0].description;
	const iconCode = weatherData.weather[0].icon;

	const [fahrenheit, setFahrenheit] = useState(true);
	const [tempMetrics, setTempMetrics] = useState<TempMetrics>({
		tempCurrent: 0,
		tempMin: 0,
		tempMax: 0,
	})
	const [imageURL, setImageURL] = useState('')

	useEffect(() => {
		async function initiliazeData(){
			getFahrenheitTemp()
			await getImageCondition()
		}

		initiliazeData()
	}, []);

	function getInitialKelvinTemp (): TempMetrics {
		const { temp, temp_max, temp_min } = weatherData.main;
		return {tempCurrent: temp, tempMin: temp_min, tempMax: temp_max};
	};

	function getCelsiusTemp () {
		const tempObj = getInitialKelvinTemp();
		for(const key of Object.keys(tempObj) as Array<keyof TempMetrics>){
			tempObj[key] = Math.round(tempObj[key] - 273.15)
		}

		setTempMetrics(tempObj);
		setFahrenheit(false)
	};	

	function getFahrenheitTemp () {
		const tempObj = getInitialKelvinTemp();
		for(const key of Object.keys(tempObj) as Array<keyof TempMetrics>){
			tempObj[key] = Math.round((tempObj[key] - 273.15) * 9/5 + 32)
		}

		setTempMetrics(tempObj);
		setFahrenheit(true)
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
							{tempMetrics.tempCurrent}
						</div>
						<div className="degreeImg">
							<DegreeIcon />
						</div>
					</div>
					<div className="tempConversionBox">
						<div className={fahrenheit ? 'highlightBtn tempButton' : 'tempButton'} onClick={getFahrenheitTemp}>
							F
						</div>
						<div className={fahrenheit ? 'tempButton' : 'highlightBtn tempButton'} onClick={getCelsiusTemp}>
							C
						</div>
					</div>
				</div>
				<div className="highLowTempBox">
					<div className="lowTemp">
						<p>Low <span>{tempMetrics.tempMin}</span></p>
					</div>
					<div className="highTemp">
						<p>High <span>{tempMetrics.tempMax}</span></p>
					</div>
				</div>
			</div>
		</div>	
	);
}

export default CityWeather;