import React from 'react';

import { Container, Stack, Box } from '@mui/material';

import { ProductCard } from '@/app/features/ProductCard';
import { ChipGroup } from '@/app/features/ChipGroup';
import { RushUser} from '@/app/features/RushUser'
import { SwipeHeader } from '@/app/features/SwipeHeader';
import { AddCartButton } from '@/app/features/AddCart';



type Props = {

}


export const SwipePage: React.FC <Props>= ({}) => {
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

