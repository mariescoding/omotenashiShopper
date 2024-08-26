import React from 'react';

import Stack from '@mui/material/Stack';
import { PageButton } from '../elements/PageButton';

import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export const Footer : React.FC = () => {
    return (
      // <Stack >
      //   <PageButton caption = 'Home' iconName=''/>
      //   <PageButton caption = 'Favorites' iconName=''/>
      //   <PageButton caption = 'Sell' iconName=''/>
      //   <PageButton caption = 'Inbox' iconName=''/>
      //   <PageButton caption = 'Profile' iconName=''/>
      // </Stack>

  
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
        <BottomNavigationAction label="Favorites" icon={<FavoriteBorderOutlinedIcon />} />
        <BottomNavigationAction label="Sell" icon={<StorefrontOutlinedIcon />} />
        <BottomNavigationAction label="Inbox" icon={<ChatBubbleOutlineOutlinedIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonOutlineOutlinedIcon />} />

      </BottomNavigation>
      
    )
}
