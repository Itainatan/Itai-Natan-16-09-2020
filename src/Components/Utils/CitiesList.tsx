// Imports 
import React from 'react'
import { useSelector } from 'react-redux'
import { CitiesListStyle, CityItem } from '../Style/SearchBarStyle'


// Interfaces
interface PropsType {
    onSelect: Function
}

interface StateType {
    autoComplete: AutoCompleteType
}

interface AutoCompleteType {
    loading: boolean,
    data: Array<CityType>
}

interface CityType {
    LocalizedName: string
}


// Component - display the list of cities from the auto complete search
const CitiesList = (props: PropsType) => {
    const autoComplete = useSelector((state: StateType) => state.autoComplete)


    // Rendering
    return (
        <CitiesListStyle>
            {!autoComplete.loading && autoComplete.data &&
                autoComplete.data.map((city: CityType, index: number) => {
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
