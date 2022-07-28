import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

function Topic() {
  const [articleByTopic, setArticleByTopic] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false)
  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://nc-news-backendproject.herokuapp.com/api/articles/?filter=${topic}`
    )
      .then((res) => {
        if(!res.ok){
          throw Error('could not fetch the data for that resource')
      }
        return res.json()
      })
      .then((body) => {
        setArticleByTopic(body.articles);
        setIsLoading(false);
        setError(null)
      }).catch(e=>{
        setError(e.message)
        setIsLoading(false)
      })
  }, [topic]);

  return (
    <>
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      <ArticleCard articleByTopic={articleByTopic} />
    </>
  );
}

export default Topic;
