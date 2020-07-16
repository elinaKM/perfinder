import React from 'react'
import styled from 'styled-components'
import { Link } from '@reach/router'
import catStepsImg from '../images/paw-print.jpg'
import PetCard from './PetCard'
import { PETS } from './../configuration/pathes'

const PetListingPreview = ({ pets }) => (
    <Wrapper>
        <Title>
            Pets Available for Adoption
        </Title>
        <ListingWrapper>
            {pets.map(({id, name, imgs}) =>
                <StyledLink to={PETS + id} key={id}>
                    <PetCard name={name} imgs={imgs} id={id} />
                </StyledLink>
            )}
            <StyledLink to={PETS}>
                <MeetMoreButton name="Meet more friends" imgs={[catStepsImg]}/>
            </StyledLink>
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
    @media (max-width: ${props => props.theme.screenWidthBreakPoints.ipad}) {
        flex-direction: column;
    }
`
const StyledLink = styled(Link)`
     text-decoration: none;
`

const MeetMoreButton = styled(PetCard)`
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export default PetListingPreview
