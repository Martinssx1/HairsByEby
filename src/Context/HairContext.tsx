import type { ReactNode } from "react";
import { context } from "./useContext";
import { useState, useRef } from "react";

interface HairContextProps {
  children: ReactNode;
}
type Media = {
  type: string;
  src: string;
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
  currentDisplay: number[];
  swipe: React.RefObject<number>;
  hoveredProduct: number | null;
  setHoveredProduct: React.Dispatch<React.SetStateAction<number | null>>;
  setCurrentDisplay: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function HairContext({ children }: HairContextProps) {
  const [currentDisplay, setCurrentDisplay] = useState([0, 0, 0, 0, 0, 0]);
  const swipe = useRef(0);
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
          type: "video",
          src: "/media/curly front.mp4",
        },
        {
          type: "image",
          src: "/media/curly front.jpg",
        },
        {
          type: "video",
          src: "/media/curly front.mp4",
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
          type: "video",
          src: "/media/back of bob.mp4",
        },
        {
          type: "video",
          src: "/media/back of bob.mp4",
        },
        {
          type: "video",
          src: "/media/back of bob.mp4",
        },
        {
          type: "video",
          src: "/media/back of bob.mp4",
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
          type: "image",
          src: "media/20260722_140045.jpg",
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
          type: "image",
          src: "/media/20260722_141126.jpg",
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
      copy[index]++;
      return copy;
    });
  }
  function previousImage(index: number) {
    setCurrentDisplay((prev) => {
      const copy = [...prev];
      copy[index]--;
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
      }}
    >
      {children}
    </context.Provider>
  );
}
