import React from 'react';

import { theme } from '@/app/theme';
import Chip from '@mui/material/Chip';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

// make font bigger & bold 

type Props = {
    price: string; 
}

export const PriceTag : React.FC<Props> = ({price}) => {
    return (
        <>
        <Box
            sx={{
              backgroundColor: '#5255EE',
              padding: '3px 8px',
              borderRadius: 2,
              display: 'flex',
              justifyContent: 'flex-end',
              width: '70px',
              height: '30px'
            }}
            
          >
            <Typography color="white" sx={{fontSize: "20px"}}>
              ${price}
            </Typography>
        </Box>
        </>

       
    )
}