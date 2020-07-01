import React from 'react'
import styled from 'styled-components'

const Footer = () => (
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
)

const NavList = styled.ul`
    list-style: none;
    display: flex;
    justify-content: center;
    padding-inline-start: 0px;
    background-color: ${props => props.theme.colors.secondary};
    padding-top: 10px;
    padding-bottom: 10px;
    margin: 0;
`

const StyledLink = styled.a`
    margin-right: 30px;
    text-decoration: none;
    color: ${props => props.theme.colors.text};
    &:hover {
        color: ${props => props.theme.colors.primary};
    }
`

export default Footer