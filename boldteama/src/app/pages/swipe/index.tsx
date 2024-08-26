import React from 'react';

import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import { IconB } from '@/app/components/elements/IconButton';
import { ProductCard } from '@/app/features/ProductCard';
import { ProgressBar } from '@/app/features/ProgressBar';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


type Props = {
    
}

{
    imageurl: ; 
    productName : ; 
    price : ; 
    madeInJapan: ; 
    categories :; 
}

export const SwipePage: React.FC<Props> = ({}) => {
    return (
        
        <Container maxWidth="sm">
          
            <Stack spacing = {3} >

                <Grid container spacing={2}>
                    <Grid item xs={1}>
                        <IconB iconName={<ArrowBackIosNewIcon/>}/>
                    </Grid>
                    <Grid item xs={8}>
                        <ProgressBar/>
                    </Grid>
                    <Grid item xs={1}>

                    </Grid>
                </Grid>
                
                <ProductCard imageurl="https://media.istockphoto.com/id/183821822/photo/say.jpg?s=612x612&w=0&k=20&c=kRmCjTzA9cq4amgRgeHkZsZuvxezUtC8wdDYfKg-mho=" name= "Mickey Mantle post cards with.." price = "$25.90" /> 
                
                <Stack direction="row" spacing={2} sx={{p: 2}}>
                    <ShoppingCartIcon/>
                    
                    <Stack>
                        <Typography   sx = {{fontWeight: 550}}>2 people have this item in their cart now</Typography>
                        <Typography sx = {{ }}>Snag it before its gone</Typography>
                    </Stack>
                    
                </Stack>

                
               

            </Stack>
        </Container>        

    )
}

