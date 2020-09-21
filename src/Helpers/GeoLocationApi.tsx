import store from "../Store/Store"
import { SET_GEO_LOCATION, LOADING_GEO_LOCATION, ERROR_GEO_LOCATION } from '../Store/Types'
import { geoPositionSearch } from '../Store/actions/GeoPositionAction'

const GeoLocation = () => {
    store.dispatch(geoPositionSearch({ latitude: 32.0853, longitude: 34.7818 }, true)) // default Tel aviv

    var options = {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
    };

    function success(pos: any) {
        var crd = pos.coords;

        console.log('Your current position is:');
        console.log(`Latitude : ${crd.latitude}`);
        console.log(`Longitude: ${crd.longitude}`);
        console.log(`More or less ${crd.accuracy} meters.`);

        store.dispatch({ type: SET_GEO_LOCATION, payload: { Latitude: crd.latitude, Longitude: crd.longitude } })
        store.dispatch({ type: LOADING_GEO_LOCATION, payload: false })
        store.dispatch(geoPositionSearch({ latitude: crd.latitude, longitude: crd.longitude }, false))
    }

    function error(err: any) {
        store.dispatch({ type: ERROR_GEO_LOCATION, payload: err.message })
        store.dispatch({ type: LOADING_GEO_LOCATION, payload: false })

        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    store.dispatch({ type: LOADING_GEO_LOCATION, payload: true })
    navigator.geolocation.getCurrentPosition(success, error, options);
}

export default GeoLocation