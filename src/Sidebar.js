import React from "react";
import ChatIcon from "@material-ui/icons/Chat";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton} from "@material-ui/core";
import "./Sidebar.css";
import { SearchOutlined } from "@material-ui/icons";
import SidebarChats from "./SidebarChats";
function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='sidebar__header'>
        <Avatar />
        <div className='sidebar__headerRight'>
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className='sidebar__search'>
        <div className="sidebar__searchContainer">

        <SearchOutlined/>
        <input placeholder="Search or start a new chat" type="text"/>


        </div>
       
      </div>
      <div className='sidebar__chats'>
        <SidebarChats addNewChat/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
        <SidebarChats/>
      </div>
    </div>
  );
}

export default Sidebar;
