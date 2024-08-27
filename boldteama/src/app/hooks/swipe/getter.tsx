
import { GetServerSideProps, NextPage } from 'next' 
import { SwipePage } from '@/pages/swipe/SwipePage'

interface ItemData {
  url: string, 
  summary: string
}

export interface SwipePageProps {
  swipeResults: {
    id: number;
    productName: string;
    imageUrl: string;
    price: string;
    madeInJapan: boolean;
    categories: string[];
  }[];
}

export const getServerSideProps : GetServerSideProps<SwipePageProps> = async (context) => {

    const resp = await fetch("/api/openai", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt: "test??" }),
      });

      if (!resp.ok) {
        throw new Error("Unable to generate the image");
      }
      
    const data : ItemData[] = await resp.json(); 

    const formattedData = data.map((image, index) => ({
      id: index,
      productName : image.summary,
      imageUrl : image.url,
      price: "70.90",
      madeInJapan: true,
      categories: ["Test", "Test"]
    }));

    console.log(data)
  
    return {
      props: {
        swipeResults: formattedData,
      },
    };;


  }

  const SwipePage2: NextPage = (props) => {
    return <SwipePage {...props} />;
  };
  
  export default SwipePage2;
  