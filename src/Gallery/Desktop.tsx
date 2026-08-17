import { ChevronLeft, Play, ChevronRight } from "lucide-react";
import type { HairProduct } from "../Context/HairContext";
import { useHairContext } from "../Context/useContext";

type MobileProps = {
  index: number;
  product: HairProduct;
};
export default function Desktop({ index, product }: MobileProps) {
  const { previousImage, currentDisplay, nextImage, hoveredProduct } =
    useHairContext();
  const imageContainer = product.display;
  return (
    <>
      <div className="relative flex h-[470px] max-w-[800px] overflow-hidden">
        {imageContainer &&
          imageContainer.map((p, i) => (
            <div
              className=" min-w-full  transition-transform duration-300"
              style={{
                transform: `translateX(-${currentDisplay[index] * 100}%)`,
              }}
              key={i}
            >
              {p.type === "image" ? (
                <img
                  className={`w-full h-full object-cover transition-transform duration-500 `}
                  src={p.src}
                  loading="lazy"
                  alt={product.name}
                />
              ) : (
                <>
                  <div className="absolute top-3 left-3 bg-black/60 rounded-full p-2">
                    <Play size={25} className="text-white fill-white" />
                  </div>
                  <video
                    className={`w-full h-full object-cover transition-transform duration-500`}
                    preload="metadata"
                    src={p.src}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </>
              )}
              <div
                className={`absolute inset-0 bg-black/40 transition-opacity duration-300 ${
                  hoveredProduct === product.id ? "opacity-100" : "opacity-0"
                }`}
              >
                <div>
                  {currentDisplay[index] ===
                  product.display.length - 1 ? null : (
                    <button
                      className="absolute flex justify-center mr-1 right-0 top-[50%] p-1 bg-white rounded-full"
                      onClick={(e) => {
                        e.stopPropagation();
                        nextImage(index);
                      }}
                    >
                      <ChevronRight />
                    </button>
                  )}
                </div>
                <div>
                  {currentDisplay[index] === 0 ? null : (
                    <button
                      className="absolute justify-center flex ml-1 p-1 bg-white rounded-full left-0 top-[50%]"
                      onClick={(e) => {
                        e.stopPropagation();
                        previousImage(index);
                      }}
                    >
                      <ChevronLeft />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
