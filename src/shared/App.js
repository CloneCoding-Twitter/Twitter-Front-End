import React from "react";
import GlobalStyles from "../components/GlobalStyles";

import { ConnectedRouter } from "connected-react-router";
import { history } from "../redux/configureStore";
import { Route } from "react-router-dom";

import Main from "../pages/Main";
import LoginCard from "../pages/LoginCard";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUpCard";

function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <ConnectedRouter history={history}>
        <Route exact path="/" component={LogIn}></Route>
        <Route exact path="/logincard" component={LoginCard}></Route>
        <Route exact path="/signupcard" component={SignUp}></Route>
        <Route exact path="/main" component={Main}></Route>
      </ConnectedRouter>
    </React.Fragment>
  );
}

export default App;
