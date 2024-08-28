import React from 'react';

import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

import { theme } from '../theme';
import { PriceTag } from '../components/elements/PriceTag';
import Box from '@mui/material/Box';

type Props = { 
    imageurl: string;
    name: string; 
    price: string; 
}

export const ProductCard: React.FC<Props>  = ({ imageurl, name, price}) => {
    return (
        <Card variant = "outlined" sx={{ position: 'relative',  width: '100%', height: '100%', borderRadius: 5, borderColor: "#CFD0FF", borderWidth: 2}}>

            <CardMedia image= {imageurl} height = "300"  component="img" sx= {{position: 'relative'}} ></CardMedia>
           
            <Box sx={{ display: 'flex', alignItems: 'flex-end' , position: 'absolute', bottom: 0,left: 0, width: '100%',color: 'white',}}>
                <Typography noWrap = {true} sx = {{fontSize: "16px", fontWeight: "550", padding: 2}} > {name}</Typography>
               {/* <Paper elevation={0}  sx={{display: 'flex', alignItems: 'flex-end' , alignContent: 'center', width:"100px", height:"50px", top: '50px',}}> */}
                   <PriceTag price = {price} />
               {/* </Paper> */}
            </Box>
         
        </Card>

    )
}

