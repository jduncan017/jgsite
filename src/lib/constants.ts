export interface ImageCard {
  title: string;
  price: number;
  imagePaths: string[];
  description: string;
  quantity: number;
  category: string;
  woodType: string[];
}

const IMAGE_CARDS: ImageCard[] = [
  {
    title: "Coasters",
    price: 19.0,
    imagePaths: ["/coasters.webp"],
    description:
      "Elegant wooden coasters, perfect for protecting surfaces from beverage stains.",
    quantity: 0,
    category: "housewares",
    woodType: ["zebra wood", "padauk", "maple"],
  },
  {
    title: "Coat Rack",
    price: 49.0,
    imagePaths: ["/coat-rack.webp", "/coat-rack-2.webp"],
    description:
      "Stylish and sturdy coat rack, ideal for organizing your outerwear with ease.",
    quantity: 0,
    category: "housewares",
    woodType: ["pine"],
  },
  {
    title: "Cutting Board",
    price: 99.0,
    imagePaths: ["/cutting-board-1.webp"],
    description:
      "Durable and finely crafted cutting board, perfect for all your kitchen prep needs.",
    quantity: 0,
    category: "housewares",
    woodType: ["walnut", "cherry", "maple", "padauk"],
  },
  {
    title: "Light Cutting Board",
    price: 89.0,
    imagePaths: ["/light-cutting-board.webp"],
    description:
      "Lightweight and easy-to-handle cutting board, combining functionality with aesthetic appeal.",
    quantity: 0,
    category: "housewares",
    woodType: ["chechen", "cherry", "padauk", "maple"],
  },
  {
    title: "Fender Style Guitar",
    price: 1299.0,
    imagePaths: [
      "/nick-guitar-1.webp",
      "/nick-guitar-2.webp",
      "/nick-guitar-3.webp",
      "/nick-guitar-4.webp",
    ],
    description:
      "Exquisite Fender-style guitar, offering both a classic design and superior sound quality.",
    quantity: 0,
    category: "guitars",
    woodType: ["swamp ash", "indian rose wood"],
  },
  {
    title: "Acrylic Tv Board",
    price: 129.0,
    imagePaths: [
      "/resin-board.webp",
      "/resin-board-2.webp",
      "/resin-board-3.webp",
    ],
    description:
      "Contemporary resin TV board, featuring a unique design to enhance your living space.",
    quantity: 0,
    category: "housewares",
    woodType: ["walnut"],
  },
  {
    title: "Ring Box",
    price: 59.0,
    imagePaths: ["/ring-box.webp"],
    description:
      "Elegantly crafted ring box, perfect for safely storing and showcasing your precious jewelry.",
    quantity: 0,
    category: "housewares",
    woodType: ["padauk", "canary wood"],
  },
  {
    title: "Marquetry Guitar",
    price: 1299.0,
    imagePaths: [
      "/ryan-guitar-1.webp",
      "/ryan-guitar-2.webp",
      "/ryan-guitar-3.webp",
      "/ryan-guitar-4.webp",
    ],
    description:
      "Innovative cutting board shaped like a guitar, merging culinary art with musical passion.",
    quantity: 0,
    category: "guitars",
    woodType: ["padauk", "canary wood", "walnut", "maple"],
  },
  {
    title: "Side Table",
    price: 299.0,
    imagePaths: ["/side-table.webp", "/side-table-3.webp"],
    description:
      "Chic and functional side table, perfect for adding a touch of elegance to any room.",
    quantity: 0,
    category: "furniture",
    woodType: ["oak", "maple", "padauk"],
  },
  {
    title: "Wooden Spoon",
    price: 29.0,
    imagePaths: ["/spoon.webp"],
    description:
      "Handcrafted wooden spoon, an essential tool for any kitchen aficionado.",
    quantity: 0,
    category: "housewares",
    woodType: ["walnut", "maple", "cherry"],
  },
  {
    title: "Dining Table",
    price: 7799.0,
    imagePaths: [
      "/table-1.webp",
      "/table-2.webp",
      "/table-3.webp",
      "/dining-table4.webp",
      "/dining-table-5.webp",
    ],
    description:
      "Luxurious dining table, designed to be the centerpiece of memorable family gatherings.",
    quantity: 0,
    category: "furniture",
    woodType: ["walnut"],
  },
  {
    title: "Tv Tray",
    price: 139.0,
    imagePaths: ["/tv-tray.webp", "/tv-tray-2.webp"],
    description:
      "Versatile TV tray, ideal for enjoying meals or working comfortably from your couch.",
    quantity: 0,
    category: "housewares",
    woodType: ["spalted maple", "walnut"],
  },
  {
    title: "Cheeseboard",
    price: 69.0,
    imagePaths: ["/cheeseboard.webp"],
    description: "",
    quantity: 0,
    category: "housewares",
    woodType: ["unknown"],
  },
  {
    title: "Exotic Cutting Board",
    price: 149.0,
    imagePaths: [
      "/exotic-cuttingboard-1.webp",
      "/exotic-cuttingboard-2.webp",
      "/exotic-cuttingboard-3.webp",
    ],
    description: "",
    quantity: 0,
    category: "housewares",
    woodType: ["unknown"],
  },
  {
    title: "Tan Coasters",
    price: 29.0,
    imagePaths: ["/tan-coasters.webp", "/tan-coasters-2.webp"],
    description: "",
    quantity: 0,
    category: "housewares",
    woodType: ["unknown"],
  },
];

interface CallToActionCards {
  title: string;
  imagePath: string;
  link: string;
}

const CALL_TO_ACTION_CARDS: CallToActionCards[] = [
  {
    title: "Furniture",
    imagePath: "/furniture.webp",
    link: "/woodshop?category=furniture",
  },
  {
    title: "Guitars",
    imagePath: "/guitar.webp",
    link: "/woodshop?category=guitars",
  },
  {
    title: "Housewares",
    imagePath: "/housewares.webp",
    link: "/woodshop?category=housewares",
  },
];

export { IMAGE_CARDS, CALL_TO_ACTION_CARDS };
