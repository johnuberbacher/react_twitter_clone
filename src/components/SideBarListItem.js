import React from "react";
import "./SideBarListItem.css";

function SideBarListItem({ Text, Icon }) {
  return (
    <a href="#" className="sideBarListItem mb-2">
      <div class="sideBarHover">
      <div className="sidebar-icon">
        <Icon/>
      </div>
      <span class="pr-2">{ Text }</span>
    </div>
    </a>
  )
}

export default SideBarListItem;
