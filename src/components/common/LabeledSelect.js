import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import find from "lodash/find"
import map from "lodash/map"

const LabeledSelect = ({ label, value, options, onChangeHandler, isMulti, ...rest }) => {

    const onSelectHandler = (value=[]) => {
        if (Array.isArray(value)) {
            onChangeHandler(map(value, (item) => item.value))
        } else {
            onChangeHandler(value.value)
        }
    };

    const selectedOption = find(options, value);

    return (
        <Wrapper>
            <label>{label}</label>
            <StyledSelect
                placeholder="Any"
                value={selectedOption}
                onChange={onSelectHandler}
                options={options}
                isMulti={isMulti}
                {...rest}
            />
        </Wrapper>
    )
}

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