// Imports
import React from 'react'
import Button from '@material-ui/core/Button'
import { enqueueSnackbar, closeSnackbar } from './NotificationAction'
import { fiveDatysForecasts as fiveDatysForecastsAPI, weatherByKey as weatherByKeyAPI } from '../../Helpers/ApiMap'
import { SET_WEATHER_BY_KEY, LOADING_WEATHER_BY_KEY, ERROR_WEATHER_BY_KEY } from '../Types'
import axios from 'axios'


// Actions
export const currentCityAction = (city: any) => async (dispatch: any) => {

    dispatch(currentCityLoading(true))

    try {
        const res = await Promise.all([
            axios.get(weatherByKeyAPI(city.Key)),
            axios.get(fiveDatysForecastsAPI(city.Key))
        ])

        const todayWeather = res[0].data[0]
        const fiveDayaWeather = res[1].data

        dispatch({
            type: SET_WEATHER_BY_KEY,
            payload: { todayWeather, fiveDayaWeather, cityInfo: city }
        })

        dispatch(currentCityLoading(false))
    }
    catch (err) {
        dispatch(enqueueSnackbar({
            message: 'error fetching weather information',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
                autoHideDuration: 2000,
                action: (key: string) => (
                    <Button onClick={() => dispatch(closeSnackbar(key))}>dismiss me</Button>
                ),
            },
        }))

        dispatch(currentCityError(err))
        
        dispatch(currentCityLoading(false))
    }
}

export const currentCityLoading = (isLoading: boolean) => {
    return {
        type: LOADING_WEATHER_BY_KEY,
        payload: isLoading
    }
}

export const currentCityError = (err: Object) => (_dispatch: any) => {
    return {
        type: ERROR_WEATHER_BY_KEY,
        payload: err
    }
}

