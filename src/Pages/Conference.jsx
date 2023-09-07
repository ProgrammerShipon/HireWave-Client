import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import useAuth from '../Hooks/useAuth';

const Conference = () => {
    const { userId } = useAuth();

    const interviewConference = async (element) => {
        const roomID = '123456'
        // generate Kit Token
        const appID = 1281063325;
        const serverSecret = "012c5ab5c910ebebd7b55310b534709f"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), "mahfuzRoom");

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
            showRoomDetailsButton : true,
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
            className='h-fit'
                ref={interviewConference}>
            </div>
        </div>
    );
};

export default Conference;