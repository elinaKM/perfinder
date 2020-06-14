import React from 'react'
import styled from 'styled-components'
import ContentWidthWrapper from './ContentWidthWrapper'

const Header = () => (
    <ContentWidthWrapper>
        <HeaderWrapper>
            <LogoLink href="#">
                Header: Logo
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
        </HeaderWrapper>
    </ContentWidthWrapper>
)

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 70px;
    color: #4D4751;
    font-weight: bold;
    padding: 0px 20px;
    align-items: center;
    min-width: 1100px;
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

export default Header