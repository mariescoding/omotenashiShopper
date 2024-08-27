import { SwipeResultData } from './entity'
import { GetServerSideProps } from 'next' 



export const getResultData = (async () => {

    // Fetch data from external API
   
    const resp = await fetch("/api/openai", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        //body: JSON.stringify({ prompt: promptRef.current.value }),
      });

      if (!resp.ok) {
        throw new Error("Unable to generate the image");
      }
      
      const data = await resp.json(); 

      //data.result

      return { data }

  }) 