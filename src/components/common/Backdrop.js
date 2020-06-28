import React from 'react'
import styled from 'styled-components'

const Backdrop = ({clickHandler }) => <Wrapper onClick={clickHandler }/>

const Wrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  z-index: 100;
`
export default Backdrop