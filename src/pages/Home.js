import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeBody from '../components/HomeBody'
import '../index.css'

const Home = () => (
    <Wrapper>
        <Header/>
        <HomeBody/>
        <Footer/>
    </Wrapper>
)

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Nexa, Arial, Helvetica, sans-serif;
    font-size: 16px;
    background-color: #ECF0F1;
`

export default Home