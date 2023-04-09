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
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-2">Enter a term to see results</h1>
        <Search onSearch={setSearchTerm} />
      </div>
      <div className="grid grid-flow-row grid-cols-1 grid-rows-auto gap-6 m-7">
        {articleItems.map((article) => (
          <Card {...article} />
        ))}
      </div>
    </div>
  );
};
