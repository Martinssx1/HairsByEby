import { useHairContext } from "../Context/useContext";
import type { HairProduct } from "../Context/HairContext";

type MobileProps = {
  index: number;
  product: HairProduct;
};
export default function Mobile({ index, product }: MobileProps) {
  const { previousImage, currentDisplay, swipe, nextImage, hoveredProduct } =
    useHairContext();
  const imageContainer = product.display;
  return (
    <div
      className="relative  aspect-[9/14] flex overflow-hidden "
      onTouchStart={(e) => {
        swipe.current = e.touches[0].clientX;
      }}
      onTouchEnd={(e) => {
        const endSwipe = e.changedTouches[0].clientX;
        console.log("dispay", currentDisplay);
        console.log("index", currentDisplay[index]);

        const distance = swipe.current - endSwipe;
        console.log("distance", distance);
        if (distance > 50) {
          if (currentDisplay[index] === product.display.length - 1) {
            return null;
          }

          nextImage(index);
        }

        if (distance < -50) {
          if (currentDisplay[index] === 0) {
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
              transform: `translateX(-${currentDisplay[index] * 100}%)`,
            }}
          >
            {p.type === "image" ? (
              <img
                className={`w-full h-full object-cover object-top transition-transform duration-500 ${
                  hoveredProduct === product.id ? "scale-105" : "scale-100"
                }`}
                src={p.src}
                alt={product.name}
              />
            ) : (
              <video
                className={`w-full h-full object-cover object-top transition-transform duration-500 ${
                  hoveredProduct === product.id ? "scale-105" : "scale-100"
                }`}
                src={p.src}
                autoPlay
                loop
                muted
                playsInline
              />
            )}
          </div>
        ))}
    </div>
  );
}
