import React from 'react'
import styled from 'styled-components'

const PetCard = ({name, imgs}) => (
    <Wrapper>
        <Image img={imgs[0]} />
            <Name>
                {name}
            </Name>
    </Wrapper>
)

const Image = styled.div`
    border-top-left-radius: ${props => props.theme.borderRadius.card} ${props => props.theme.borderRadius.card}; 
    border-top-right-radius: ${props => props.theme.borderRadius.card} ${props => props.theme.borderRadius.card};
    background-image: url(${props => props.img});
    background-size: cover;
    height: 100%;
`

const Name = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50px;
    border-bottom-left-radius: ${props => props.theme.borderRadius.card} ${props => props.theme.borderRadius.card};
    border-bottom-right-radius: ${props => props.theme.borderRadius.card} ${props => props.theme.borderRadius.card};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.buttonText};
    font-size: ${props => props.theme.fontSizes.text};
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 40px;
    width: 180px;
    height: 220px;
    text-decoration: none;
    margin-bottom: 20px;
`

export default PetCard