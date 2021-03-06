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
          6์กฐ ์ด์ํ ๐
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
         6์กฐ ๊น์ฃผ์ ๐ค
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
          6์กฐ ์ ๋ฏผ์ ๐ฅณ
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
          6์กฐ ์ ์ฉํ ๐ฅธ
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
