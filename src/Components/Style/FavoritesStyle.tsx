// Imports
import styled from 'styled-components'


// Consts
export const ImageAndStatus = styled.div`
display:flex;
align-items:center;
justify-content: space-around;
font-size:2.5rem;
transform: translateX(5%);
@media screen 
    and (max-device-width: 580px) 
    and (-webkit-min-device-pixel-ratio: 1) { 
        font-size:2rem;
}
`

export const Image = styled.img`
width:10rem;
`

export const NoFavoritesStyle = styled.div`
color:#ffffff;
position: absolute;
left:50%;
top:50%;
transform: translate(-50%,-50%);
font-size: 3rem;
`

export const FavoritesPage = styled.div`
margin-top: 0rem;
text-align: center;
`
export const PageHeadline = styled.span`
display:inline-block;
margin-bottom: 5rem;
color:#ffffff;
font-size: 4.5rem;
@media screen 
        and (max-device-width: 580px) 
        and (-webkit-min-device-pixel-ratio: 1) {     
        font-size: 3rem;
        margin-bottom: 3rem;

}
`

export const FavoritesWrapper = styled.div`
font-size: 1.5rem;
display:flex;
flex-wrap: wrap;
justify-content: center;
align-content:space-between;
`

export const FavoriteItemWrapper = styled.div`
border:0.1rem solid #ffffff;
border-radius: 1.5rem;
margin:2rem;
text-align:center;
padding:2rem;
cursor:pointer;
font-size: 1.4rem;
background-color:#ffffff;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
min-width:15rem;
max-width:20rem;
transition: all .4s ease-in-out;
&:hover {
    transform: scale(1.1);
}
`

export const FavoriteItem = styled.div`
cursor:pointer;
margin-bottom:30px;
`

export const FavoriteTitle = styled.span`
display:block;
`

export const CityAndTempStyle = styled.div`
display:flex;
align-items:center;
font-size: 2.5rem;
margin-bottom: 1rem;
justify-content: space-around;

@media screen 
        and (max-device-width: 580px) 
        and (-webkit-min-device-pixel-ratio: 1) { 
            font-size: 2rem;
}
`