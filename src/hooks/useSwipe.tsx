import { useState, useCallback, useEffect, RefObject } from "react";

const useSwipe = (
  imagePaths: string[],
  containerRef: RefObject<HTMLDivElement>
) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [touchStartPosition, setTouchStartPosition] = useState(0);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [offsetAtTouch, setOffsetAtTouch] = useState(0);
  const containerWidth = containerRef.current?.offsetWidth || 0;

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      setOffsetAtTouch(containerWidth * currentImageIndex);
      setTouchStartPosition(e.targetTouches[0].clientX);
    },
    [currentImageIndex, containerWidth]
  );

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      const touchCurrentPosition = e.targetTouches[0].clientX;
      const offset = offsetAtTouch + touchStartPosition - touchCurrentPosition;
      console.log(`offsetAtTouch: ${offsetAtTouch}`);
      setCurrentOffset(offset);
    },
    [touchStartPosition, offsetAtTouch]
  );

  const handleTouchEnd = useCallback(() => {
    // Calculate the relative swipe distance from the start position
    const swipeDistance =
      (currentImageIndex * containerWidth - currentOffset) / containerWidth;

    const threshold = 0.3; // Adjust this value as needed
    let newIndex = currentImageIndex;

    if (Math.abs(swipeDistance) > threshold) {
      // Update the index based on the direction of the swipe
      newIndex += swipeDistance > 0 ? -1 : 1;
    }

    // Looping logic for continuous carousel
    if (newIndex >= imagePaths.length) {
      newIndex = 0;
    } else if (newIndex < 0) {
      newIndex = imagePaths.length - 1;
    }

    setCurrentImageIndex(newIndex);
    setCurrentOffset(-newIndex * containerWidth);

    // Add the transition class
    if (containerRef.current) {
      containerRef.current.classList.add("image__smooth-transition");
    }

    // Remove the transition class after it's done
    const transitionEndHandler = () => {
      if (containerRef.current) {
        containerRef.current.classList.remove("image__smooth-transition");
      }
    };

    containerRef.current?.addEventListener(
      "transitionend",
      transitionEndHandler,
      { once: true }
    );

    setCurrentImageIndex(newIndex);
    setCurrentOffset(newIndex * containerWidth); // Update offset to the new index
  }, [
    currentImageIndex,
    containerWidth,
    currentOffset,
    imagePaths.length,
    containerRef,
  ]);

  return {
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    currentImageIndex,
    setCurrentImageIndex,
    currentOffset,
    setCurrentOffset,
  };
};

export default useSwipe;
