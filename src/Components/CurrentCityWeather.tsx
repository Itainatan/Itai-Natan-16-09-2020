// Imports
import React from 'react'
import { useSelector } from 'react-redux'
import TodayWeather from './TodayWeather'
import FiveDaysForecast from './FiveDaysForecast'
import { CurrentCityWeatherStyle } from './Style/CurrentCityWeatherStyle'


// Component
const CurrentCityWeather = () => {
    const { data: currentCity } = useSelector((state: any) => state.currentCity)
    const favorites = useSelector((state: any) => state.favorites.data)


    // Rendring
    return (
        <CurrentCityWeatherStyle>
            <TodayWeather currentCity={currentCity} favorites={favorites} />
            <FiveDaysForecast currentCity={currentCity} />
        </CurrentCityWeatherStyle>
    )
}

export default CurrentCityWeather

