import React from 'react';

import { Container, Stack, Box, getBottomNavigationActionUtilityClass } from '@mui/material';

import { ProductCard } from '@/app/features/ProductCard';
import { ChipGroup } from '@/app/features/ChipGroup';
import { RushUser} from '@/app/features/RushUser'
import { SwipeHeader } from '@/app/features/SwipeHeader';
import { AddCartButton } from '@/app/features/AddCart';

import { useSwipeable } from 'react-swipeable';
import SwipeableViews from 'react-swipeable-views';

import { useEffect, useState } from 'react';
import Link from 'next/link'

interface RenderedImage {
    url: string;
    summary: string;
  }
  
  interface SwipeResultData {
    id: number;
    productName: string;
    imageUrl: string;
    price: string;
    madeInJapan: boolean;
    categories: string[];
  }
  

export default function SwipePage () {

    const [renderedImage, setRenderedImage] = useState<SwipeResultData[]> ([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const storedImages = localStorage.getItem('renderedImage');
    
    //     if (storedImages) {
    //         setRenderedImage(JSON.parse(storedImages));
    //     }

    // }, []);

    useEffect(() => {
        const storedImages = localStorage.getItem('renderedImage');
        if (storedImages) {
            const parsedImages = JSON.parse(storedImages).map((item: RenderedImage, index: number) => ({
                id: index,
                productName: item.summary,
                imageUrl: item.url,
                price: "70.90",
                madeInJapan: true,
                categories: ["Test", "Test"]
            }));
            setRenderedImage(parsedImages);
        }
     }, []);

    // const swipeResult: SwipeResultData[] = renderedImage.map((item, index) => ({
    //     id: index,
    //     productName: item.summary,
    //     imageUrl: item.url,
    //     price: "70.90", // Static price, modify as needed
    //     madeInJapan: true, // Static value, modify as needed
    //     categories: ["Test", "Test"], // Static categories, modify as needed
    //   }));


      const handlers = useSwipeable({
        onSwipedLeft: () => handleSwipe('left'),
        onSwipedRight: () => handleSwipe('right'),
        preventDefaultTouchmoveEvent: true,
        trackMouse: true
    });

    const handleSwipe = (direction: string) => {
        if (direction === 'left' && currentIndex < renderedImage.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else if (direction === 'right' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    return (

        <Container maxWidth="sm"> 
            <Box
                sx={{
                    position: 'absolute',
                    top: '-50px',
                    left: '-50%',
                    width: '200%',
                    height: '475px',
                    backgroundColor: '#DCDDF6', // Use your specific purple color here
                    borderRadius: '100%',
                    zIndex: 0,
                 }}
            />
            <SwipeHeader />   
{/* 
            {
                swipeResult.map((item) => (

                    <Stack 
                    direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2} >
                    
                        <ProductCard imageurl= {item.imageUrl} name= {item.productName} price = {item.price} />     
                        <RushUser/>
                        <ChipGroup categoryList={item.categories} isJapan={item.madeInJapan} />
               
                    </Stack>
                ))
               
            } */}

            {renderedImage.length > 0 && (
                <Box
                    sx={{
                        transition: 'transform 0.3s ease',
                        transform: `translateX(-${currentIndex * 100}%)`,
                        display: 'flex',
                        width: `${renderedImage.length * 100}%`,
                    }}
                >
                    {renderedImage.map((item) => (
                        <Box
                            key={item.id}
                            sx={{
                                width: '100%',
                                flexShrink: 0,
                            }}
                        >
                            <ProductCard imageurl={item.imageUrl} name={item.productName} price={item.price} />
                            <RushUser />
                            <ChipGroup categoryList={item.categories} isJapan={item.madeInJapan} />
                        </Box>
                    ))}
                </Box>
            )}



            {/* <AddCartButton/> */}
        </Container>        

    )
}
