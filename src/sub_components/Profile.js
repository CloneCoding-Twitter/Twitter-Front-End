import React from 'react';

import { Grid, Image, Text } from '../elements';
import pisick from '../icons/pysick.jpg'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const Profile = (props) => {


  return (
    <React.Fragment>
      <Grid is_flex>
        <Image shape='circle' src={pisick}/>
        <Grid>
          <Text bold>Chung</Text>
          <Text>@Chungun</Text>
        </Grid>
        <Grid width='auto'>
          <MoreHorizIcon/>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}

export default Profile;