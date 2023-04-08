import { Article } from "../../context/NewsContext";

export const Card: React.FC<Article> = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) => (
  <div className="card">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <h5 className="card-title">{author}</h5>
      <p className="card-text">{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={urlToImage} alt={title} className="card-img-top" />
      </a>
      <p className="card-text">{publishedAt}</p>
      <p className="card-text">{content}</p>
    </div>
  </div>
);
