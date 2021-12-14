import React from 'react';

import { Grid, Text } from '../elements';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import styled from 'styled-components';

const Header = (props) => {


  return(
    <React.Fragment>
      <Header_ 
        is_flex 
        justify='space-between'
        align='center'
        padding='10px'
        position='fixed'
        bg='#fff'
      >
        <Text bold>Home</Text>
        <AutoAwesomeIcon/>
      </Header_>
    </React.Fragment>
  )
};

const Header_ = styled.div`
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  border: 1px solid red;
`

export default Header;