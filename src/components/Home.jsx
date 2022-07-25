import { useState } from "react";
import Search from "./Search";
import ArticleList from "./ArticleList"

function Home() {
  const [articleFilter, setArticleFilter] = useState(null);
  return (
    <>
    <Search
      setArticleFilter={setArticleFilter}
    />
    <ArticleList
    articleFilter={articleFilter}
  />
  </>
  );
}

export default Home;
