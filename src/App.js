import React, { useState } from "react";
import { Router } from "@reach/router";
import styled from "styled-components";
import Home from "./pages/Home";
import PetPage from "./pages/PetPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideDrawerMenu from "./components/sideMenu/SideDrawerMenu";
import Backdrop from "./components/common/Backdrop";
import "./index.css";
import { ROOT, PET } from "./configuration/pathes";

const App = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const sideDrawerCloseHandler = () => setMenuVisible(false);

  return (
    <Wrapper>
      <SideDrawerMenu
        isOpen={isMenuVisible}
        onCloseMenu={sideDrawerCloseHandler}
      />
      {isMenuVisible && <Backdrop clickHandler={sideDrawerCloseHandler} />}
      <Header setMenuVisible={setMenuVisible} />
      <Content>
        <Router>
          <Home path={ROOT} />
          <PetPage path={ROOT + PET} />
          <NotFound default />
        </Router>
      </Content>
      <Footer />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  font-size: 14px;
  font-family: Nexa, Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Content = styled.div``;

export default App;
