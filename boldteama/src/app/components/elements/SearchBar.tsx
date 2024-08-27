import React from 'react';

import TextField from '@mui/material/TextField';

type Props = {
    promptRef: React.Ref;
}

export const SearchBar : React.FC<Props>= ({promptRef}) => {

    return (
        <>
         <TextField id="filled-basic"   label="Search Here..." variant="filled"  color= 'secondary' sx= {{borderRadius: 8, width: '100%', height: '100%'}} />
         
         <input
          type="text"
          className="w-full outline-none py-2 px-6 bg-gray-600 rounded-3xl text-small"
          placeholder="ramen eating a person, a bike riding a person"
          defaultValue="a frog driving a car"
          ref={promptRef}
        />
    
        </>

       

    )
}
