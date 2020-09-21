// Consts
const BASE_URL = "https://dataservice.accuweather.com"
// const API_KEY = "lriSh0MgYPuwlv7Hf3Zy1OJ0XzO3ZezC"
const API_KEY = "2fUFLNj1b9OB3I9x6G7AFznAlNCeeKMk"

export const geoPositionSearch = ({ Latitude, Longitude }: any) => {
    return `${BASE_URL}/locations/v1/cities/geoposition/search?apikey=${API_KEY}&q=${Latitude},${Longitude}`
}

export const autoCompleteSearch = (query: any) => {
    return `${BASE_URL}/locations/v1/cities/autocomplete?apikey=${API_KEY}&q=${query}`
}

export const weatherByKey = (key: any) => {
    return `${BASE_URL}/currentconditions/v1/${key}?apikey=${API_KEY}`
}

export const fiveDatysForecasts = (key: any) => {
    return `${BASE_URL}/forecasts/v1/daily/5day/${key}?apikey=${API_KEY}`
}