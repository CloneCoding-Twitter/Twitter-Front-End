import React from "react";

import { Grid } from "../elements";
import CenterTweet from "./CenterTweet";
import CenterFeed from "./CenterFeed";

const Comment = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex="flex" borderB padding="15px 0 5px 0">
          <CenterTweet is_commentTweet />
        </Grid>
        <Grid is_flex="flex" padding="5px 0">
          <CenterFeed is_commentFeed />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Comment;