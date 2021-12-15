import React from "react";
import styled from "styled-components";
import ellipses from "../icons/ellipses.svg";
import { Grid, Text, Image } from "../elements";

const RightForYou = (props) => {
  return (
    <React.Fragment>
      <TopBox>
        <Content>
          <Grid width="85%">
            <Text size="21px" bold="bold">
              Trends for you
            </Text>
          </Grid>
          <Grid width="15%">
            <Image shape="circle" src={ellipses} />
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
  height: 500px;
  background-color: #f7f9fa;
  margin-top: 10px;
  overflow: hidden;
  border-radius: 17px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;

const Content = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px 18px;
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
