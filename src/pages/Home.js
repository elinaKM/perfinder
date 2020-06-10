import React from 'react'
import styled from 'styled-components'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeBody from '../components/HomeBody'

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
`

export default Home