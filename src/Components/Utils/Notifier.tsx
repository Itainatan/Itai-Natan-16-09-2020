// Imports
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'
import { removeSnackbar } from '../../Store/actions/NotificationAction'

let displayed: string[] = []


// Consts - Notifier do display the notifications for the app
const Notifier = () => {
    const dispatch = useDispatch()
    const notifications = useSelector((state: any) => state.notifications.notifications || [])
    const { enqueueSnackbar, closeSnackbar } = useSnackbar()


    // Funcs
    const storeDisplayed = (id: string) => {
        displayed = [...displayed, id]
    }

    const removeDisplayed = (id: React.ReactText) => {
        displayed = [...displayed.filter(key => id !== key)]
    }


    // Actions
    useEffect(() => {
        notifications.forEach(({ key, message, options = {}, dismissed = false }: any) => {
            if (dismissed) {
                // dismiss snackbar using notistack
                closeSnackbar(key)
                return
            }

            // do nothing if snackbar is already displayed
            if (displayed.includes(key)) {
                return
            }

            // display snackbar using notistack
            enqueueSnackbar(message, {
                key,
                ...options,
                onClose: (event, reason, myKey) => {
                    if (options.onClose) {
                        options.onClose(event, reason, myKey)
                    }
                },
                onExited: (_event, myKey) => {
                    // removen this snackbar from redux store
                    dispatch(removeSnackbar(myKey))
                    removeDisplayed(myKey)
                },
            })

            // keep track of snackbars that we've displayed
            storeDisplayed(key)
        })
    }, [notifications, closeSnackbar, enqueueSnackbar, dispatch])

    return null
}

export default Notifier
