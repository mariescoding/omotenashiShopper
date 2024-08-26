import React from 'react';

import { theme } from '@/app/theme';
import Chip from '@mui/material/Chip';

// make font bigger & bold 

export const JapanChip : React.FC = () => {
    return (

        <Chip label= "Made in Japan 🇯🇵" variant = 'filled' color = "info"></Chip>

    )
}