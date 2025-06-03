// UTILS
import { getPath } from 'src/utils/conditionIcon';

interface WeatherIconProps {
	code: string;
}

function WeatherIcon({code}: WeatherIconProps) {
	return (
		<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" height="150"
		viewBox="0 0 30 30" enableBackground="new 0 0 30 30" xmlSpace="preserve">
			<path style={{fill: "#fff"}} d={getPath(code)}/>
		</svg>
	);
}

export default WeatherIcon;