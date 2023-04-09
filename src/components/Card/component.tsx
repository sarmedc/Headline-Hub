import { Article } from "../../context/NewsContext";

export const Card: React.FC<Article> = ({
  author,
  title,
  description,
  url,
  urlToImage,
  publishedAt,
  content,
}) => {
  return (
    <div className="card border">
      <a href={url} target="_blank" rel="noopener noreferrer" className="">
        <div className="flex flex-row">
          <img
            src={
              urlToImage ??
              "https://dummyimage.com/600x400/696969/c7c9ed.jpg&text=Image+unavailable"
            }
            alt={"Image Unavailable"}
            height="100px"
            width="300px"
            className="hidden md:block"
          />
          <div className="card-body flex flex-col h-full justify-between mx-3 my-2">
            <h5 className="card-title font-semibold text-base ">{title}</h5>
            <p className="card-title font-light text-sm mb-5">
              by {author ?? "uknown author"} -{" "}
              {new Date(publishedAt).toLocaleDateString() ?? "xx/xx/xx"}
            </p>
            <p className="card-text text-base font-normal mb-5">
              {description}
            </p>
            <p className="card-text text-sm mb-5">{content}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
