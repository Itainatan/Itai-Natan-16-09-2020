// Imports
import React from 'react'
import { useSelector } from 'react-redux'
import CurrentCityWeather from './CurrentCityWeather'
import CircularProgress from '@material-ui/core/CircularProgress'
import { SpinnerWrapper, SpinnerText } from './Style/HomeStyle'


// Interfaces
interface StateType {
    currentCity: CurrentCityType,
}

interface CurrentCityType {
    data: Object,
    loading: boolean
}


// Component - display the home page of the app
const Home = () => {
    const currentCity = useSelector((state: StateType) => state.currentCity)


    // Rendering
    return (
        <div>
            {currentCity.loading || currentCity.data === null ?
                <SpinnerWrapper>
                    <CircularProgress color='inherit' size='6rem' />
                    <SpinnerText>Loading weather data...</SpinnerText>
                </SpinnerWrapper>
                :
                <CurrentCityWeather />}
        </div>
    )
}

export default Home




