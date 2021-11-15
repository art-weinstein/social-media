import React from "react";
import User from "./User";
import profileImage from "./../img/profileImage.jpg";

const mainSuggestedFollows = [
  {
  userImage: profileImage,
  userName: 'The Dude'
  },
  {
  userImage: profileImage,
  userName: 'John Cena'
  },
  {
    userImage: profileImage,
    userName: 'Scooby Doo'
  },
]

function SuggestedFollows(){
  return(
    <React.Fragment>
      <h3>Suggested Follows</h3>
      {mainSuggestedFollows.map((user, index)=>
      <User image = {user.userImage}
        name = {user.userName}
        key={index}/>
      )}
    </React.Fragment>
  );
}

export default SuggestedFollows;