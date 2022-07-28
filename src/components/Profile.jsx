import { UserContext } from "../contexts/User";
import { useContext } from "react";
import UserComments from "./UserComments"

function Profile() {
    const {user} = useContext(UserContext)
  return (
    <>
    <img src={user.avatar_url} alt={user.username} className="profileImage"/>
      <h3>Welcome {user.username}!</h3>
      <UserComments user={user}/>
    </>
  );
}

export default Profile;
