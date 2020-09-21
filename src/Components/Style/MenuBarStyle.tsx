// Imports
import styled from 'styled-components'


// Consts
export const SearchStyle = styled.div`
    z-index: 3;
    position:absolute;
    top:50%;
    transform: translate(-50%, -50%);
    left:50%;

    @media screen 
            and (max-device-width: 580px) 
            and (-webkit-min-device-pixel-ratio: 1) { 
                top:150%;
    }
`
export const MenuStyle = styled.div`
    position:relative;
    display:flex;
    width: 100%;
    height:8rem;
    padding:4rem;
    @media screen 
            and (max-device-width: 768px) 
            and (-webkit-min-device-pixel-ratio: 1) { 
                /* font-size:2.5rem; */
    }
`

export const LinkStyle = styled.div`
font-size:2.5rem;
position:absolute;
top:50%;
transform: translateY(-50%);
right:0rem;
animation: RightToLeft 2s;
    @keyframes RightToLeft {
            0% {
                right:-3rem;
                opacity: 0;
            }
            50% {
                right: 1rem;
                opacity: 0.8;
            }
            100% {
                right:0rem;
                opacity: 1;
            }
    }
`

export const LogoStyle = styled.div`
    position:absolute;
    top:50%;
    transform: translateY(-43%);
    left:-1.6rem;

    animation: leftToRight 2s;
    @keyframes leftToRight {
            0% {
                left:-3rem;
                opacity: 0;
            }
            50% {
                left:-0.6rem;
                opacity: 0.8;
            }
            100% {
                left:-1.6rem;
                opacity: 1;
            }
    }
`

export const TempTypeButtom = styled.div`
    position:absolute;
    top:50%;
    right:50%;
    transform: translate(50%, -50%);
    @media screen 
            and (min-device-width: 580px) 
            and (-webkit-min-device-pixel-ratio: 1) { 
                font-size:2rem;
                top:120%;
                right:0%;
                transform: translate(0%,-50%);
    }
`