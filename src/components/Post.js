import React from "react";
import PropTypes from "prop-types";

function Post(props){
  return(
    <React.Fragment>
      <div className="post">
        <img src={props.image} alt="profile"/>
        <div className="post-body">
          <p><strong>{props.name}</strong></p>
          <p>{props.body}</p>
          <hr/>
          <a href={props.link}>{props.linkName}</a>
        </div>
      </div>
    </React.Fragment>
  );
}

Post.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  link: PropTypes.string
}

export default Post;