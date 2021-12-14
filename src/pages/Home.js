import React from 'react';

import { Grid, Text, Image } from '../elements';
import Feed from '../components/Feed';

import {useDispatch, useSelector} from 'react-redux'
import { actionCreators as articleActions } from '../redux/modules/article';

const Main = (props) => {
  const dispatch = useDispatch();
  const list = useSelector(state => state.article.list);
  // console.log(list); 확인완료

  React.useEffect(() => {
    dispatch(articleActions.getArticleDB());
  }, [])

  return (
    <React.Fragment>
      <Grid is_flex>
        <Feed></Feed>
      </Grid>
    </React.Fragment>
  )
}

export default Main;