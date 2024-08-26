import * as React from 'react';
import IconButton from '@mui/material/IconButton';

// states: isClicked , default is onlinedIcon. when clicked, change to FilledIcon
// props: icon name 

type Props = {
    iconName: string;
  };

export const IconB : React.FC<Props> = ({iconName}) => {
    return (
        <IconButton color = "inherit" size = "small">
            {iconName}
        </IconButton>
    )
} 
