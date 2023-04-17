import { useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useStateContext } from "../../context/NewsContext";
import { Card } from "../Card";
import { Search } from "../Search";
import { fetchNews } from "./fetchNews";

export const NewsPage: React.FC = () => {
  const {
    page,
    setPage,
    searchTerm,
    setSearchTerm,
    articleItems,
    setArticleItems,
  } = useStateContext();

  useEffect(() => {
    if (searchTerm && searchTerm !== "") {
      fetchMoreData();
    }
  }, [searchTerm]);

  const fetchMoreData = () => {
    fetchNews(searchTerm, page).then((articles) =>
      setArticleItems([...articleItems, ...articles])
    );
    setPage(page + 1);
  };

  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="m-2">Enter a term to see headlines</h1>
        <Search onSearch={setSearchTerm} />
      </div>
      <InfiniteScroll
        dataLength={articleItems.length}
        next={fetchMoreData}
        hasMore={true}
        loader={<h4></h4>}
      >
        <div className="grid grid-flow-row grid-cols-1 grid-rows-auto gap-6 m-7">
          {articleItems.map((article) => (
            <Card {...article} />
          ))}
        </div>
      </InfiniteScroll>
    </div>
  );
};
