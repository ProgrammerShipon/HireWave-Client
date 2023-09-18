import moment from "moment";
import useAuth from "../Hooks/useAuth";
import { useEffect, useRef } from "react";
const StartMessage = ({ sms }) => {
    const { currentUser } = useAuth();
    const scroll = useRef()
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })

    }, [sms]);

    // console.log(sms)
    return (
        <div>
            <div className="flex flex-col gap-2" ref={scroll}>

                <div className={sms.senderId === currentUser._id ? ' bg-black/30 p-2 rounded-md rounded-br-none flex flex-col self-end my-2' : ' bg-black/30  p-2 rounded-md rounded-tl-none flex flex-col my-2 self-start'}>
                   
                        <p className={sms.senderId === currentUser._id ? 'text-white ' : 'text-white'}>
                            {sms.text.length > 0 ?sms.text:"emptry message"}
                        </p> 

                        <p className="text-xs opacity-50">
                            {moment(sms.createdAt).startOf('sec').fromNow()}
                        </p>
                </div>
            </div>

        </div>
    );
};

export default StartMessage;