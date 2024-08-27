import React from 'react';

import Grid from '@mui/material/Grid';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { IconB } from '@/app/components/elements/IconButton';
import { SearchBar } from '../components/elements/SearchBar';

type Props = {
    promptRef:;
    
}

export const SearchHeader : React.FC<Props> = ({promptRef}) => {
    return (

        <Grid  sx={{ mt: 2, mb: 2 , width: '100%'}} container spacing={2} >
            <Grid item xs={2} >
                <IconB iconName={<ArrowBackIosNewIcon/>}/>
            </Grid>
            <Grid item xs={8}>
                <SearchBar promptRef={promptRef}/>
            </Grid>
            <Grid item xs={2}>
                <IconB iconName={<ShoppingCartOutlinedIcon/>}/>
             </Grid>
        </Grid>

    )
}