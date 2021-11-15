import React from "react";
import PropTypes from "prop-types";

function User(props) {
  return (
    <React.Fragment>
      <div className="suggested-user">
        <img className="user-image" src={props.image} alt="user profile" />
        <p><strong>{props.name}</strong></p>
        <button className="btn-primary follow-btn">Follow</button>
      </div>
    </React.Fragment>
  );
}

User.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default User;
