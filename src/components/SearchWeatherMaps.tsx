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

//clear-sky-morning
//https://images.unsplash.com/photo-1541193825568-3cdce004a5ef?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0MDY4NHwwfDF8cmFuZG9tfHx8fHx8fHx8MTc0ODg3Nzg0OXw&ixlib=rb-4.1.0&q=85

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
				<>				
					<Geosuggest
						ref={placesRef}
						onSuggestSelect={onSelect}
					/>
				</>

			</div>
		</div>
		
	);
}

export default SearchWeatherMaps;
