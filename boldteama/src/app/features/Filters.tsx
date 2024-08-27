
import React from 'react';

import { Container, Stack, Box } from '@mui/material';
import { OmakaseChipB } from '../components/elements/OmakaseChipB';

type Props = {
    handleClick :  () => void ; 
    page: string;
}

export const Filters : React.FC <Props> = ({handleClick, page}) => {
    return (
        <Stack direction="row" spacing={2}> 
            <OmakaseChipB handleClick= {handleClick} page={page} />
            <Box 
            component="img"
            src="../public/assets/filters.png"
            alt="My Image"
            sx={{width: '100%', height: 'auto'}}
            >
            </Box>
        </Stack>
    )
}