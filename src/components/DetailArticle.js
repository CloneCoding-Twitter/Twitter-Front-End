import React from "react";

import { Grid, Text, Image, Button } from "../elements"; 
import styled from 'styled-components'
import LeftUser from "../components/LeftUser";
import testpic from "../img/test_pic.png"
import ModalOne from "./ModalOne";

// icons
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

import { useDispatch } from "react-redux";
import { actionCreators as articleActions } from "../redux/modules/article";

const DetailArticle = (props) => {
  const {content, id, img, is_me} = props;
  const dispatch = useDispatch();
  console.log(props);

  const deleteArticle = () => {
    dispatch(articleActions.deleteArticleDB(id))
  }

  return(
    <React.Fragment>
      <Grid>
        <Grid is_flex justify='space-between'>
          <LeftUser></LeftUser>
        </Grid>

        <Grid margin='10px 0 0' padding="0 20px">
          <Text line="24px">{content}</Text>
          {is_me && (
            <Button
              _onClick={deleteArticle}
            >삭제</Button>
          )}
        </Grid>

        <Grid margin='15px 0 0' padding="0 20px">
          <Image main src={img}/>
        </Grid>

        <Grid padding='16px 20px'>
          <Text >5:20&nbsp;·&nbsp;Dec 16, 2021</Text>
        </Grid>

        <Grid is_flex justify='space-around' padding='15px 20px' borderT borderB cursor="pointer" >
          {/* 댓글 */}
          <ChatBubbleOutlineIcon style={{fontSize:"23px",}}/>
          {/* 리트윗 */}
          <AutorenewIcon style={{fontSize:"23px"}}/>
          {/* 좋아요 */}
          <FavoriteBorderIcon style={{fontSize:"23px"}}/>
          {/* 공유 */}
          <IosShareIcon style={{fontSize:"23px"}}/>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default DetailArticle;