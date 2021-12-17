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

const DetailArticle = (props) => {


  return(
    <React.Fragment>
      <Grid>
        <Grid is_flex justify='space-between'>
          <LeftUser is_deleteModal></LeftUser>
        </Grid>

        <Grid margin='15px 0 0'>
          <Text>content</Text>
        </Grid>

        <Grid border margin='15px 0 0' radius='10px'>
          <Image shape="rectangle" src={testpic}/>
        </Grid>

        <Grid padding='16px 4px' borderB>
          <Text >5:20&nbsp;·&nbsp;Dec 16, 2021</Text>
        </Grid>

        <Grid is_flex justify='space-around' padding='15px 20px' borderB>
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

export default DetailArticle