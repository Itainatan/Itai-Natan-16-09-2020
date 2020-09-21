// Imports
import { ENQUEUE_SNACKBAR, CLOSE_SNACKBAR, REMOVE_SNACKBAR } from '../Types'


// Actions
export const enqueueSnackbarAction = (notification: any) => {
    const key = notification.options && notification.options.key;

    return {
        type: ENQUEUE_SNACKBAR,
        notification: {
            ...notification,
            key: key || new Date().getTime() + Math.random(),
        },
    }
}

export const closeSnackbarAction = (key: any) => ({
    type: CLOSE_SNACKBAR,
    dismissAll: !key, // dismiss all if no key has been defined
    key,
})

export const removeSnackbar = (key: any) => ({
    type: REMOVE_SNACKBAR,
    key,
})

export const enqueueSnackbar = (args: any) => enqueueSnackbarAction(args)

export const closeSnackbar = (args: any) => closeSnackbarAction(args)