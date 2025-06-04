// DEPENDENCIES
import { useRef } from "react";
import Geosuggest, { Location } from '@ubilabs/react-geosuggest';
// IMAGES
import BackgroundImage from 'src/images/introImage.jpg'
// UTILS
import { GeoCoordsProps } from "src/types/geosuggest";

interface SearchWeatherMapsProps {
	handleSelect: (coords: GeoCoordsProps) => void;
}

function SearchWeatherMaps({ handleSelect }: SearchWeatherMapsProps) {
	const placesRef = useRef(null)

	function onSelect(locationObj: Location | undefined) {
		if(locationObj){
			const { location } = locationObj;
			handleSelect(location)
		}
	};

	const introStyle = {
		backgroundImage: `url(${BackgroundImage})`,
		backgroundSize: "cover",
		backgroundPosition: "center",
		backgroundRepeat: "no-repeat"
	}

	return(
		<div className="searchContainer" style={introStyle}>
			<div className="headerSection">
				<h2>Weather Scan</h2>
			</div>
			<div className="searchSection">
					<Geosuggest
						ref={placesRef}
						onSuggestSelect={onSelect}
						placeholder="Type a location"
					/>
			</div>
		</div>
		
	);
}

export default SearchWeatherMaps;
