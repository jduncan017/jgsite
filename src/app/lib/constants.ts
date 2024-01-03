interface ImageCard {
  title: string;
  price: number;
  imagePaths: string[];
  description: string;
  quantity: number;
}

const imageCards: ImageCard[] = [
  {
    title: "Coasters",
    price: 19.0,
    imagePaths: ["/coasters.jpg"],
    description: "",
    quantity: 1,
  },
  {
    title: "Coat Rack",
    price: 49.0,
    imagePaths: ["/coat-rack.JPG"],
    description: "",
    quantity: 1,
  },
  {
    title: "Cutting Board",
    price: 99.0,
    imagePaths: ["/cutting-board-1.jpg"],
    description: "",
    quantity: 1,
  },
  {
    title: "Light Cutting Board",
    price: 89.0,
    imagePaths: ["/light-cutting-board.JPG"],
    description: "",
    quantity: 2,
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
    description: "",
    quantity: 0,
  },
  {
    title: "Resin Tv Board",
    price: 129.0,
    imagePaths: [
      "/resin-board.JPG",
      "/resin-board-2.JPG",
      "/resin-board-3.JPG",
    ],
    description: "",
    quantity: 1,
  },
  {
    title: "Ring Box",
    price: 59.0,
    imagePaths: ["/ring-box.jpg"],
    description: "",
    quantity: 1,
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
    description: "",
    quantity: 1,
  },
  {
    title: "Side Table",
    price: 299.0,
    imagePaths: ["/side-table.jpeg"],
    description: "",
    quantity: 1,
  },
  {
    title: "Wooden Spoon",
    price: 29.0,
    imagePaths: ["/spoon.JPG"],
    description: "",
    quantity: 1,
  },
  {
    title: "Dining Table",
    price: 7799.0,
    imagePaths: ["/table-1.JPG", "/table-2.JPG", "/table-3.jpeg"],
    description: "",
    quantity: 1,
  },
  {
    title: "Tv Tray",
    price: 139.0,
    imagePaths: ["/tv-tray.jpg", "tv-tray-2.jpg"],
    description: "",
    quantity: 1,
  },
];

export default imageCards;
