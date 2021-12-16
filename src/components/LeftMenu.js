import React from "react";
import styled from "styled-components";
import { Grid, Button } from "../elements";

import twitter_logo_small from "../img/twitter_logo_small.svg";

// icons image
import home from "../icons/home.svg";
import explore from "../icons/explore.svg";
import notifications from "../icons/notifications.svg";
import messages from "../icons/messages.svg";
import bookmarks from "../icons/bookmarks.svg";
import lists from "../icons/lists.svg";
import profile from "../icons/profile.svg";
import more from "../icons/more.svg";



const LeftMenu = (props) => {
  return (
    <React.Fragment>
      <TwitterLogoSmall />
      <Grid margin="10px 0 8px 0">
        <Button is_listMenu>
          <Icons1 />
          Home
        </Button>
      </Grid>
      <Grid margin="0 0 8px 0">
        <Button is_listMenu>
          <Icons2 />
          Explore
        </Button>
      </Grid>
      <Grid margin="0 0 8px 0">
        <Button is_listMenu>
          <Icons3 />
          Notifications
        </Button>
      </Grid>
      <Grid margin="0 0 8px 0">
        <Button is_listMenu>
          <Icons4 />
          Messages
        </Button>
      </Grid>
      <Grid margin="0 0 8px 0">
        <Button is_listMenu>
          <Icons5 />
          Bookmarks
        </Button>
      </Grid>
      <Grid margin="0 0 8px 0">
        <Button is_listMenu>
          <Icons6 />
          Lists
        </Button>
      </Grid>
      <Grid margin="0 0 8px 0">
        <Button is_listMenu>
          <Icons7 />
          Profile
        </Button>
      </Grid>
      <Grid margin="0 0 8px 0">
        <Button is_listMenu>
          <Icons8 />
          More
        </Button>
      </Grid>
      <Grid margin="18px 0 0 0">
        <Button
          is_tweeterHover
          width="226px"
          height="52px"
          font_color="#fff"
          bold="900"
        >
          Tweet
        </Button>
      </Grid>
    </React.Fragment>
  );
};

const TwitterLogoSmall = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 100%;
  background-color: transparent;
  background-image: url(${twitter_logo_small});
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;

  &:hover {
    background-color: #e4f2fb;
    transition: 0.2s;
  }

  &:not(:hover) {
    transition: 0.2s;
  }
`;

const Icons1 = styled.div`
  width: 26px;
  height: 26px;
  background-image: url(${home});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 20px;
`;

const Icons2 = styled(Icons1)`
  background-image: url(${explore});
`;

const Icons3 = styled(Icons1)`
  background-image: url(${notifications});
`;

const Icons4 = styled(Icons1)`
  background-image: url(${messages});
`;

const Icons5 = styled(Icons1)`
  background-image: url(${bookmarks});
`;

const Icons6 = styled(Icons1)`
  background-image: url(${lists});
`;

const Icons7 = styled(Icons1)`
  background-image: url(${profile});
`;

const Icons8 = styled(Icons1)`
  background-image: url(${more});
`;

export default LeftMenu;
