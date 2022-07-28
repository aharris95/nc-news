import Delete from './Delete'

function UserCommentCard({userComments, setUserComments}) {
    
    return ( <>
        <section className="comment-list">
            {userComments.map((comment)=>{
                return (
                    <section className="comment-card" key={comment.comment_id}>
                        <ul className="cardArticleList">
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
                        <Delete commentId={comment.comment_id} userComments={userComments} setUserComments={setUserComments}/>
                    </section>
                )
            }
            )}
        </section>
        </>
     );
}

export default UserCommentCard;