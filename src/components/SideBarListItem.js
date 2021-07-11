import React from "react";
import "./SideBarListItem.css";

function SideBarListItem({ Text, Icon }) {
  return (
    <a href="#" className="sideBarListItem">
      <div class="sideBarHover">
      <div className="sidebar-icon">
        <Icon/>
      </div>
      <span>{ Text }</span>
    </div>
    </a>
  )
}

export default SideBarListItem;
