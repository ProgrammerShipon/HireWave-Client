import { useEffect, useRef } from "react";
import { useState } from "react";
import Conversation from "../Components/Conversation";
import ChatBox from "../Components/ChatBox";
import { io } from "socket.io-client";
// import useChat from "../Hooks/useChat";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import DashTitle from "../Components/DashComponents/DashTitle";
const messages = () => {
  const [currentChat, setCurrentChat] = useState(null);
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const socket = useRef();

  // const currentUserId = "64ea2151fb969b46f42b40e0";
  const currentUserId = "64ea1e92f5c8ebb47d388cb7";

  // Fetch All Chat List
  const {
    data: chatHistory = [],
    isLoading: loading,
    refetch,
  } = useQuery({
    queryKey: ["chatHistory"],
    queryFn: async () => {
      const res = await useAxios.get(`/chat/${currentUserId}`);
      return res.data;
    },
  });

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8800");
    socket.current.emit("new-user-add", currentUserId);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
  }, []);

  console.log("sendMessage", sendMessage);
  // Send message socket.io
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  // Get the message from socket server
  useEffect(() => {
    socket.current.on("receive-message", (data) => {
      console.log(data);
      setReceivedMessage(data);
    });
  }, []);

  const userActiveStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== currentUserId);
    const online = onlineUsers.find((user) => user.userId === chatMember);
    return online ? true : false;
  };

  return (
    <section className="m-5 rounded-md">
      <DashTitle title="Messages" />

      <div className="grid grid-cols-12 gap-4 min-h-full">
        <div className="col-span-4 px-2 border-r-2 border-gray/30">
          {chatHistory?.map((chat) => (
            <Conversation
              key={chat._id}
              chat={chat}
              userActiveStatus={chat}
              activeStatus={userActiveStatus(chat)}
              setCurrentChat={setCurrentChat}
              currentUserId={currentUserId}
            />
          ))}
        </div>

        {currentChat !== null ? (
          <div className="col-span-7 rounded-md ">
            <ChatBox
              chat={currentChat}
              currentUserId={currentUserId}
              receivedMessage={receivedMessage}
              setSendMessage={setSendMessage}
            />
          </div>
        ) : (
          <h3 className="text-green">Tap To Create A New Chat </h3>
        )}
      </div>
    </section>
  );
};

export default messages;
