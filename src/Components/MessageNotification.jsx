import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { RxDotFilled } from 'react-icons/rx';

const MessageNotification = ({ chat }) => {
    const [chatReceiver, setChatReceiver] = useState();
    const { currentUser } = useAuth();
    const [axiosSecure] = useAxiosSecure()
    useEffect(() => {
        const receiver = chat?.members.find(id => id !== currentUser?._id)

        axiosSecure.get(`/users/id/${receiver}`)
            .then(res => {
                setChatReceiver(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [chat, currentUser]);
    console.log(chatReceiver)
    return (
        <div>
            <div className=' w-full hover:bg-purple/20 p-2 rounded-md mb-2 duration-300 group'>
                <div className='flex gap-2 items-center'>
                    <div className='relative w-12 h-12 shadow-md rounded-full overflow-hidden'>
                        <img src={chatReceiver?.image} className='w-full h-full object-cover object-center rounded-full' alt={chatReceiver?.name} />
                      
                    </div>
                    <h2 className='text-purple text-xl capitalize group-hover:underline'>{chatReceiver?.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default MessageNotification;