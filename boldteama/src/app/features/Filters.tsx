
import React from 'react';

import { Container, Stack, Box } from '@mui/material';
import { OmakaseChipB } from '../components/elements/OmakaseChipB';

type Props = {
    handleClick :  () => void ; 
}

export const Filters : React.FC <Props> = ({handleClick}) => {
    return (
        <Stack direction="row" spacing={2}> 
            <OmakaseChipB handleClick= {handleClick} />
            <Box 
            component="img"
            src="/assets/filters.png"
            alt="My Image"
            sx={{width: '100%', height: 'auto'}}
            >
            </Box>
        </Stack>
    )
}