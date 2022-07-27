import { UserContext } from "../contexts/User";
import { useContext, useState } from "react";
import * as api from "../api";

function AddComment({commentsList, setCommentsList, article_id}) {
    const {user} = useContext(UserContext)
    const [textInput, setTextInput] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault();
        api.postComment(textInput, user.username, article_id).then((res)=>{
            setCommentsList([res, ...commentsList])
        })
    }

    return ( 
        <form className="add-comment">
        <input onChange={(event)=>setTextInput(event.target.value)} placeholder="Add your comment here..." name="addComment" id="addComment"></input>
        <button onClick={handleSubmit}>Add Comment</button>
        </form>
     );
}

export default AddComment;