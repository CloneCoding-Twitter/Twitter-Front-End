import React from 'react';
import styled from "styled-components";

import login_bg from "../img/login_bg.png";
import twitter_logo from "../img/twitter_logo.svg";
import twitter_logo_small from "../img/twitter_logo_small.svg";
import { Text, Grid } from "../elements"

const LogIn = (props) => {

  return (
    <React.Fragment>
      <LoginBox>
        <LoginLeft>
          <TwitterLogo />
        </LoginLeft>
        <LoginRight>
          <Grid>
            <TwitterLogoSmall />
          </Grid>
          <Grid>
            <Text 
              color="#000" 
              bold="900" 
              size="4rem"
              margin="4.5rem 0 3.5rem 0"
            >
              지금 일어나고 있는 일
            </Text>
            <Text 
              color="#000" 
              bold="900" 
              size="2rem"
              margin="0 0 3rem 0"
            >
              오늘 트위터에 가입하세요.
            </Text>
          </Grid>
        </LoginRight>
      </LoginBox>
    </React.Fragment>
  )
}

const LoginBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`;

const LoginLeft = styled.div`
  width: 60%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  background-image: url(${login_bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const TwitterLogo = styled.div`
  width: 36%;
  height: 36%;
  background-image: url(${twitter_logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const LoginRight = styled.div`
  width: 40%;
  height: 100vh;
  background-color: #fff;
  padding-left: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TwitterLogoSmall = styled.div`
  width: 3.5rem;
  height: 3.5rem;
  background-image: url(${twitter_logo_small});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export default LogIn;