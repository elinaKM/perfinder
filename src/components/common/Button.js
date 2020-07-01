import React from 'react'
import styled from 'styled-components'

const Button = (props) => (
    <StyledButton onClick={props.onClick}>
        {props.children}
    </StyledButton>
)

const StyledButton = styled.button`
    background-color: ${props => props.theme.colors.primary};
    border: none;
    color: ${props => props.theme.colors.buttonText};
    padding: 10px 30px;
    font-size: ${props => props.theme.fontSizes.text};
    font-family: inherit;
    border-radius: ${props => props.theme.borderRadius.button};
    &:hover {
        box-shadow: 0 8px 6px -6px #423535;
    }
    &:focus {
        outline: none;
    }
`
export default Button;