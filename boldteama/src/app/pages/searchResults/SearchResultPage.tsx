import React from 'react';

import { Footer } from '@/app/components/layouts/Footer';
import { Container, Stack, Box } from '@mui/material';

import { SearchHeader } from '@/app/features/SearchHeader';
import { Filters } from '@/app/features/Filters';

//import { SwipeResults } from '@/app/demoData/SwipeResults'

// get generate function from getter

// const handleClick: any () { 
//     // move to Swipe Page 

// }

export const SearchResultPage: React.FC = () => {
    return (
        
        <>
        <SearchHeader promptRef={promptRef} />
        <Filters handleClick= {generateImage} />

        <Box 
            component="img"
            src="/assets/tempGallery.png"
            alt="My Image"
            sx={{width: '100%', height: 'auto'}}
        >
        </Box>

       <Footer/>
        </>
        

    )
}

