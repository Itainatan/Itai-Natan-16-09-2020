// Imports
import { SET_AUTO_COMPLETE, LOADING_AUTO_COMPLETE, ERROR_AUTO_COMPLETE } from '../Types'


// Interfaces
interface actionType {
    payload: Object,
    type: string
}


// Consts
const initialState = {
    data: null,
    loading: false,
    errors: []
};


// Reducer
export default function (state = initialState, action: actionType) {
    switch (action.type) {
        case SET_AUTO_COMPLETE:
            return {
                ...state,
                data: action.payload,
            }
        case LOADING_AUTO_COMPLETE:
            return {
                ...state,
                loading: action.payload
            }
        case ERROR_AUTO_COMPLETE:
            return {
                ...state,
                errors: [...state.errors, action.payload]
            }
        default:
            return state
    }
}