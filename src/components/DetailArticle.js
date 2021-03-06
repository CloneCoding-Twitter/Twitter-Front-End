import React from "react";

import { Grid, Text, Image, Button } from "../elements";
import LeftUser from "../components/LeftUser";

// icons
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import IosShareIcon from '@mui/icons-material/IosShare';


const DetailArticle = (props) => {
  const {content, id, nickname, img, is_me_, article_id} = props;
  return(
    <React.Fragment>
      <Grid>
        <Grid is_flex justify='space-between'>
          <LeftUser is_commentUser id={id} nickname={nickname} is_me_={is_me_} article_id={article_id} />
        </Grid>

        <Grid margin='10px 0 0' padding="0 20px">
          <Text size="17px" line="22px" >{content}</Text>
        </Grid>

        <Grid margin='15px 0 0' padding="0 20px">
          <Image shape='rectangle' src={img}/>
        </Grid>

        <Grid padding='16px 20px'>
          <Text >5:20&nbsp;·&nbsp;Dec 16, 2021</Text>
        </Grid>

        <Grid is_flex justify='space-around' padding='15px 20px' borderT borderB cursor="pointer" >
          {/* 댓글 */}
          <ChatBubbleOutlineIcon style={{fontSize:"23px", color:"#cccccc"}}/>
          {/* 리트윗 */}
          <AutorenewIcon style={{fontSize:"23px", color:"#cccccc"}}/>
          {/* 좋아요 */}
          <FavoriteBorderIcon style={{fontSize:"23px", color:"#cccccc"}}/>
          {/* 공유 */}
          <IosShareIcon style={{fontSize:"23px", color:"#cccccc"}}/>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default DetailArticle;