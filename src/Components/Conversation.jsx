import { useEffect, useState } from 'react';
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

    useEffect(() => {
        const receiver = chat?.members.find(id => id !== currentUser?._id)

        axiosSecure.get(`/users/id/${receiver}`)
            .then(res => {
                setChatReceiver(res.data)
                setMessageReceiver(res.data)
            })
            .catch(error => {
                console.log(error)
            })
    }, [chat, currentUser]);

    const searchOnlineUser = onlineUser?.some(user => user.userId === chatReceiver?._id)

    return (
        <div>
            <div className='hover:bg-purple/20 shadow-lg shadow-gray/40 p-2 rounded-md mb-2 duration-300 group'>
                <div className='flex gap-2 items-center'>
                    <div className='relative w-12 h-12 shadow-md rounded-full overflow-hidden'>
                        <img src={chatReceiver?.image} className='w-full h-full object-cover object-center rounded-full' alt={chatReceiver?.name} />
                        <RxDotFilled className={searchOnlineUser ? "text-3xl absolute top-7 right-0 text-green" : "hidden"} />
                    </div>
                    <h2 className='text-purple text-xl capitalize group-hover:underline'>{chatReceiver?.name}</h2>
                </div>
            </div>
        </div>
    );
};

export default Conversation;