import React from 'react'
import styled from 'styled-components'

const PetCard = ({name, img}) => (
    <Wrapper>
        <Image img={img}/>
        <Name>
            {name}
        </Name>
    </Wrapper>
)

const Image = styled.div`

    border-top-left-radius: 8px 8px;
    border-top-right-radius: 8px 8px;

    background-image: url(${props => props.img});
    background-size: cover;
    height: 100%;
`

const Name = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70px;
    border-bottom-left-radius: 8px 8px;
    border-bottom-right-radius: 8px 8px;
    background-color: #FFFFFF;
    color: #6504B5;
    font-weight: bold;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 20px;
    width: 260px;
    height: 330px;
`

export default PetCard