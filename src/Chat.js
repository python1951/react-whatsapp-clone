import { Avatar, IconButton } from "@material-ui/core";
import firebase from "firebase/compat/app";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  SearchOutlined,
  Send,
} from "@material-ui/icons";
import MoreVert from "@material-ui/icons/MoreVert";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import "./Chat.css";
import db from "./firebase";
import { useStateValue } from "./StateProvider";
function Chat() {
  const [input, setInput] = useState("");
  const [seed, setSeed] = useState("");
  const { roomId } = useParams();
  const [roomName, setroomName] = useState("");
  const [messages, setMessages] = useState([]);
  const [{ user }, dispatch] = useStateValue();
  useEffect(() => {
    if (roomId) {
      db.collection("rooms")
        .doc(roomId)
        .onSnapshot((snapshot) => setroomName(snapshot.data().name));
    }
    db.collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data())),
      );
    console.log(roomName);
  }, [roomId]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);
  const sendMessage = (e) => {
    e.preventDefault();
    console.log(input);
    db.collection("rooms").doc(roomId).collection("messages").add({
      name: user.displayName,
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setInput("");
  };
  return (
    <div className='chat'>
      <div className='chat__header'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='chat__headerInfo'>
          <h3>{roomName}</h3>
          <p>
            Last Seen at
            {new Date(
                            messages[messages.length - 1]?.
                            timestamp?.toDate()
                        ).toUTCString()
                        }
          </p>
        </div>
        <div className='chat__headerRight'>
          <IconButton>
            <SearchOutlined />
          </IconButton>
          <IconButton>
            <AttachFile />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      <div className='chat__body'>
        {messages.map((message) => (
          <p
            className={`chat__message ${
              message.name === user.displayName && "chat__receiver"
            }`}>
            <span className='chat__name'>{message.name}</span>
            {message.message}
            <span className='chat__timestamp'>
              {new Date(message.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>

      <div className='chat__footer'>
        <InsertEmoticon />
        <form>
          <input
            value={input}
            placeholder='Enter the Message'
            type='text'
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton type='submit' onClick={sendMessage}>
            <Send />
          </IconButton>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
