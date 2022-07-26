import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

function Topic() {
  const [articleByTopic, setArticleByTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://nc-news-backendproject.herokuapp.com/api/articles/?filter=${topic}`
    )
      .then((res) => res.json())
      .then((body) => {
        setArticleByTopic(body.articles);
        setIsLoading(false);
      });
  }, [topic]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <ArticleCard articleByTopic={articleByTopic} />
    </>
  );
}

export default Topic;
