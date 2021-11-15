import React from "react";
import profileImage from "./../img/profileImage.jpg";

function Profile() {
  return (
    <React.Fragment>
      <div className="profile">
        <div class="profile-top">
          <img className="left-profile-img" src={profileImage} alt="Profile" />
          <div className="blue"><span></span></div>
          <h5>Benjamin Weinstein</h5>
          <div className="btn-group">
            <button className="btn">TWEETS</button>
            <button className="btn">FOLLOWING</button>
            <button className="btn">FOLLOWERS</button>
          </div>
        </div>
        <div className="bio">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin et
            scelerisque elit, non maximus dolor. Pellentesque id ligula quam.
            Etiam dapibus sapien nec ipsum euismod elementum. Vestibulum vitae
            enim id sem dapibus auctor vitae eget ex. Etiam vitae mauris at eros
            porta fringilla vel non urna. Morbi quis urna nec dolor viverra
            fermentum. Phasellus a massa at lectus fermentum sollicitudin. Sed
            lobortis fermentum elit sed rutrum. Suspendisse sit amet eros
            scelerisque, pulvinar nisi efficitur, aliquet tortor. Ut eget erat
            dictum, sollicitudin ipsum condimentum, consequat dolor. Donec ornare
            sapien eget nibh pretium eleifend. Nunc congue malesuada ultrices.
            Aenean dapibus molestie interdum. Nunc lobortis ullamcorper cursus.
            Vestibulum eu ipsum enim. Aliquam ut eleifend libero.
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Profile;
