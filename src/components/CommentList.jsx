import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import * as api from "../api";
import CommentCard from './CommentCard';
import AddComment from "./AddComment"

function CommentSection() {
    const {article_id} = useParams()

    const [commentsList, setCommentsList] = useState([])
    
    useEffect (()=>{
        api.getCommentsById(article_id).then((res)=>{
            setCommentsList(res)
        })
    },[article_id])

    return ( 
        <>
        <AddComment commentsList={commentsList} setCommentsList={setCommentsList} article_id={article_id}/>
        <CommentCard commentsList={commentsList}/>
        </>
     );
}

export default CommentSection;