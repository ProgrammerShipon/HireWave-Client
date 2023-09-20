

// react icons
import { AiOutlineMessage } from "react-icons/ai";
import {
  BsCameraVideo,
  BsCaretDownFill,
  BsSendCheck,
} from "react-icons/bs";
import { MdOutlineAssignment } from "react-icons/md";


const HiringProcessButton = () => {
  // Modal On or Close state
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [isSentTaskModalOpen, setIsSentTaskModalOpen] = useState(false);

  const handleSendOffer = (e) => {
    if (e == "edit") setIsOfferModalOpen(true);
    else if (e == "cancel") setIsOfferModalOpen(false);
  };
  const handleAssignTest = (e) => {
    if (e == "edit") setIsSentTaskModalOpen(true);
    else if (e == "cancel") setIsSentTaskModalOpen(false);
  };
  const handleInterviewModal = (e) => {
    if (e == "edit") setIsInterviewModalOpen(true);
    else if (e == "cancel") setIsInterviewModalOpen(false);
  };

  return (
    <>
      {/* button */}
      <button className="relative bg-purple text-white py-3 px-6 rounded-md duration-300 hover:bg-green shadow-xl shadow-purple/20 hover:shadow-dark/20 cursor-pointer flex items-center ml-auto gap-3 w-fit mt-6 md:mt-0 group">
        Hire Me
        <BsCaretDownFill className="ml-4 group-hover:rotate-180 duration-300" />
        {/* Buttons */}
        <div className="absolute overflow-hidden w-full mt-3 shadow-xl shadow-gray/40 top-20 right-0 bg-white border-b-4 border-purple rounded-md flex flex-col items-center  opacity-0 invisible group-hover:top-10 group-hover:opacity-100 group-hover:visible duration-300">
          {/* Assign Test buttons */}
          <button
            onClick={() => handleAssignTest("edit")}
            className="flex items-center gap-4 text-purple hover:underline hover:bg-purple/20 w-full px-3 py-2 duration-300"
          >
            <MdOutlineAssignment /> Assign Test
          </button>

          {/* Send Offer buttons */}
          <button
            onClick={() => handleSendOffer("edit")}
            className="flex items-center gap-4 text-purple hover:underline hover:bg-purple/20 w-full px-3 py-2 duration-300"
          >
            <BsSendCheck /> Send Offer
          </button>

          {/* Interview */}
          <button
            onClick={() => handleInterviewModal("edit")}
            className="flex items-center gap-4 text-purple hover:underline hover:bg-purple/20 w-full px-3 py-2 duration-300"
          >
            <BsCameraVideo /> Interview
          </button>

          {/* Contact Now */}
          <button className="flex items-center gap-4 text-purple hover:underline hover:bg-purple/20 w-full px-3 py-2 duration-300">
            <AiOutlineMessage /> Contact Now
          </button>
        </div>
      </button>

      {/* Send Job Task */}
      {isSentTaskModalOpen && (
        <SendJobTask
          handleAssignTest={handleAssignTest}
          candidateDetails={candidateDetails}
        />
      )}

      {/* Send Job Offer to Candidate */}
      {isOfferModalOpen && (
        <SendJobOffer
          handleSendOffer={handleSendOffer}
          candidateDetails={candidateDetails}
        />
      )}

      {/* Set Interviews */}
      {isInterviewModalOpen && (
        <SetJobInterView handleInterviewModal={handleInterviewModal} />
      )}
    </>
  );
};

export default HiringProcessButton;
