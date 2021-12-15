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
  const {id, loginId, nickname, content, image} = props;
  const dispatch = useDispatch();

  const articleDelete = () => {
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
            <Text bold>{loginId}</Text>&nbsp;
            <Text>{`@${nickname}`}</Text>&nbsp;
            {/* <Text>23s</Text> */}
            <Button _onClick={articleDelete}>Delete</Button>
          </Grid>

          <Text>{content}</Text>

          <Grid>
            <Image shape={image} src={pysick}/>
          </Grid>

          <Grid is_flex justify='space-between' width='80%'>
            {/* 댓글 */}
            <ChatBubbleOutlineIcon style={{fontSize:"14px"}}/>
            <Text>61</Text>
            {/* 리트윗 */}
            <AutorenewIcon style={{fontSize:"14px"}}/>
            <Text>12</Text>
            {/* 좋아요 */}
            <FavoriteBorderIcon style={{fontSize:"14px"}}/> 
            <Text>6.2k</Text>
            {/* 공유 */}
            <IosShareIcon style={{fontSize:"14px"}}/>
            <Text>61</Text>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

Article.defaultProps = {
  id: '1',
  loginId: 'chungun',
  nickname: 'chungun',
  content: 'css때문에 그만둘지도...',
  image: 'https://previews.123rf.com/images/file404/file4041507/file404150705922/42343915-%EC%A0%88%EB%A7%9D%EC%9D%98-%EC%82%AC%EB%9E%8C.jpg'
}

export default Article;