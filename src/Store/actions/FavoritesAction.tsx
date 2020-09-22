// Imports
import { weatherByKey as weatherByKeyAPI } from '../../Helpers/ApiMap'
import axios from 'axios'
import { enqueueSnackbar, closeSnackbar } from './NotificationAction'
import React from 'react'
import Button from '@material-ui/core/Button'
import {
    ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, SET_FAVORITES, LOADING_FAVORITES_WAETHER,
    SET_FAVORITES_WEATHER, ERROR_FAVORITES_WAETHER
} from '../Types'


// Actions
export const favoritesAction = (city: any, add: any) => (dispatch: any) => {

    if (!add) {
        dispatch({
            type: REMOVE_FROM_FAVORITES,
            payload: city
        })

        dispatch(enqueueSnackbar({
            message: `${city.cityInfo.LocalizedName} removed from favorites`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'warning',
                autoHideDuration: 2000,
                action: (key: string) => (
                    <Button onClick={() => dispatch(closeSnackbar(key))}>dismiss me</Button>
                ),
            },
        }))
    }

    else {
        dispatch({
            type: ADD_TO_FAVORITES,
            payload: city
        })
        dispatch(enqueueSnackbar({
            message: `${city.cityInfo.LocalizedName} added to favorites`,
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success',
                autoHideDuration: 2000,
                action: (key: string) => (
                    <Button onClick={() => dispatch(closeSnackbar(key))}>dismiss me</Button>
                ),
            },
        }))
    }
}

export const setFavorites = (favorites: any) => {
    return {
        type: SET_FAVORITES,
        payload: favorites
    }
}

export const fetchFavoritesWeather = (favorites: any) => async (dispatch: any) => {

    dispatch(fetchFavoritesWeatherLoading(true))

    try {
        const asyncRequests = []
        for (let favorite of favorites) {
            asyncRequests.push(axios.get(weatherByKeyAPI(favorite.cityInfo.Key)))
        }
        const res = await Promise.all(asyncRequests)
        dispatch({
            type: SET_FAVORITES_WEATHER,
            payload: res.map((favoriteWeather, index) => { return { ...favorites[index], todayWeather: favoriteWeather.data[0] } })
        })
        dispatch(fetchFavoritesWeatherLoading(false))
    }
    catch (e) {
        dispatch(enqueueSnackbar({
            message: 'error fetching favorites weather information',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
                autoHideDuration: 2000,
                action: (key: string) => (
                    <Button onClick={() => dispatch(closeSnackbar(key))}>dismiss me</Button>
                ),
            },
        }))

        dispatch(fetchFavoritesWeatherError(e))
    }
}

export const fetchFavoritesWeatherLoading = (isLoading: boolean) => {
    return {
        type: LOADING_FAVORITES_WAETHER,
        payload: isLoading
    }
}

export const fetchFavoritesWeatherError = (err: any) => {
    return {
        type: ERROR_FAVORITES_WAETHER,
        payload: err.message
    }
}

