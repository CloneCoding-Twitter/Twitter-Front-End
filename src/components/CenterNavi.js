import React from "react";
import styled from "styled-components";
import toptweet from "../icons/toptweet.svg";
import { Text } from "../elements";
import left_arrow from "../icons/left_arrow.svg";
import { history } from "../redux/configureStore";

const CenterNavi = (props) => {

  const {
    is_mainNavi,
    is_tweetNavi,
  } = props;
  if (is_mainNavi) {
  return (
      <React.Fragment>
        <NaviBox>
          <TextBox>
            <Text size="20px" bold="bold">
              {props.text}
            </Text>
          </TextBox>
          <IconBox>
            <TopTweet />
          </IconBox>
        </NaviBox>
      </React.Fragment>
    );
  }
  if (is_tweetNavi) {
    return (
      <React.Fragment>
        <NaviBox2>
          <IconBox2>
            <BackButton 
            onClick={() => {
              history.push("/home");
            }}/>
          </IconBox2>
          <TextBox2>
            <Text size="20px" bold="bold">
              Tweet
            </Text>
          </TextBox2>
        </NaviBox2>
      </React.Fragment>
    );
  }
};

CenterNavi.defaultProps= {
  text: 'Home'
}

const NaviBox = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  background-color: #fff;
  opacity: 0.9;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const TextBox = styled.div`
  width: 80%;
  height: 53px;
  line-height: 53px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 10px;
`;

const IconBox = styled(TextBox)`
  width: 20%;
  justify-content: flex-end;
  padding: 0 10px 0 0;
`;

const TopTweet = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 100%;
  background-image: url(${toptweet});
  background-size: 50%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #efefef;
    transition: 0.2s;
  }
  &:not(hover) {
    transition: 0.2s;
  }
`;

const NaviBox2 = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  background-color: #fff;
  opacity: 0.9;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const TextBox2 = styled.div`
  width: 90%;
  height: 53px;
  line-height: 53px;
  display: flex;
  align-items: center;
`;

const IconBox2 = styled(TextBox)`
  width: 10%;
  justify-content: flex-end;
  padding: 0 10px 0 0;
  margin-right: 10px;
`;

const BackButton = styled.div`
  width: 37px;
  height: 37px;
  border-radius: 100%;
  background-image: url(${left_arrow});
  background-size: 25%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &:hover {
    color: #000;
    background-color: #efefef;
    transition: 0.2s;
  }
  &:not(hover) {
    transition: 0.2s;
  }
`;

export default CenterNavi;
