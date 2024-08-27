import React from 'react';

import { Footer } from '@/app/components/layouts/Footer';
import { Container, Stack, Box } from '@mui/material';

import { SearchHeader } from '@/app/features/SearchHeader';
import { Filters } from '@/app/features/Filters';

import { useState } from "react";
import { useGenerateImage } from '@/app/backend/openAi/backend'

//import { SwipeResults } from '@/app/demoData/SwipeResults'

// get generate function from getter

export const SearchResultPage: React.FC = ({generateItems}) => {
    return (
        
        <>
        <SearchHeader/>
        <Filters generateItems= {generateItems} />

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

