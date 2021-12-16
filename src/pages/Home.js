/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";

// home components
import LeftMenu from "../components/LeftMenu";
import LeftUser from "../components/LeftUser";
import CenterNavi from "../components/CenterNavi";
import CenterTweet from "../components/CenterTweet";
import CenterButtons from "../components/CenterButtons";
import CenterFeed from "../components/CenterFeed";
import RightSearch from "../components/RightSearch";
import RightForYou from "../components/RightForYou";
import RightWho from "../components/RightWho";
import RightText from "../components/RightText";

import { useDispatch } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";

const Main = (props) => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(articleActions.getArticleDB());
  }, []);

  return (
    <React.Fragment>
      <HomeBox>
        <LeftBox>
          <MenuBox>
            <LeftMenu />
          </MenuBox>
          <UserBox>
            <LeftUser />
          </UserBox>
        </LeftBox>

        <CenterBox>
          <HeadBox>
            <CenterNavi />
          </HeadBox>
          <WhatsBox>
            <CenterTweet />
          </WhatsBox>
          <CenterButtons />
          <CenterFeed />
        </CenterBox>

        <RightBox>
          <HeadBoxTwo>
            <RightSearch />
          </HeadBoxTwo>
          <RightForYou />
          <RightWho />
          <RightText />
        </RightBox>
      </HomeBox>
    </React.Fragment>
  );
};

const HomeBox = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  background-color: #fff;
`;

const LeftBox = styled.div`
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

const CenterBox = styled.div`
  width: 600px;
  height: 100vh;
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  border: 1px solid #efefef;
  border-top: none;
  border-bottom: none;
  overflow-y: scroll;
`;

const HeadBox = styled.div`
  width: 100%;
  height: 53px;
  display: inline-block;
  position: sticky;
  top: 0;
  left: 0;
`;

const WhatsBox = styled.div`
  width: 100%;
  height: 125px;
  border-bottom: 1px solid #efefef;
`;

const RightBox = styled.div`
  width: 350px;
  height: 100%;
  margin-left: 30px;
  position: relative;
  overflow-y: scroll;
  top: 0;
  left: 0;
`;

const HeadBoxTwo = styled.div`
  width: 100%;
  height: 46px;
  display: inline-block;
  position: sticky;
  top: 5px;
  right: 0;
  background-color: #fff;
`;

export default Main;
