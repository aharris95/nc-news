import { useState, useEffect } from "react";
import ArticleCard from "./ArticleCard";

function ArticleList({articleSearch, articleFilter}) {
  const [searchedArticles, setSearchedArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    let url = [];

    if (!articleSearch && !articleFilter) {
      url.shift();
      url.push("/articles/");
    }
    if (articleSearch && !articleFilter) {
      url.shift();
      url.push(`/articles/?search=${articleSearch}`);
    }
    if (!articleSearch && articleFilter) {
      url.shift();
      url.push(`/articles/?filter=${articleFilter}`);
    } else if (articleSearch && articleFilter) {
      url.shift();
      url.push(`/articles/?search=${articleSearch}&&?/articles/?filter=football=${articleFilter}`);
    }

    fetch(`https://nc-news-backendproject.herokuapp.com/api${url[0]}`)
      .then((res) => res.json())
      .then((body) => {
        console.log(url)
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
  }, [articleSearch, setSearchedArticles, articleFilter]);

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <ArticleCard searchedArticles={searchedArticles} />
    </>
     );
}

export default ArticleList;
  