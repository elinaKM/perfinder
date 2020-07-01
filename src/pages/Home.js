import React from 'react'
import styled from 'styled-components'
import Wellcome from '../components/Wellcome'
import PetListingPreview from '../components/PetListingPreview'
import catImage from '../images/089.jpg'

const pets = [
    {
        name: "Jackie",
        img: catImage,
        id: "1234"
    },
    {
        name: "Pensil",
        img: catImage,
        id: "12345"
    },
    {
        name: "Bob",
        img: catImage,
        id: "123456"
    },
];

const Home = () => (
    <Wrapper>
        <Wellcome />
        <PetListingPreview pets={pets} />
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default Home