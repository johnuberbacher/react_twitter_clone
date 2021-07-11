import React from "react";
import "./Feed.css";

function FeedPost() {
  return (
  <div className="post p-3 border-top">
    <div className="media">
      <img className="img mr-3 rounded-circle" src="https://pbs.twimg.com/profile_images/1307919711338864640/Jn1eTlz1_normal.jpg" />
      <div className="media-body">
        <div className="post-title d-flex flex-column flex-sm-row mb-1"><div class="post-name font-weight-bold mr-2">John Uberbacher</div><div class="post-username text-secondary">@JohnUberbacher  ·  4h</div></div>
        <div>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.</div>
      </div>
    </div>
  </div>
  )
}

export default FeedPost;
