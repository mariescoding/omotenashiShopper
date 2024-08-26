import React from 'react';

import { theme } from '@/app/theme';
import Chip from '@mui/material/Chip';

// make font bigger & bold 

type Props = {
    label: string; 
}

export const BasicChip : React.FC<Props> = ({label}) => {
    return (

        <Chip label= {label} variant = 'filled' ></Chip>

    )
}