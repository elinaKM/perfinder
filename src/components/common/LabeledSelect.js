import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import find from "lodash/find"

const LabeledSelect = ({label, value, options, ...rest}) => (
    <Wrapper>
        <label>{label}</label>
        <StyledSelect placeholder="Any" value={value ? find(options, { value }) : null} options={options} {...rest}/>
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 200px;
`

const StyledSelect = styled(Select)`
    margin-top: 8px;
    &:hover, :focus {
        border: 1px solid ${props => props.theme.colors.primary};
        border-radius: 5px;
        outline: 0px transparent !important;
    }
`

export default LabeledSelect