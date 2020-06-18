import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeBody from '../components/HomeBody'
import Wellcome from '../components/Wellcome'

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
    font-family: Arial, Helvetica, sans-serif;
    font-size: 14px;
    font-weight: bold;
`

export default Home