import axios from "axios";
import { useStateContext } from "../../context/NewsContext";

export const NewsPage: React.FC = () => {
  axios
    .get(
      "https://newsapi.org/v2/top-headlines?country=us&category=technology&page=2&apiKey=d5af6414892b4ab4a3ab063a05968552"
    )
    .then((res) => res)
    .then((res) => {
      console.log(res);
    });
  return (
    <div>
      <h1>News</h1>
    </div>
  );
};
