import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
      <section className="article-card" key={currArticle.article_id}>
            <ul className="cardArticleList">
              <li className="idLink">
                <Link to={`/article/${currArticle.article_id}`}>
                  <h4>{currArticle.title}</h4>
                </Link>
              </li>
              <li className="topicLink">
                <Link to={`/topic/${currArticle.topic}`}>
                <p>Topic: {currArticle.topic}</p>
                </Link>
              </li>
              <li>
                <p>Posted: {currArticle.created_at}</p>
              </li>
              <li>
              <li>
                <p>{currArticle.body}</p>
              </li>
                <p>Posted by {currArticle.author}</p>
              </li>
              <li>
                <p>{currArticle.votes} Votes</p>
              </li>
              <li>
                <p>{currArticle.comment_count} people have commented on this article</p>
              </li>
            </ul>
          </section>
    </>
  );
}
