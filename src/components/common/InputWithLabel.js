import React from 'react'
import styled from 'styled-components'

const InputWithLabel = (props) => (
    <Wrapper>
        <label>{props.label}</label>
        <StyledInput {...props}/>
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

const StyledInput = styled.input`
    border: 1px solid ${props => props.theme.colors.border};
    border-radius: ${props => props.theme.borderRadius.button};
    font-size: ${props => props.theme.fontSizes.text};
    padding: 5px;
    margin-top: 8px;
    color: inherit;
    &:hover, :focus {
        border: 1px solid ${props => props.theme.colors.primary};
        outline: 0px transparent !important;
    }
`

export default InputWithLabel