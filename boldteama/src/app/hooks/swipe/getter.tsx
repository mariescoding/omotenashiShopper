import { SwipeResultSingleData } from './entity'
import { GetServerSideProps } from 'next' 

interface ItemData {
  url: string, 
  summary: string
}

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
      
      const data : ItemData[] = await resp.json(); 
     
     let dataList : SwipeResultSingleData[] = []

      data.forEach(element => {
        let parsed: SwipeResultSingleData = {
          productName : element.summary,
          imageUrl : element.url ,
          price:"aaaaa price",
          madeInJapan: true,
          categories: []
        }
        dataList.push(parsed)
      });

      console.log(data)
      //data.result

      return { dataList }

  }) 