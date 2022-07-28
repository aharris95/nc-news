import * as api from "../api"
import { useEffect, useState } from 'react';
import UserCommentCard from "./UserCommentCard";

function UserComments({user}) {
    const [userComments, setUserComments] = useState([]) 
    useEffect(()=>{
        api.getArticles().then((res)=>{
            const articleIds = []
            res.forEach (article => articleIds.push(article.article_id))
            return articleIds
        }).then((res)=>{
            let commentsArray = []
             res.forEach ((id) => {
                let filteredComments= []
                 api.getCommentsById(id).then((res)=>{
                    res.forEach((comment)=>{
                        if(comment.author === user.username){
                            filteredComments.push(comment)
                        }
                    })
                    return filteredComments
                }).then((res)=>{
                    commentsArray.push(res)
                    
                    setUserComments(commentsArray.flat())
                })
            })
        })
    },[setUserComments])

    return ( 
        <>
        <h4>Your Comments:</h4>
        {userComments && <UserCommentCard userComments={userComments} setUserComments={setUserComments}/>}
        </>
     );
}

export default UserComments;