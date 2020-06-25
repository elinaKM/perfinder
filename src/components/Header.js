import React from 'react'
import styled from 'styled-components'
import HamMenuControl from './header/HamMenuControl'

const Header = ({ setMenuVisible }) => (
    <Wrapper>
        <LogoLink href="#">
            BestFriend.
            </LogoLink>
        <HamMenuControl clickHandler={setMenuVisible}/>
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70px;
    padding: 0px 30px;
    align-items: center;
    margin: 0px;
`

const LogoLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes.title};
`

export default Header