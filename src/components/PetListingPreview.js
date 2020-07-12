import React from 'react'
import styled from 'styled-components'
import catSteps from '../images/paw-print.jpg'
import PetListing from './PetListing';
import PetCard from './PetCard';

const PetListingPreview = ({pets}) => {
    let imagesArr = [catSteps];
    return(
        <Wrapper>
            <Title>
                Pets Available for Adoption
            </Title>
            <ListingWrapper>
                <PetListing pets={pets} fromPreview/>
                <MeetMoreButton name={"Meet more friends"} imgs={imagesArr}/>
            </ListingWrapper>
        </Wrapper>
    )
}

const Title = styled.div`
    font-size: ${props => props.theme.fontSizes.title};
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
`

const ListingWrapper = styled.div`
    display: flex;
    margin: auto;
    @media (max-width: ${props => props.theme.screenWidthBreakPoints.ipad}) {
        flex-direction: column;
    }
`

const MeetMoreButton = styled(PetCard)`
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default PetListingPreview
