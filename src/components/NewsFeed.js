import React from "react";
import Post from "./Post";
import profileImage from "./../img/profileImage.jpg";

const mainNewsFeed=[
  {
    image: profileImage,
    name: 'Benjamin Wilson',
    body: 'Lorem ipsum dolor sit amet, consectetur.',
    linkName: 'Epicodus',
    link: 'http://www.epicodus.com'
  },
  {
    image: profileImage,
    name: 'Art Weinstein',
    body: 'Lorem ipsum dolor sit amet, consectetur.',
    linkName: 'Google',
    link: 'http://www.google.com'
  },
]

function NewsFeed(){
  return(
    <React.Fragment>
      <div className="news-feed">
        <div className="new-post">
          <div className="new-post-img">
            <img src={profileImage} alt="profile" />
            <input className='post-text' type="text" placeholder="What's Happening?"/>
          </div>
        </div>
            {mainNewsFeed.map((post, index) =>
        <Post image ={post.image}
          name={post.name}
          body={post.body}
          linkName={post.linkName}
          link={post.link}
          key={index}/>
            )}
      </div>
    </React.Fragment>
  );
}

export default NewsFeed;