"use client";
import React, { createContext, useState } from "react";

export interface SelectedItem {
  title: string;
  price: number;
  imagePaths: string[];
  description: string;
  quantity: number;
  category: string;
  displayImagePath: string;
}

export function setNoSelectedItem(): SelectedItem {
  return {
    title: "Project",
    price: 0,
    imagePaths: [],
    description: "",
    quantity: 0,
    category: "",
    displayImagePath: "",
  };
}

export const SelectedItemContext = createContext<{
  selectedItem: SelectedItem;
  setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItem>>;
}>({
  selectedItem: setNoSelectedItem(),
  setSelectedItem: () => {},
});

type SelectedItemProviderProps = {
  children: React.ReactNode;
};

export const SelectedItemProvider: React.FC<SelectedItemProviderProps> = ({
  children,
}) => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem>({
    title: "",
    price: 0,
    imagePaths: [],
    description: "",
    quantity: 0,
    category: "",
    displayImagePath: "",
  });

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};
