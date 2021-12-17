/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import styled from "styled-components";


// home components
import CenterNavi from "../components/CenterNavi";
import CenterTweet from "../components/CenterTweet";
import CenterButtons from "../components/CenterButtons";
import CenterFeed from "../components/CenterFeed";
import CenterEdit from "../components/CenterEdit";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";

const Home = (props) => {
  const {history} = props;
  const dispatch = useDispatch();
  const article_list = useSelector(state => state.article.list);
  console.log(article_list)

  const user = useSelector(state => state.user)
  console.log(user)

  React.useEffect(() => {
    dispatch(articleActions.getArticleDB());
  }, [])

  // const [ modal, setModal ] = React.useState(true);

  // const modalButton = () => {
  //   setModal(!modal)
  // }

  return (
    <React.Fragment>
        <CenterBox>
          <HeadBox>
            <CenterNavi />
          </HeadBox>
          <WhatsBox>
            <CenterTweet/>
          </WhatsBox>
          <CenterButtons />
          {article_list.map(a => {
            return(
              <CenterFeed is_centerFeed
                key={a.id} 
                {...a} 
                _onClick={() => {history.push(`/detail/${a.id}`)}}
              /> 
            )
          })}
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
`;

const HeadBox = styled.div`
  width: 100%;
  height: 53px;
  display: inline-block;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 999;
`;

const WhatsBox = styled.div`
  width: 100%;
  height: 125px;
  border-bottom: 1px solid #efefef;
`;


export default Home;
