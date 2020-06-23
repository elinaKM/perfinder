import React from 'react'
import styled from 'styled-components'
import SideMenuCloseControl from './SideMenuCloseControl'
import { css } from 'styled-components'

const SideDrawerMenu = ({open, onCloseMenu}) => (
    <Wrapper open = {open}>
        <SideMenuCloseControl onClick = {onCloseMenu}/>
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
    </Wrapper>
)

const Wrapper = styled.div`
    height: 100%;
    box-shadow: 0px 0px 8px rgba(0,0,0, 0.5);
    background-color: ${props => props.theme.colors.secondary};
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    z-index: 200;
    padding-top: 25px;
    transform: translateX(100%);
    transition: transform .5s ease-out;
    ${ props => props.open && css`
        transform: translateX(0);
    `};
`

const NavList = styled.ul`
    padding-top: 30%;
    margin-left: 30%;
    list-style: none;
    padding-left: 0;
    line-height: 1.8;
`

const StyledLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    font-size: ${props => props.theme.fontSizes.title};
    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`

export default SideDrawerMenu