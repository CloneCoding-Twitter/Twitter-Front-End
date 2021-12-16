import React from "react";
import styled from "styled-components";
import { Text } from "../elements";

// icons
import comment from "../icons/comment.svg";
import share from "../icons/share.svg";
import retweet from "../icons/retweet.svg";
import like_black from "../icons/like_black.svg";
import like_red from "../icons/like_red.svg";

import pysick from "../img/pysick.jpg";
import testpic from "../img/test_pic.png";

const CenterFeed = (props) => {

  
  return (
    <React.Fragment>
      <FeedBox>
        <LeftUser>
          <UserImg />
        </LeftUser>
        <RightBox>
          <TopUserInfo>
            <Text font_size="17px" bold="bold">
              UserId
            </Text>
            <Text font_size="17px" margin="0 5px">
              @nickname
            </Text>
            <Text font_size="17px" margin="0 5px 0 0">
              ·
            </Text>
            <Text font_size="17px">✨</Text>
          </TopUserInfo>
          <MainText>
            <Text font_size="17px">청이야 안녕~~~~~ 물어~~~~ 애플짱</Text>
          </MainText>
          <MainImage />
          <BottomCheck>
            <MainIcons>
              <Icons1 />
              <Text />
            </MainIcons>
            <MainIcons>
              <Icons2 />
              <Text>🥸🔥</Text>
            </MainIcons>
            <MainIcons>
              <Icons3 />
              <Text>Like Count</Text>
            </MainIcons>
            <MainIcons>
              <Icons4 />
              <Text />
            </MainIcons>
          </BottomCheck>
        </RightBox>
      </FeedBox>
    </React.Fragment>
  );
};


const FeedBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid #efefef;

  &:hover {
    background-color: #efefef;
    transition: 0.2s;
  }
  &:not(hover) {
    transition: 0.2s;
  }
`;

const LeftUser = styled.div`
  width: 10%;
  height: 100%;
  padding-left: 1.6%;
`;

const UserImg = styled.div`
  width: 48.5px;
  height: 48.5px;
  border-radius: 100%;
  background-image: url(${testpic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const RightBox = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const TopUserInfo = styled.div`
  width: 100%;
  height: 5%;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
`;

const MainText = styled.div`
  width: 100%;
  height: auto;
  margin: 3px 0 10px 0;
  padding: 5px 10px;
`;

const MainImage = styled.div`
  width: 95%;
  min-height: 283.5px;
  height: auto;
  border: 1px solid #efefef;
  border-radius: 20px;
  background-image: url(${pysick});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const BottomCheck = styled.div`
  width: 100%;
  height: 50px;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const MainIcons = styled.div`
  width: 25%;
  height: 100%;
  margin-right: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const Icons1 = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${comment});
  background-size: 57.5%;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 25px;
  border-radius: 100%;
  cursor: pointer;

  &:hover {
    background-color: #e4f2fb;
    transition: 0.2s;
  }

  &:not(hover) {
    transition: 0.2s;
  }
`;

const Icons2 = styled(Icons1)`
  background-image: url(${retweet});
  &:hover {
    background-color: #d3f3d2;
    transition: 0.2s;
  }

  &:not(hover) {
    transition: 0.2s;
  }
`;

const Icons3 = styled(Icons1)`
  background-image: url(${like_black});
  &:hover {
    background-image: url(${like_red});
    background-color: #facfcf;
    transition: 0.2s;
  }

  &:not(hover) {
    transition: 0.2s;
  }
`;

const Icons4 = styled(Icons1)`
  background-image: url(${share});
`;

export default CenterFeed;