/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";


// home components
import CenterNavi from "../components/CenterNavi";
import CenterTweet from "../components/CenterTweet";
import CenterButtons from "../components/CenterButtons";
import CenterFeed from "../components/CenterFeed";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";

const Home = (props) => {
  const dispatch = useDispatch();
  // const article_list = useSelector(state => state.article.list);
  // console.log(article_list)
  console.log('첫번째')
  // console.log(props)

  // React.useEffect(() => {
  //   console.log('두번째')
  //   dispatch(articleActions.getArticleDB());
  // }, [])

  return (
    <React.Fragment>
          
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
      
    </React.Fragment>
  );
};



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
  padding: 0 13px;
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


export default Home;
