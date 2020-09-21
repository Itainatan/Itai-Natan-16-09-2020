import { CHANGE_DEGREE_TYPE } from '../Types'


const initialState = {
    isCelsius: true,
}

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