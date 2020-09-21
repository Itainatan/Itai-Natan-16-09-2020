// Imports
import React from 'react'
import { useSelector } from 'react-redux'
import { convertToC } from '../Helpers/Converts'
import { ScrollWrapper, FiveDaysForecastStyle, DayStyle, DayStyleLineHeader, DayStyleLine, KeyStyle } from './Style/FiveDaysForecastStyle'


// Consts
const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']


// Component
const FiveDaysForecast = ({ currentCity }: any) => {
    const isCelsius = useSelector((state: any) => state.degreeType.isCelsius)


    // Rendering
    return (
        <ScrollWrapper>
            <FiveDaysForecastStyle>
                {currentCity && currentCity.fiveDayaWeather &&
                    currentCity.fiveDayaWeather.DailyForecasts.map((weatherItem: any, index: any) => {
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
