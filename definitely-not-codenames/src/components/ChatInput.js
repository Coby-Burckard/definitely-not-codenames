import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

const ChatInput = () => {
  const dispatch = useDispatch();

  // hooks
  const [message, setMessage] = useState("");
  useEffect(() => {
    const URL = "ws://localhost:8080";
    const ws = new WebSocket(URL);

    ws.onopen = (e) => {
      console.log("open");
    };

    ws.onmessage = (e) => {
      console.log(e.data);
    };
  }, []);

  // event handling
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={message} onChange={handleMessageChange} />
      <button type="submit">Send</button>
    </form>
  );
};
