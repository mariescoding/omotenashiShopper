import React, {
    ComponentPropsWithRef,
    useCallback,
    useEffect,
    useState
  } from 'react'
  import { EmblaCarouselType } from 'embla-carousel'
import { DotButton } from './dotButton'
import Box from '@mui/material/Box'

type Props = {

}

export const DotBar: React.FC<Props> = (props) => {
    const { } = props
  
    return (

        <Box sx ={{ display: "grid", justifyContent: 'space-around', rowGap: '3', mt: '5'}}>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end', alignItems: 'center', mr: ''}}> 
                {scrollSnaps.map((_, index) => (
                    <DotButton
                        key={index}
                        onClick={() => onDotButtonClick(index)}
                        className={'embla__dot'.concat(
                        index === selectedIndex ? ' embla__dot--selected' : ''
                        )}
                        
            </Box>
        </Box>

    )
  }
  