/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { Grid, Text, Image, Button } from "../elements"; 
import styled from 'styled-components'
import LeftUser from "../components/LeftUser";
import DetailArticle from '../components/DetailArticle'
import Comment from '../components/Comment'
import CenterNavi from "../components/CenterNavi";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";

const Detail = (props) => {
  const dispatch = useDispatch();
  const article_list = useSelector(state => state.article.list);
  const user_id = localStorage.getItem('loginId');
  const article_id = props.match.params.id;
  const idx = article_list.findIndex(a => a.id === article_id);
  const article = article_list[idx];

  React.useEffect(() => {
    if(!article_id) {
      return ;
    }

    dispatch(articleActions.getDetailDB(article_id));
  }, [])

  return(
    <React.Fragment>
      <CenterBox>
        <HeadBox>
          <CenterNavi text='Tweet'/>
        </HeadBox>
        <DetailArticle 
          {...article}
          is_me = {user_id === 'chung'? true : false} 
        /> 

        <Grid is_flex align padding='12px 0' borderB>
          <Grid is_flex>
            <LeftUser writeComment/>
            <TextArea contentEditable={true} data-text="Tweet your reply"></TextArea>
          </Grid>
          <Button
            height='40px'
            font_color='#fff'
            font_size='15px' 
            padding='0 16px' 
            margin='0 0 0 12px'
            position='relative'
            >Reply</Button>
        </Grid>

        <Comment/>
      </CenterBox>

    </React.Fragment>
  )
};

const TextArea = styled.div`
  width: 68%;
  color: #000;
  padding: 12px 4px;
  border: 1px solid #000;
  /* outline: none; */

  &[contentEditable=true]:empty:not(:focus):before{
    content:attr(data-text)
  }
`

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

export default Detail;