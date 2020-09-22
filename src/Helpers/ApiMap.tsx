// Consts
const BASE_URL = "https://dataservice.accuweather.com"
const API_KEY = "lpaF8dfWGrM9XzI2cblh0BRWp6qmnT9g"


// Interfaces
interface propsType {
    Latitude: number,
    Longitude: number
}


export const geoPositionSearch = ({ Latitude, Longitude }: propsType) => {
    return `${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${Latitude},${Longitude}`
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