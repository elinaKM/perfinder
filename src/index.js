import React from "react";
import ReactDOM from "react-dom";
import { Router } from "@reach/router";
import * as serviceWorker from "./serviceWorker";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import PetPage from "./pages/PetPage";
import NotFound from "./pages/NotFound";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Router>
        <Home path="petfinder" />
        <PetPage path="petfinder/pets/:petId" />
        <NotFound default />
      </Router>
    </React.StrictMode>
  </ThemeProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
