"use client";
import { useRef, useState } from "react";

import React from 'react';
import { SearchResultPage } from '../pages/searchResults';

type Props = { name: string; }

const InitialPage: Props = () => {

    const promptRef = useRef();
    const [renderedImage, setRenderedImage] = useState([]);
    const [loading, setLoading] = useState(false);
 
    const generateImage = async () => {
      setLoading(true);
      try {
        const resp = await fetch("/api/openai", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ prompt: promptRef.current.value }),
        });
  
        if (!resp.ok) {
          throw new Error("Unable to generate the image");
        }
  
        const data = await resp.json();
        console.log(data);
  
        setRenderedImage(data.result);
     
        localStorage.setItem('renderedImage', JSON.stringify(data.result));
    
      } catch (error) {
        //console.log(error.message);
      } finally {
        setLoading(false);
      }
    };

    return (

        <SearchResultPage promptRef = {promptRef} generateImage= {generateImage} />

     
    )
}


export default InitialPage;
