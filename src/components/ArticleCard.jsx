import { Link } from "react-router-dom";


function ArticleCard({ searchedArticles, articleByTopic, currArticle }) {
  let mapArticles = searchedArticles
  if (articleByTopic){
    mapArticles = articleByTopic
  }
  return (
    <section className="article-list">
      {mapArticles.map((article) => {
        return (
          <section className="article-card" key={article.article_id}>
            <ul className="cardArticleList">
              <li className="idLink">
                <Link to={`/article/${article.article_id}`}>
                  <h4>{article.title}</h4>
                </Link>
              </li>
              <li className="topicLink">
                <Link to={`/topic/${article.topic}`}>
                <p>Topic: {article.topic}</p>
                </Link>
              </li>
              <li>
                <p>Posted: {article.created_at}</p>
              </li>
              <li>
              <li>
                <p>{article.body}</p>
              </li>
                <p>Posted by {article.author}</p>
              </li>
              <li>
                <p>{article.votes} Votes</p>
              </li>
              <li>
                <p>{article.comment_count} people have commented on this article</p>
              </li>
            </ul>
          </section>
        );
      })}
    </section>
  );
}

export default ArticleCard;
