import { useState } from 'react';

// react icons
import { IoMdNotificationsOutline } from 'react-icons/io';
import { LuMail, LuMailOpen } from 'react-icons/lu';
import useAuth from '../Hooks/useAuth';
import useNotification from '../Hooks/useNotification';

const Notification = () => {
    const [open, setOpen] = useState(false);
    const [read, setRead] = useState(false);
    const { currentUser } = useAuth();
    const [notificationData, loading, refetch] = useNotification()

    // console.log('notificationData -> ', notificationData);
    // console.log("currentUser -> ", currentUser);


    return (
      <div className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="w-10 h-10 flex items-center justify-center text-green hover:bg-green/10 rounded-full duration-300 z-40 relative"
        >
          <IoMdNotificationsOutline size="24" />
        </button>

            {
                // notificationData && notificationData.map(notification => )
            }
            
        <div
          className={`absolute top-full right-0 w-[350px] h-[440px] bg-white border border-gray/30 rounded-md shadow-4xl shadow-gray/40 overflow-y-auto ${
            open ? "scale-100" : "scale-0"
          } origin-top-right duration-300 z-30`}
        >
          <h6 className="flex items-center gap-2 border-b border-gray/30 py-2 pl-3">
            <IoMdNotificationsOutline size="20" /> Notifications (
            {notificationData?.length < 10 ? ( "0" + notificationData?.length) : notificationData?.length })
          </h6>

          {/* notifications */}
          <div className="relative flex items-start gap-2 py-3 px-2 border-b border-gray/30 hover:bg-purple/20 duration-300 cursor-pointer group">
            {read ? (
              <LuMailOpen
                onClick={() => setRead(!read)}
                className="absolute text-lightGray top-2 right-4 opacity-0 group-hover:opacity-100 duration-300"
                size="20"
              />
            ) : (
              <LuMail
                onClick={() => setRead(!read)}
                className="absolute text-lightGray top-2 right-4 opacity-0 group-hover:opacity-100 duration-300"
                size="20"
              />
            )}

            <div className="h-14 w-14 rounded-full overflow-hidden">
              <img
                className="w-full"
                src="https://fiverr-res.cloudinary.com/t_profile_thumb,q_auto,f_auto/attachments/profile/photo/2ad1f54716df5d59667877d07d039551-1664788852632/c28dea6e-85a7-45b9-8b41-79d11b6c2cb2.jpg"
                alt=""
              />
            </div>
            <div className="w-64">
              <h3 className="text-dark font-medium leading-4">
                MD Forid Hossain
              </h3>

              <p className="text-lightGray leading-[18px] line-clamp-1">
                Are you there! I need your help I need your help
              </p>

              <span className="text-sm text-gray">5 hour</span>
            </div>
          </div>
        </div>
            
        {open && (
          <div
            className="fixed top-0 left-0 w-full h-screen z-20"
            onClick={() => setOpen(false)}
          ></div>
        )}
      </div>
    );
};

export default Notification;