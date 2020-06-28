import React from 'react'
import styled from 'styled-components'
import menuIcon from '../../images/icons/ham-menu.svg'

const HamMenuControl = ({ clickHandler }) => (
  <Wrapper onClick={clickHandler}>
    <img src={menuIcon} alt="navigation menu" />
  </Wrapper>
)

const Wrapper = styled.div`
  width: 20px;
  margin-left: 15px;
`

export default HamMenuControl