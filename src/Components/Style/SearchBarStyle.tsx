// Imports
import styled from 'styled-components'


// Consts
export const SearchInput = styled.input`
    border: 1px solid black;
    border-radius: 3px;
    font-size: 2rem;
    padding: 1rem;
`

export const SpinnerWrapper = styled.span`
    position:absolute;
    right:20px;
    top:12px;
`

export const CitiesListStyle = styled.div`
    position: absolute;
    z-index:1000;
    animation-name: dropDownSlow;
    animation-duration: 4s;
    animation-timing-function: ease-out;
    z-index: 1;
    @keyframes dropDownSlow {
        0% {
            height: 0px;
        }
        100% {
            height:100px;
        }
    }
`

export const CityItem = styled.div`
    text-align: center;
    border: 1px solid black;
    border-radius: 3px;
    background-color:white;
    width:26.5rem;
    font-size: 1.5rem;
    padding: 1rem;
    cursor: pointer;
    :hover {
        background-color: gainsboro;
    }
`