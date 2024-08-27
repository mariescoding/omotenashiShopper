import React from 'react';

import Grid from '@mui/material/Grid';
import { BasicChip } from '@/app/components/elements/BasicChip';
import { JapanChip} from '@/app/components/elements/JapanChip';

type Props = {
    categoryList: Array<string>, 
    isJapan?: boolean
}

export const ChipGroup : React.FC<Props> = ({categoryList, isJapan}) => {
    return (
       
        <Grid container spacing={1}>
            {
                categoryList.map((category) => (
                    <Grid item>
                        <BasicChip label= {category} />
                    </Grid>
                ))

                
            }
            
            <Grid item>
                <JapanChip/>
            </Grid>
        
        </Grid>

    )
}