// Imports
import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchFavoritesWeather, favoritesAction } from '../Store/actions/FavoritesAction'
import CircularProgress from '@material-ui/core/CircularProgress'
import Button from '@material-ui/core/Button'
import DeleteIcon from '@material-ui/icons/Delete'
import { currentCityAction } from '../Store/actions/CurrentCityAction'
import { convertToF } from '../Helpers/Converts'
import { SpinnerWrapper, SpinnerText } from './Style/HomeStyle'
import { useHistory } from 'react-router-dom'
import {
    CityAndTempStyle, Image, FavoriteItem, FavoriteItemWrapper, FavoriteTitle,
    FavoritesPage, ImageAndStatus, PageHeadline, NoFavoritesStyle, FavoritesWrapper
} from './Style/FavoritesStyle'


// Interfaces
interface StateType {
    degreeType: DegreeType,
    favorites: FavoritesType
}

interface FavoritesType {
    data: Array<Object>,
    loading: boolean,
    cityInfo: CityInfoType,
    todayWeather: TodayWeatherType
}

interface DegreeType {
    isCelsius: boolean
}

interface CityInfoType {
    LocalizedName: string
}

interface TodayWeatherType {
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


// Component - display the favorites page
const Favorites = () => {
    const dispatch = useDispatch()
    const favorites = useSelector((state: StateType) => state.favorites)
    const isCelsius = useSelector((state: StateType) => state.degreeType.isCelsius)
    const history = useHistory()


    // Actions
    useEffect(() => {
        favorites.data.length > 0 && dispatch(fetchFavoritesWeather(favorites.data))
    }, [])

    return (
        <FavoritesPage>
            <PageHeadline>Favorites</PageHeadline>
            {
                favorites.data.length === 0 ?
                    <NoFavoritesStyle>No Favorites Selected</NoFavoritesStyle>
                    :
                    favorites.loading ?
                        <SpinnerWrapper>
                            <CircularProgress color='inherit' size='6rem' />
                            <SpinnerText>Loading weather data...</SpinnerText>
                        </SpinnerWrapper>
                        :
                        <FavoritesWrapper>
                            {favorites.data.map((favorite: any, index: number) => {
                                return (
                                    <FavoriteItemWrapper key={index}>
                                        <FavoriteItem onClick={() => {
                                            dispatch(currentCityAction(favorite.cityInfo))
                                            history.push('/')
                                        }}>
                                            <CityAndTempStyle>
                                                <FavoriteTitle>{favorite.cityInfo.LocalizedName}</FavoriteTitle>
                                                {isCelsius && <span>{Math.round(favorite.todayWeather.Temperature.Metric.Value)}°C</span>}
                                                {!isCelsius && <span>{convertToF(favorite.todayWeather.Temperature.Metric.Value)}°F</span>}
                                            </CityAndTempStyle>

                                            <ImageAndStatus>
                                                <span>{favorite.todayWeather.WeatherText}</span>
                                                <Image
                                                    src={`https://developer.accuweather.com/sites/default/files/${favorite.todayWeather.WeatherIcon < 10
                                                        ? "0" + favorite.todayWeather.WeatherIcon
                                                        : favorite.todayWeather.WeatherIcon
                                                        }-s.png`}
                                                    alt="icon"
                                                />
                                            </ImageAndStatus>
                                        </FavoriteItem>
                                        <Button onClick={() => dispatch(favoritesAction(favorite, false))}
                                            variant="contained"
                                            color="secondary"
                                            startIcon={<DeleteIcon />}>
                                            Remove from Favorites
                                        </Button>
                                    </FavoriteItemWrapper>
                                )
                            })}
                        </FavoritesWrapper>
            }
        </FavoritesPage>
    )
}

export default Favorites

