import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import styled from "styled-components";
import Home from "./pages/Home";
import PetPage from "./pages/PetPage";
import SearchPage from "./pages/SearchPage";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideDrawerMenu from "./components/sideMenu/SideDrawerMenu";
import Backdrop from "./components/common/Backdrop";
import "./index.css";
import { ROOT, PET_ID, PETS } from "./configuration/pathes";

const App = () => {
  const [isMenuVisible, setMenuVisible] = useState(false);
  const sideDrawerCloseHandler = () => setMenuVisible(false);

  return (
    <BrowserRouter>
      <Wrapper>
        <SideDrawerMenu
          isOpen={isMenuVisible}
          onCloseMenu={sideDrawerCloseHandler}
        />
        {isMenuVisible && <Backdrop clickHandler={sideDrawerCloseHandler} />}
        <Header setMenuVisible={setMenuVisible} />
        <Content>
          <Switch>
            <Route path={ROOT} exact component={Home} />
            <Route path={ROOT + PETS} exact component={SearchPage} />
            <Route path={ROOT + PETS + PET_ID} component={PetPage} />
            <Route path="*" exact component={NotFound} />
          </Switch>
        </Content>
        <Footer />
      </Wrapper>
    </BrowserRouter>
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
