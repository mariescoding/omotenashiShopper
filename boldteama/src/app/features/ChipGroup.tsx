import React from 'react';

import { theme } from '@/app/theme';

import Grid from '@mui/material/Grid';
import { BasicChip } from '@/app/components/elements/BasicChip';
import { JapanChip} from '@/app/components/elements/JapanChip';

type Props = {
    
}

export const ChipGroup : React.FC = () => {
    return (

       
        <Grid container spacing={1} >
            <Grid item>
                <BasicChip label= "Fashion wear"/>
            </Grid>

            <Grid item>
                <BasicChip label= "Fashion wear"/>
            </Grid>

            <Grid item>
                <BasicChip label= "Fashion wear"/>
            </Grid>

            <Grid item>
                <JapanChip/>
            </Grid>
        
        </Grid>

    )
}