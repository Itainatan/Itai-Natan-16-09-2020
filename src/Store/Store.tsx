// Imports
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import rootReducer from "./reducers/RootReducer"


// Consts
const initialState = {};

export const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ?
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__()
    : (f: any) => f

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleware),
        composeEnhancers
    )
)

export default store;