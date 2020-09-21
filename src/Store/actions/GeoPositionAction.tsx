// Imports
import { geoPositionSearch as geoPositionSearchAPI } from '../../Helpers/ApiMap'
import { currentCityAction } from './CurrentCityAction'
import { SET_GEO_POSITION_KEY, LOADING_GEO_POSITION_KEY, ERROR_GEO_POSITION_KEY } from '../Types'
import axios from 'axios'


// Actions
export const geoPositionSearch = (crd: any, isDefaultLocation: boolean) => {

    return async (dispatch: any) => {

        dispatch(geoPositionSearchLoading(true))

        try {
            const res = await axios.get(geoPositionSearchAPI({ Latitude: crd.latitude, Longitude: crd.longitude }))

            dispatch({
                type: SET_GEO_POSITION_KEY,
                payload: isDefaultLocation ? geoPositionMockData_DefaultLocation : res.data
            })

            dispatch(geoPositionSearchLoading(false))

            dispatch(currentCityAction((isDefaultLocation ? geoPositionMockData_DefaultLocation : res.data)))
        }
        catch (err) {
            dispatch(geoPositionSearchError(err))

            dispatch(geoPositionSearchLoading(false))
        }
    }
}

export const geoPositionSearchLoading = (isLoading: any) => {
    return {
        type: LOADING_GEO_POSITION_KEY,
        payload: isLoading
    }
}

export const geoPositionSearchError = (err: any) => () => {
    return {
        type: ERROR_GEO_POSITION_KEY,
        payload: err
    }
}

const geoPositionMockData_DefaultLocation = {
    Version: 1,
    Key: '212568',
    Type: 'City',
    Rank: 75,
    LocalizedName: 'Tel Aviv',
    EnglishName: 'Tel Aviv',
    PrimaryPostalCode: '',
    Region: {
        ID: 'MEA',
        LocalizedName: 'Middle East',
        EnglishName: 'Middle East'
    },
    Country: {
        ID: 'IL',
        LocalizedName: 'Israel',
        EnglishName: 'Israel'
    },
    AdministrativeArea: {
        ID: 'M',
        LocalizedName: 'Central District',
        EnglishName: 'Central District',
        Level: 1,
        LocalizedType: 'District',
        EnglishType: 'District',
        CountryID: 'IL'
    },
    TimeZone: {
        Code: 'IDT',
        Name: 'Asia/Jerusalem',
        GmtOffset: 3,
        IsDaylightSaving: true,
        NextOffsetChange: '2020-10-24T23:00:00Z'
    },
    GeoPosition: {
        Latitude: 32.267,
        Longitude: 34.95,
        Elevation: {
            Metric: {
                Value: 80,
                Unit: 'm',
                UnitType: 5
            },
            Imperial: {
                Value: 262,
                Unit: 'ft',
                UnitType: 0
            }
        }
    },
    IsAlias: false,
    SupplementalAdminAreas: [],
    DataSets: [
        'AirQualityCurrentConditions',
        'AirQualityForecasts',
        'Alerts',
        'ForecastConfidence'
    ]
}