import axios from "axios";

const newsApi = axios.create({
    baseURL: "https://nc-news-backendproject.herokuapp.com/api/",
  });

export function patchVote(id, vote){
    return newsApi.patch(`articles/${id}`, {inc_votes: vote}).then((res) =>{
        return res.data.article
    })
}

