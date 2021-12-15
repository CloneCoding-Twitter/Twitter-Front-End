import React from 'react';

import { Grid, Text, Image, Button, Input } from '../elements';
import Article from '../sub_components/Article';
import pysick from '../icons/pysick.jpg';
import styled from 'styled-components';
import ImageIcon from '@mui/icons-material/Image';

import {useDispatch, useSelector} from 'react-redux';
import { actionCreators as ArticleActions } from '../redux/modules/article';
import { ActionCreators as imageActions } from '../redux/modules/image';

const Feed = (props) => {
  const dispatch = useDispatch();
  const articleList = useSelector(state => state.article.list);
  const preview = useSelector(state => state.image.preview_url);
  const [content, setContent] = React.useState('');
  const [image, setImage] = React.useState();
  const ImageFile = React.useRef();
  // const id = props.match.params
  // console.log(image);
  // console.log(preview);
  console.log(preview);

  const selectFile = () => {
    const reader = new FileReader();
    const file = ImageFile.current.files[0];
    console.log(file);
    
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      dispatch(imageActions.setPreview(reader.result));
      if(file) {
        setImage(file);
      }
    }
  };

  const onChange = (e) => {
    setContent(e.target.value);
  };

  const addArticle = () => {
    dispatch(ArticleActions.addArticleDB(content, image))
    setContent('')
  };

  // const editArticle = () => {
  //   const id = 1
  //   dispatch(ArticleActions.editArticleDB(id, content, image));
  // }
  


  return (
    <React.Fragment>
      <Grid width='100%'>
        <Grid>
          <Grid is_flex align="center" justify='space-between' padding='10px' margin='45px 0 0'>
            <Image shape='circle' src={pysick}/>
            <input
              style={{
                width: '100%',
              }}
              placeholder='What′s happening?'
              onChange={onChange}
              value={content}
            >
            </input>
            {/* 삼항연산자로 preview 있으면 띄우고 없으면 none */}
            <div style={{border:'1px solid red'}}>
              <Image src={preview? preview: ''} /> 
            </div>
          </Grid>
          <Grid is_flex>
            <label for="input-file">
              <ImageIcon style={{color: '#1DA1F2'}}/>
            </label>
            <input 
              type="file" 
              id="input-file" 
              style={{display:"none"}}
              onChange={selectFile}
              ref={ImageFile}
            />
            <Button width='30%' _onClick={addArticle}>Tweet</Button>
          </Grid>
        </Grid>

        <Grid>
          {articleList.map((l) => {
            return(
              <Article {...l}/>
            )
          })}
        </Grid>
      </Grid>
    </React.Fragment>
  )
}





export default Feed;