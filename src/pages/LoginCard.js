import React from "react";
import styled from "styled-components";

import twitter_logo_small from "../img/twitter_logo_small.svg";
import GLogo from "../img/GLogo.svg";
import ALogo from "../img/ALogo.svg";
import CloseIcon from "@mui/icons-material/Close";
import { Text, Grid, Button } from "../elements";
import { history } from "../redux/configureStore";

import LoginForm from "../components/LoginForm";

const LoginCard = () => {
  return (
    <React.Fragment>
      <CardLogin>
        <CardBox>
          <Header>
            <LeftHeader>
              <CloseIcon
                color="#000"
                cursor="pointer"
                onClick={() => {
                  history.push("/");
                }}
              />
            </LeftHeader>
            <CenterHeader>
              <TwitterLogoSmall />
            </CenterHeader>
            <RightHeader></RightHeader>
          </Header>
          <FormBox>
            <FortmTitle>
              <Text size="1.5rem" bold="900" margin="2rem 0">
                트위터에 로그인하기
              </Text>
            </FortmTitle>
            <LoginForm />
            <Grid margin="20px 0">
              <Text size="12px">
                비밀번호를 잊으셨나요?
                <Text is_span padding="0 0 0 5px">
                  비밀번호 찾기
                </Text>
              </Text>
            </Grid>
            <Grid is_flex justify="center">
              <Button
                is_blackHover
                bg="#000"
                width="300px"
                height="42px"
                font_color="#fff"
                font_size="15px"
                bold="900"
                _onClick={() => {
                  history.push("/signupcard");
                }}
              >
                가입하기
              </Button>
            </Grid>
            <Grid is_flex justify="center" margin="20px 0">
              <hr width="128px" align="left" color="#efefef" size="1" />
              <Text>또는</Text>
              <hr width="128px" align="right" color="#efefef" size="1" />
            </Grid>
            <Grid is_flex justify="center" margin="0 0 15px 0">
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
            <Grid is_flex justify="center" margin="0 0 15px 0">
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
          </FormBox>
          <CardFooter />
        </CardBox>
      </CardLogin>
    </React.Fragment>
  );
};

const CardLogin = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.36);
`;

const CardBox = styled.div`
  width: 30%;
  min-width: 600px;
  height: auto;
  min-height: 650px;
  background-color: #fff;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  width: 100%;
  height: 53px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftHeader = styled.div`
  width: 20%;
  height: 53px;
  padding-left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CenterHeader = styled.div`
  width: 20%;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TwitterLogoSmall = styled.div`
  width: 2rem;
  height: 2rem;
  background-image: url(${twitter_logo_small});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const RightHeader = styled.div`
  width: 20%;
  height: 53px;
`;

const FormBox = styled.div`
  width: auto;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const FortmTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const CardFooter = styled.div`
  width: 100%;
  height: 48px;
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

export default LoginCard;
