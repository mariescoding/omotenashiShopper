import React from 'react';

import { Container, Stack, Box, getBottomNavigationActionUtilityClass } from '@mui/material';

import { ProductCard } from '@/app/features/ProductCard';
import { ChipGroup } from '@/app/features/ChipGroup';
import { RushUser} from '@/app/features/RushUser'
import { SwipeHeader } from '@/app/features/SwipeHeader';
import { AddCartButton } from '@/app/features/AddCart';

//import { getResultDataHandler } from '@/app/hooks/swipe/handler';
//import { SwipePageProps, getServerSideProps } from '@/app/hooks/swipe/getter';
import { SwipeResultSingleData } from '@/app/hooks/swipe/entity';

import { GetServerSideProps, NextPage, InferGetServerSidePropsType } from 'next' 
import { SwipePage } from '@/app/pages/swipe/SwipePage'

interface ItemData {
  url: string, 
  summary: string
}

export interface SwipePageProps {
  swipeResults: {
    id: number;
    productName: string;
    imageUrl: string;
    price: string;
    madeInJapan: boolean;
    categories: string[];
  }[];
}

export const getServerSideProps : GetServerSideProps<SwipePageProps> = (async () => {

    console.log("data")
  
    const resp = await fetch("/backend/openAi", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: "test??" }),
      });

      if (!resp.ok) {
        throw new Error("Unable to generate the image");
      }
      
    const data : ItemData[] = await resp.json(); 

    const formattedData = data.map((image, index) => ({
      id: index,
      productName : image.summary,
      imageUrl : image.url,
      price: "70.90",
      madeInJapan: true,
      categories: ["Test", "Test"]
    }));

    console.log("data")
  
    return {
      props: {
        swipeResults: formattedData ||[],
      },
    }

  } ) 


  export default function Page ({swipeResults} : InferGetServerSidePropsType<typeof getServerSideProps> ): JSX.Element{
 

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

      {swipeResults.length > 0 ? (
          swipeResults.map((item) => (
              <Stack direction="column"
                  justifyContent="center"
                  alignItems="center"
                  spacing={2} >
              
                  <ProductCard imageurl= {item.imageUrl} name= {item.productName} price = {item.price} />     
                  <RushUser/>
                  <ChipGroup categoryList={item.categories} isJapan={item.madeInJapan} />
         
              </Stack>
          )))
          :(
              <p>No data available</p>
          )
      }



      {/* <AddCartButton/> */}
  </Container>        

    )
  };
