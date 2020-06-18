import React from 'react'
import styled from 'styled-components'

const Button = (props) => (
    <StyledButton onClick={props.onClick}>
        {props.children}
    </StyledButton>
)

const StyledButton = styled.button`
    background-color: #87ABE0;
    border: none;
    color: white;
    padding: 10px 30px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 4px;
    &:hover {
        box-shadow: 0 8px 6px -6px #423535;
    }
    &:focus {
        outline: none;
    }
`
export default Button;