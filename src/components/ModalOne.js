import React from "react";
import styled from "styled-components";
import { Text } from "../elements";
import check from "../icons/check.svg";
import testpic from "../img/test_pic.png";

const ModalOne = (props) => {
  const {
    is_userModal,
    is_deleteModal,
    is_nomalModal,
  } = props;

  if (is_userModal) {
    return (
      <React.Fragment>
        <ModaBox>
          <UserProfileBox>
            <ImgBox>
              <UserImg />
            </ImgBox>
            <InfoBox>
              <Text bold="bold" size="16px" margin="2px 0 5px 0">
                UserId
              </Text>
              <Text bold="100" color="#5B7083">
                @nickname
              </Text>
            </InfoBox>
            <ToggleBox>
              <Toggle />
            </ToggleBox>
          </UserProfileBox>
          <ContentBox>
            <TboxTop>
              <Text>Add an existing account</Text>
            </TboxTop>
            <TboxBottom>
              <Text>Log out @nickname</Text>
            </TboxBottom>
          </ContentBox>
        </ModaBox>
      </React.Fragment>
    );
  }

  if (is_deleteModal) {
    return (
      <React.Fragment>
        <ModalBoxTwo>
          <TextBox>
            <Icons />
            <Text>Delete</Text>
          </TextBox>
          <TextBox>
            <Icons />
            <Text>Unfollow Music</Text>
          </TextBox>
          <TextBox>
            <Icons />
            <Text>Unfollow Music</Text>
          </TextBox>
          <TextBox>
            <Icons />
            <Text>Unfollow Music</Text>
          </TextBox>
          <TextBox>
            <Icons />
            <Text>Unfollow Music</Text>
          </TextBox>
        </ModalBoxTwo>
      </React.Fragment>
    );
  }

  if (is_nomalModal) {
    return (
      <React.Fragment>
      </React.Fragment>
    );
  }

};

ModalOne.defaultProps = {
  is_userModal: false,
  is_deleteModal: false,
  is_nomalModal: false,
}

// userModla styled
const ModaBox = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.18);
  display: flex;
  overflow: hidden;
  background-color: #fff;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: fixed;
  left: 0%;
  bottom: 13%;
  z-index: 1;

  @media all and (min-width: 1240px) {
    left: 6.7%;
  }

  @media all and (min-width: 1920px) {
    left: 17.5%;
  }
`;

const UserProfileBox = styled.div`
  width: 100%;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #efefef;
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
  background-image: url(${check});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;

const ContentBox = styled.div`
  width: 100%;
  height: 60%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;

const TboxTop = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding-left: 15px;
  cursor: pointer;

  &:hover {
    background-color: #efefef;
    transition: 0.2s;
  }
  &:not(:hover) {
    transition: 0.2s;
  }
`;

const TboxBottom = styled(TboxTop)``;

// deleteModal styled
const ModalBoxTwo = styled.div`
  width: 327px;
  height: 290px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgb(0, 0, 0, 0.18);
  overflow: hidden;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 0%;
  top: -50%;
  z-index: 1;
  cursor: pointer;

  @media all and (min-width: 1240px) {
    right: 45%;
  }

  @media all and (min-width: 1920px) {
    right: 40%;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 20%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  padding-left: 10px;
  &:hover {
    background-color: #efefef;
    transition: 0.2s;
  }
  &:not(hover) {
    transition: 0.2s;
  }
`;

const Icons = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background-image: url(${check});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
`;


export default ModalOne;
