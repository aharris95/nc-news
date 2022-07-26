import { Link } from "react-router-dom";
import Vote from "./Vote";

function ArticleCard({ searchedArticles, articleByTopic }) {
  let mapArticles = searchedArticles;
  if (articleByTopic) {
    mapArticles = articleByTopic;
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
                <p>Posted at {new Date(article.created_at).toLocaleString()}</p>
              </li>
              <li>
                <p>{article.body.substring(0, 200)}...</p>
              </li>
              <li>
                <p>Posted by {article.author}</p>
              </li>
              <li>
          <Vote currId={article.article_id} currVotes={article.votes} />
          </li>
              <li>
                <p>{article.comment_count} Comments</p>
              </li>
            </ul>
          </section>
        );
      })}
    </section>
  );
}

export default ArticleCard;
