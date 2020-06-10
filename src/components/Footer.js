import React from 'react'
import styled from 'styled-components'

const Footer = () => (
    <Wrapper>
        <LogoLink href="#">
            Footer: Logo
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
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70px;
    background-color: #ECF0F1;
    color: #4D4751;
    font-size: 14px;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
    padding: 0px 20px;
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
    color: inherit;
`
const LogoLink = styled.a`
    text-decoration: none;
    color: inherit;
`

export default Footer