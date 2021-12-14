import React from "react";
import { useDispatch } from "react-redux";
import { userCreators as userActions } from "../redux/modules/user";
import styled from "styled-components";
import GlobalStyles from "../components/GlobalStyles";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Route } from "react-router-dom";
import { Grid } from "../elements/index";

import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import LogIn from "../pages/LogIn";
import SideMenu from "../components/SideMenu";
import Header from '../components/Header'

function App() {
  return (
    <React.Fragment>
        <Grid is_flex>
          <Header/>
          <Grid width='275px'>
            <SideMenu/>
          </Grid>
          <GlobalStyles />
          <ConnectedRouter history={history}>
            <Route exact path="/" component={LogIn}></Route>
            <Route exact path="/signup" component={SignUp}></Route>
            <Route exact path="/home" component={Home}></Route>
          </ConnectedRouter>
        </Grid>
    </React.Fragment>
  );
}



export default App;
