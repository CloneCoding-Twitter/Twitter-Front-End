import React from "react";
import styled from "styled-components";
import { Button } from "../elements";

const CenterButtons = (props) => {
  return (
    <React.Fragment>
      <ButtonBox>
        <Button
          _onClick={() => window.open('https://github.com/23hh', '_blank')}
          padding="0 0 0 7px"
          is_border
          width="120px"
          height="38px"
          font_size="16px"
          bold="bold"
          margin="0 10px 0 0"
        >
          6조 이상협 😎
        </Button>

        <Button
          _onClick={() => window.open('https://github.com/JooYoung2274', '_blank')}
          padding="0 0 0 7px"
          is_border
          width="120px"
          height="38px"
          font_size="16px"
          bold="bold"
          margin="0 10px 0 0"
        >
         6조 김주영 🤓
        </Button>

        <Button
          _onClick={() => window.open('https://github.com/Chungune', '_blank')}
          padding="0 0 0 7px"
          is_border
          width="120px"
          height="38px"
          font_size="16px"
          bold="bold"
          margin="0 10px 0 0"
        >
          6조 정민수 🥳
        </Button>

        <Button
          _onClick={() => window.open('https://github.com/yong313', '_blank')}
          padding="0 0 0 7px"
          is_border
          width="120px"
          height="38px"
          font_size="16px"
          bold="bold"
          margin="0 10px 0 0"
        >
          6조 전용태 🥸
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
