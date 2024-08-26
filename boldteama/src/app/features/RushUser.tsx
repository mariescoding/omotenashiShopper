import React from 'react';

import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


export const RushUser : React.FC = () => {
    return (

        <Grid container spacing={2} >
            <Grid item xs = {2}>
             <Box component="img" src="/assets/icon.png" alt="My Image"
             sx={{ width: '90%', height: 'auto' }}  // Custom styles
         />
            </Grid> 

            <Grid item xs = {10}>
                <Stack >
                    <Typography  sx = {{fontSize: "14px", fontWeight: 550}}>2 people have this item in their cart now</Typography>
                    <Typography sx = {{fontSize: "12px"}}>Snag it before its gone</Typography>
                </Stack>
            </Grid>
        
    </Grid>

    )
}