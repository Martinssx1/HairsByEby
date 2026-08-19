import type { ReactNode } from "react";
import { context } from "./useContext";
import { useState, useRef } from "react";

interface HairContextProps {
  children: ReactNode;
}
type Media = {
  type: string;
  src: string;
  poster?: string;
};

export type HairProduct = {
  id: number;
  name: string;
  description: string;
  price: number;
  display: Media[];
  category: string;
  rating: number;
};

export interface Contexttypes {
  hairProducts: HairProduct[];
  nextImage: (index: number) => void;
  previousImage: (index: number) => void;
  handleIsReady: (productIndex: number) => void;
  currentDisplay: { index: number; isReady: boolean }[];
  swipe: React.RefObject<{ xswipe: number; yswipe: number }>;
  hoveredProduct: number | null;
  setHoveredProduct: React.Dispatch<React.SetStateAction<number | null>>;
  setCurrentDisplay: React.Dispatch<
    React.SetStateAction<{ index: number; isReady: boolean }[]>
  >;
}

export default function HairContext({ children }: HairContextProps) {
  const [currentDisplay, setCurrentDisplay] = useState([
    { index: 0, isReady: false },
    { index: 0, isReady: false },
    { index: 0, isReady: false },
    { index: 0, isReady: false },
    { index: 0, isReady: false },
    { index: 0, isReady: false },
  ]);
  const swipe = useRef({
    xswipe: 0,
    yswipe: 0,
  });
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const hairProducts: HairProduct[] = [
    {
      id: 1,
      name: "Silky Straight",
      description: "Premium straight human hair with natural shine",
      price: 45000,
      display: [
        {
          type: "image",
          src: "/media/front of silky 2.jpg",
        },
        {
          type: "image",
          src: "/media/front of silky.jpg",
        },
        {
          type: "image",
          src: "/media/back of silky.jpg",
        },
        {
          type: "video",
          src: "/media/silky.mp4",
          poster: "/media/silky.PNG",
        },
      ],
      category: "straight",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Bouncy Curls",
      description: "Defined curly texture for volume and style",
      price: 52000,
      display: [
        {
          type: "image",
          src: "/media/curly front2.jpg",
        },
        {
          type: "image",
          src: "/media/curly front2.jpg",
        },
        {
          type: "image",
          src: "/media/curly front.jpg",
        },
        {
          type: "video",
          src: "/media/curly front.mp4",
          poster: "/media/curly front pic.jpg",
        },
      ],
      category: "curly",
      rating: 4.9,
    },
    {
      id: 3,
      name: "Wavy Crown",
      description: "Soft waves for a natural, elegant look",
      price: 48000,
      display: [
        {
          type: "image",
          src: "/media/20260722_141903.jpg",
        },
        {
          type: "image",
          src: "/media/20260722_141903.jpg",
        },
        {
          type: "image",
          src: "/media/20260722_141903.jpg",
        },
        {
          type: "video",
          src: "/media/back of bob.mp4",
          poster: "/media/back of bob pic.PNG",
        },
      ],
      category: "wavy",
      rating: 4.7,
    },
    {
      id: 4,
      name: "Colored Lengths",
      description: "Pre-colored hair with rich tones",
      price: 55000,
      display: [
        {
          type: "image",
          src: "IMG_0460.PNG",
        },
        {
          type: "image",
          src: "media/20260722_140045.jpg",
        },
        {
          type: "image",
          src: "media/20260722_140050.jpg",
        },
        {
          type: "video",
          src: "/media/curly front.mp4",
          poster: "/media/curly front pic.PNG",
        },
      ],
      category: "colored",
      rating: 4.8,
    },
    {
      id: 5,
      name: "Virgin Closure",
      description: "Natural hairline closure for seamless blend",
      price: 38000,
      display: [
        {
          type: "image",
          src: "IMG_0460.PNG",
        },
        {
          type: "image",
          src: "/media/20260722_141126.jpg",
        },
        {
          type: "image",
          src: "/IMG_0463.PNG",
        },
        {
          type: "video",
          src: "/media/curly front.mp4",
          poster: "/media/curly front pic.PNG",
        },
      ],
      category: "closures",
      rating: 4.9,
    },
    {
      id: 6,
      name: "Frontal Lace",
      description: "Full lace frontal with baby hairs",
      price: 65000,
      display: [
        {
          type: "image",
          src: "/IMG_0456.PNG",
        },
        {
          type: "image",
          src: "/IMG_0456.PNG",
        },
        {
          type: "image",
          src: "/IMG_0456.PNG",
        },
        {
          type: "image",
          src: "/IMG_0456.PNG",
        },
      ],
      category: "closures",
      rating: 5.0,
    },
  ];
  function nextImage(index: number) {
    setCurrentDisplay((prev) => {
      const copy = [...prev];
      copy[index] = {
        ...copy[index],
        index: copy[index].index + 1,
      };

      return copy;
    });
  }
  function previousImage(index: number) {
    setCurrentDisplay((prev) => {
      const copy = [...prev];
      copy[index] = {
        ...copy[index],
        index: copy[index].index - 1,
      };

      return copy;
    });
  }
  function handleIsReady(productIndex: number) {
    setCurrentDisplay((prev) => {
      const copy = [...prev];
      copy[productIndex] = {
        ...copy[productIndex],
        isReady: true,
      };

      copy[productIndex].isReady = true;
      return copy;
    });
  }

  return (
    <context.Provider
      value={{
        hairProducts,
        previousImage,
        nextImage,
        currentDisplay,
        swipe,
        hoveredProduct,
        setHoveredProduct,
        setCurrentDisplay,
        handleIsReady,
      }}
    >
      {children}
    </context.Provider>
  );
}
