import React from 'react';

import Grid from '@mui/material/Grid';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import { IconB } from '@/app/components/elements/IconButton';
import { ProgressBar } from '@/app/features/ProgressBar';


type Props = {
    
}

export const SwipeHeader : React.FC = () => {
    return (
        <Grid  sx={{ mt: 5, mb: 5 }} container spacing={2} >
            <Grid item xs={1}>
                <IconB iconName={<ArrowBackIosNewIcon/>}/>
            </Grid>
            <Grid item xs={8}>
               
            </Grid>
            <Grid item xs={1}>

             </Grid>
        </Grid>

    )
}