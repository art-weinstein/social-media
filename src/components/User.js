import React from "react";
import PropTypes from "prop-types";

function User(props){
  return (
    <React.Fragment>
      <img src={props.image} alt="user profile"/>
      <p>{props.name}</p>
      <button>Follow</button>
    </React.Fragment>
  );
}

User.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
};

export default User;