import React from 'react'
import styled from 'styled-components'
import closeIcon from '../../images/icons/close-icon.svg'

const SideMenuCloseControl = ({ onCloseMenu }) => 
  <Icon>
    <img src={closeIcon} alt="close" onClick={onCloseMenu}/>
  </Icon>

const Icon = styled.div`
  margin-left: 85%;
  &:hover {
    fill: ${props => props.theme.colors.primary}
  }
`
export default SideMenuCloseControl