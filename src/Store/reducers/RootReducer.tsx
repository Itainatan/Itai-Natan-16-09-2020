import { combineReducers } from "redux"
import geoLocation from "./GeoLocationReducer"
import geoPosition from './GeoPositionReducer'
import autoCompleteSearch from './AutoCompleteSearchReducer'
import currentCity from './CurrentCityReducer'
import favorites from './FavoritesReducer'
import notifications from './NotificationReducer'
import degreeReducer from './DegreeReducer'


export default combineReducers({
    geoLocation,
    geoPosition,
    autoComplete: autoCompleteSearch,
    currentCity,
    favorites,
    notifications,
    degreeType: degreeReducer,
});