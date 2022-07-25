import { useState } from "react";
import Search from "./Search";
import ArticleList from "./ArticleList"

function Home() {
  const [articleSearch, setArticleSearch] = useState(null);
  const [articleFilter, setArticleFilter] = useState(null);
  return (
    <>
    <Search
      setArticleSearch={setArticleSearch}
      setArticleFilter={setArticleFilter}
    />
    <ArticleList
    articleSearch={articleSearch}
    articleFilter={articleFilter}
  />
  </>
  );
}

export default Home;
