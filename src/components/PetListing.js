import React from 'react'
import styled from 'styled-components'
import PetCard from './PetCard'

const PetListing = ({pets}) => (
    <Wrapper>
        {
            pets.map((pet) =>
            <PetCard name={pet.name} key={pet.id} img={pet.img}/>
          )
        }
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
`

export default PetListing;