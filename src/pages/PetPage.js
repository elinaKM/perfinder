import React from 'react'
import styled from 'styled-components'

const PetPage = ({name, img, breed}) => {
    return (
        <Wrapper>
            <Image img={img}/>
            <DetailsCard>
                <Name>
                    {name}
                </Name>
                <Breed>
                    {breed}
                </Breed>
            </DetailsCard>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    padding: 50px;
    background-color: ${props => props.theme.colors.secondary};
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
    font-size: ${props => props.theme.fontSizes.title};
`

const Breed = styled.div`
`

export default PetPage