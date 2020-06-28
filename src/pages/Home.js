import React, {useState} from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Wellcome from '../components/Wellcome'
import PetListingPreview from '../components/PetListingPreview'
import catImage from '../images/089.jpg'
import SideDrawerMenu from '../components/sideMenu/SideDrawerMenu'
import Backdrop from './../components/common/Backdrop'
import '../index.css'

const pets = [
    {
        name: "Jackie",
        img: catImage,
        id: "1234"
    },
    {
        name: "Pensil",
        img: catImage,
        id: "12345"
    },
    {
        name: "Bob",
        img: catImage,
        id: "123456"
    },
];


const Home = () => {
    const [isMenuVisible, setMenuVisible] = useState(false);
    
    const sideDrawerCloseHandler = () => setMenuVisible(false);

    return (
        <Wrapper>
            <SideDrawerMenu isOpen={isMenuVisible} onCloseMenu={sideDrawerCloseHandler}/>
            {isMenuVisible && <Backdrop clickHandler ={sideDrawerCloseHandler}/>}
            <Wellcome setMenuVisible={setMenuVisible}/>
            <PetListingPreview pets={pets}/>
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