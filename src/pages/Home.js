import React, {useState} from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Wellcome from '../components/Wellcome'
import SideDrawerMenu from '../components/sideMenu/SideDrawerMenu'
import Backdrop from './../components/common/Backdrop'

const Home = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);

    return (
        <Wrapper>
            <SideDrawerMenu open={isMenuVisible} onCloseMenu={() => setMenuVisible(false)}/>
            { isMenuVisible && <Backdrop onClick={() => setMenuVisible(false)}/>}
            <Wellcome setMenuVisible={setMenuVisible}/>
            <Footer/>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
`

export default Home