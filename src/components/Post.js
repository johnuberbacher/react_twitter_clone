import React, {useState, useEffect} from "react";
import "./Feed.css";
import db from '../config/firebase';

function Post() {
  const [newPost, setNewPost] = useState("");
//  const [postImage, setNewPost] = useState("");//
  const submitPost = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: "John Uberbacher",
      username: "JohnUberbacher",
      postMsg: newPost,
      upload: '',
      avatar:
        "https://pbs.twimg.com/profile_images/1307919711338864640/Jn1eTlz1_normal.jpg",
    });

    setNewPost("");
  //  setTweetImage("");
  };

  return (
    <div className="post p-3 mb-2 bg-white">
      <div className="media">
        <img className="img mr-3 rounded-circle" src="https://pbs.twimg.com/profile_images/1307919711338864640/Jn1eTlz1_normal.jpg"/>
        <div className="media-body">
          <form>
            <div className="w-100 border-bottom pb-3">
              <input type="text" value={newPost} onChange={(e) => setNewPost(e.target.value)} className="form-control" placeholder="What's Happening?"/>
            </div>
            <div className="w-100 d-flex flex-row justify-content-end pt-3">
              <button onClick={submitPost} type="submit" className="btn btn-primary">Tweet</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Post;
