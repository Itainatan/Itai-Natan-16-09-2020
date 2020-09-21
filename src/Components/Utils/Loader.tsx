import React from 'react';
import styled from 'styled-components'

const Loader = () => {
    return <LoadingText>Loading...</LoadingText>
}

export default Loader

const LoadingText = styled.span`
display: inline-block;
color:#ffffff;
font-size:3rem;
`