import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

function ArticleList({ articleFilter }) {
  const [searchedArticles, setSearchedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    let url = [];

    if (!articleFilter) {
      url.shift();
      url.push("/articles/");
    }
    if (articleFilter) {
      url.shift();
      url.push(`/articles/?filter=${articleFilter}`);
    }
    fetch(`https://nc-news-backendproject.herokuapp.com/api${url[0]}`)
      .then((res) => res.json())
      .then((body) => {
        setSearchedArticles(body.articles);
        if (!body.articles.length) {
          throw Error("could not fetch the data for that resource");
        }
        setIsLoading(false);
        setError(null);
      })
      .catch((e) => {
        setError(e.message);
        setIsLoading(false);
      });
  }, [setSearchedArticles, articleFilter]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ArticleCard searchedArticles={searchedArticles} />
    </>
  );
}

export default ArticleList;
