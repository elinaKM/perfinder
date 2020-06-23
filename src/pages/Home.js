import React, {useState} from 'react'
import styled from 'styled-components'
import Footer from '../components/Footer'
import Wellcome from '../components/Wellcome'
import PetListingPreview from '../components/PetListingPreview'
import SideDrawerMenu from '../components/sideMenu/SideDrawerMenu'
import Backdrop from './../components/common/Backdrop'
import '../index.css'


const Home = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <Wrapper>
            <SideDrawerMenu open={showMenu} onCloseMenu={() => setShowMenu(false)}/>
            { showMenu && <Backdrop onClick={() => setShowMenu(false)}/>}
            <Wellcome setShowMenu={setShowMenu}/>
            <PetListingPreview/>
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
`

export default Home