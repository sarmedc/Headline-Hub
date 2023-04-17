import { createContext, useContext, useState } from "react";

type Props = {
  children: React.ReactNode;
};

export interface Article {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

interface StateContextProps {
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  articleItems: Article[];
  setArticleItems: React.Dispatch<React.SetStateAction<Article[]>>;
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
}

const Context = createContext<StateContextProps>({} as StateContextProps);

export const StateContext = ({ children }: Props) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [page, setPage] = useState(0);
  const [articleItems, setArticleItems] = useState<Article[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <Context.Provider
      value={{
        isDarkMode,
        setIsDarkMode,
        page,
        setPage,
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
