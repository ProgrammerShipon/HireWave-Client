import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import GetAgoTime from "../Components/GetAgoTime";
import SendJobOffer from "../Components/RecruiterSend/SendJobOffer";
import SendJobTask from "../Components/RecruiterSend/SendJobTask";
import SetJobInterView from "../Components/RecruiterSend/SetJobInterView";

// react icons
import { AiOutlineMessage } from "react-icons/ai";
import { BiTimeFive } from "react-icons/bi";
import { BsCameraVideo, BsCaretDownFill, BsSendCheck } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineAssignment } from "react-icons/md";

const ApplicationFormDetails = ({ candidateDetails }) => {
  const {
    applicantId,
    applicantName,
    applicantImage,
    expected_salary,
    category,
    cover_letter,
    location,
    attachment,
    appliedDate
  } = candidateDetails;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

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

  const formattedCoverLetter = cover_letter.map((pa) =>
    pa === "" ? "\u00A0" : pa
  );

  return (
    <section className="py-20 md:py-[120px] max-w-5xl mx-auto">
      <div className="container">
        <div className="relative md:flex justify-between items-end gap-5 border border-gray/40 hover:border-green rounded-md p-5 shadow-xl shadow-gray/20 duration-300">
          {/* Image & Name */}
          <div className="flex items-start gap-5">
            <div className="sm:w-44 sm:h-44 rounded-md shadow-4xl shadow-gray/20 overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src={applicantImage}
                alt={applicantName}
              />
            </div>
            <div>
              <Link
                to={`/candidate_details/${applicantId}`}
                className="text-purple hover:text-green text-2xl sm:text-3xl font-medium mt-2 block duration-300"
              >
                {applicantName}
              </Link>
              <p className="text-dark text-base sm:text-lg font-light sm:mb-4">
                {category}
              </p>

              <p className="text-dark font-medium">
                <span className="text-lightGray">Salary:</span>{" "}
                {expected_salary}$
              </p>

              <p className="text-dark flex items-center gap-1">
                <HiOutlineLocationMarker />
                {location}
              </p>
            </div>
          </div>

          {/* Submitted time */}
          <div className="absolute -top-4 md:top-4 right-4 flex gap-2 bg-white md:bg-purple/20 text-purple px-3 rounded-full shadow-lg shadow-purple/30 duration-300">
            <h5 className="text-lg">Submitted:</h5>
            <p className="flex items-center gap-1">
              {" "}
              <BiTimeFive /> <GetAgoTime datetime={appliedDate} />
            </p>
          </div>

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
        </div>

        {/* Cover Letter */}
        <div className="rounded-lg border border-gray/40 hover:border-green p-5 md:p-8 mt-8 shadow-lg">
          {formattedCoverLetter.length > 0 &&
            formattedCoverLetter.map((ab, index) => (
              <p key={index} className="text-lightGray tracking-wide">
                {ab}
              </p>
            ))}
        </div>
        {/* Important Links */}
        <div className="rounded-lg border border-gray/40 hover:border-green p-5 md:p-8 mt-8 shadow-lg">
          <h2 className="text-lightGray text-xl mb-3">Provided Links</h2>
          {attachment.map((link, index) => (
            <span
                key={index}>
              {" "}
              <a
                href={link}
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-purple hover:underline"
              >
                {link}
              </a>
              <br />
            </span>
          ))}
        </div>

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
      </div>
    </section>
  );
};

export default ApplicationFormDetails;
