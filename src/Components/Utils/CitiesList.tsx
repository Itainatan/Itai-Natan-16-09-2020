// Imports 
import React from 'react'
import { useSelector } from 'react-redux'
import { CitiesListStyle, CityItem } from '../Style/SearchBarStyle'
import { CityInfoType, AutoCompleteType } from '../../Helpers/Interfaces'


// Interfaces
interface PropsType {
    onSelect: Function
}

interface StateType {
    autoComplete: AutoCompleteType
}


// Component - display the list of cities from the auto complete search
const CitiesList = (props: PropsType) => {
    const autoComplete = useSelector((state: StateType) => state.autoComplete)


    // Rendering
    return (
        <CitiesListStyle>
            {!autoComplete.loading && autoComplete.data &&
                autoComplete.data.map((city: CityInfoType, index: number) => {
                    return (
                        <CityItem key={index} onClick={() => props.onSelect(city)}>
                            <h3>{city.LocalizedName}</h3>
                        </CityItem>
                    )
                })}
        </CitiesListStyle>
    )
}

export default CitiesList
