import React from "react";
import styled from "styled-components";

// icons
import setting from "../icons/setting.svg";
import ellipses from "../icons/ellipses.svg";
import { Grid, Text, Image } from "../elements";

const RightForYou = (props) => {
  return (
    <React.Fragment>
      <TopBox>
        <Content>
          <Grid width="85%" padding="3px 0 0 0">
            <Text size="21px" bold="bold">
              Trends for you
            </Text>
          </Grid>
          <Grid is_flex justify="flex-end" width="15%" padding="0 13px 0 0">
            <Image shape="circle" size="18" src={setting} />
          </Grid>
        </Content>
        <ContentOne>
          <Grid width="90%">
            <Text size="13px" color="#536471">
              Trending in South Korea
            </Text>
            <Text size="15px" bold="bold" margin="8px 0">
              콘서트 취소
            </Text>
            <Text size="13px" color="#536471">
              1,716 Tweets
            </Text>
          </Grid>
          <Grid width="10%">
            <Image shape="circle" size="25" src={ellipses} />
          </Grid>
        </ContentOne>
        <ContentOne>
          <Grid width="90%">
            <Text size="13px" color="#536471">
              Trending in South Korea
            </Text>
            <Text size="15px" bold="bold" margin="8px 0">
              #도블도블
            </Text>
            <Text size="13px" color="#536471">
              3,250 Tweets
            </Text>
          </Grid>
          <Grid width="10%">
            <Image shape="circle" size="25" src={ellipses} />
          </Grid>
        </ContentOne>
        <ContentOne>
          <Grid width="90%">
            <Text size="13px" color="#536471">
              Trending in South Korea
            </Text>
            <Text size="15px" bold="bold" margin="8px 0">
              #쟈니버블
            </Text>
            <Text size="13px" color="#536471">
              2,4830 Tweets
            </Text>
          </Grid>
          <Grid width="10%">
            <Image shape="circle" size="25" src={ellipses} />
          </Grid>
        </ContentOne>
        <ContentOne>
          <Grid width="90%">
            <Text size="13px" color="#536471">
              Trending in South Korea
            </Text>
            <Text size="15px" bold="bold" margin="8px 0">
              스탭님들
            </Text>
            <Text size="13px" color="#536471">
              3,122 Tweets
            </Text>
          </Grid>
          <Grid width="10%">
            <Image shape="circle" size="25" src={ellipses} />
          </Grid>
        </ContentOne>
        <ContentOne>
          <Grid width="90%">
            <Text size="13px" color="#536471">
              Trending in South Korea
            </Text>
            <Text size="15px" bold="bold" margin="8px 0">
              헬창냥이
            </Text>
            <Text size="13px" color="#536471">
              5,231 Tweets
            </Text>
          </Grid>
          <Grid width="10%">
            <Image shape="circle" size="25" src={ellipses} />
          </Grid>
        </ContentOne>
        <ContentTwo>
          <Text size="15px" bold="bold" margin="8px 0" color="#1da1f2">
            Show more
          </Text>
        </ContentTwo>
      </TopBox>
    </React.Fragment>
  );
};

const TopBox = styled.div`
  width: 100%;
  height: auto;
  background-color: #f7f9fa;
  margin-top: 21px;
  overflow: hidden;
  border-radius: 17px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 13px 18px;
`;

const ContentOne = styled(Content)`
  cursor: pointer;
  align-items: flex-start;
  &:hover {
    color: #000;
    background-color: #efefef;
    transition: 0.2s;
  }
  &:not(hover) {
    transition: 0.2s;
  }
`;

const ContentTwo = styled(ContentOne)`
  margin: 0;
`;

export default RightForYou;
