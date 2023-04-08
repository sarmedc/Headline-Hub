import { useEffect } from "react";
import { useStateContext } from "../../context/NewsContext";
import { Card } from "../Card";
import { Search } from "../Search";
import { fetchNews } from "./fetchNews";

export const NewsPage: React.FC = () => {
  const { searchTerm, setSearchTerm, articleItems, setArticleItems } =
    useStateContext();

  useEffect(() => {
    if (searchTerm && searchTerm !== "") {
      fetchNews(searchTerm).then((articles) => setArticleItems(articles));
    }
  }, [searchTerm]);

  return (
    <div>
      <h1>Enter a term to see results</h1>
      <Search onSearch={setSearchTerm} />
      {articleItems.map((article) => (
        <Card {...article} />
      ))}
    </div>
  );
};
