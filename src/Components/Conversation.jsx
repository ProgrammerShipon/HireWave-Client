import React, { useEffect, useState } from 'react';
import { RxDotFilled } from "react-icons/rx";
import useAuth from '../Hooks/useAuth';
import useUsers from '../Hooks/useUsers';
import PageLoader from './PageLoader';
import useAxiosSecure from '../Hooks/useAxiosSecure';


const Conversation = ({ chat, onlineUser, setMessageReceiver }) => {
    const { currentUser, loading } = useAuth();
    const [userData, UserDataLoading] = useUsers();
    const [axiosSecure] = useAxiosSecure()
    const [chatReceiver, setChatReceiver] = useState();
    if (loading && UserDataLoading) {
        return <PageLoader />
    }
    console.log(chat)
    // console.log(userData)
    console.log(currentUser._id)

    useEffect(() => {
        const receiver = chat?.members.find(id => id !== currentUser?._id)
        console.log(receiver)

        axiosSecure.get(`/users/id/${receiver}`)
            .then(res => {
                console.log(res.data)
                setChatReceiver(res.data)
                setMessageReceiver(res.data)
            })
            .catch(error => {
                console.log(error)
            })

    }, [chat, currentUser]);

    const searchOnlineUser = onlineUser?.some(user => user.userId === chatReceiver?._id)


    // console.log(chatReceiver?.name)

    return (
        <div>
            <div className='border-b-2 border-b-green p-2 rounded-md mb-2'>
                <div className='flex gap-2 items-center'>
                    <div className='relative'>
                        <img src={chatReceiver?.image} className='w-11 h-11 rounded-full' alt="" />
                        <RxDotFilled className={searchOnlineUser ? "text-3xl absolute top-7 right-0 text-green" : "hidden"} />
                    </div>

                    <p>{chatReceiver?.name}</p>
                </div>

            </div>

        </div>
    );
};

export default Conversation;