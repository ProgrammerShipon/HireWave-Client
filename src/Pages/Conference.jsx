import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import useAuth from '../Hooks/useAuth';
import { streaming_App_Id, streaming_ServerSecret } from '../Zegocloud/ZegocloudSecret';

const Conference = () => {
    const { user } = useAuth();
    console.log(user)
    const interviewConference = async (element) => {
        const roomID = '123456'
        // generate Kit Token
        const appID = streaming_App_Id;
        const serverSecret = streaming_ServerSecret
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), user?.displayName);

        // Create instance object from Kit Token.
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        // start the call
        zp.joinRoom({
            container: element,
            scenario: {
                mode: ZegoUIKitPrebuilt.LiveStreaming,
            },
            showRequestToCohostButton: true,
            showScreenSharingButton: true,
            showRoomDetailsButton: true,
            onLiveEnd: true,
            // turnOnCameraWhenJoining:false,

            sharedLinks: [
                {
                    name: 'Invitation link',
                    url:
                        window.location.protocol + '//' +
                        window.location.host + window.location.pathname +
                        '?roomID=' +
                        roomID,
                },
            ],
        });
    }

    return (
        <div>
            <div
                className='h-screen '
                ref={interviewConference}>
            </div>
        </div>
    );
};

export default Conference;