import React from 'react';

import { Container, Stack, Box } from '@mui/material';

import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';

type Props = {
    handleClick:  () => void ; 

}

export const OmakaseChipB : React.FC <Props>= ({handleClick}) => {

    return (
        
        <Chip label= "Omakase" icon={<StarIcon sx={{ color: "white" }}/>} 
        variant = 'filled' component="a" clickable onClick={handleClick}
        sx ={{color: "white", backgroundColor: '#5255EE', padding: '11px 6px', margin : 3}} >
            
        </Chip>

    )
}