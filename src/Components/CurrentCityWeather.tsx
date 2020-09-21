// Imports
import React from 'react';
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import TodayWeather from './TodayWeather'
import FiveDaysForecast from './FiveDaysForecast'


// Component
const CurrentCityWeather = () => {
    const { data: currentCity } = useSelector((state: any) => state.currentCity)
    const favorites = useSelector((state: any) => state.favorites.data)


    // Rendring
    return (
        <CurrentCityWeatherStyle>
            <TodayWeather currentCity={currentCity} favorites={favorites} />
            <FiveDaysForecast currentCity={currentCity} />
        </CurrentCityWeatherStyle>
    )
}

export default CurrentCityWeather

const CurrentCityWeatherStyle = styled.div`
    margin-top:5rem;
    @media screen 
            and (max-device-width: 580px) 
            and (-webkit-min-device-pixel-ratio: 1) {     
            margin-top:10rem;
    }
`