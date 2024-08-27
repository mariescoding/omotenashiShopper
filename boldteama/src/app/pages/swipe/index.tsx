import React from 'react';

import { Container, Stack, Box } from '@mui/material';

import { ProductCard } from '@/app/features/ProductCard';
import { ChipGroup } from '@/app/features/ChipGroup';
import { RushUser} from '@/app/features/RushUser'
import { SwipeHeader } from '@/app/features/SwipeHeader';
import { AddCartButton } from '@/app/features/AddCart';

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

export const SwipePage: React.FC = ({}) => {
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

            {
                SwipeResults.map((item) => (
                    <Stack direction="column"
                        justifyContent="center"
                        alignItems="center"
                        spacing={2} >
                    
                        <ProductCard imageurl= {item.imageUrl} name= {item.productName} price = {item.price} />     
                        <RushUser/>
                        <ChipGroup categoryList={item.categories} isJapan={item.madeInJapan} />
               
                    </Stack>
                ))
            }

    

            {/* <AddCartButton/> */}
        </Container>        

    )
}

