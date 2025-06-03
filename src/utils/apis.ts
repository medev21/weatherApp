// TYPES
import { GeoCoordsProps } from "src/types/geosuggest";
import { WeatherResponse } from "src/types/openweatherapi";

export const apis = {
	getCurrentWeatherByLatLong,
	getRandomImageFromUnsplah,
}

const weatherAppGCPURL = import.meta.env.VITE_WEATHER_APP_GCP_URL
const unsplashAppGCPURL = import.meta.env.VITE_UNSPLASH_APP_GCP_URL

async function getCurrentWeatherByLatLong ({ lat, lng }: GeoCoordsProps): Promise<WeatherResponse | null>{
	const urlObj = new URL(weatherAppGCPURL)
	urlObj.searchParams.set("lat", String(lat))
	urlObj.searchParams.set("long", String(lng))

	try{
		const response = await fetch(urlObj, {
			method: 'GET'
		})

		if(!response.ok){
			return null
		}

		const weatherData = (await response.json()) as WeatherResponse;

		return weatherData
	} catch(err: any) {
		console.error('openweather fetch error', err)
		return null
	}
}

async function getRandomImageFromUnsplah (query: string){
	const urlObj = new URL(unsplashAppGCPURL)
	urlObj.searchParams.set("query", query)

	try{
		const response  = await fetch(urlObj, { method: 'GET'})

		if(!response.ok){
			return null
		}

		const unsplashData = await response.json()

		return unsplashData
	} catch(error: any) {
		console.error('unsplash fetch error', error)
		return null
	}
}
