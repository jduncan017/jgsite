import { ImageCard } from "../../../lib/constants";

export const searchFilterCriteria = (searchQuery: {
  [key: string]: string;
}) => {
  return (card: ImageCard) => {
    if (!searchQuery || Object.keys(searchQuery).length === 0) {
      return true; // If no search parameters, all cards match
    }

    return Object.entries(searchQuery).every(([key, value]) => {
      const lowerValue = value.toLowerCase();

      switch (key) {
        case "minPrice": {
          const minPriceValue = Number(value);
          return !isNaN(minPriceValue) && card.price >= minPriceValue;
        }
        case "maxPrice": {
          const maxPriceValue = Number(value);
          return !isNaN(maxPriceValue) && card.price <= maxPriceValue;
        }
        case "inStock": {
          return value.toLowerCase() === "true" && card.quantity > 0;
        }
        case "query":
          return Object.entries(card).some(([cardKey, cardValue]) => {
            if (typeof cardValue === "string") {
              return cardValue.toLowerCase().includes(lowerValue);
            } else if (Array.isArray(cardValue)) {
              return cardValue.some((arrayItem) =>
                (arrayItem as string).toLowerCase().includes(lowerValue)
              );
            }
            return false;
          });
        default: {
          const cardValue = card[key as keyof ImageCard];

          // Handle string values
          if (typeof cardValue === "string") {
            return cardValue.toLowerCase().includes(lowerValue);
          }

          // Handle array values (e.g., woodTypes)
          if (Array.isArray(cardValue)) {
            return cardValue.some(
              (arrayItem) => (arrayItem as string).toLowerCase() === lowerValue
            );
          }

          // Handle numeric values (e.g., price, quantity)
          if (typeof cardValue === "number") {
            const numValue = Number(lowerValue);
            return !isNaN(numValue) && cardValue === numValue;
          }

          return false;
        }
      }
    });
  };
};
