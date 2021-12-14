import React from 'react';
// import styled from "styled-components";
import {Grid, Button, Image} from '../elements/index';
import logo from '../icons/Vector.png'
// 아이콘
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PendingIcon from '@mui/icons-material/Pending';


import Profile from '../sub_components/Profile';

const SideMenu = (props) => {
  // const menu = ['Home', 'Explore', 'Notifications', 'Messages', 'Bookmarks', 'Lists', 'Profile', 'More'];

  return (
    <React.Fragment>
      <Grid is_flex column justify='space-between' width='275px'>
        <Grid margin='45px 0 0'>
          <Image size='36' src={logo}/>
          <Button is_menuHover center bg='#fff' width='auto' font_size='20px'>
            <HomeIcon style={{marginRight:'15px'}}/>
            Home
          </Button>
          <Button is_menuHover center bg='#fff' width='auto' font_size='20px'>
            <SearchIcon style={{marginRight:'15px'}}/>
            Explore
          </Button>
          <Button is_menuHover center bg='#fff' width='auto' font_size='20px'>
            <NotificationsNoneIcon style={{marginRight:'15px'}}/>
            Notifications
          </Button>
          <Button is_menuHover center bg='#fff' width='auto' font_size='20px'>
            <MailOutlineIcon style={{marginRight:'15px'}}/>
            Messages
          </Button>
          <Button is_menuHover center bg='#fff' width='auto' font_size='20px'>
            <BookmarkBorderIcon style={{marginRight:'15px'}}/>
            Bookmarks
          </Button>
          <Button is_menuHover center bg='#fff' width='auto' font_size='20px'>
            <ListAltIcon style={{marginRight:'15px'}}/>
            Lists
          </Button>
          <Button is_menuHover center bg='#fff' width='auto' font_size='20px'>
            <PermIdentityIcon style={{marginRight:'15px'}}/>
            Profile
          </Button>
          <Button is_menuHover center bg='#fff' width='auto' font_size='20px'>
            <PendingIcon style={{marginRight:'15px'}}/>
            more
          </Button>
          <Button bold bg='#1DA1F2' is_tweeterHover font_color='#fff' width='90%'>tweet</Button>
        </Grid>
        <Profile/>
      </Grid>
    </React.Fragment>
  )
}

export default SideMenu;