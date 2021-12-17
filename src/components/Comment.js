import React from "react";

import { Grid } from "../elements";
import CenterTweet from "./CenterTweet";
import CenterFeed from "./CenterFeed";

const Comment = (props) => {
  return (
    <React.Fragment>
      <Grid>
        <Grid is_flex="flex" borderB>
          <CenterTweet is_commentTweet />
        </Grid>
        <Grid is_flex="flex">
          <CenterFeed is_commentFeed />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Comment;