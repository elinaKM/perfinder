import React from 'react'
import { useParams } from 'react-router-dom' 
import styled from 'styled-components'
import AskAboutForm from '../components/pet/AskAboutForm'
import { petsDB } from './../petsDB'
import find from "lodash/find"

const PetPage = (props) => {

    const {petId} = useParams();
    let propObject = find(petsDB, ['id', petId]);

    if (typeof propObject === "undefined") {
        propObject = petsDB[0]
    }
    
    const { imgs, name, breed, location, age, gender, size, color, aboutInfo, org } = propObject;

    return (
        <Wrapper>
            <Image img={imgs[0]} />
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
                    <Detail>{age}</Detail>
                    <Detail>{gender}</Detail>
                    <Detail>{size}</Detail>
                    <Detail>{color}</Detail>
                </InShort>
                <About>
                    About
                </About>
                {aboutInfo.map((item) =>
                    <AboutItem key={item.label} label={item.label} info={item.info} />
                )}
                <AskAboutForm name={name} org={org} />
            </DetailsCard>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 80px 50px;
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
    justify-content: flex-start;
    padding-left: 20px;
    @media (max-width: ${props => props.theme.screenWidthBreakPoints.ipad}) {
        flex-direction: column;
    }
`

const Detail = styled.li`
    margin-right: 30px;
`

const About = styled.div`
    font-size: ${props => props.theme.fontSizes.title};
    margin-bottom: 20px;
    font-weight: bold;
`

const AboutItem = ({ label, info }) => (
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