import React from "react";
import "./Feed.css";

function Post(){
  return (
    <div className="post p-3 mb-2 bg-white">
      <div className="media">
        <img className="img mr-3 rounded-circle" src="https://pbs.twimg.com/profile_images/1307919711338864640/Jn1eTlz1_normal.jpg" />
        <div className="media-body">
          <div className="w-100 border-bottom pb-3">
          <input type="text" className="form-control" placeholder="What's Happening?"/>
          </div>
          <div class="w-100 d-flex flex-row justify-content-end pt-3">
            <a href="#" className="btn btn-primary">Tweet</a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Post;
