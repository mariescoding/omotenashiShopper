import React from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { Container, Stack, Box } from '@mui/material';

import { ProductCard } from '@/app/features/ProductCard';
import { ChipGroup } from '@/app/features/ChipGroup';
import { RushUser} from '@/app/features/RushUser'

import { SwipeResultData } from '@/pages/swipe'

type Props = {
    item: {
        id: number;
        productName: string;
        imageUrl: string;
        price: string;
        madeInJapan: boolean;
        categories: string[];
      }, 
    key: number;
}

export const ProductInfo: React.FC<Props>  = ({item, key}) => {
    return (
        <>
    
        <Stack 
        direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={2} 
            sx={{flex: "0 0 100%" , minWidth: 0 , transform: 'translate3d(0, 0, 0)', mr: '0px'}}
            >
        
            <ProductCard imageurl= {item.imageUrl} name= {item.productName} price = {item.price} />     
            <RushUser/>
            <ChipGroup categoryList={item.categories} isJapan={item.madeInJapan} />
   
        </Stack>                
        </>
 
       

    )
}

