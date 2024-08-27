
import {  SwipeResultSingleData} from './entity'
import { getResultData } from './getter';

// reference code 

// type MappingFetchResponse = (
//     res: Awaited<ReturnType<typeof getResultData>>
//   ) => SwipeResultSingleData[]; 
  
// const mapFetchResponse: MappingFetchResponse = (response) => {

//   console.log("Calling function mapFetchResponse:")
//   console.log(response)

//   const SwipeResults : SwipeResultData = response.map((image, index) => ({
//       productName: image.summary ,
//       imageUrl: image.url, 
//       price: '50.00', 
//       madeInJapan: true, 
//       categories: [ "Ladies fashion", "Luxury Items", "Coach Bag"],
//   }));

//   return { SwipeResults };

// };


type GetResultDataHandler = () => Promise<SwipeResultSingleData[]>; 

export const getResultDataHandler: GetResultDataHandler = async () => {
      try {
        console.log("getResultDataHandler try clause")
        
        const results = await getResultData();
  
        // return mapFetchResponse(
        //     results
        // );
       return results.dataList
        
      } catch {
        console.log("getResultDataHandler catch clause")
        return []
      }
};
  