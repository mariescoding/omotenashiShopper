import React from 'react';

import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { theme } from '../colors';
import { PriceTag } from '../components/elements/PriceTag';

type Props = { 
    imageurl: string;
    name: string; 
    price: string; 
    //categories: Array; 
}

export const ProductCard: React.FC<Props>  = ({ imageurl, name, price}) => {
    return (
        <Card sx={{ position: 'relative',  width: '100%', height: '100%', borderRadius: 5, borderColor: "#CFD0FF", borderWidth: 3}}>

            <CardMedia image= {imageurl} height = "300"  component="img" sx= {{position: 'relative'}} ></CardMedia>

            <CardContent sx={{display: 'flex', position: 'relative' , p: 1 }} >

                <Typography variant="h6" noWrap = {true} sx = {{}} > {name}</Typography>
                <PriceTag price = {price} />
            </CardContent>
         
        </Card>

    )
}

