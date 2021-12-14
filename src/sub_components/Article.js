import React from 'react';

import {useDispatch} from 'react-redux';
import { actionCreators as ArticleActions } from '../redux/modules/article';

import { Grid, Image, Text, Button } from '../elements';
import pysick from '../icons/pysick.jpg'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';

const Article = (props) => {
  const dispatch = useDispatch();

  const articleDelete = () => {
    const id = 1
    dispatch(ArticleActions.deleteArticleDB(id));
  }

  return (
    <React.Fragment>
      <Grid is_flex padding='10px'>
        <Grid width='auto'>
          <Image shape='circle' src={pysick}/>
        </Grid>

        <Grid>
          <Grid is_flex>
            <Text bold>Chung</Text>&nbsp;
            <Text>@Chungun</Text>&nbsp;
            <Text>23s</Text>
            <Button _onClick={articleDelete}>삭제</Button>
          </Grid>

          <Text>css힘들어</Text>

          <Grid>
            <Image shape='rectangle' src={pysick}/>
          </Grid>

          <Grid is_flex justify='space-between' width='80%'>
            <ChatBubbleOutlineIcon style={{fontSize:"14px"}}/>
            <Text>61</Text>
            <AutorenewIcon style={{fontSize:"14px"}}/>
            <Text>12</Text>
            <FavoriteBorderIcon style={{fontSize:"14px"}}/>
            <Text>6.2k</Text>
            <IosShareIcon style={{fontSize:"14px"}}/>
            <Text>61</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Article;