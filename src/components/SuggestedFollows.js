import React from "react";
import User from "./User";
import profileImage from "./../img/profileImage.jpg";

const mainSuggestedFollows = [
  {
    userImage: profileImage,
    userName: "The Dude",
  },
  {
    userImage: profileImage,
    userName: "John Cena",
  },
  {
    userImage: profileImage,
    userName: "Scooby Doo",
  },
];

function SuggestedFollows() {
  return (
    <React.Fragment>
      <div className="suggested-follows">
        <h5>Suggested Follows</h5>
        {mainSuggestedFollows.map((user, index) => (
          <User image={user.userImage} name={user.userName} key={index} />
        ))}
      </div>
    </React.Fragment>
  );
}

export default SuggestedFollows;
