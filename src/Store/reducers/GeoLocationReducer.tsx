// Imports
import { SET_GEO_LOCATION, LOADING_GEO_LOCATION, ERROR_GEO_LOCATION } from "../Types"


// Interface 
interface ActionTypeA {
    type: string,
    payload: boolean | PayloadType
}

interface PayloadType {
    Latitude: number,
    Longitude: number
}


// Consts
const initialState = {
    Latitude: null,
    Longitude: null,
    loading: false,
    errors: []
}


// Reducers
export default function (state = initialState, action: ActionTypeA | any) {
    switch (action.type) {
        case SET_GEO_LOCATION:
            return {
                ...state,
                Latitude: action.payload?.Latitude,
                Longitude: action.payload.Longitude
            }
        case LOADING_GEO_LOCATION:
            return {
                ...state,
                loading: action.payload
            }
        case ERROR_GEO_LOCATION:
            return {
                ...state,
                errors: [...state.errors, action.payload]
            }
        default:
            return state
    }
}