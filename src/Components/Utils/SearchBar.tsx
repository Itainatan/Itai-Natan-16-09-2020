// Imports 
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { debounced } from '../../Helpers/Debounced'
import { currentCityAction } from '../../Store/actions/CurrentCityAction'
import { SET_AUTO_COMPLETE } from '../../Store/Types'
import CircularProgress from '@material-ui/core/CircularProgress'
import { enqueueSnackbar, closeSnackbar } from '../../Store/actions/NotificationAction'
import Button from '@material-ui/core/Button'
import { CitiesListStyle, SpinnerWrapper, SearchInput, CityItem } from '../Style/SearchBarStyle'


// Component - display the input search on the top of the page
const SearchBar = () => {
    const dispatch = useDispatch()
    const [query, setQuery] = useState('')
    const [isOpen, setIsOpen] = useState(false)
    const autoComplete = useSelector((state: any) => state.autoComplete)
    const isLoading = autoComplete.loading


    // Actions
    const onSelect = (city: any) => {
        setQuery(city.LocalizedName)
        setIsOpen(false)
        dispatch(currentCityAction(city))
    }


    // Funcs
    const onQueryChange = (e: any) => {
        const query = e.target.value

        if (query === '') {
            setIsOpen(false)
            setQuery(query)
            dispatch({
                type: SET_AUTO_COMPLETE,
                payload: null
            })
        } else if (/^[a-zA-Z\s]+$/.test(query)) {
            setQuery(query)
            !isOpen && setIsOpen(true)
            debounced(query)
        } else {
            dispatch(enqueueSnackbar(
                {
                    message: 'Invalid input. accept only english letters',
                    options: {
                        key: new Date().getTime() + Math.random(),
                        variant: 'error',
                        autoHideDuration: 5000,
                        action: (key: any) => (
                            <Button onClick={() => dispatch(closeSnackbar(key))}>Close</Button>
                        ),
                        anchorOrigin: {
                            vertical: 'top',
                            horizontal: 'left',
                        },
                    },
                }
            ))
        }
    }


    // Rendering
    return (
        <div onBlur={() => { setTimeout(() => setIsOpen(false), 100) }}>
            <SearchInput
                placeholder={'Search City'}
                onChange={onQueryChange}
                value={query}
                onFocus={() => query !== '' && setIsOpen(true)} />
            {
                isLoading ?
                    <SpinnerWrapper>
                        <CircularProgress size={20} />
                    </SpinnerWrapper>
                    : isOpen && <CitiesList onSelect={onSelect} />
            }
        </div>
    )
}

export default SearchBar


// Component
const CitiesList = (props: any) => {
    const autoComplete = useSelector((state: any) => state.autoComplete)


    // Rendering
    return (
        <CitiesListStyle>
            {!autoComplete.loading && autoComplete.data &&
                autoComplete.data.map((city: any, index: any) => {
                    return (
                        <CityItem key={index} onClick={() => props.onSelect(city)}>
                            <h3>{city.LocalizedName}</h3>
                        </CityItem>
                    )
                })}
        </CitiesListStyle>
    )
}

