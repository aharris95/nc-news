import { useEffect } from 'react'
import * as api from '../api'

function Delete({commentId, userComments, setUserComments}) {
    
    const handleDelete = (id) => {
        api.deleteComment(id)
        const filteredComment = userComments.filter(comment => comment.comment_id !== id)
        setUserComments(filteredComment);
    }


    return ( <button onClick={() => handleDelete(commentId)} className="deleteButton">Delete</button>     );
}

export default Delete;