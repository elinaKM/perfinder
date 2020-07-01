import React from 'react'
import styled from 'styled-components'

const ContentWidthWrapper = (props) => 
    <Wrapper>
        {props.children}
    </Wrapper>

const Wrapper = styled.div`
    max-width: 1220px;
    margin: auto;
`
export default ContentWidthWrapper