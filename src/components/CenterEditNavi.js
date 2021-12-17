import React from "react";
import styled from "styled-components";
import left_arrow from "../icons/left_arrow.svg";
import { Text } from "../elements";


const CenterEditNavi = (props) => {
  const EditButton = props.change
  console.log(EditButton);
  return (
    <React.Fragment>
      <NaviBox>
        <IconBox>
          <BackButton />
        </IconBox>
        <TextBox>
          <Text size="20px" bold="bold">
            Edit your tweet
          </Text>
        </TextBox>
      </NaviBox>
    </React.Fragment>
  );
};

const NaviBox = styled.div`
  width: 100%;
  height: 53px;
  display: flex;
  background-color: #fff;
  opacity: 0.9;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
`;

const TextBox = styled.div`
  width: 90%;
  height: 53px;
  line-height: 53px;
  display: flex;
  align-items: center;
  padding-left: 10px;
`;

const IconBox = styled(TextBox)`
  width: 10%;
  justify-content: flex-end;
  padding: 0 10px 0 0;
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

export default CenterEditNavi;
