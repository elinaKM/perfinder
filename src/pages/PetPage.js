import React from 'react'
import styled from 'styled-components'

const PetPage = ({name, img, breed, location, age, gender, size, color, aboutInfo}) => {
    return (
        <Wrapper>
            <Image img={img}/>
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
                <AskAboutForm>
                    <About>
                        Ask about {name}
                    </About>
                    <UserDetail>
                        <label for="myInput">First name</label>
                        <input id="myInput" type="text" />
                        <label for="myInput">Last name</label>
                        <input id="myInput" type="text" />
                        <label for="myInput">Email</label>
                        <input id="myInput" type="text" />
                        <label for="myInput">Phone Number</label>
                        <input id="myInput" type="text" />
                    </UserDetail>
                </AskAboutForm>
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
    height: 500px;
    background-image: url(${props => props.img});
    background-repeat: no-repeat;
    `

const Name = styled.div`
    font-size: ${props => props.theme.fontSizes.megaTitle};
    font-weight: bold;
    margin-bottom: 50px;
    `

const Basics = styled.div`
    margin-bottom: 50px;
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
    margin-bottom: 50px;
    width: 300px;
`
const About = styled.div`
    font-size: ${props => props.theme.fontSizes.title};
    margin-bottom: 20px;
    font-weight: bold;
`

const AboutItem = ({label, info}) => (
    <StyledItem>
        <Label>
            {label}
        </Label>
        <Information>
            {info}
        </Information>
    </StyledItem>
)

const StyledItem = styled.div`
    margin-bottom: 20px;
`
const Label = styled.h3`
`

const Information = styled.p`
`

const AskAboutForm = styled.form`
    border: 1px solid lightgrey;
    border-radius: ${props => props.theme.borderRadius.card};
    padding: 20px;
`

const UserDetail = styled.div`
    display: flex;
    flex-direction: column;
`
export default PetPage