// Imports
import React from 'react'
import { useSelector } from 'react-redux'
import TodayWeather from './TodayWeather'
import FiveDaysForecast from './FiveDaysForecast'
import { CurrentCityWeatherStyle } from './Style/CurrentCityWeatherStyle'
import { CurrentCityDataType, FavoritesType } from '../Helpers/Interfaces'


// Interfaces
interface StateType {
    currentCity: CurrentCityDataType,
    favorites: FavoritesType
}


// Component - display the current weather and below the five days forecast
const CurrentCityWeather = () => {
    const { data: currentCity } = useSelector((state: StateType) => state.currentCity)
    const favorites = useSelector((state: StateType) => state.favorites.data)


    // Rendring
    return (
        <CurrentCityWeatherStyle>
            <TodayWeather currentCity={currentCity} favorites={favorites} />
            <FiveDaysForecast currentCity={currentCity} />
        </CurrentCityWeatherStyle>
    )
}

export default CurrentCityWeather

