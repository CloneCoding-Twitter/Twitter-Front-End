import React from "react";
import styled from "styled-components";
import { Input, Button } from "../elements";

import testpic from "../img/test_pic.png";

// icons
import emoji from "../icons/emoji.svg";
import gif from "../icons/gif.svg";
import media from "../icons/media.svg";
import poll from "../icons/poll.svg";
import schedule from "../icons/schedule.svg";


const CenterTweet = (props) => {
  return (
    <React.Fragment>
      <TweetBox>
        <ImgBox>
          <HoverBox>
            <TopTweet />
          </HoverBox>
        </ImgBox>
        <CommentBox>
          <CommentField>
            <Input
              is_tweet
              type="text"
              placeholder="What's Happening?"
              height="100%"
            />
          </CommentField>
          <CommentMore>
            <MoreIcons>
              <Icons1 />
              <Icons2 />
              <Icons3 />
              <Icons4 />
              <Icons5 />
            </MoreIcons>
            <MoreButton>
              <Button
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
        </CommentBox>
      </TweetBox>
    </React.Fragment>
  );
};

const TweetBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const ImgBox = styled.div`
  width: 12%;
  height: 100%;
  position: relative;
  top: 8px;
`;

const HoverBox = styled.div`
  width: 48px;
  height: 48px;
  background: #000;
  border-radius: 100%;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const TopTweet = styled.div`
  width: 48.5px;
  height: 48.5px;
  position: absolute;
  top: -0.5px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100%;
  background-color: transparent;
  background-image: url(${testpic});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    color: #000;
    opacity: 0.9;
    background-color: #efefef;
    transition: 0.2s;
  }
  &:not(hover) {
    transition: 0.2s;
  }
`;

const CommentBox = styled.div`
  width: 88%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const CommentField = styled.div`
  width: 100%;
  min-height: 63px;
  height: auto;
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

export default CenterTweet;
