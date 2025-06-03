// TYPES
import { WeatherResponse } from "src/types/openweatherapi";

export const apis = {
	getCurrentWeatherByLatLong,
	getRandomImageFromUnsplah,
}

//local file
const weatherAppGCPURL = import.meta.env.VITE_WEATHER_APP_GCP_URL
const unsplashAppGCPURL = import.meta.env.VITE_UNSPLASH_APP_GCP_URL

async function getCurrentWeatherByLatLong (lat: number, long: number): Promise<WeatherResponse | null>{
	const urlObj = new URL(weatherAppGCPURL)
	urlObj.searchParams.set("lat", String(lat))
	urlObj.searchParams.set("long", String(long))

	try{
		const response = await fetch(urlObj, {
			method: 'GET'
		})

		if(!response.ok){
			// return error
		}

		const weatherData = (await response.json()) as WeatherResponse;

		return weatherData
	} catch(err: any) {
		console.error('error', err)
		return null
	}
}

async function getRandomImageFromUnsplah (query: string){
	const urlObj = new URL(unsplashAppGCPURL)
	urlObj.searchParams.set("query", query)

	try{
		const response  = await fetch(urlObj, { method: 'GET'})

		if(!response.ok){
			// return error
		}

		const unsplashData = await response.json()

		return unsplashData
	} catch(error: any) {
		console.error('unsplash error', error)
	}
}
