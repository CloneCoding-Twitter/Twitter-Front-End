import React from "react";
import { useDispatch } from "react-redux";
import { userCreators as userActions } from "../redux/modules/user";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Route } from "react-router-dom";
import { Grid } from "../elements/index";

import Header from "../components/Header";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Profile from "../components/Profile";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <Route exact path="/" component={LogIn}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="/main" component={Main}></Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}
// test
export default App;
