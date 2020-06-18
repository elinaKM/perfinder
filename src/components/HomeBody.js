import React from 'react'
import styled from 'styled-components'

const HomeBody = () => (
    <Wrapper>
        <ContentWrapper/>
        <BackgroundImage/>
    </Wrapper>
)

const Wrapper = styled.div`
    height: 400px;
`
const ContentWrapper = styled.div`
    height: 200px;
    background-color: blue;
`
const BackgroundImage = styled.div`
    background-color: #FAD137;
    height: 200px;
`
export default HomeBody