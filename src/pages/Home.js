/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react';

import { Grid, Text, Image } from '../elements';
import Feed from '../components/Feed';
import Header from '../components/Header';
import SideMenu from '../components/SideMenu';

import {useDispatch, useSelector} from 'react-redux'
import { actionCreators as articleActions } from '../redux/modules/article';

const Main = (props) => {
  const dispatch = useDispatch();
  const articleList = useSelector(state => state.article.list);
  // console.log(list); 확인완료

  React.useEffect(() => {
    dispatch(articleActions.getArticleDB());
  }, [])

  return (
    <React.Fragment>
      <Grid is_flex>
        <Grid width='275px'>
          <Header/>
        </Grid>
        <Grid>
          <SideMenu/>
        </Grid>
        <Grid is_flex>
          <Feed></Feed>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Main;