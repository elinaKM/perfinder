import React from 'react'
import styled from 'styled-components'
import catSteps from '../images/paw-print.jpg'
import PetListing from './PetListing';
import PetCard from './PetCard';



const PetListingPreview = ({pets}) => (
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
