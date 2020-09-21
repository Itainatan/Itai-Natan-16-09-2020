// Imports
import styled from 'styled-components'


// Consts
export const SpinnerWrapper = styled.div`
    position: absolute;
    left:50%;
    top:50%;
    transform: translate(-50%,-50%);
    text-align:center;
    color:#ffffff;
`
export const SpinnerText = styled.div`
margin-top:1rem;
color:#ffffff;
font-size:3rem;
    @media screen 
            and (max-device-width: 580px) 
            and (-webkit-min-device-pixel-ratio: 1) { 
                font-size:2rem;
    }
`