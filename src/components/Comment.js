import React from "react";

import { Grid, Text } from "../elements"; 
import LeftUser from "../components/LeftUser";

const Comment = (props) => {


  return(
    <React.Fragment>
        <Grid padding='12px 0 0'>
          <LeftUser ></LeftUser>

          <Grid>
            <Text>content</Text>
          </Grid>
          
        </Grid>
    </React.Fragment>
  )
};

export default Comment