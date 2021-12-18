import React from "react";
import styled from "styled-components";
import { Text, Grid } from "../elements";
import ellipses from "../icons/ellipses.svg";
import testpic from "../img/test_pic.png";
import ModalOne from "./ModalOne";

const LeftUser = (props) => {
  const loginId = localStorage.getItem('loginId')
  const nickname = localStorage.getItem('nickname')

  const [settingModal, setSettingModal] = React.useState(false);

  const toggleModalSetting = () => {
    if (settingModal === false) {
      setSettingModal(true);
    }
    if (settingModal === true) {
      setSettingModal(false);
    }
  };

  const { is_commentUser } = props;

  if (is_commentUser) {
    return (
      <React.Fragment>
        <Grid is_flex width="100%" padding="0 15px" margin="10px 0">
          <Grid is_flex width="10%" align="center" justify="center">
            <UserImg />
          </Grid>
          <Grid
            is_flex
            width="70%"
            align="flex-start"
            column="column"
            justify="center"
            padding="0 0 0 10px"
          >
            <Text bold="bold" size="16px" margin="2px 0 5px 0">
              {loginId}
            </Text>
            <Text bold="100" color="#5B7083">
              @{nickname}
            </Text>
          </Grid>
          <Grid is_flex width="20%" align="center" justify="flex-end">
            {props.is_me_
              ?<Toggle onClick={toggleModalSetting} />
              : null
            }
            {settingModal === true ? (
              <ModalOne article_id={props.article_id} is_deleteModal />
            ) : (
              <React.Fragment />
            )}
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <UserProfileBox>
        <ImgBox>
          <UserImg />
        </ImgBox>
        <InfoBox>
          <Text bold="bold" size="16px" margin="2px 0 5px 0">
            {loginId}
          </Text>
          <Text bold="100" color="#5B7083">
            @{nickname}
          </Text>
        </InfoBox>
        <ToggleBox>
          <Toggle onClick={toggleModalSetting} />
          {settingModal === true ? (
            <ModalOne is_userModal />
          ) : (
            <React.Fragment />
          )}
        </ToggleBox>
      </UserProfileBox>
    </React.Fragment>
  );
};

LeftUser.deafultProps = {
  is_commentUser: false,
};

const UserProfileBox = styled.div`
  width: 262px;
  height: 74px;
  padding: 10px;
  border-radius: 9999px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  &:hover {
    background-color: #efefef;
    transition: 0.2s;
  }
  &:not(:hover) {
    transition: 0.2s;
  }
`;

const ImgBox = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

const InfoBox = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  padding-left: 5px;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const ToggleBox = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Toggle = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 100%;
  background-image: url(${ellipses});
  background-size: 70%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;


  &:hover {
    background-color: #ccc;
    transition: 0.2s;
  }
  &:not(hover) {
    transition: 0.2s;
  }
`;

export default LeftUser;
