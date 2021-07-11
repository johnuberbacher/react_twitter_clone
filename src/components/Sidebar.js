import React from "react";
import "./Sidebar.css"
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SideBarListItem from './SideBarListItem';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import DescriptionIcon from '@material-ui/icons/Description';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import EditIcon from '@material-ui/icons/Edit';

function Sidebar() {
  return (
    <div className="sideBar">
      <div className="sideBar-Index">
        <TwitterIcon/>
      </div>
      <SideBarListItem Icon={HomeIcon} Text="Home" />
      <SideBarListItem Icon={SearchIcon} Text="Explore" />
      <SideBarListItem Icon={NotificationsIcon} Text="Notifications" />
      <SideBarListItem Icon={MailOutlineIcon} Text="Messages" />
      <SideBarListItem Icon={BookmarkBorderIcon} Text="Bookmarks" />
      <SideBarListItem Icon={DescriptionIcon} Text="Lists" />
      <SideBarListItem Icon={PersonIcon} Text="Profile" />
      <SideBarListItem Icon={MoreHorizIcon} Text="More" />
      <a class="btn btn-primary btn-block shadow btn-tweet"><span class="d-flex d-lg-none align-items-center justify-content-center"><EditIcon/></span><span class="d-none d-lg-flex align-items-center justify-content-center">Tweet</span></a>
    </div>
  )
}

export default Sidebar;
