import React from 'react'
import styled from 'styled-components'
import HamMenuControl from './header/HamMenuControl'

const Header = () => (
    <Wrapper>
        <LogoLink href="#">
            BestFriend.
        </LogoLink>
        <NavList>
            <li>
                <StyledLink href="#">
                    Search
                </StyledLink>
            </li>
            <li>
                <StyledLink href="#">
                    Favorites
                </StyledLink>
            </li>
            <li>
                <StyledLink href="#">
                    Sign Up
                </StyledLink>
            </li>
            <li>
                <StyledLink href="#">
                    Log in
                </StyledLink>
            </li>
        </NavList>
        <HamMenuControl />
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

const NavList = styled.ul`
    list-style: none;
    display: flex;
`

const StyledLink = styled.a`
    margin-left: 30px;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`
const LogoLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes.title};
`

export default Header