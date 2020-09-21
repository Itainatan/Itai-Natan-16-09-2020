// Imports
import { autoCompleteSearch as autoCompleteSearchAPI } from '../../Helpers/ApiMap'
import React from 'react'
import Button from '@material-ui/core/Button'
import { SET_AUTO_COMPLETE, LOADING_AUTO_COMPLETE, ERROR_AUTO_COMPLETE } from '../Types'
import { enqueueSnackbar, closeSnackbar } from './NotificationAction'
import axios from 'axios'


// Actions
export const autoCompleteSearch = (query: any) => async (dispatch: any) => {

    dispatch(autoCompleteSearchLoading(true))

    try {
        const res = await axios.get(autoCompleteSearchAPI(query))
        dispatch({
            type: SET_AUTO_COMPLETE,
            payload: res.data
        })
        dispatch(autoCompleteSearchLoading(false))
    }
    catch (err) {
        dispatch(enqueueSnackbar({
            message: 'error fetching search information ',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'error',
                action: (key: any) => (
                    <Button onClick={() => dispatch(closeSnackbar(key))}>dismiss me</Button>
                ),
            },
        }))
        dispatch(autoCompleteSearchError(err))
        dispatch(autoCompleteSearchLoading(false))
    }
}

export const autoCompleteSearchLoading = (isLoading: boolean) => {
    return {
        type: LOADING_AUTO_COMPLETE,
        payload: isLoading
    }
}

export const autoCompleteSearchError = (err: object) => (dispatch: object) => {
    return {
        type: ERROR_AUTO_COMPLETE,
        payload: err
    }
}
