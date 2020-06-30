import React from 'react'
import styled from 'styled-components'
import catSteps from '../images/paw-print.jpg'
import AskAboutForm from '../components/pet/AskAboutForm'

const petsDB = {
    "abc" : {
            name: "Gula",
            imgs: [catSteps],
            breed: "Dvorniajka",
            location: "NewYork",
            age: "Young",
            gender: "Female",
            size: "Small",
            color: "White",
            aboutInfo: [
                {
                    label: "CHARACTERISTICS",
                    info: "Quiet, Calm, Relaxed, Shy, Playful"
                },
                {
                    label: "COAT LENGTH",
                    info: "Short"
                },
                {
                    label: "HOUSE-TRAINED",
                    info: "Yes"
                },
                {
                    label: "HEALTH",
                    info: "Vaccinations up to date, spayed / neutered."
                }
            ],
            org: "CARMA, Fredericton Chapter"
            }
}

const PetPage = (props) => {
    
    const {imgs, name, breed, location, age, gender, size, color, aboutInfo, org} = petsDB[props.petId];

    return (
        <Wrapper>
            <Image img={imgs[0]}/>
            <DetailsCard>
                <Name>
                   {name}
                </Name>
                <Basics>
                    <Breed>
                        {breed}
                    </Breed>
                    <li></li>
                    <Location>
                        {location}
                    </Location>
                </Basics>
                <InShort>
                    <li>{age}</li>
                    <li>{gender}</li>
                    <li>{size}</li>
                    <li>{color}</li>
                </InShort>
                <About>
                    About
                </About>
                {aboutInfo.map((item) => 
                    <AboutItem key={item.label} label={item.label} info={item.info}/>
                )}
                <AskAboutForm name={name} org={org}/>
            </DetailsCard>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 50px;
    background-color: ${props => props.theme.colors.secondary};
    font-size: ${props => props.theme.fontSizes.text};
    font-family: Nexa, Arial, Helvetica, sans-serif;
    color: ${props => props.theme.colors.text};
    `

const DetailsCard = styled.div`
    margin-top: 50px;
    padding: 50px;
    display: flex;
    flex-direction: column;
    border: 1px solid #EFEEF1;
    border-radius: ${props => props.theme.borderRadius.card};
    background-color: ${props => props.theme.colors.buttonText};
    `

const Image = styled.div`
    height: 400px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    `

const Name = styled.div`
    font-size: ${props => props.theme.fontSizes.megaTitle};
    font-weight: bold;
    margin-bottom: 40px;
    `

const Basics = styled.div`
    margin-bottom: 40px;
    font-weight: bold;
    display: flex;
`

const Breed = styled.div`
    margin-right: 12px;
`

const Location = styled.div`
`

const InShort = styled.ul`
    display: flex;
    justify-content: space-between;
    padding-left: 20px;
    margin-bottom: 40px;
    width: 300px;
`
const About = styled.div`
    font-size: ${props => props.theme.fontSizes.title};
    margin-bottom: 20px;
    font-weight: bold;
`

const AboutItem = ({label, info}) => (
    <StyledItem>
        <h3>
            {label}
        </h3>
        <p>
            {info}
        </p>
    </StyledItem>
)

const StyledItem = styled.div`
    margin-bottom: 20px;
`

export default PetPage