import { useHairContext } from "../Context/useContext";
import type { HairProduct } from "../Context/HairContext";
import { Play } from "lucide-react";

type MobileProps = {
  index: number;
  product: HairProduct;
};
export default function Mobile({ index, product }: MobileProps) {
  const { previousImage, currentDisplay, swipe, nextImage, handleIsReady } =
    useHairContext();
  const imageContainer = product.display;
  return (
    <div
      className="relative  aspect-[9/14] flex overflow-hidden "
      onTouchStart={(e) => {
        swipe.current.xswipe = e.touches[0].clientX;
        swipe.current.yswipe = e.touches[0].clientY;
      }}
      onTouchEnd={(e) => {
        const endSwipeX = e.changedTouches[0].clientX;
        const endSwipeY = e.changedTouches[0].clientY;

        const distanceX = swipe.current.xswipe - endSwipeX;
        const distanceY = swipe.current.yswipe - endSwipeY;
        if (Math.abs(distanceY) > Math.abs(distanceX)) {
          return;
        }

        if (distanceX > 50) {
          if (currentDisplay[index].index === product.display.length - 1) {
            return null;
          }

          nextImage(index);
        }

        if (distanceX < -50) {
          if (currentDisplay[index].index === 0) {
            return null;
          }

          previousImage(index);
        }
      }}
    >
      {imageContainer &&
        imageContainer.map((p, i) => (
          <div
            key={i}
            className=" min-w-full  transition-transform duration-300"
            style={{
              transform: `translateX(-${currentDisplay[index].index * 100}%)`,
            }}
          >
            {p.type === "image" ? (
              <img
                className={`w-full h-full object-cover object-top transition-transform duration-500 `}
                src={p.src}
                loading="lazy"
                alt={product.name}
              />
            ) : (
              <>
                <div className="absolute top-3 left-3 bg-black/60 rounded-full p-2">
                  <Play size={25} className="text-white fill-white" />
                </div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
                  {currentDisplay[index].isReady ? null : (
                    <div className="w-4 h-4 animate-spin bg-white border-2"></div>
                  )}
                </div>
                <video
                  className={`w-full h-full object-cover object-top transition-transform duration-500`}
                  src={p.src}
                  poster={p.poster}
                  autoPlay
                  loop
                  muted
                  playsInline
                  onCanPlay={() => handleIsReady(index)}
                />
              </>
            )}
          </div>
        ))}
    </div>
  );
}
