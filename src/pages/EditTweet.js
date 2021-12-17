import React from "react";
import styled from "styled-components";
import { Text, Button, Input } from "../elements";
import CenterNavi from "../components/CenterNavi";
import CenterFeed from "../components/CenterFeed";
// icons
import emoji from "../icons/emoji.svg";
import gif from "../icons/gif.svg";
import media from "../icons/media.svg";
import poll from "../icons/poll.svg";
import schedule from "../icons/schedule.svg";

import pysick from "../img/pysick.jpg";
import testpic from "../img/test_pic.png";

const EditTweet = (props) => {

  return (
    <React.Fragment>
      <CenterNavi is_tweetNavi text="Edit your tweet" />
      <FeedBox>
        <LeftUser>
          <UserImg />
        </LeftUser>
        <RightBox>
          <TopUserInfo>
            <Text font_size="17px" bold="bold">
              UserId
              {/* {props.feed.loginId} */}
            </Text>
            <Text font_size="17px" margin="0 5px">
              @nickname
              {/* @{props.feed.nickname} */}
            </Text>
            <Text font_size="17px" margin="0 5px 0 0">
              ·
            </Text>
            <Text font_size="17px">✨</Text>
          </TopUserInfo>
          <MainText>
            <Input
                label=""
                size="20px"
                type="text"
                padding="0 0 0 0"
                placeholder="Edit your tweet 👨‍💻"
                height="100%"
                // _onChange={onComment}
                // value={content}
              />
          </MainText>
          <MainImage />
          {/* <Image main src={props.feed.img}/> */}
          <BottomCheck>
            <CommentMore>
              <MoreIcons>
                <label htmlFor="input-file">
                  <Icons1 />
                </label>
                <input
                  type="file"
                  id="input-file"
                  // onChange={selectFile}
                  // ref={fileInput}
                  style={{ display: "none" }}
                />
                <Icons2 />
                <Icons3 />
                <Icons4 />
                <Icons5 />
              </MoreIcons>
              <MoreButton>
                <Button
                  margin="0 0 0 40px"
                  is_tweeterHover
                  width="77px"
                  height="35px"
                  font_size="15px"
                  font_color="#fff"
                  bold="900"
                >
                  Tweet
                </Button>
              </MoreButton>
            </CommentMore>
          </BottomCheck>
        </RightBox>
      </FeedBox>
    </React.Fragment>
  );
};

CenterFeed.defaultProps = {
  is_centerFeed: false,
  is_commentFeed: false,
  _onClick: () => {},
}

const FeedBox = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  border-bottom: 1px solid #efefef;
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
  margin: 3px 0 30px 0;
  padding: 20px 10px 0 10px;
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
  margin-top: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const CommentMore = styled.div`
  width: 100%;
  min-height: 62px;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const MoreIcons = styled.div`
  width: 77%;
  height: 62px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Icons1 = styled.div`
  width: 35px;
  height: 35px;
  background-image: url(${media});
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
  background-image: url(${gif});
`;

const Icons3 = styled(Icons1)`
  background-image: url(${poll});
`;

const Icons4 = styled(Icons1)`
  background-image: url(${emoji});
`;

const Icons5 = styled(Icons1)`
  background-image: url(${schedule});
`;

const MoreButton = styled.div`
  width: 23%;
  height: 62px;
  padding-bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default EditTweet;
