import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-backendproject.herokuapp.com/api/",
  });

export function patchVote(id, vote){
    return newsApi.patch(`articles/${id}`, {inc_votes: vote}).then((res) =>{
        return res.data.article
    })
}

export function getCommentsById(id){
    return newsApi.get(`articles/${id}/comments`).then((res)=>{
        return res.data.comments
    })
}

export function postComment(body, author, id){
    return newsApi.post(`articles/${id}/comments`, {body: body, author: author}).then((res)=>{
        return res.data.comment
    })
}

export function getArticles(){
    return newsApi.get(`articles`).then((res)=>{
        return res.data.articles
    })
}

export function deleteComment(id){
    return newsApi.delete(`comments/${id}`)
}