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


  useEffect(() => {
    axiosSecure.get(`/message/${currentChat?._id}`)
      .then(res => {
        const newData = res.data
        console.log(newData)
        // setNewMessageData(newData)
        // setMessage(pre => [...pre, res.data])  // Problem here
        setMessage(...message, newData)  // Problem here

      })
      .catch(error => {
        console.log(error)
      })
  }, [currentChat]);

  // Connect with AiOutlineRocket.io 
  useEffect(() => {
    const newSocket = io("http://localhost:3000")
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
    // console.log(receiver)
    socket.emit("sendMessage", { ...newMessage, receiver })
  }, [newMessage]);


  // receive message and notification
  useEffect(() => {
    if (socket === null) return;
    socket.on("getMessages", res => {
      // console.log('getMessages', res)
      if (currentChat?._id !== res.chatId) return;
      // setMessage(pre => [...pre, res]); //problem here
      setMessage([...message, res]); //problem here
      // console.log(message)
    });

    socket.on("getNotification", (res) => {
      const isChatOpen = currentChat?.members.some(id => id === res.senderId)
      if (isChatOpen) {
        setNotification(pre => [{ ...res, isRead: true }, ...pre])
      }
      setNotification(pre => [...pre, res])
      console.log(isChatOpen)
    })

    return () => {
      socket.off("getMessages")
      socket.off("getNotification")
    }
  }, [socket, currentChat, message]);


  console.log("notification", notification)
  if (chats.length === 0) {
    return <PageLoader />
  }

  return (
    <section className="m-5 rounded-md">
      <DashTitle title="Messages" />

      <div className="grid grid-cols-12 gap-4 min-h-full">
        <div className="col-span-4 px-2 bg-gray/20 p-2 rounded-md">
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

        {currentChat !== undefined ? (
          <div className="col-span-7 rounded-md ">
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
        ) : <div className="flex flex-col justify-center items-center col-span-7 ">
          <PiHandTapThin className="text-5xl text-gray"/>
          <h3 className="text-gray text-2xl border-b-2 rounded-b-xl ">Tap To Create A New Chat </h3>
        </div>
        }

      </div>
    </section>
  );
};

export default Chat;
