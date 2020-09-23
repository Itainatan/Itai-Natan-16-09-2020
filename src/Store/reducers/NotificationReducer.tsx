// Imports
import { ENQUEUE_SNACKBAR, CLOSE_SNACKBAR, REMOVE_SNACKBAR } from '../Types'
import { NotificationType } from '../../Helpers/Interfaces'


// Interfaces
interface ActionType {
    type: string,
    dismissAll: boolean,
    key: string,
    notification: NotificationType
}


// Consts
const defaultState = {
    notifications: [],
}


// Reducer
export default (state = defaultState, action: ActionType) => {
    switch (action.type) {
        case ENQUEUE_SNACKBAR:
            const notification = Object.assign({ key: action.key }, action.notification)
            return {
                ...state,
                notifications: [
                    ...state.notifications,
                    notification
                ],
            }
        case CLOSE_SNACKBAR:
            return {
                ...state,
                notifications: state.notifications.map((notification: NotificationType) => (
                    (action.dismissAll || notification.key === action.key)
                        ? { ...notification, dismissed: true }
                        : { ...notification }
                )),
            }
        case REMOVE_SNACKBAR:
            return {
                ...state,
                notifications: state.notifications.filter(
                    (notification: NotificationType) => notification.key !== action.key,
                ),
            }
        default:
            return state
    }
}
