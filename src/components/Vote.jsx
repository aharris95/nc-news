import * as api from "../api";
import { useState } from "react";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";


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
         <div style={{color: 'blue'}}>
        <RiThumbUpFill className="voteThumb" onClick={()=>{handleVote(1)}}  />
        <RiThumbDownFill className="voteThumb" onClick={()=>{handleVote(-1)}}  />
        </div>
        </>
     );
}

export default Vote;