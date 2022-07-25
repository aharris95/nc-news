import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ArticleCardTopic from "./ArticleCardTopic";

function Topic() {
    const [articleByTopic, setArticleByTopic] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const { topic } = useParams();

useEffect(() => {
    setIsLoading(true);
    fetch(`https://nc-news-backendproject.herokuapp.com/api/articles/?filter=${topic}`)
      .then((res) => res.json())
      .then((body) => {
        setArticleByTopic(body.articles);
        setIsLoading(false);
      });
  }, [topic]);

    return (  
        <>
        {isLoading && <div>Loading...</div>}
      <ArticleCardTopic articleByTopic={articleByTopic} />
        </>
    );
}

export default Topic;