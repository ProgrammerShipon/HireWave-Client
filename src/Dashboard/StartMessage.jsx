import { useEffect, useRef } from "react";
import useAuth from "../Hooks/useAuth";
import moment from "moment";

const StartMessage = ({ sms }) => {
    const { currentUser } = useAuth();
    const scroll = useRef()
    useEffect(() => {
        scroll.current?.scrollIntoView({ behavior: "smooth" })
    }, [sms]);

    return (
        <div>
            <div className="flex flex-col gap-2" ref={scroll}>
                <div className={sms.senderId === currentUser._id ? ' bg-purple shadow-md shadow-black/50 px-4 py-1 rounded-xl rounded-br-none flex flex-col self-end my-2' : ' bg-black/30 shadow-md shadow-black/50 px-4 py-1 rounded-xl  rounded-tl-none flex flex-col my-2 self-start'}>
                    <p className={sms.senderId === currentUser._id ? 'text-white ' : 'text-white'}>
                        {sms.text.length > 0 ? sms.text : "empty message"}
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