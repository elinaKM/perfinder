import React from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Wellcome from '../components/Wellcome'
import '../index.css'

const Home = () => (
    <Wrapper>
        <Wellcome/>
        <Footer/>
    </Wrapper>
)

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 14px;
    font-family: Nexa, Arial, Helvetica, sans-serif;
`

export default Home