import React from "react";
import { withRouter } from "react-router-dom";

import styled from 'styled-components';
import LeftMenu from "../components/LeftMenu";
import LeftUser from "../components/LeftUser";

const LeftBox = (props) => {

  console.log(props.location.pathname)

  if(props.location.pathname === '/' ) {
    return null;
  }

  if(props.location.pathname === '/logincard' ) {
    return null;
  }

  if(props.location.pathname === '/signupcard' ) {
    return null;
  }

  return (
    <Left>
      <MenuBox>
        <LeftMenu />
      </MenuBox>
      <UserBox>
        <LeftUser />
      </UserBox>
    </Left>
  )
}

const Left = styled.div`
  width: 275px;
  height: 100vh;
`;

const MenuBox = styled.div`
  width: 100%;
  height: 90%;
  background-color: #fff;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  padding: 3px 8px;
`;

const UserBox = styled.div`
  width: 100%;
  height: 10%;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

// export default LeftBox;
export default withRouter(LeftBox);