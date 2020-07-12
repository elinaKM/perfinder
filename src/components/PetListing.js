import React from 'react'
import styled from 'styled-components'
import PetCard from './PetCard'

const PetListing = ({pets, fromPreview}) => (
    <Wrapper>
        {
            pets.map((pet) =>
            <PetCard name={pet.name} key={pet.id} imgs={pet.imgs} id={pet.id} fromPreview={fromPreview}/>
          )
        }
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: ${props => props.theme.screenWidthBreakPoints.ipad}) {
        flex-direction: column;
    }
`

export default PetListing;