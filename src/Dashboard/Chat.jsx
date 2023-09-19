import { useState, useEffect } from "react";
import { io } from "socket.io-client";
import DashTitle from "../Components/DashComponents/DashTitle";
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useChat from "../Hooks/useChat";
import PageLoader from "../Components/PageLoader";
import Conversation from "../Components/Conversation";
import ChatBox from "./ChatBox";
import { PiHandTapThin } from "react-icons/pi";
const Chat = () => {
  const [chats, chatLoading, chatRefetch] = useChat();
  const [axiosSecure] = useAxiosSecure()
  const [currentChat, setCurrentChat] = useState();
  const [onlineUser, setOnlineUser] = useState([]);
  const [socket, setSocket] = useState(null);
  const [textMessage, setTextMessage] = useState('')
  const [newMessage, setNewMessage] = useState(null)
  const [message, setMessage] = useState([])
  const [notification, setNotification] = useState([])
  const { currentUser } = useAuth();
  const [messageReceiver, setMessageReceiver] = useState()

  console.log(message)
  useEffect(() => {
    axiosSecure.get(`/message/${currentChat?._id}`)
      .then(res => {
        const newData = res.data
        // console.log(newData)
        setMessage(...message, newData)
      })
      .catch(error => {
        console.log(error)
      })
  }, [currentChat]);

  // Connect with AiOutlineRocket.io 
  useEffect(() => {
    const newSocket = io("https://hire-wave-chat.onrender.com/")
    setSocket(newSocket)
    return () => {
      newSocket.disconnect()
    };
  }, [currentUser]);


  // Add Online user  On socket.io
  useEffect(() => {
    if (socket === null) return;
    socket.emit("addNewUsers", currentUser?._id);
    socket.on("getOnlineUsers", (res) => {
      // console.log(res)
      setOnlineUser(res)
    });
    return () => {
      socket.off("getOnlineUsers")
    }

  }, [socket]);


  // send Message using socket.io
  useEffect(() => {
    if (socket === null) return;
    const receiver = currentChat?.members.find(id => id !== currentUser?._id)
    socket.emit("sendMessage", { ...newMessage, receiver })
  }, [newMessage]);


  // receive message and notification
  useEffect(() => {
    if (socket === null) return;
    socket.on("getMessages", res => {
      // console.log('getMessages', res)
      if (currentChat?._id !== res.chatId) return;
      setMessage([...message, res]);
    });

    socket.on("getNotification", (res) => {
      const isChatOpen = currentChat?.members.some(id => id === res.senderId)
      if (isChatOpen) {
        setNotification(pre => [{ ...res, isRead: true }, ...pre])
      }
      setNotification(pre => [...pre, res])
    })

    return () => {
      socket.off("getMessages")
      socket.off("getNotification")
    }
  }, [socket, currentChat, message]);

  return (
    <section className="m-5 rounded-md">
      <DashTitle title="Messages" />

      {
        chats.length !== 0 ?
          <div className="grid grid-cols-3 gap-4 mt-10">
            <div className="px-2 bg-gray/20 p-2 rounded-md h-96">
              {chats?.map((chat, index) => (
                <div key={index} className="cursor-pointer"
                  onClick={() => setCurrentChat(chat)}>
                  <Conversation
                    chat={chat}
                    onlineUser={onlineUser}
                    setMessageReceiver={setMessageReceiver}
                  />
                </div>

              ))}
            </div>

            {currentChat !== undefined && (
              <div className="md:col-span-2 rounded-md">
                <ChatBox
                  currentChat={currentChat}
                  currentUser={currentUser}
                  textMessage={textMessage}
                  setNewMessage={setNewMessage}
                  setMessage={setMessage}
                  message={message}
                  setTextMessage={setTextMessage}
                  messageReceiver={messageReceiver}
                  onlineUser={onlineUser}
                // setSendMessage={setSendMessage}
                />
              </div>
            )}

          </div> :
          <h1>create new chat</h1>
      }


    </section>
  );
};

export default Chat;
