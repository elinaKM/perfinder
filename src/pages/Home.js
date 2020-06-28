import React, {useState} from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Wellcome from '../components/Wellcome'
import PetListingPreview from '../components/PetListingPreview'
import SideDrawerMenu from '../components/sideMenu/SideDrawerMenu'
import Backdrop from './../components/common/Backdrop'
import '../index.css'



const Home = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    
    const sideDrawerCloseHandler = () => setMenuVisible(false);

    return (
        <Wrapper>
            <SideDrawerMenu isOpen={isMenuVisible} onCloseMenu={sideDrawerCloseHandler}/>
            {isMenuVisible && <Backdrop clickHandler ={sideDrawerCloseHandler}/>}
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
    font-size: 14px;
    font-family: Nexa, Arial, Helvetica, sans-serif;
    color: ${props => props.theme.colors.text};
`

export default Home