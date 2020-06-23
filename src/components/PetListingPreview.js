import React from 'react'
import styled from 'styled-components'
import catImage from '../images/089.jpg'
import catSteps from '../images/paw-print.jpg'
import PetListing from './PetListing';
import PetCard from './PetCard';

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


const PetListingPreview = () => (
    <Wrapper>
        <Title>
            Pets Available for Adoption
        </Title>
        <ListingWrapper>
            <PetListing pets={pets} />
            <MeetMoreButton name={"Meet more friends"} img={catSteps}/>
        </ListingWrapper>
    </Wrapper>
)


const Title = styled.div`
    font-size: ${props => props.theme.fontSizes.title};
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`
const ListingWrapper = styled.div`
    display: flex;
    margin: auto;
`

const MeetMoreButton = styled(PetCard)`
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export default PetListingPreview
