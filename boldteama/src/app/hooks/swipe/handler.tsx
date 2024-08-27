
import { SwipeResultData } from './entity'
import { getResultData } from './getter';

// reference code 

type MappingFetchResponse = (
    res: Awaited<ReturnType<typeof getResultData>>
  ) => SwipeResultData;
  
const mapFetchResponse: MappingFetchResponse = (response) => {

  console.log()

  const SwipeResults = response.map((image, index) => ({
      productName: image.summary ,
      imageUrl: image.url, 
      price: '50.00', 
      madeInJapan: true, 
      categories: [ "Ladies fashion", "Luxury Items", "Coach Bag"],
}));

return { SwipeResults };

    };


type GetResultDataHandler = () => Promise<SwipeResultData>; 

export const getResultDataHandler: GetResultDataHandler = async () => {
      try {
        const results = await getResultData();
  
        return mapFetchResponse(
            results
        );

      } catch {
        return {
            SwipeResultData: null,
        };
      }
};
  