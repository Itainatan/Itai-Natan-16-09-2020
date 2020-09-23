// Imports
import { CoordsType } from './Interfaces'


// Consts
const BASE_URL = "https://dataservice.accuweather.com"
const API_KEY = "lriSh0MgYPuwlv7Hf3Zy1OJ0XzO3ZezC"


// Routes
export const geoPositionSearch = ({ latitude, longitude }: CoordsType) => {
    return `${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${latitude},${longitude}`
}

export const autoCompleteSearch = (query: string) => {
    return `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
}

export const weatherByKey = (key: string) => {
    return `${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`
}

export const fiveDatysForecasts = (key: string) => {
    return `${BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`
}