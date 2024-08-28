'use client'

import React from 'react';

import { Container, Stack, Box, getBottomNavigationActionUtilityClass } from '@mui/material';

import { AddCartButton } from '@/app/features/AddCart';

import useEmblaCarousel from 'embla-carousel-react'
import { ImageCarousel } from '../../app/features/ImageCarousel';

import { useEffect, useState } from 'react';


interface RenderedImage {
    url: string;
    summary: string;
  }
  
export interface SwipeResultData {
    id: number;
    productName: string;
    imageUrl: string;
    price: string;
    madeInJapan: boolean;
    categories: string[];
  }
  

  const SwipeResults = [
    
    {
        id: 1,
        productName : "Brown Coach Bag",
        imageUrl : "https://img.lazcdn.com/g/ff/kf/Se22b457e44634748af4ba017931c2214E.jpg_720x720q80.jpg",
        price: "50.00",
        madeInJapan: false,
        categories: ["Ladies fashion", "Luxury Items", "Coach Bag"]
    }, 
    {
        id: 2,
        productName : "Plain Japanese Bag",
        imageUrl : "https://blog.janbox.com/wp-content/uploads/2022/09/japanese-handbag-brands-yoshida.jpg",
        price: "10.00",
        madeInJapan: true,
        categories: ["Ladies fashion", "Small Items", "Hand Bag"]
    }, 
    {
        id: 3,
        productName : "Chanel Hand Bag",
        imageUrl : "https://loveluxury.co.uk/wp-content/uploads/2020/12/Chanel-Bag.jpg",
        price: "100.00",
        madeInJapan: true,
        categories: ["Ladies fashion", "Luxury Items", "Chanel Bag"]
    }, 
    {
        id: 4,
        productName : "Brown Coach Bag",
        imageUrl : "https://img.lazcdn.com/g/ff/kf/Se22b457e44634748af4ba017931c2214E.jpg_720x720q80.jpg",
        price: "50.00",
        madeInJapan: false,
        categories: ["Ladies fashion", "Luxury Items", "Coach Bag"]
    }, 
    {
        id: 5,
        productName : "Brown Coach Bag",
        imageUrl : "https://img.lazcdn.com/g/ff/kf/Se22b457e44634748af4ba017931c2214E.jpg_720x720q80.jpg",
        price: "50.00",
        madeInJapan: false,
        categories: ["Ladies fashion", "Luxury Items", "Coach Bag"]
    }
]

export default function SwipePage () {

    const [renderedImage, setRenderedImage] = useState<SwipeResultData[]> ([]);
    const [emblaRef] = useEmblaCarousel()

    useEffect(() => {
        const storedImages = localStorage.getItem('renderedImage');
    
        if (storedImages) {
            setRenderedImage(JSON.parse(storedImages));
        }

    }, []);

    const swipeResult: SwipeResultData[] = renderedImage.map((item, index) => ({
        id: index,
        productName: item.summary,
        imageUrl: item.url,
        price: "70.90", // Static price, modify as needed
        madeInJapan: true, // Static value, modify as needed
        categories: ["Test", "Test"], // Static categories, modify as needed
      }));

    return (

        <Container maxWidth="sm"> 
            {/* <Box
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
            */}
            <ImageCarousel slides={SwipeResults} />


            {/* <AddCartButton/> */}
        </Container>        

    )
}
