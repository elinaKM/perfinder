import React from 'react'
import styled from 'styled-components'
import dogBackgroundImg from '../images/dog-background.jpg'
import Button from './common/Button'
import { Link } from 'react-router-dom'
import { ROOT, PETS } from "../configuration/pathes";

const SearchLink = ({ type }) => (
    <Link to={{
        pathname: ROOT + PETS,
        state: {
            animalType: type
        }
    }}>
        <Button>Find a {type}</Button>
    </Link>
)

const Wellcome = () => (
    <Wrapper>
        <BackgroundImage>
            <HeightDefinerDiv />
        </BackgroundImage>
        <ConentWrapper>
            <TitleWrapper>
                <Title>
                    Find your Best Friend
                </Title>
                <Text>
                    <p>This site is a perfect place to find a perfect pet.</p>
                    <p>Animals bring a lot of light and joy to our life.</p>
                    <p>Pick one. Save one live. Find a new love.</p>
                </Text>
                <ButtonsContainer>
                    <SearchLink type="Dog" />
                    <SearchLink type="Cat" />
                </ButtonsContainer>
            </TitleWrapper>
        </ConentWrapper>
    </Wrapper>
)


const BackgroundImage = styled.div`
    display: inline-block;
    width: 30%;
    vertical-align: middle;
    background-size: 100%;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-image: linear-gradient(to bottom, transparent, white), url(${dogBackgroundImg});
    @media (max-width: ${props => props.theme.screenWidthBreakPoints.ipad}) {
        display: none;
    }
`

const HeightDefinerDiv = styled.div`
    display: block;
    height: 0;
    padding-bottom: 100%;
`

const ConentWrapper = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media (max-width: ${props => props.theme.screenWidthBreakPoints.ipad}) {
        width: 100%;
    }
`

const Title = styled.div`
    font-size: ${props => props.theme.fontSizes.subTitle};
    margin-bottom: 20px;
`
const Text = styled.div`
    font-size: ${props => props.theme.fontSizes.text};
    line-height: 1.6;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin: auto;
    flex-direction: column;
    height: calc(100% - 70px);
    color: ${props => props.theme.colors.text};
    margin-top: 120px;
    `

const ButtonsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 10px 20px 10px;
    max-width: 300px;
`

const Wrapper = styled.div`
    display: flex;
`
export default Wellcome
