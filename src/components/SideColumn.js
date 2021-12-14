import React from 'react';

import News from '../sub_components/News';
import Follow from '../sub_components/Follow';
import { Input } from '../elements';

const SideColumn = (props) => {


  return(
    <React.Fragment>
      <Input/>
      <News/>
      <Follow/>
    </React.Fragment>
  )
}

export default SideColumn;