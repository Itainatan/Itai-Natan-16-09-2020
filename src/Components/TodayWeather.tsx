// Imports
import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import { favoritesAction } from '../Store/actions/FavoritesAction'
import {
    TodayWeatherStyle, CityAndTempStyle, CityName, StickySide,
    IconStyle, ImageAndStatus, WeatherStatus, Image
} from './Style/TodayWeatherStyle'
import { CurrentCityType, FavoriteType, DegreeType } from '../Helpers/Interfaces'


interface PropsType {
    currentCity: CurrentCityType,
    favorites: Array<FavoriteType>
}

interface StateType {
    degreeType: DegreeType
}


// Component - diplay the info about the city, the favorite button and the today weather
const TodayWeather = ({ currentCity, favorites }: PropsType) => {
    const dispatch = useDispatch()
    const isCelsius = useSelector((state: StateType) => state.degreeType.isCelsius)
    const isFavorite = currentCity && favorites.length > 0 &&
        favorites.find((favorite: FavoriteType) => favorite.cityInfo.Key === currentCity.cityInfo.Key)


    // Actions
    const favoriteFunc = () => dispatch(favoritesAction(currentCity, !isFavorite))


    // Rendering
    return (
        <TodayWeatherStyle>
            <CityAndTempStyle>
                <CityName>{currentCity && currentCity.cityInfo && currentCity.cityInfo.LocalizedName}</CityName>
                {isCelsius && <div>{Math.round(currentCity.todayWeather.Temperature.Metric.Value)}°C</div>}
                {!isCelsius && <div>{currentCity.todayWeather.Temperature.Imperial.Value}°F</div>}
            </CityAndTempStyle>
            <StickySide>
                <IconStyle>
                    {
                        !isFavorite ? <FavoriteBorderIcon onClick={() => favoriteFunc()} color={"secondary"} fontSize={"inherit"} />
                            : <FavoriteIcon onClick={() => favoriteFunc()} color={"secondary"} fontSize={"inherit"} />
                    }
                </IconStyle>
            </StickySide>
            <ImageAndStatus>
                <WeatherStatus>{currentCity.todayWeather.WeatherText}</WeatherStatus>
                <Image src={`https://developer.accuweather.com/sites/default/files/${currentCity.todayWeather.WeatherIcon < 10
                    ? "0" + currentCity.todayWeather.WeatherIcon
                    : currentCity.todayWeather.WeatherIcon
                    }-s.png`}
                    alt="icon" />
            </ImageAndStatus>
        </TodayWeatherStyle>
    )
}

export default TodayWeather

