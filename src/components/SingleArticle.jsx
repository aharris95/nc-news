import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";
import { useParams } from "react-router-dom";

export default function SingleItem() {
  const [currArticle, setCurrArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://nc-news-backendproject.herokuapp.com/api/articles/${article_id}`)
      .then((res) => res.json())
      .then((body) => {
        setCurrArticle(body.article);
        setIsLoading(false);
      });
  }, [article_id]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <ArticleCard currArticle={currArticle} />
    </>
  );
}
