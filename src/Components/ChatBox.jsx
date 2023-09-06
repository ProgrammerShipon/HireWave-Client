import React, { useEffect, useState } from "react";
import { format } from "timeago.js";
import InputEmoji from "react-input-emoji";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../Hooks/useAxios";
import axios from "axios";
// api/message
const ChatBox = ({ chat, currentUserId, setSendMessage, receivedMessage }) => {
  // const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // console.log(receivedMessage)
  const API = axios.create({ baseURL: 'https://hire-wave-server.vercel.app/api' });
  const addMessage = (data) => API.post('/message/', data);

  const receiverUserId = chat?.members?.find((id) => id === currentUserId);
  const { data: receiverUser = [], isLoading: receiverUserLoading, refetch: receiverUserRefetch } = useQuery({
    queryKey: ['receiverUser'],
    queryFn: async () => {
      const res = await useAxios.get(`/users/Id/${receiverUserId}`);
      return res.data;
    },
  });


  const { data: currentChats = [], isLoading: currentChatLoading, refetch: currentChatRefetch } = useQuery({
    queryKey: ['currentChat'],
    queryFn: async () => {
      const res = await useAxios.get(`/message/${chat?._id}`);
      return res.data;
    },
  });

  // const addMessage = (data) => useAxios.post('/api/message/', data);

  // Receive Message from parent component
  useEffect(() => {
    console.log("Message Arrived: ", receivedMessage)
    if (receivedMessage !== null && receivedMessage.chatId === chat._id) {
      setMessages([...messages, receivedMessage]);
    }

  }, [receivedMessage])


  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat._id,
    };

    const receiverId = chat.members.find((id) => id !== currentUserId);
    // send message to socket server
    console.log({ ...message, receiverId })
    setSendMessage({ ...message, receiverId });
    // send message to database

    const { data } = await addMessage(message);
    setMessages([...messages, data]);
    setNewMessage("");
    currentChatRefetch()
  };

  return (
    <div>
      <div className="flex items-center">
        <img
         src={receiverUser?.userProfile}
          className="w-14 h-14 rounded-full"
          alt={receiverUser?.name}
        />
        <h3 className="text-2xl">{receiverUser?.name}</h3>
      </div>

      <div className="h-[65vh] overflow-y-scroll">
        <div className="flex flex-col gap-[0.5rem] p-[1.5rem]">
          {currentChats?.map((message) =>
            <div
              key={message._id}
              className={
                message.senderId === currentUserId
                  ? "self-end my-2 flex flex-col bg-green p-2 rounded-t-lg rounded-bl-lg"
                  : "self-start my-2 flex flex-col bg-green p-2 rounded-t-lg rounded-br-lg"
              }
            >
              <span className="text-xl">{message.text}</span>
              <span className="text-[10px]">{format(message.createdAt)}</span>
            </div>
          )}
        </div>
      </div>


      {/* sender  */}

      <div className="bg-white flex justify-between h-[3.5rem] items-center gap-[1rem] p-[0.8rem] rounded-[1rem] self-end">
        <div onClick={() => imageRef.current.click()}>+</div>
        <InputEmoji value={newMessage} onChange={handleChange} />
        <div onClick={handleSend} className="cursor-pointer">
          Send
        </div>

      </div>



    </div>
  );
};

export default ChatBox;
