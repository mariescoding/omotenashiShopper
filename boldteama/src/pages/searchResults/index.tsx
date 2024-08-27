import React from 'react';

import { Footer } from '@/app/components/layouts/Footer';
import { Container, Stack, Box } from '@mui/material';

import { SearchHeader } from '@/app/features/SearchHeader';
import { Filters } from '@/app/features/Filters';

type Props = {
    promptRef: Object;
    generateImage:  () => void ; 
}

export const SearchResultPage: React.FC <Props>= ({promptRef, generateImage}) => {
    return (
        
        <>
        <SearchHeader promptRef={promptRef} />
        <Filters handleClick= {generateImage} page="/swipe" />

        <Box 
            component="img"
            src="../public/assets/tempGallery.png"
            alt="gallery"
            sx={{width: '100%', height: 'auto'}}
        >
        </Box>

       <Footer/>
        </>
        

    )
}

