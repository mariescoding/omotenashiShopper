import React from 'react';

import TextField from '@mui/material/TextField';

type Props = {
    promptRef: Object;
}

export const SearchBar : React.FC<Props>= ({promptRef}) => {

    return (
       
         <TextField id="filled-basic"   label="Search Here..." variant="filled"  color= 'secondary' sx= {{borderRadius: 8, width: '100%', height: '100%'}} />
         
       

       

    )
}
