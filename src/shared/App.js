import React from "react";
import GlobalStyles from "../components/GlobalStyles";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Route } from "react-router-dom";

import LeftBox from '../components/LeftBox';
import RightBox from '../components/RightBox';

import LoginCard from "../pages/LoginCard";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUpCard";
import Home from "../pages/Home";
import Detail from "../pages/Detail";

import styled from "styled-components";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <HomeBox>
        <LeftBox/>
        <ConnectedRouter history={history}>
          <Route exact path="/" component={LogIn}></Route>
          <Route exact path="/logincard" component={LoginCard}></Route>
          <Route exact path="/signupcard" component={SignUp}></Route>
          <Route exact path="/home" component={Home}></Route>
          <Route exact path="/detail/:id" component={Detail}></Route>
        </ConnectedRouter>
        <RightBox/>
      </HomeBox>
    </React.Fragment>
  );
}

const HomeBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
`;

export default App;
