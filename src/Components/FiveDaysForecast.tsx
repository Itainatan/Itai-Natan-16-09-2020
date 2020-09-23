// Imports
import React from 'react'
import { useSelector } from 'react-redux'
import { convertToC } from '../Helpers/Converts'
import { ScrollWrapper, FiveDaysForecastStyle, DayStyle, DayStyleLineHeader, DayStyleLine, KeyStyle } from './Style/FiveDaysForecastStyle'
import { DegreeType, CurrentCityType, WeatherItemType } from '../Helpers/Interfaces'


// Interfaces
interface PropsType {
    currentCity: CurrentCityType
}

interface StateType {
    degreeType: DegreeType,
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
