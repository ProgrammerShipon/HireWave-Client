
import { useEffect, useState } from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import StartMessage from './StartMessage';
import InputEmoji from "react-input-emoji";
import { Tooltip } from 'react-tooltip';
import Swal from 'sweetalert2'

// react icons
import { BsFillSendFill } from 'react-icons/bs';
import { MdDeleteOutline } from 'react-icons/md';

const ChatBox = ({ currentChat, currentUser, textMessage, setTextMessage, setNewMessage, setMessage, message, onlineUser, chatRefetch }) => {
    const [axiosSecure] = useAxiosSecure();
    const [chatReceiver, setChatReceiver] = useState();

    useEffect(() => {
        const receiver = currentChat?.members.find(id => id !== currentUser?._id)
        axiosSecure.get(`/users/id/${receiver}`)
            .then(res => {
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
        axiosSecure.post('/message', newMessage)
            .then(res => {
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
                        if (res.status === 200) {
                            Swal.fire(
                                'Deleted!',
                                'Conversation has been deleted.',
                                'success'
                            )
                            chatRefetch()
                        }
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        })
    }

    return (
        <div className='bg-white shadow-lg p-3 rounded-md'>
            <div className='bg-purple flex items-center justify-between shadow-lg shadow-gray/40 p-2 rounded-md mb-2 duration-300'>
                <div className='flex items-center gap-2 '>
                    <div className='relative w-12 h-12 shadow-md rounded-full overflow-hidden'>
                        <img src={chatReceiver?.image} className='w-full h-full object-cover object-center rounded-full' alt={chatReceiver?.name} />
                    </div>

                    <div className='flex flex-col justify-center'>
                        <h2 className='text-white text-xl capitalize'>{chatReceiver?.name}</h2>
                        <p className='text-sm text-dark'>{searchOnlineUser ? "online " : "offline"}</p>
                    </div>
                </div>
                <div>
                    <Tooltip id="delete_chat"
                    />
                    <button
                        onClick={deleteChat}
                        data-tooltip-id="delete_chat" data-tooltip-content="Delete Conversation"
                        className='h-10 w-10 bg-white rounded-full shadow-md text-purple flex items-center justify-center hover:text-red-400 duration-300'
                    >
                        <MdDeleteOutline size='24' />
                    </button>
                </div>
            </div>

            <div className='h-[50vh] overflow-y-scroll p-3 rounded-md'>
                {
                    message.length !== 0 ? message.map((sms, index) =>
                        <StartMessage sms={sms} key={index} />
                    ) : <p className='flex justify-center items-center pt-44'>Send A New Message</p>
                }
            </div>
            <div className='flex items-center'>
                <InputEmoji
                    value={textMessage}
                    onChange={setTextMessage}
                    placeholder="Type a message"
                />
                <button onClick={sendNewMessage}
                    className='h-10 w-14 bg-green rounded-md shadow-md text-white flex items-center justify-center duration-300 mr-5'
                >
                    <BsFillSendFill size='20' />
                </button>
            </div>
        </div>
    );
};

export default ChatBox;