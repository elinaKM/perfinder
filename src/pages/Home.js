import React from 'react'
import styled from 'styled-components'
import Wellcome from '../components/Wellcome'
import PetListingPreview from '../components/PetListingPreview'
import { petsDB } from './../petsDB'

const Home = () => (
    <Wrapper>
        <Wellcome />
        <PetListingPreview pets={petsDB.slice(0,3)} />
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default Home