import React from 'react';
import {Grid, Button} from '../elements/index';

const Header = (props) => {
  const menu = ['Home', 'Explore', 'Notifications', 'Messages', 'Bookmarks', 'Lists', 'Profile', 'More'];

  return (
    <React.Fragment>
      <Grid is_flex is_wrap column bold width='275px'>
        <div style={{padding: '4px 0 0'}}>
          {menu.map((m, i) => {
            return(
              <Button key={i} bold is_menuHover bg='#fff' margin='' padding='15px 0 '>{m}</Button>
            );
          })};
        </div>
        <Button bold bg='#1DA1F2' is_tweeterHover font_color='#fff'>tweet</Button>
      </Grid>
    </React.Fragment>
  )
}

export default Header;