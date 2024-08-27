type SwipeResult = {
    id: number;
    productName : string;
    imageUrl : string; 
    price: string; 
    madeInJapan: boolean;
    categories: string[];
  
  };
  
export type SwipeResultData = {
    SwipeResults: SwipeResult[];
    itemId: string;
  };
  
