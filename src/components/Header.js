import React from 'react'
import styled from 'styled-components'
import HamMenuControl from './header/HamMenuControl'
import { Link } from '@reach/router'
import { ROOT } from './../configuration/pathes'


const Header = ({ setMenuVisible }) => (
    <Wrapper>
        <LogoLink to={ROOT}>
            BestFriend.
        </LogoLink>
        <HamMenuControl clickHandler={setMenuVisible}/>
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 99;
    background-color: rgba(250,232,242, 0.5);
    padding-bottom: 8px;
    box-shadow: 0 8px 6px -6px ${props => props.theme.colors.border};
`

const LogoLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes.title};
    font-weight: bold;
    margin-top: 8px;
    margin-left: 30px;
`

export default Header