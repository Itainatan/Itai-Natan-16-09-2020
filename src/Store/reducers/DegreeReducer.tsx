// Imports
import { CHANGE_DEGREE_TYPE } from '../Types'


// Consts
const initialState = {
    isCelsius: true,
}


// Reducers
export default function (state = initialState, action: any) {
    switch (action.type) {
        case CHANGE_DEGREE_TYPE:
            return {
                ...state,
                isCelsius: !state.isCelsius,
            };
        default:
            return state
    }
}