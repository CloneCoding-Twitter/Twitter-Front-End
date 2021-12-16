import React from "react";

import { Grid, Text, Image, Button } from "../elements"; 
import styled from 'styled-components'
import LeftUser from "../components/LeftUser";
import DetailArticle from '../components/DetailArticle'
import Comment from '../components/Comment'


import { useDispatch, useSelector } from "react-redux";

const Detail = (props) => {
  const dispatch = useDispatch();
  const article_list = useSelector(state => state.article.list);
  const id = props.match.params.id;
  const idx = article_list.findIndex(a => a.id === id);
  console.log(idx);
  const article = article_list[idx];

  React.useEffect(() => {

  })

  return(
    <React.Fragment>
      <DetailArticle {...article}/> {/* props로 전해주기 */}

      {/* <Grid is_flex align padding='12px 0' borderB>
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
      </Grid> */}

      <Comment/>


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

// const Test = styled.textarea`
//   min-height: 5rem;
//   overflow-y: hidden;
//   resize: none;
// `

export default Detail;