import React from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import { DotButton, useDotButton } from './dotButton'
import useEmblaCarousel from 'embla-carousel-react'

import { Container, Stack, Box, getBottomNavigationActionUtilityClass } from '@mui/material';

import { SwipeResultData } from '@/pages/swipe'
import { ProductInfo } from './ProductInfo'

type Props = {
    slides: SwipeResultData[]
    options?: EmblaOptionsType
  }

export const ImageCarousel: React.FC <Props> = (props) => {
    const { slides, options } = props
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
  
    const { selectedIndex, scrollSnaps, onDotButtonClick } =
      useDotButton(emblaApi)
  
    return (

        
        <Container maxWidth="sm">
    
            <Box ref={emblaRef} sx={{overflow: "hidden"}} >
                <Box sx={{display: "flex", touchAction: 'pan-y pinch-zoom', width: "100%", height : '100%'}}>

                    
                    {slides.map((item) => (
                        <ProductInfo key={item.id} item={item} />
                        
                     ))}

                </Box>
            </Box>
      
            </Container>      

        
    )
  }
  