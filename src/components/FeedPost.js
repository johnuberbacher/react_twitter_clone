import React from "react";
import "./Feed.css";

function FeedPost({
  name,
  username,
  avatar,
  postMsg,
  upload
}) {
  return (
  <div className="feed-post p-3 border-bottom">
    <div className="media">
      <img className="img mr-3 rounded-circle" src={avatar} />
      <div className="media-body">
        <div className="post-title d-flex flex-column flex-sm-row mb-1"><div class="post-name font-weight-bold mr-2">{name}</div><div class="post-username text-secondary">@JohnUberbacher  ·  4h</div></div>
        <div class="mb-3">{postMsg}</div>
        <img src={upload} className="w-100 img-fluid rounded"/>
      </div>
    </div>
  </div>
  )
}

export default FeedPost;
