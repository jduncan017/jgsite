interface ImageCard {
  title: string;
  price: number;
  imagePaths: string[];
  description: string;
  quantity: number;
  category: string;
}

const imageCards: ImageCard[] = [
  {
    title: "Coasters",
    price: 19.0,
    imagePaths: ["/coasters.jpg"],
    description:
      "Elegant wooden coasters, perfect for protecting surfaces from beverage stains.",
    quantity: 1,
    category: "housewares",
  },
  {
    title: "Coat Rack",
    price: 49.0,
    imagePaths: ["/coat-rack.JPG"],
    description:
      "Stylish and sturdy coat rack, ideal for organizing your outerwear with ease.",
    quantity: 1,
    category: "housewares",
  },
  {
    title: "Cutting Board",
    price: 99.0,
    imagePaths: ["/cutting-board-1.jpg"],
    description:
      "Durable and finely crafted cutting board, perfect for all your kitchen prep needs.",
    quantity: 1,
    category: "housewares",
  },
  {
    title: "Light Cutting Board",
    price: 89.0,
    imagePaths: ["/light-cutting-board.JPG"],
    description:
      "Lightweight and easy-to-handle cutting board, combining functionality with aesthetic appeal.",
    quantity: 2,
    category: "housewares",
  },
  {
    title: "Fender Style Guitar",
    price: 1299.0,
    imagePaths: [
      "/nick-guitar-1.jpg",
      "/nick-guitar-2.jpg",
      "/nick-guitar-3.jpg",
      "/nick-guitar-4.jpg",
    ],
    description:
      "Exquisite Fender-style guitar, offering both a classic design and superior sound quality.",
    quantity: 0,
    category: "guitar",
  },
  {
    title: "Resin Tv Board",
    price: 129.0,
    imagePaths: [
      "/resin-board.JPG",
      "/resin-board-2.JPG",
      "/resin-board-3.JPG",
    ],
    description:
      "Contemporary resin TV board, featuring a unique design to enhance your living space.",
    quantity: 1,
    category: "housewares",
  },
  {
    title: "Ring Box",
    price: 59.0,
    imagePaths: ["/ring-box.jpg"],
    description:
      "Elegantly crafted ring box, perfect for safely storing and showcasing your precious jewelry.",
    quantity: 1,
    category: "housewares",
  },
  {
    title: "Cutting Board Guitar",
    price: 1299.0,
    imagePaths: [
      "/ryan-guitar-1.jpg",
      "/ryan-guitar-2.jpg",
      "/ryan-guitar-3.jpg",
      "/ryan-guitar-4.jpg",
    ],
    description:
      "Innovative cutting board shaped like a guitar, merging culinary art with musical passion.",
    quantity: 1,
    category: "housewares",
  },
  {
    title: "Side Table",
    price: 299.0,
    imagePaths: ["/side-table.jpeg"],
    description:
      "Chic and functional side table, perfect for adding a touch of elegance to any room.",
    quantity: 1,
    category: "furniture",
  },
  {
    title: "Wooden Spoon",
    price: 29.0,
    imagePaths: ["/spoon.JPG"],
    description:
      "Handcrafted wooden spoon, an essential tool for any kitchen aficionado.",
    quantity: 1,
    category: "housewares",
  },
  {
    title: "Dining Table",
    price: 7799.0,
    imagePaths: ["/table-1.JPG", "/table-2.JPG", "/table-3.jpeg"],
    description:
      "Luxurious dining table, designed to be the centerpiece of memorable family gatherings.",
    quantity: 1,
    category: "furniture",
  },
  {
    title: "Tv Tray",
    price: 139.0,
    imagePaths: ["/tv-tray.jpg", "/tv-tray-2.jpg"],
    description:
      "Versatile TV tray, ideal for enjoying meals or working comfortably from your couch.",
    quantity: 1,
    category: "housewares",
  },
];

export default imageCards;
