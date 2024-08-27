import { GetServerSideProps, NextPage } from "next";
import React from "react";

import { SwipeResultData, SwipeResultSingleData} from './entity'
import { getResultData } from './getter';
import { SwipePage } from "@/app/pages/swipe/SwipePage";

// type MappingFetchResponse = (
//     res: Awaited<ReturnType<typeof getServerSideProps>>
//   ) => SwipeResultSingleData[]; 
  
// const mapFetchResponse: MappingFetchResponse = (response) => {

//   console.log("Calling function mapFetchResponse:")
//   console.log(response)

//   const SwipeResults: SwipeResultData = response.map((image, index) => ({
//       productName: image.summary ,
//       imageUrl: image.url, 
//       price: '50.00', 
//       madeInJapan: true, 
//       categories: [ "Ladies fashion", "Luxury Items", "Coach Bag"],
//   }));

//   return { SwipeResults };

// };


// type GetResultDataHandler = () => Promise<SwipeResultSingleData[]>; 

// export const getResultDataHandler: GetResultDataHandler = async () => {
//       try {
//         console.log("getResultDataHandler try clause")
        
//         const results = await getResultData();
  
//         return mapFetchResponse(
//             results
//         );
//        //return results.dataList
        
//       } catch {
//         console.log("getResultDataHandler catch clause")
//         return []
//       }
// };
  
// new way

export const getServerSideProps: GetServerSideProps = async () => {
     
        const results = await getResultData();
  
        return (
          props: {
            results
          } 
        );
       
      
};
  
const SwipePage2: NextPage = (props) => {
  return <SwipePage {...props}/>
}

export default SwipePage2;