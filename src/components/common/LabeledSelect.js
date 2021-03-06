import React from 'react'
import styled from 'styled-components'
import Select from 'react-select'
import find from "lodash/find"
import map from "lodash/map"
import castArray from 'lodash/castArray'

const LabeledSelect = ({ label, value, options, onChangeHandler, isMulti, ...rest }) => {

    const onSelectHandler = (value = []) => (
        onChangeHandler(map(castArray(value), 'value'))
    )

    const getOption = (optionName) => find(options, ['value', optionName]) || null;

    const normalizeOptions = (isMulti=false, valuesArr=[]) => {

        if (isMulti) {
            return map(valuesArr, (item) => getOption(item));
        } 
        
        if (valuesArr.length === 1) {
            return getOption(valuesArr[0])
        }

        return null;
    }

    const selectedOptions = normalizeOptions(isMulti, castArray(value))

    return (
        <Wrapper>
            <label>{label}</label>
            <StyledSelect
                placeholder="Any"
                value={selectedOptions}
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