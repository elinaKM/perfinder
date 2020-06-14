import React from 'react'
import styled from 'styled-components'
import PetCard from './PetCard'
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
    {   
        name: "John Snow",
        img: catImage,
        id: "123456"
    },
];

const PetListing = () => (
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