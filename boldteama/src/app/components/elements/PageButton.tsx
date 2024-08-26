import React from 'react';

import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import {IconB} from "./IconButton.tsx";


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


type Props = {
    caption : string;
    iconName: string;
  };

export const PageButton : React.FC<Props> = ({caption, iconName}) => {
    return (
        
        <Stack>
            <IconB iconName= {iconName} /> 
            <Typography variant= "caption">{caption}</Typography>
        </Stack>
    )
}