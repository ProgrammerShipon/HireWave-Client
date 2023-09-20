
import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import StartMessage from './StartMessage';
import InputEmoji from "react-input-emoji";
import { BsFillInfoCircleFill, BsFillSendFill } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2'

const ChatBox = ({ currentChat, currentUser, textMessage, setTextMessage, setNewMessage, setMessage, message, onlineUser, chatRefetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const [chatReceiver, setChatReceiver] = useState();



    useEffect(() => {
        const receiver = currentChat?.members.find(id => id !== currentUser?._id)
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
    const deleteChat = () => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/chat/delete/${currentChat._id}`)
                    .then(res => {
                        console.log(res);
                        if (res.status === 200) {
                            Swal.fire(
                                'Deleted!',
                                'Conversation has been deleted.',
                                'success'
                            )
                            chatRefetch()
                            console.log(message)
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })


            }
        })



    }

    return (
        <div className=''>
                    <div className='flex justify-between gap-2 items-center bg-green/20 mb-2 p-3 pr-5 mr-3 rounded-md'>
                        <div className='flex items-center gap-2 '>
                            <img src={chatReceiver?.image} className='w-11 h-11 rounded-full border border-gray' alt={chatReceiver?.name} />
                            <div className='flex flex-col justify-center gap-0'>
                                <p className='text-xl'>{chatReceiver?.name}</p>
                                <p className='-mt-2'>{searchOnlineUser ? "online " : "offline"}</p>
                            </div>
                        </div>
                        <div>
                            <Tooltip id="delete_chat"

                            />
                            <button
                                onClick={deleteChat}
                                data-tooltip-id="delete_chat" data-tooltip-content="Delete Conversation"
                            >

                                <MdDeleteOutline className='text-3xl shadow-md shadow-green text-green rounded-full' />
                            </button>

                        </div>
                    </div>
                    <div className='h-[70vh] overflow-y-scroll bg-green/40 p-3 rounded-md'>

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