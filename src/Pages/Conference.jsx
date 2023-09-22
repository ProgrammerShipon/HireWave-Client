// import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
// import { useParams } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';


// export function getUrlParams(
//     url = window.location.href
// ) {
//     let urlStr = url.split('?')[1];
//     return new URLSearchParams(urlStr);
// }


// const Conference = () => {
//     const { roomId } = useParams();
//     const roomID = roomId
//     const { currentUser } = useAuth()
//     let role_str = getUrlParams(window.location.href).get('role') || 'Host';
//     const role =
//         role_str === 'Host'
//             ? ZegoUIKitPrebuilt.Host
//             : role_str === 'Cohost'
//                 ? ZegoUIKitPrebuilt.Cohost
//                 : ZegoUIKitPrebuilt.Audience;

//     let sharedLinks = [];
//     if (role === ZegoUIKitPrebuilt.Host || role === ZegoUIKitPrebuilt.Cohost) {
//         sharedLinks.push({
//             name: 'Invite',
//             url:
//                 window.location.protocol + '//' +
//                 window.location.host + window.location.pathname +
//                 '?roomID=' +
//                 roomID +
//                 '&role=Cohost',
//         });
//     }

//     // generate Kit Token
//     const appID = 1281063325;
//     const serverSecret = "012c5ab5c910ebebd7b55310b534709f";
//     const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID, Date.now().toString(), currentUser?.name);


//     // start the call
//     let interviewConference = async (element) => {
//         // Create instance object from Kit Token.
//         const zp = ZegoUIKitPrebuilt.create(kitToken);
//         // start the call
//         zp.joinRoom({
//             container: element,
//             scenario: {
//                 mode: ZegoUIKitPrebuilt.LiveStreaming,
//                 config: {
//                     role,
//                 },
//             },
//             showRequestToCohostButton: true,
//             showScreenSharingButton: true,
//             showRoomDetailsButton: true,
//             sharedLinks,
//         });
//     };

//     return (
//         <div>
//             <div
//                 className='h-screen '
//                 ref={interviewConference}>
//             </div>
//         </div>
//     );
// };

// export default Conference;


import * as React from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

function randomID(len) {
  let result = '';
  if (result) return result;
  var chars = '12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP',
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

export function getUrlParams(
  url = window.location.href
) {
  let urlStr = url.split('?')[1];
  return new URLSearchParams(urlStr);
}

export default function Conference() {
  const roomID = getUrlParams().get('roomID') || randomID(5);
  let myMeeting = async (element) => {

 // generate Kit Token
 const appID = 18674773;
 const serverSecret = "b9ba0a0e851e9fa1b93358d7df2c87a3";
 const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomID,  randomID(5),  randomID(5));

 // Create instance object from Kit Token.
 const zp = ZegoUIKitPrebuilt.create(kitToken);
 // start the call
 zp.joinRoom({
        container: element,
        sharedLinks: [
          {
            name: 'Personal link',
            url:
             window.location.protocol + '//' + 
             window.location.host + window.location.pathname +
              '?roomID=' +
              roomID,
          },
        ],
        scenario: {
         mode: ZegoUIKitPrebuilt.VideoConference,
        },
   });
  };

  return (
    <div
      className="myCallContainer"
      ref={myMeeting}
      style={{ width: '100vw', height: '100vh' }}
    ></div>
  );
}