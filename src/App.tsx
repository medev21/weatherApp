// COMPONENTS
import CityWeather from 'src/components/CityWeather';
import Loader from 'src/components/Loader';
import SearchWeatherMaps from 'src/components/SearchWeatherMaps'
// DEPENDENCIES
import { useState } from "react";
import { useMutation } from '@tanstack/react-query';
// TYPES
import { GeoCoordsProps } from 'src/types/geosuggest';
// UTILS
import { apis } from 'src/utils/apis';

function App() {
	const [weatherIsDisplaying, setWeatherIsDiplaying] = useState(false);
	const {data: weatherData, isPending, mutate} = useMutation({
		mutationFn: async(coords: GeoCoordsProps) => {
			return apis.getCurrentWeatherByLatLong(coords)
		}
	})

	function handleLocationSelection (location: GeoCoordsProps){
		setWeatherIsDiplaying(true)
		mutate(location)
	}

	function handleSearchMode () {
		setWeatherIsDiplaying((prev) => !prev)
	}

	const renderWeatherComponent = () => {
		const canViewWeatherDisplay = !isPending && weatherData && weatherIsDisplaying
		if(isPending) return <Loader />
		if(canViewWeatherDisplay) {
			return(
				<CityWeather weatherData={weatherData} searchMode={handleSearchMode}/>
			)
		}

		return (
			<SearchWeatherMaps
				handleSelect={handleLocationSelection}
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
