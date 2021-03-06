// Imports
import { SET_WEATHER_BY_KEY, LOADING_WEATHER_BY_KEY, ERROR_WEATHER_BY_KEY } from '../Types'


// Interfaces
interface ActionType {
    payload: object | boolean,
    type: string
}


// Consts
const initialState = {
    data: null,
    loading: false,
    errors: []
}


// Reducers
export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case SET_WEATHER_BY_KEY:
            return {
                ...state,
                data: action.payload,
            }
        case LOADING_WEATHER_BY_KEY:
            return {
                ...state,
                loading: action.payload
            }
        case ERROR_WEATHER_BY_KEY:
            return {
                ...state,
                errors: [...state.errors, action.payload]
            }
        default:
            return state
    }
}