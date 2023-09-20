
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import StartMessage from './StartMessage';
import InputEmoji from "react-input-emoji";
import { BsFillSendFill } from 'react-icons/bs';

const ChatBox = ({ currentChat, currentUser, textMessage, setTextMessage, setNewMessage, setMessage, message, onlineUser }) => {
    const [axiosSecure] = useAxiosSecure();
    const [chatReceiver, setChatReceiver] = useState();
    console.log(chatReceiver)



    useEffect(() => {
        const receiver = currentChat?.members.find(id => id !== currentUser?._id)
        console.log(receiver)

        axiosSecure.get(`/users/id/${receiver}`)
            .then(res => {
                console.log(res.data)
                setChatReceiver(res.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [currentChat, currentUser]);

    const searchOnlineUser = onlineUser?.some(user => user.userId === chatReceiver?._id)

    const sendNewMessage = () => {
        const newMessage = {
            chatId: currentChat._id,
            senderId: currentUser._id,
            text: textMessage
        }
        console.log(message, newMessage)
        const mg = [...message, newMessage]
        console.log(mg)
        axiosSecure.post('/message', newMessage)
            .then(res => {
                console.log(res.data);
                if (res.status === 200) {
                    setNewMessage(res.data)
                    setMessage([...message, res.data])
                    setTextMessage('')
                }
            })
            .catch(error => {
                console.log(error);
            })

    }

    return (
        <div>
            <div className='flex items-center gap-2 bg-black/20 mb-2 p-2 rounded-md'>
                <img src={chatReceiver?.image} className='w-11 h-11 rounded-full border border-gray' alt={chatReceiver?.name} />
                <div className='flex flex-col justify-center gap-0'>
                    <p className='text-xl'>{chatReceiver?.name}</p>
                    <p className='-mt-2'>{searchOnlineUser ? "online " : "offline"}</p>
                </div>
            </div>
            <div className='h-[70vh] overflow-y-scroll bg-black/20 p-2 rounded-md'>

                {
                    message.length !== 0 ? message.map((sms, index) =>
                        <StartMessage sms={sms} key={index} />
                    ) : <p className='flex justify-center items-center pt-52'>Send A New Message</p>
                }

            </div>
            <div className='flex'>
                <InputEmoji
                    value={textMessage}
                    onChange={setTextMessage}
                    placeholder="Type a message"
                />
                <button onClick={sendNewMessage}>
                    <BsFillSendFill className='text-3xl text-green border border-green rounded-full p-1' />
                </button>
            </div>
        </div>
    );
};

export default ChatBox;