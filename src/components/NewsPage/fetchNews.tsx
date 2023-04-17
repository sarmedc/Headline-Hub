import axios, { AxiosResponse } from "axios";

type Article = {
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
};

type NewsApiResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

export async function fetchNews(
  searchTerm: string,
  page: number
): Promise<Article[]> {
  const response: AxiosResponse<NewsApiResponse> = await axios.get(
    `https://newsapi.org/v2/everything?language=en&q=${searchTerm}&pageSize=20&page=${
      page + 1
    }&apiKey=d5af6414892b4ab4a3ab063a05968552`
  );
  return response.data.articles;
}
