import { Avatar } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import "./SidebarChats.css";
function SidebarChats({addNewChat}) {
    const [seed, setSeed] = useState("");
    useEffect(() => {
       setSeed(Math.floor(Math.random()*5000))
    }, []);

    const createChat=()=>{
        const roomName = prompt("Enter the room name...")
        if (roomName){
            //some db stuff
        }
    }
    return !addNewChat?(
        <div className="sidebarChats">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
            <div className="sidebarChats__info">
                <h2>Room Name</h2>
                <p>Last Message......</p>
            </div>
            
        </div>
    ):(
        <div className="sidebarChats"
        onClick={createChat}>
       <h2>Add a new Chat</h2> 

        </div>
    )
}

export default SidebarChats
