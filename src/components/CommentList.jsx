import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react';
import * as api from "../api";
import CommentCard from './CommentCard';

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
        <CommentCard commentsList={commentsList}/>
        </>
     );
}

export default CommentSection;