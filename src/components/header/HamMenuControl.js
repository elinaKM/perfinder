import React from 'react'
import styled from 'styled-components'
import menuIcon from '../../images/icons/ham-menu.svg'

const HamMenuControl = () => (
    <Wrapper>
        <img src={menuIcon} alt="mobile menu" />
    </Wrapper>
)

const Wrapper = styled.div`
`

export default HamMenuControl