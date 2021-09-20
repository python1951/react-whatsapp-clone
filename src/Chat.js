import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, SearchOutlined, Send } from '@material-ui/icons';
import MoreVert from '@material-ui/icons/MoreVert';
import React, { useEffect, useState } from 'react'
import "./Chat.css";
function Chat() {
    const [seed, setSeed] = useState("");
    useEffect(() => {
       setSeed(Math.floor(Math.random()*5000))
    }, []);
    const sendMessage=()=>{
        
    }
    return (
        <div className="chat">
            <div className="chat__header">
            <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room name</h3>
                    <p>Last Seen at ...</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                    <SearchOutlined/>
                    </IconButton>
                    <IconButton>
                    <AttachFile/>
                    </IconButton>
                    <IconButton>
                    <MoreVert/>
                    </IconButton>
                </div>
            </div>
            <div className="chat__body">

                <p className={`chat__message ${ true && "chat__receiver"}`}>
                    <span className="chat__name">
                        Awais Qamar
                    </span>
                    Hey Bro! Whats going on.
                    <span className="chat__timestamp">
                        3:50pm
                    </span>
                </p>
            </div>

            <div className="chat__footer">

                <InsertEmoticon/>
                <form>
                    <input placeholder="Enter the Message "  type="text"/>
                <IconButton type="submit" onClick={sendMessage}>
                   <Send/>
                   </IconButton>
                </form>
                <Mic/>

            </div>
        </div>
    )
}

export default Chat
