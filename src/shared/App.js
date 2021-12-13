import React from "react";
import { useDispatch } from "react-redux";
import { userCreators as userActions } from "../redux/modules/user";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Route } from "react-router-dom";
import { Grid } from "../elements/index";

import Header from "../components/Header";
import Main from "../pages/Main";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import Profile from "../components/Profile";

import styled from "styled-components";

function App() {
  return (
    <React.Fragment>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={Main}></Route>
        <Route exact path="/signup" component={SignUp}></Route>
        <Route exact path="login" component={LogIn}></Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}
// test
export default App;
