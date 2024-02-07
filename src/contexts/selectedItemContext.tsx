"use client";
import React, { createContext, useState } from "react";

export interface SelectedItem {
  title: string;
  price: number;
  imagePaths: string[];
  description: string;
  quantity: number;
  category: string;
  woodType: string[];
  displayImagePath: string;
}

export const SelectedItemContext = createContext<{
  selectedItem: SelectedItem | null;
  setSelectedItem: React.Dispatch<React.SetStateAction<SelectedItem | null>>;
}>({
  selectedItem: null,
  setSelectedItem: () => {},
});

type SelectedItemProviderProps = {
  children: React.ReactNode;
};

export const SelectedItemProvider: React.FC<SelectedItemProviderProps> = ({
  children,
}) => {
  const [selectedItem, setSelectedItem] = useState<SelectedItem | null>(null);

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelectedItem }}>
      {children}
    </SelectedItemContext.Provider>
  );
};
