import React from 'react';

import Box from '@mui/material/Box';

export const AddCartButton : React.FC = () => {
    return (

       <Box 
       component="img"
       src="src/public/assets/addCart.png"
       alt="My Image"
       sx={{width: '100%', height: 'auto', position:"absolute", bottom:0}}
       >
       </Box>
    )
}