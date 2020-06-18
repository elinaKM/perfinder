import React from 'react'
import styled from 'styled-components'
import dogBackgroundImg from '../images/dog-background.jpg'
import Header from './Header'
import Button from './common/Button'

const Wellcome = () => (
    <Wrapper>
        <BackgroundImage>
            <HeightDefinerDiv/>
        </BackgroundImage>
        <ConentWrapper>
            <Header/>
            <TitleWrapper>
                <Title>
                    Find your Best Friend
                </Title>
                <Text>
                    This site is a perfect place to find a perfect pet.<br/>
                    Animals bring a lot of light and joy in our life.<br/>
                    Pick one.<br/>
                    Save one live.<br/>
                    Find a new love.<br/>
                </Text>
                <ButtonsContainer>
                    <Button>Find a Dog</Button>
                    <Button>Find a Cat</Button>
                </ButtonsContainer>
            </TitleWrapper>
        </ConentWrapper>
    </Wrapper>
);

const BackgroundImage = styled.div`
    display: inline-block;
    width: 35%;
    font-size: 0;
    line-height: 0;
    vertical-align: middle;
    background-size: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: url(${dogBackgroundImg}); 
`

const HeightDefinerDiv = styled.div`
    display: block;
    height: 0;
    padding-bottom: 100%;
`

const ConentWrapper = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
`

const Title = styled.div`
    font-size: 20px;
    margin-bottom: 30px;
`
const Text = styled.div`
    color: grey;
    line-height: 1.6;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
    height: calc(100% - 70px);
    font-weight: bold;
    `

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px 20px 10px;
    max-width: 300px;
`

const Wrapper = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
`
export default Wellcome
