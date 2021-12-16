import React from "react";
import styled from "styled-components";
import { Button } from "../elements";

const CenterButtons = (props) => {
  return (
    <React.Fragment>
      <ButtonBox>
        <Button
          is_border
          width="120px"
          height="38px"
          font_size="16px"
          bold="bold"
          margin="0 10px 0 0"
        >
          항해99 ⛵️
        </Button>

        <Button
          is_border
          width="120px"
          height="38px"
          font_size="16px"
          bold="bold"
          margin="0 10px 0 0"
        >
          클론코딩 👨‍💻
        </Button>

        <Button
          is_border
          width="120px"
          height="38px"
          font_size="16px"
          bold="bold"
          margin="0 10px 0 0"
        >
          화이팅 🥳
        </Button>

        <Button
          is_border
          width="120px"
          height="38px"
          font_size="16px"
          bold="bold"
          margin="0 10px 0 0"
        >
          6조 최고 👍
        </Button>
      </ButtonBox>
    </React.Fragment>
  );
};

const ButtonBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  margin: 5px 0;
`;

export default CenterButtons;
