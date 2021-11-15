import React from "react";
import Post from "./Post";
import profileImage from "./../img/profileImage.jpg";

const mainNewsFeed=[
  {
    image: profileImage,
    name: 'Benjamin Wilson',
    body: 'Lorem ipsum dolor sit amet, consectetur.',
    link: 'Benjamin Wilson'
  },
  {
    image: profileImage,
    name: 'Art Weinstein',
    body: 'Lorem ipsum dolor sit amet, consectetur.',
    link: 'Art Weinstein'
  },
]

function NewsFeed(){
  return(
    <React.Fragment>
      <div className="Post">
        <input type="text" value="post"/>
      </div>
    {mainNewsFeed.map((post, index) =>
      <Post image ={post.image}
        name={post.name}
        body={post.body}
        link={post.link}
        key={index}/>
    )}
    </React.Fragment>
  );
}

export default NewsFeed;