import React, { useState, useEffect } from "react";
import "./Feed.css";
import FeedPost from "./FeedPost";
import Post from "./Post";
import db from '../config/firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      // Map the snapshot data as an array to setPosts
      setPosts(snapshot.docs.map(doc => doc.data()))
    ))
  })

  return (
    <div className="main border-left border-right">
      <div className="feed bg-light">
        <div className="title font-weight-bold p-3 border-bottom sticky-top bg-white">
          Home
        </div>
        <Post/>
        <div className="feed-roll border-top">
          {posts.map((post) => (
            <FeedPost name={post.username} username={post.username} avatar={post.avatar} postMsg={post.postMsg} upload={post.upload} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Feed;
