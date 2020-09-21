// Imports
import React from 'react'
import { useSelector } from 'react-redux'
import TodayWeather from './TodayWeather'
import FiveDaysForecast from './FiveDaysForecast'
import { CurrentCityWeatherStyle } from './Style/CurrentCityWeatherStyle'


// Interfaces
interface StateType {
    currentCity: CurrentCityType,
    favorites: FavoritesType
}

interface FavoritesType {
    data: Array<FavoriteType>
}

interface FavoriteType {
    cityInfo: CityInfoType
}

interface CurrentCityType {
    data: DataType,
}

interface DataType {
    fiveDayaWeather: FiveDayaWeatherType,
    todayWeather: TodayWeatherrType,
    cityInfo: CityInfoType
}

interface FiveDayaWeatherType {
    DailyForecasts: Array<WeatherItemType>
}

interface WeatherItemType {
    Date: Date,
    Temperature: TemperatureType
}

interface TemperatureType {
    Maximum: MaxMinType,
    Minimum: MaxMinType
}

interface MaxMinType {
    Value: number
}

interface TodayWeatherrType {
    Temperature: TemperatureType,
    WeatherText: string,
    WeatherIcon: number
}

interface TemperatureType {
    Metric: MetricType
}

interface MetricType {
    Value: number
}

interface CityInfoType {
    Key: string,
    LocalizedName: string
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

