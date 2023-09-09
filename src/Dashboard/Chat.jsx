import { Common, ZIMKitManager } from '@zegocloud/zimkit-react';
import '@zegocloud/zimkit-react/index.css';
import React, { useEffect, useState } from 'react';

const id = Math.floor(Math.random() * 1000);

const Chat = () => {
    const [state, setState] = useState({
        appConfig: {
            appID: 401711700, 
            serverSecret: '3d2cb1607fd6f1f40d561320fbc895d7' 
        },
        userInfo: {
            userID: `mahfuz${id}`,
            userName: `meheraf${id}`,
            userAvatarUrl: ''
        },
    });

    useEffect(() => {
        const init = async () => {
            const zimKit = new ZIMKitManager();
            const token = zimKit.generateKitTokenForTest(state.appConfig.appID, state.appConfig.serverSecret, state.userInfo.userID);
            await zimKit.init(state.appConfig.appID);
            await zimKit.connectUser(state.userInfo, token);
        };
        init();
    }, []);

    return (
        <div>
            <h1>Welcome {state.userInfo.userID}</h1>
            <Common />
        </div>
    );
};

export default Chat;