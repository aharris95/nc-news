import * as api from "../api";
import { useState } from "react";


function Vote({currId, currVotes}) {
const [voteCount, setVoteCount] = useState(currVotes)

    const handleVote = (vote) => {
        api.patchVote(currId, vote).then((res)=>{
            setVoteCount(res.votes)
    
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