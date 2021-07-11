import React from "react";
import "./Trending.css"
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import DescriptionIcon from '@material-ui/icons/Description';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';

function trending() {
  return (
    <div className="trending d-none d-lg-flex">
      <div className="trendingWrapper">
        <input type="text" className="trending-search form-control mb-3" placeholder="Search Twitter"/>
        <div className="bg-light rounded">
          <div className="p-3 font-weight-bold border-bottom">Whats Happening</div>
        </div>
      </div>
    </div>
  )
}

export default trending;
