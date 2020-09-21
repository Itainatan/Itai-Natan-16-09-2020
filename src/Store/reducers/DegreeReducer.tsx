// Imports
import { CHANGE_DEGREE_TYPE } from '../Types'


// Interfaces
interface ActionType {
    type: string
}


// Consts
const initialState = {
    isCelsius: true,
}


// Reducers
export default function (state = initialState, action: ActionType) {
    switch (action.type) {
        case CHANGE_DEGREE_TYPE:
            return {
                ...state,
                isCelsius: !state.isCelsius,
            }
        default:
            return state
    }
}