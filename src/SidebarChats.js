import { Avatar } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import db from "./firebase.js";
import "./SidebarChats.css";
function SidebarChats({ addNewChat, id, name }) {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data())),
        );
    }
  }, );
  const createChat = () => {
    const roomName = prompt("Enter the room name...");
    if (roomName === name) {
      alert("Room Name already exists");
    } else if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };
  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className='sidebarChats'>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className='sidebarChats__info'>
          <h2>{name}</h2>
          <p>{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className='sidebarChats' onClick={createChat}>
      <h2>Add a new Chat</h2>
    </div>
  );
}

export default SidebarChats;
