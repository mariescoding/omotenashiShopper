import React from 'react';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeIcon from '@mui/icons-material/Home';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const Footer : React.FC = () => {
    return (
  
      <BottomNavigation
        showLabels 
        //value={value}
        // onChange={(event, newValue) => {
        //   setValue(newValue);
        // }}
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />}/>
        <BottomNavigationAction label="Favorites" icon={<FavoriteBorderOutlinedIcon />} />
        <BottomNavigationAction label="Sell" icon={<StorefrontOutlinedIcon />} />
      
          <BottomNavigationAction label="Inbox" icon={<ChatBubbleOutlineOutlinedIcon />} />
     
       
        <BottomNavigationAction label="Profile" icon={<PersonOutlineOutlinedIcon />} />

      </BottomNavigation>
      
    )
}
