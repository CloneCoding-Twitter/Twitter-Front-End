import React from "react";
import styled from "styled-components";
import { Grid, Text, Image } from "../elements";
import ellipses from "../icons/ellipses.svg";
import testpic from "../img/test_pic.png";

import { useSelector } from "react-redux";

const LeftUser = (props) => {
  const user = useSelector(state => state.user)
  const loginId = localStorage.getItem('loginId')
  const nickname = localStorage.getItem('nickname')
  console.log(user.nickname)

  return (
    <React.Fragment>
      <Grid is_flex justify='space-between'> {/* ------- */}
        <Grid is_flex >  {/* ------- */}
          <Grid width='auto' is_flex justify="center" align="center" margin='0 12px 0 0'> {/* width="25%" */}
            <Image shape="circle" />
          </Grid>
          <Grid
            is_flex
            column="row"
            justify="flex-start"
            align="flex-start"
            width="54%"
          >
            <Text bold="bold" size="16px" margin="2px 0 5px 0">
              {loginId}
            </Text>
            <Text bold="100" color="#5B7083">
              @{nickname}
            </Text>
          </Grid>
        </Grid>
        <Grid width='auto' is_flex justify="center" align="center" > {/* width="21%" */}
          <Toggle />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

LeftUser.deafultProps = {
  // profile: false,
}

const Toggle = styled.div`
  width: 27px;
  height: 19px;
  background-image: url(${ellipses});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

export default LeftUser;
