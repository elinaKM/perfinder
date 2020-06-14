import React from 'react'
import styled from 'styled-components'
import '../index.css'
import PetListing from './PetListing'     
import ContentWidthWrapper from './ContentWidthWrapper'

const HomeBody = () => (
    <Body>
        <ContentWidthWrapper>
            <Title>
                Pets Available for Adoption
            </Title>
            <PetListing/>
        </ContentWidthWrapper>
    </Body>
)

const Body = styled.div`
    display: flex;
    flex-direction: column;
    background-color: #EFEEF1;
    width: 100%;
    height: 100%;
`
const Title = styled.div`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 40px;
    color: #6504B5;
`

export default HomeBody