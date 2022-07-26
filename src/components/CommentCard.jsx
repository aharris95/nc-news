function CommentCard({commentsList}) {
    
    return ( <>
        <h3>Comments: </h3>
        <section className="comment-list">
            {commentsList.map((comment)=>{
                return (
                    <section className="comment-card" key={comment.comment_id}>
                        <ul className="cardArticleList">
                        <li>
                                <h4>{comment.author}</h4>
                            </li>
                            <li>
                                <p>{comment.body}</p>
                            </li>
                            <li>
                                <p>Posted at {new Date(comment.created_at).toLocaleString()}</p>
                            </li>
                            <li>
                                <p>{comment.votes} Votes</p>
                            </li>
                        </ul>
                    </section>
                )
            }
            )}
        </section>
        </>
     );
}

export default CommentCard;