
import React from 'react';
import Header from "./Header";
import Profile from "./Profile";
import NewsFeed from "./NewsFeed";
import SuggestedFollows from "./SuggestedFollows";
import '../App.css';

function App() {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <Profile />
        <SuggestedFollows />
        <NewsFeed />
      </div>
    </React.Fragment>
  );
}

export default App;
