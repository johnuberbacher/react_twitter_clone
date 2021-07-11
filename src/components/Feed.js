import React from "react";
import "./Feed.css";
import FeedPost from "./FeedPost";
import Post from "./Post";

function Feed() {
  return (
    <div className="main border-left border-right">
      <div className="feed bg-light">
        <div className="title font-weight-bold p-3 border-bottom sticky-top bg-white">
          Home
        </div>
        <Post/>
        <div className="feed-roll">
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
          <FeedPost/>
        </div>
      </div>
    </div>
  )
}

export default Feed;
