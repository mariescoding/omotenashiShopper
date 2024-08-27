"use client";
import { useRef, useState } from "react";
import { useRouter } from 'next/router';
import Link from 'next/link'

import React from 'react';
import { SearchResultPage } from './pages/searchResults/SearchResultPage';


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

        <>

        {/* <SearchResultPage /> */}

         <main className="container max-w-4xl mx-auto">
     
     <input
       type="text"
       className="w-full outline-none py-2 px-6 bg-gray-600 rounded-3xl text-small"
       placeholder="ramen eating a person, a bike riding a person"
       defaultValue="a frog driving a car"
       ref={promptRef}
     />
    
    <Link href="/pages/swipe">
    <button
         disabled={loading}
         onClick={generateImage}
         className="hover:opacity-80 py-2 px-6 bg-lime-600 rounded-3xl text-xs uppercase"
       >
         {loading ? "Generating, please wait" : "Generate"}
       </button>
    </Link>
      

       {renderedImage.length === 0 && (
         <div className="bg-gray-600 aspect-square flex items-center justify-center">
           Image will show up here
         </div>
       )}

       {renderedImage.map((image, index) => {
         return <img key={image.url} src={image.url} />;
       })}
    
 </main>
        </>
       
        
    )
}


export default InitialPage;
