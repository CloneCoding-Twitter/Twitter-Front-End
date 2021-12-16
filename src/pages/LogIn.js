import React from "react";
import styled from "styled-components";

import login_bg from "../img/login_bg.png";
import twitter_logo from "../img/twitter_logo.svg";
import twitter_logo_small from "../img/twitter_logo_small.svg";
import GLogo from "../img/GLogo.svg";
import ALogo from "../img/ALogo.svg";
import Footer from "../components/Footer";
import { Text, Grid, Button } from "../elements";

import { history } from "../redux/configureStore";
// import { actionCreators as userActions } from "../redux/modules/user";
// import { useDispatch } from "react-redux";

const LogIn = (props) => {
  console.log('첫번째')
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
              margin="4rem 0 4rem 0"
            >
              지금 일어나고 있는 일
            </Text>
            <Text color="#000" bold="900" size="2rem" margin="0 0 2rem 0">
              오늘 트위터에 가입하세요.
            </Text>
          </Grid>
          <Grid margin="0 0 8px 0">
            <Button
              is_border
              width="300px"
              height="42px"
              font_color="#000"
              font_size="15px"
              bold="900"
            >
              <ImgSpan1 />
              Google로 로그인하기
            </Button>
          </Grid>
          <Grid>
            <Button
              is_border
              width="300px"
              height="42px"
              font_color="#000"
              font_size="15px"
              bold="900"
            >
              <ImgSpan2 />
              Apple로 로그인하기
            </Button>
          </Grid>
          <Grid is_flex="flex-start" width="300px" margin="10px 0">
            <hr width="128px" align="left" color="#efefef" size="1" />
            <Text margin="0" size="15px" >또는</Text>
            <hr width="128px" align="right" color="#efefef" size="1" />
          </Grid>
          <Grid>
            <Button
              is_tweeterHover  
              width="300px"
              height="42px"
              font_color="#ffffff"
              font_size="15px"
              bold="900"
              _onClick={() => {
                history.push("/signupcard");
              }}
            >
              휴대폰 번호나 이메일 주소로 가입하기
            </Button>
          </Grid>
          <Grid margin="5px 0 0 0">
            <Text size="11px">
            By signing up, you agree to the 
            <Text is_span bold="900"> Terms of Service</Text> and
            <Text is_span bold="900"> Privacy</Text>
            </Text>
          </Grid>
          <Grid>
            <Text size="11px">
            <Text is_span bold="900"> Policy</Text>, including 
            <Text is_span bold="900"> Cookie Use.</Text>
            </Text>
          </Grid>
          <Grid margin="4rem 0 5px 0">
            <Text size="1.1rem" bold="900">이미 트위터에 가입하셨나요?</Text>
          </Grid>
          <Grid margin="15px 0 0 0">
            <Button
              is_border
              width="300px"
              height="42px"
              font_color="#1DA1F2"
              font_size="15px"
              bold="900"
              bg="#ffffff"
              _onClick={() => {
                history.push("/logincard");
              }}
            >
              로그인
            </Button>
          </Grid>
        </LoginRight>
      </LoginBox>
      <FooterBox>
        <Footer />
      </FooterBox>
    </React.Fragment>
  );
};

const LoginBox = styled.div`
  width: 100%;
  height: 95vh;
  display: flex;
  flex-direction: row;
`;

const LoginLeft = styled.div`
  width: 55%;
  height: 100%;
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
  width: 23.8rem;
  height: 23.8rem;
  background-image: url(${twitter_logo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const LoginRight = styled.div`
  width: 45%;
  height: 100%;
  background-color: #fff;
  padding-left: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const TwitterLogoSmall = styled.div`
  width: 3rem;
  height: 3rem;
  background-image: url(${twitter_logo_small});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImgSpan1 = styled.span`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  background-image: url(${GLogo});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const ImgSpan2 = styled(ImgSpan1)`
  background-image: url(${ALogo});
  background-size: 150%;
`;

const FooterBox = styled.div`
  width: 100%;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export default LogIn;
