import React from "react";
import styled from "styled-components";
import { Text } from "../elements";

const RightText = (props) => {
  return (
    <React.Fragment>
      <TopBox>
        <Text color="#536471" bold="200" size="12px" margin="0 12px 0 0">
          Terms of Service
        </Text>
        <Text color="#536471" bold="200" size="12px" margin="0 12px 0 0">
          Privacy Policy
        </Text>
        <Text color="#536471" bold="200" size="12px" margin="0 12px 0 0">
          Cookie Policy
        </Text>
        <Text color="#536471" bold="200" size="12px" margin="0 12px 0 0">
          Ads info
        </Text>
        <Text color="#536471" bold="200" size="12px" margin="0 12px 0 0">
          more ···
        </Text>
        <Text color="#536471" bold="200" size="12px" margin="0 12px 0 0">
          © 2021 Twitter, Inc.
        </Text>
      </TopBox>
    </React.Fragment>
  );
};

const TopBox = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 15px;
  padding: 10px 16px;
  padding-bottom: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
`;

export default RightText;
