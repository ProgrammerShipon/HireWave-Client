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

                <div className={sms.senderId === currentUser._id ? ' bg-red-700 p-2 rounded-md flex flex-col self-end my-2' : ' bg-yellow-200 p-2 rounded-md flex flex-col my-2 self-start'}>
                   
                        <p className={sms.senderId === currentUser._id ? 'text-green ' : 'text-red-700'}>
                            {sms.text.length > 0 ?sms.text:"emptry message"}
                        </p> 

                        <p className="text-xs">
                            {moment(sms.createdAt).startOf('sec').fromNow()}
                        </p>
                </div>
            </div>

        </div>
    );
};

export default StartMessage;