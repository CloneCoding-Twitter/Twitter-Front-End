/* eslint-disable no-sequences */
/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";

import { Grid, Text, Image, Button } from "../elements"; 
import styled from 'styled-components'
import DetailArticle from '../components/DetailArticle'
import CenterNavi from "../components/CenterNavi";
import CenterTweet from "../components/CenterTweet";
import CenterFeed from "../components/CenterFeed";

import { useDispatch, useSelector } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";
import { actionCreators as commentActions } from "../redux/modules/comment";

const Detail = (props) => {
  const dispatch = useDispatch();
  const comment_list = useSelector(state => state.comment.list);
  const article_list = useSelector(state => state.article.list);
  const _article_list = article_list? [...article_list] : null;

  const user_id = localStorage.getItem('loginId');
  const article_id = props.match.params.id;
  const idx = _article_list.findIndex(a => a.id === article_id);
  const article = _article_list[idx];

  // 새로고침하면 article 작성자의 id를 받을 수 없어 
  // 예외처리로 article의 데이터가 존재하지 않을 때는 null을 주었다.
  const loginId = article? article.loginId: null

  React.useEffect(() => {
    if(!article_id) {
      return ;
    }

    dispatch(commentActions.getCommentDB(article_id));
    dispatch(articleActions.getDetailDB(article_id));
  }, [])

  return(
    <React.Fragment>
      <CenterBox>
        <HeadBox>
          <CenterNavi is_tweetNavi text="Tweet" />
        </HeadBox>
        <DetailArticle 
          article_id={article_id}
          {...article}
          is_me_ = {user_id === loginId} 
        />
        <Grid is_flex="flex" borderB padding="15px 0 5px 0">
          <CenterTweet is_commentTweet article_id={article_id}/>
        </Grid>
        <Grid>
          {comment_list.map(c => {
            return(
              <CenterFeed
                key={c.id}
                is_commentFeed
                comment={c}
                article_id={article_id}
                com_id={c.id}
                is_me_={c.loginId === user_id}
              />
            )
          })}
        </Grid>
      </CenterBox>

    </React.Fragment>
  )
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
`;

export default Detail;