import { useState } from 'react';

// react icons
import { LuMail, LuMailOpen } from 'react-icons/lu';
import useChat from '../Hooks/useChat';
import { useEffect } from 'react';
import useAuth from '../Hooks/useAuth';
import MessageNotification from './MessageNotification';

const Message = () => {
    const [open, setOpen] = useState(false);
    const [read, setRead] = useState(false);
    const [chats, chatRefetch] = useChat();

    const [receiver, setReceiver] = useState()
    const [chatReceiver, setChatReceiver] = useState();
    return (
        <div className='relative'>

            <button onClick={() => setOpen(!open)} className='w-10 h-10 flex items-center justify-center text-green hover:bg-green/10 rounded-full duration-300 z-40 relative'>
                <LuMail size='21' />
            </button>

            {/* messages */}

            <div className={`absolute top-full right-0 w-[350px] h-[440px] bg-white border border-gray/30 rounded-md shadow-4xl shadow-gray/40 overflow-y-auto ${open ? 'scale-100' : 'scale-0'} origin-top-right duration-300 z-30`}>
                <h6 className='flex items-center gap-2 border-b border-gray/30 py-2 pl-3'>
                    <LuMail size='20' /> Inbox ({chats.length})
                </h6>

                {/* message */}
                <div className='relative flex flex-col  items-start gap-1 py-3 px-2 border-b border-gray/30  duration-300 '>

                    {chats?.map((chat, index) => (
                        <div key={index} className="cursor-pointer w-full">
                            <MessageNotification
                                chat={chat}
                            />
                        </div>
                    ))}

                </div>

            </div>
        </div>
    );
};

export default Message;