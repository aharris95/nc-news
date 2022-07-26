import * as api from "../api";
import { useEffect, useState } from "react";

function Vote({currId, currVotes}) {
const [voteCount, setVoteCount] = useState(currVotes)

useEffect(()=>{
    currVotes = voteCount 
}, [])


    const handleVote = (vote) => {
        api.patchVote(currId, vote).then((res)=>{
            setVoteCount(res.votes)
            console.log(res.votes, voteCount)
        })
        }

    return ( 
        <>
         <p>{voteCount} Votes</p>
        <button onClick={()=>{handleVote(1)}}>Like</button>
        <button onClick={()=>{handleVote(-1)}}>Dislike</button>
        </>
     );
}

export default Vote;