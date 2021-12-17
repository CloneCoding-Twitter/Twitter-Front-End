import React from "react";
import styled from "styled-components";
import { Text } from "../elements";
import check from "../icons/check.svg";
import testpic from "../img/test_pic.png";

import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

//icons
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import InsertChartOutlinedIcon from '@mui/icons-material/InsertChartOutlined';
import AudiotrackOutlinedIcon from '@mui/icons-material/AudiotrackOutlined';

const ModalOne = (props) => {
  const dispatch = useDispatch();
  const loginId = localStorage.getItem("loginId");
  const nickname = localStorage.getItem("nickname");

  const logOut = () => {
    dispatch(userActions.logoutDB());
  };

  const { is_userModal, is_deleteModal, is_deleteModal2 } = props;

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
                {loginId}
              </Text>
              <Text bold="100" color="#5B7083">
                @{nickname}
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
            <TboxBottom onClick={logOut}>
              <Text>Log out @{nickname}</Text>
            </TboxBottom>
          </ContentBox>
        </ModaBox>
      </React.Fragment>
    );
  }
  if (is_deleteModal) {
    return (
      <React.Fragment>
        <ModalBoxTwo3>
          <TextBox>
            {/* 댓글 */}
            <DeleteOutlineIcon style={{
              color:"red",
              width: "20px",
              height: "20px",
              margin: "0 10px 0 4px",
            }}/>
            {/* 삭제 1번 */}
            <Text color="red">Delete</Text>
          </TextBox>
          <TextBox>
          <ModeEditOutlineOutlinedIcon style={{
              width: "20px",
              height: "20px",
              margin: "0 10px 0 4px",
            }}/>
            <Text>Edit tweet</Text>
          </TextBox>
          <TextBox>
          <CodeOutlinedIcon style={{
              width: "20px",
              height: "20px",
              margin: "0 10px 0 4px",
            }}/>
            <Text>Embed Tweet</Text>
          </TextBox>
          <TextBox>
          <InsertChartOutlinedIcon style={{
              width: "20px",
              height: "20px",
              margin: "0 10px 0 4px",
            }}/>
            <Text>View Tweet activity</Text>
          </TextBox>
        </ModalBoxTwo3>
      </React.Fragment>
    );
  }
  if (is_deleteModal2) {
    return (
      <React.Fragment>
        <ModalBoxTwo4>
          <TextBox>
          <DeleteOutlineIcon style={{
              color:"red",
              width: "20px",
              height: "20px",
              margin: "0 10px 0 4px",
            }}/>
            {/* 삭제 2번 */}
            <Text color="red">Delete</Text>
          </TextBox>
          <TextBox>
            <CodeOutlinedIcon style={{
              width: "20px",
              height: "20px",
              margin: "0 10px 0 4px",
            }}/>
            <Text>Embed Tweet</Text>
          </TextBox>
          <TextBox>
          <InsertChartOutlinedIcon style={{
              width: "20px",
              height: "20px",
              margin: "0 10px 0 4px",
            }}/>
            <Text>View Tweet activity</Text>
          </TextBox>
          <TextBox>
          <AudiotrackOutlinedIcon style={{
              width: "20px",
              height: "20px",
              margin: "0 10px 0 4px",
            }}/>
            <Text>Follow Music</Text>
          </TextBox>
        </ModalBoxTwo4>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <ModalBoxTwo>
        <TextBox>
          {/* <Icons /> */}
          <Text>basic</Text>
        </TextBox>
        <TextBox>
          {/* <Icons /> */}
          <Text>Unfollow Music</Text>
        </TextBox>
        <TextBox>
          {/* <Icons /> */}
          <Text>Unfollow Music</Text>
        </TextBox>
        <TextBox>
          {/* <Icons /> */}
          <Text>Unfollow Music</Text>
        </TextBox>
        <TextBox>
          {/* <Icons /> */}
          <Text>Unfollow Music</Text>
        </TextBox>
      </ModalBoxTwo>
    </React.Fragment>
  );
};

ModalOne.defaultProps = {
  is_userModal: false,
  is_deleteModal: false,
  is_deleteModal2: false,
};

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
    bottom: 11%;
    left: 17.2%;
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

// 삭제 모달
const ModalBoxTwo = styled.div`
  width: 327px;
  height: 230px;
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
  bottom: 20%;
  z-index: 9;
  cursor: pointer;

  @media all and (min-width: 1240px) {
    right: 45%;
  }

  @media all and (min-width: 1920px) {
    right: 40%;
  }

`;

const ModalBoxTwo3 = styled(ModalBoxTwo) `
  top: 14.5%;
  @media all and (min-width: 1240px) {
    right: 0%;
  }

  @media all and (min-width: 1920px) {
    top: 12%;
    right: 0%;
  }
`;

const ModalBoxTwo4 = styled(ModalBoxTwo) `
  bottom: 20%;
  @media all and (min-width: 1240px) {
    right: 45%;
  }

  @media all and (min-width: 1920px) {
    right: 40%;
  }
`;

const TextBox = styled.div`
  width: 100%;
  height: 25%;
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

export default ModalOne;
