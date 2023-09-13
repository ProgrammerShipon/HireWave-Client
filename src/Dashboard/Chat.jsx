import { Common, ZIMKitManager } from '@zegocloud/zimkit-react';
import '@zegocloud/zimkit-react/index.css';
import React, { useEffect, useState } from 'react';
import useAuth from '../Hooks/useAuth';
import { ChatApp_Id, ChatApp_ServerSecret } from '../Zegocloud/ZegocloudSecret';
import { useLoaderData } from 'react-router-dom';

const id = Math.floor(Math.random() * 1000);

const Chat = () => {
    const receiver = useLoaderData();
    console.log(receiver)
    const { currentUser } = useAuth();
    const [state, setState] = useState({
        appConfig: {
            appID: ChatApp_Id,
            serverSecret: ChatApp_ServerSecret
        },
        userInfo: {
            userID: currentUser?._id?.slice(10, 20),
            userName: currentUser?.name,
            userAvatarUrl: currentUser?.image
        },
    });

    useEffect(() => {
        const init = async () => {
            const zimKit = new ZIMKitManager();
            const token = zimKit.generateKitTokenForTest(state.appConfig.appID, state.appConfig.serverSecret, state.userInfo.userID, state);
            await zimKit.init(state.appConfig.appID);
            await zimKit.connectUser(state.userInfo, token);
        };
        init();
    }, []);

    return (
        <div>
            <h1 className='text-xl text-green p-2'>Welcome {currentUser?.name}</h1>
            {
                receiver !== undefined && <h1>Now You Went to Create Chat with {receiver?.name} . Here is {receiver?.name}'s chat Id {receiver?._id?.slice(10, 20)} . please copy this id and insert on new Chat</h1>
            }

            <div className='h-[87vh] overflow-scroll'>
                <Common />
            </div>
        </div>
    );
};

export default Chat;
