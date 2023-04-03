import React, { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

interface Article {
  id: string;
  title: string;
  content: string;
  date: string;
  author: string;
}

interface StateContextProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  articleItems: Article[];
  setArticleItems: React.Dispatch<React.SetStateAction<Article[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  // onAdd: (product: Product, quantity: number) => void;
  // onRemove: (product: Product) => void;
}

const Context = createContext<StateContextProps>({} as StateContextProps);

export const StateContext = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Context.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        articleItems,
        setArticleItems,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
