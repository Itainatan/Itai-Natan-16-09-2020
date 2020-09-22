// Imports
import React from 'react'
import { useSelector } from 'react-redux'
import { convertToC } from '../Helpers/Converts'
import { ScrollWrapper, FiveDaysForecastStyle, DayStyle, DayStyleLineHeader, DayStyleLine, KeyStyle } from './Style/FiveDaysForecastStyle'


// Interfaces
interface StateType {
    degreeType: DegreeType,
}

interface DegreeType {
    isCelsius: boolean
}

interface PropsType {
    currentCity: CurrentCityType
}

interface CurrentCityType {
    fiveDayaWeather: FiveDayaWeatherType
}

interface FiveDayaWeatherType {
    DailyForecasts: Array<WeatherItemType>
}

interface WeatherItemType {
    Date: Date,
    Temperature: TemperatureType
}

interface TemperatureType {
    Maximum: MaxMinType,
    Minimum: MaxMinType
}

interface MaxMinType {
    Value: number
}


// Consts
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


// Component - display on the bottom of the app the five days weather based locaion
const FiveDaysForecast = (props: PropsType) => {
    const { currentCity } = props
    const isCelsius = useSelector((state: StateType) => state.degreeType.isCelsius)


    // Rendering
    return (
        <ScrollWrapper>
            <FiveDaysForecastStyle>
                {currentCity && currentCity.fiveDayaWeather &&
                    currentCity.fiveDayaWeather.DailyForecasts.map((weatherItem: WeatherItemType, index: number) => {
                        return (
                            <DayStyle key={index}>
                                <DayStyleLineHeader>{days[new Date(weatherItem.Date).getDay()]}</DayStyleLineHeader>
                                <DayStyleLine><KeyStyle>Max:</KeyStyle>
                                    {isCelsius && <div>{convertToC(weatherItem.Temperature.Maximum.Value)}°C</div>}
                                    {!isCelsius && <div>{weatherItem.Temperature.Maximum.Value}°F</div>}
                                </DayStyleLine>
                                <DayStyleLine><KeyStyle>Min:</KeyStyle>
                                    {isCelsius && <div>{convertToC(weatherItem.Temperature.Minimum.Value)}°C</div>}
                                    {!isCelsius && <div>{weatherItem.Temperature.Minimum.Value}°F</div>}
                                </DayStyleLine>
                            </DayStyle>
                        )
                    })}
            </FiveDaysForecastStyle>
        </ScrollWrapper>
    )
}

export default FiveDaysForecast
