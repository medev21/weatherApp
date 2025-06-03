// COMPONENTS
import CityWeather from 'src/components/CityWeather';
import SearchWeatherMaps from 'src/components/SearchWeatherMaps'
// DEPENDENCIES
import { useState } from "react";
// TYPES
import { WeatherResponse } from "src/types/openweatherapi";

function App() {

	const [weatherData, setWeatherData] = useState<WeatherResponse | null>(null);
	const [isWeatherRendering, setIsWeatherRendering] = useState(false);

	function handleSelectedCity (bool:boolean, data: WeatherResponse | null)  {
		setIsWeatherRendering(bool)
		setWeatherData(data)
	}

	function handleSearchMode () {
		setIsWeatherRendering((prev) => !prev)
	}

	const renderWeatherComponent = () => {
		if(isWeatherRendering && weatherData) {
			return(
				<CityWeather weatherData={weatherData} searchMode={handleSearchMode}/>
			)
		}

		return (
			<SearchWeatherMaps
				onSelect={handleSelectedCity}
			/>
		)
	}

	return(
		<div className="mainContainer">
			{renderWeatherComponent()}
		</div>
	)
}

export default App;
