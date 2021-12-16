import React from "react";
import styled from "styled-components";
import { Grid, Text, Image, Button } from "../elements";
import testpic from "../img/test_pic.png";

const RightWho = (props) => {
  return (
    <React.Fragment>
      <TopBox>
        <Content>
          <Grid width="100%">
            <Text size="21px" bold="bold">
              Who to follow
            </Text>
          </Grid>
        </Content>
        <ContentOne>
          <Grid
            is_flex
            justify="center"
            align="center"
            width="20%"
            height="60px"
          >
            <Image shape="circle" size="50" src={testpic} />
          </Grid>
          <Grid
            is_flex
            column="row"
            justify="center"
            align="flex-start"
            width="46%"
            height="60px"
          >
            <Text bold="bold" size="16px" margin="2px 0 5px 0">
              UserId
            </Text>
            <Text bold="100" color="#5B7083">
              @nickname
            </Text>
          </Grid>
          <Grid
            is_flex
            justify="center"
            align="center"
            width="33%"
            height="60px"
          >
            <Button
              is_blackHover
              width="77px"
              height="32px"
              font_size="15px"
              font_color="#fff"
              bg="#000"
              bold="bold"
            >
              Follow
            </Button>
          </Grid>
        </ContentOne>
        <ContentOne>
          <Grid
            is_flex
            justify="center"
            align="center"
            width="20%"
            height="60px"
          >
            <Image shape="circle" size="50" src={testpic} />
          </Grid>
          <Grid
            is_flex
            column="row"
            justify="center"
            align="flex-start"
            width="46%"
            height="60px"
          >
            <Text bold="bold" size="16px" margin="2px 0 5px 0">
              UserId
            </Text>
            <Text bold="100" color="#5B7083">
              @nickname
            </Text>
          </Grid>
          <Grid
            is_flex
            justify="center"
            align="center"
            width="33%"
            height="60px"
          >
            <Button
              is_blackHover
              width="77px"
              height="32px"
              font_size="15px"
              font_color="#fff"
              bg="#000"
              bold="bold"
            >
              Follow
            </Button>
          </Grid>
        </ContentOne>
        <ContentOne>
          <Grid
            is_flex
            justify="center"
            align="center"
            width="20%"
            height="60px"
          >
            <Image shape="circle" size="50" src={testpic} />
          </Grid>
          <Grid
            is_flex
            column="row"
            justify="center"
            align="flex-start"
            width="46%"
            height="60px"
          >
            <Text bold="bold" size="16px" margin="2px 0 5px 0">
              UserId
            </Text>
            <Text bold="100" color="#5B7083">
              @nickname
            </Text>
          </Grid>
          <Grid
            is_flex
            justify="center"
            align="center"
            width="33%"
            height="60px"
          >
            <Button
              is_blackHover
              width="77px"
              height="32px"
              font_size="15px"
              font_color="#fff"
              bg="#000"
              bold="bold"
            >
              Follow
            </Button>
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
  margin-top: 15px;
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
  padding: 13px 15px 10px 15px;
`;

const ContentOne = styled(Content)`
  padding: 7px 0px;
  padding-left: 10px;
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
  padding: 10px 15px;
  margin: 0;
`;

export default RightWho;
