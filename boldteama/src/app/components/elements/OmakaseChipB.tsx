import React from 'react';

import { Container, Stack, Box } from '@mui/material';
import Link from 'next/link'
import Chip from '@mui/material/Chip';
import StarIcon from '@mui/icons-material/Star';

type Props = {
    handleClick:  () => void ; 
    page: string;

}

export const OmakaseChipB : React.FC <Props>= ({handleClick, page}) => {

    return (
        <Link href={page} >
             <Chip label= "Omakase" icon={<StarIcon sx={{ color: "white" }}/>} 
        variant = 'filled' component="a" clickable onClick={handleClick}
        sx ={{color: "white", backgroundColor: '#5255EE', padding: '11px 6px', margin : 3}} >
            
        </Chip>
        </Link>
       

    )
}