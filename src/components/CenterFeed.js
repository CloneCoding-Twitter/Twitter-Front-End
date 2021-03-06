/* eslint-disable no-sequences */
import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Text, Image } from "../elements";

// icons
import comment from "../icons/comment.svg";
import share from "../icons/share.svg";
import retweet from "../icons/retweet.svg";
import like_black from "../icons/like_black.svg";
import like_red from "../icons/like_red.svg";
import ellipses from "../icons/ellipses.svg";

import testpic from "../img/test_pic.png";
import ModalOne from "./ModalOne";

const CenterFeed = (props) => {
  // 모달
  const [settingModal, setSettingModal] = React.useState(false);

  const toggleModalSetting = () => {
    if (settingModal === false) {
      setSettingModal(true);
    }
    if (settingModal === true) {
      setSettingModal(false);
    }
  };
  
  const { is_centerFeed, is_commentFeed } = props;

  // 메인 피드
  if (is_centerFeed) {
    return (
      <React.Fragment>
        <FeedBox onClick={props._onClick}>
          <LeftUser article_id={props.article_id}>
            <UserImg />
          </LeftUser>
          <RightBox>
            <TopUserInfo>
              <UserInfo>
                <Text font_size="17px" bold="bold">
                  {props.feed.loginId}
                </Text>
                <Text font_size="17px" margin="0 5px">
                  @{props.feed.nickname}
                </Text>
                <Text font_size="17px" margin="0 5px 0 0">
                  ·
                </Text>
                <Text font_size="17px">✨</Text>
              </UserInfo>
              <EditStory>
                <EditIcon onClick={toggleModalSetting} />
                {settingModal === true ? (
                  <ModalOne is_deleteModal2 />
                ) : (
                  <React.Fragment />
                )}
              </EditStory>
            </TopUserInfo>
            <MainText>
              <Text font_size="17px" line="22px">
                {props.feed.content}
              </Text>
            </MainText>
            <Image main src={props.feed.img} />
            <BottomCheck>
              <MainIcons>
                <Icons1 />
                <Text />
              </MainIcons>
              <MainIcons>
                <Icons2 />
                <Text size="0.7rem">Re Tweet</Text>
              </MainIcons>
              <MainIcons>
                <Icons3 />
                <Text size="0.7rem">Like Count</Text>
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
  }

  // 코멘트 피드
  if (is_commentFeed) {
    return (
      <React.Fragment>
        <FeedBox>
          <LeftUser>
            <UserImg />
          </LeftUser>
          <RightBox>
            <TopUserInfo>
              <UserInfo>
                <Text font_size="17px" bold="bold">
                  {props.comment.loginId}
                </Text>
                <Text font_size="17px" margin="0 5px">
                  @{props.comment.nickname}
                </Text>
                <Text font_size="17px" margin="0 5px 0 0">
                  ·
                </Text>
                <Text font_size="17px">✨</Text>
              </UserInfo>
              <EditStory>
                <EditIcon onClick={toggleModalSetting} />

                {settingModal === true
                  ? <ModalOne is_deleteModal2 is_me={props.is_me} article_id={props.article_id} com_id={props.com_id} is_me_={props.is_me_}/> 
                  : <React.Fragment 
                />}

              </EditStory>
            </TopUserInfo>
            <MainText>
              <Text font_size="17px">{props.comment.comment}</Text>
            </MainText>
            <BottomCheck>
              <MainIcons>
                <Icons1 />
                <Text />
              </MainIcons>
              <MainIcons>
                <Icons2 />
                <Text size="0.7rem">Re Tweet</Text>
              </MainIcons>
              <MainIcons>
                <Icons3 />
                <Text size="0.7rem">Like Count</Text>
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
  }
};

CenterFeed.defaultProps = {
  is_centerFeed: false,
  is_commentFeed: false,
  _onClick: () => {},
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
  padding-right: 20px;
`;

const TopUserInfo = styled.div`
  width: 100%;
  min-height: 25px;
  padding: 5px 10px;
  display: flex;
  flex-direction: row;
`;

const UserInfo = styled.div`
  width: 80%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const EditStory = styled.div`
  width: 20%;
  height: auto;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
`;

const EditIcon = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background-image: url(${ellipses});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 9999px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
    transition: 0.2s;
  }
  &:not(hover) {
    transition: 0.2s;
  }
`;

const MainText = styled.div`
  width: 100%;
  height: auto;
  margin: 3px 0 10px 0;
  padding: 5px 10px;
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
