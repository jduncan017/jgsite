import { useState } from "react";

const useSwipe = (imagePaths: string[], initialIndex?: number) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(initialIndex || 0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const updateIndex = (index: number) => {
    setCurrentImageIndex(index);
  };

  const handleTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove: React.TouchEventHandler<HTMLDivElement> = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      const nextIndex =
        currentImageIndex + 1 < imagePaths.length ? currentImageIndex + 1 : 0;
      setCurrentImageIndex(nextIndex);
    } else if (touchEnd - touchStart > 75) {
      const prevIndex =
        currentImageIndex - 1 >= 0
          ? currentImageIndex - 1
          : imagePaths.length - 1;
      setCurrentImageIndex(prevIndex);
    }
    setTouchStart(0);
    setTouchEnd(0);
  };

  return {
    currentImageIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    updateIndex,
  };
};

export default useSwipe;
