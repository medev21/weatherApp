import React, { Component } from "react";
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
import Background from '../../images/introImageC.jpg'
import apis from '../utils/apis';

class SearchWeatherMaps extends Component {

	onChangeMaps = (address) => {
		console.log(address);
		this.props.onChange(address);
	};

	onSelect = (selected) => {
		geocodeByAddress(selected)
	        .then(res => getLatLng(res[0]))
	        .then(({ lat, lng }) => {
	        	this.props.onSelect(lat,lng);
	        	this.fetchCityWeather(lat, lng);
	        })
	        .catch(error => {
		        // this.setState({ isGeocoding: false });
		        console.log('error', error); // eslint-disable-line no-console
	        });
	};

	fetchCityWeather = (lat, long) => {
		console.log(lat, long);

		apis.getWeatherLatLong(lat, long).then((res) => {
			let data = res.data;
			let boolean = !this.props.suggestData.isWeatherRendering;
			this.props.onSelect(lat, long, boolean, data); //pass data to parent
		}).catch((error) => {
			console.log(error);
			let data = [];
		});
	}
	

	render(){

		const address = this.props.suggestData.address;

	    const introStyle = {
	    	backgroundImage: `url(${Background})`,
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
					<PlacesAutocomplete
				        value={address}
				        onChange={this.onChangeMaps}
				        onSelect={this.onSelect}
				      >
				        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
				          <div>
				            <input
				              {...getInputProps({
				                placeholder: 'Search Places ...',
				                className: 'location-search-input',
				              })}
				            />
				            <div className="autocomplete-dropdown-container">
				              {loading && <div>Loading...</div>}
				              {suggestions.map(suggestion => {
				                const className = suggestion.active
				                  ? 'suggestion-item--active'
				                  : 'suggestion-item';
				                // inline style for demonstration purpose
				                const style = suggestion.active
				                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
				                  : { backgroundColor: '#ffffff', cursor: 'pointer', color: '#000' };
				                return (
				                  <div
				                    {...getSuggestionItemProps(suggestion, {
				                      className,
				                      style,
				                    })}
				                  >
				                    <span>{suggestion.description}</span>
				                  </div>
				                );
				              })}
				            </div>
				          </div>
				        )}
				      </PlacesAutocomplete>
			    </div>
			</div>
			
		);
	}
}

export default SearchWeatherMaps;