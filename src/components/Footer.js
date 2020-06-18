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
    background-color: #F8DEEB;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 0;
`

const StyledLink = styled.a`
    margin-right: 30px;
    text-decoration: none;
    color: grey;
    &:hover {
        color: #87ABE0;
    }
`

export default Footer