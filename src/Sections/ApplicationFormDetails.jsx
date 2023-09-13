import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Components/Button';
import CustomModal from '../Components/CustomModal';
import useAuth from '../Hooks/useAuth';
import { useForm } from 'react-hook-form';

// react icons
import { AiOutlineMail, AiOutlineMessage } from "react-icons/ai";
import { BsCameraVideo, BsCaretDownFill, BsSendCheck } from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { MdOutlineAssignment } from 'react-icons/md';
import { FaRegHandshake } from "react-icons/fa";
import GetAgoTime from '../Components/GetAgoTime';
import CoverLetterTextarea from '../Components/CoverLetterTextarea';
import ArrayTextarea from '../Components/ArrayTextarea';

const ApplicationFormDetails = ({ candidateDetails }) => {
  const { currentUser } = useAuth()
  const { applicantId, applicantName, applicantImage, expected_salary, category, cover_letter, email, location, attachment, appliedDate } = candidateDetails;
  const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(false);
  const [isSentTaskModalOpen, setIsSentTaskModalOpen] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);
  const [offerLetter, setOfferLetter] = useState('false');
  const { register, handleSubmit, reset, formState: { errors } } = useForm();


  const handleOfferModal = (e) => {
    if (e == "edit") setIsOfferModalOpen(true)
    else if (e == "cancel") setIsOfferModalOpen(false)
  }

  const handleAssignTest = (e) => {
    if (e == "edit") setIsSentTaskModalOpen(true)
    else if (e == "cancel") setIsSentTaskModalOpen(false)
  }

  const handleInterviewModal = (e) => {
    if (e == "edit") setIsInterviewModalOpen(true)
    else if (e == "cancel") setIsInterviewModalOpen(false)
  }


  const onOfferSend = data => {
    const offerData = {
      offerLetter,
      candidateEmail: email,
      recruiterEmail: currentUser,
      jobId: ''
    }
    console.log('Offer', offerData);

    //TODO: Update education data
    setIsOfferModalOpen(false)
    reset();
  }

  const onAssignTest = data => {
    const taskData = {
      candidateEmail: email,
      docs: data.testsDetails,
      recruiterEmail: currentUser,
      jobId: ''
    }
    console.log('Assign test', taskData);

    //TODO: Update education data
    setIsInterviewModalOpen(false)
    reset();
  }

  const onInterviewSubmit = data => {
    console.log(data)
    const interviewData = {
      interviewDate: data.date,
      interviewTime: data.time,
      interviewDetails: data.details
    }
    console.log(interviewData)

    //TODO: Update education data
    setIsInterviewModalOpen(false)
    reset();
  }

  const onHireSubmit = data => {
    console.log(data)
    const hireData = {
      message: data.message
    }
    console.log(hireData)

    //TODO: Update education data
    setIsOfferModalOpen(false)
    reset();
  }

  const formattedCoverLetter = cover_letter.map(pa => pa === "" ? "\u00A0" : pa);

  return (
    <section className="py-20 md:py-[120px] max-w-5xl mx-auto">
      <div className="container">

        <div className="relative md:flex justify-between items-end gap-5 border border-gray/40 hover:border-green rounded-md p-5 shadow-xl shadow-gray/20 duration-300">
          {/* Image & Name */}
          <div className='flex items-start gap-5'>
            <div className="sm:w-44 sm:h-44 rounded-md shadow-4xl shadow-gray/20 overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src={applicantImage}
                alt={applicantName}
              />
            </div>
            <div>
              <Link to={`/candidate_details/${applicantId}`} className="text-purple hover:text-green text-2xl sm:text-3xl font-medium mt-2 block duration-300">
                {applicantName}
              </Link>
              <p className='text-dark text-base sm:text-lg font-light sm:mb-4'>{category}</p>

              <p className='text-dark font-medium'><span className='text-lightGray'>Salary:</span> {expected_salary}$</p>

              <p className='text-dark flex items-center gap-1'><HiOutlineLocationMarker />{location}</p>
            </div>
          </div>

          {/* Submitted time */}
          <div className='absolute -top-4 md:top-4 right-4 flex gap-2 bg-white md:bg-purple/20 text-purple px-3 rounded-full shadow-lg shadow-purple/30 duration-300'>
            <h5 className='text-lg'>Submitted:</h5>
            <p className='flex items-center gap-1'> <BiTimeFive /> <GetAgoTime datetime={appliedDate} /></p>
          </div>

          {/* button */}
          <button
            className="relative bg-purple text-white py-3 px-6 rounded-md duration-300 hover:bg-green shadow-xl shadow-purple/20 hover:shadow-dark/20 cursor-pointer flex items-center ml-auto gap-3 w-fit mt-6 md:mt-0 group"
          >
            Hire Me
            <BsCaretDownFill className='ml-4 group-hover:rotate-180 duration-300' />

            {/* Buttons */}
            <div className="absolute overflow-hidden w-full mt-3 shadow-xl shadow-gray/40 top-20 right-0 bg-white border-b-4 border-purple rounded-md flex flex-col items-center  opacity-0 invisible group-hover:top-10 group-hover:opacity-100 group-hover:visible duration-300">

              <button onClick={() => handleOfferModal('edit')} className='flex items-center gap-4 text-purple hover:underline hover:bg-purple/20 w-full px-3 py-2 duration-300'>
                <BsSendCheck />  Send Offer
              </button>

              <button onClick={() => handleAssignTest('edit')} className='flex items-center gap-4 text-purple hover:underline hover:bg-purple/20 w-full px-3 py-2 duration-300'>
                <MdOutlineAssignment />  Assign Test
              </button>

              <button onClick={() => handleInterviewModal("edit")} className='flex items-center gap-4 text-purple hover:underline hover:bg-purple/20 w-full px-3 py-2 duration-300'>
                <BsCameraVideo />  Interview
              </button>

              <button className='flex items-center gap-4 text-purple hover:underline hover:bg-purple/20 w-full px-3 py-2 duration-300'>
                <AiOutlineMessage /> Contact Now
              </button>
            </div>
          </button>
        </div>

        {/* Cover Letter */}
        <div className="rounded-lg border border-gray/40 hover:border-green p-5 md:p-8 mt-8 shadow-lg">
          {
            formattedCoverLetter.length > 0 && formattedCoverLetter.map((ab, index) => <p key={index} className="text-lightGray tracking-wide">
              {ab}
            </p>)
          }
        </div>

        {/* Important Links */}
        <div className="rounded-lg border border-gray/40 hover:border-green p-5 md:p-8 mt-8 shadow-lg">
          <h2 className="text-lightGray text-xl mb-3">Provided Links</h2>
          {attachment.map((link, index) => (
            <a key={index} href={link} target='_blank' referrerPolicy='no-referrer' className="text-purple hover:underline">{link}</a>
          ))}
        </div>


        {isOfferModalOpen && (
          <CustomModal
            isModalOpen={isOfferModalOpen}
            setIsModalOpen={isOfferModalOpen}
            handleModal={handleOfferModal}
          >
            {/* Modal Heading */}
            <h2 className="text-purple text-2xl pb-2 drop-shadow-lg flex items-center gap-2 border-b border-purple/60">
              <BsSendCheck size={24} />
              Send Offer
            </h2>

            {/* Modal content */}
            <form onSubmit={handleSubmit(onOfferSend)} className='mt-4'>
              {/* Details */}
              <div>
                <label className="text-dark text-base block mb-1 mt-5">
                  Additional file links(doc, pdf, etc..)
                </label>
                <input
                  className="rounded outline-none border border-dark/20 w-full px-3 py-2 focus:border-purple"
                  placeholder='Write Assessment Tests details / files link'
                  {...register("fileLinks")}
                />
              </div>

              <div>
                <label className="text-dark text-base block mb-1 mt-5">
                  Offer letter
                  <ArrayTextarea setOfferLetter={setOfferLetter} placeholder='Write a offer letter' />
                </label>
              </div>

              {/* Save changes */}
              <div className="flex justify-end mt-4">
                <Button type="submit">Send Offer</Button>
              </div>
            </form>
          </CustomModal>
        )}

        {handleAssignTest && (
          <CustomModal
            isModalOpen={isSentTaskModalOpen}
            setIsModalOpen={setIsSentTaskModalOpen}
            handleModal={handleAssignTest}
          >
            {/* Modal Heading */}
            <h2 className="text-purple text-2xl pb-2 drop-shadow-lg flex items-center gap-2 border-b border-purple/60">
              <MdOutlineAssignment size={24} />
              Assessment Tests
            </h2>

            {/* Modal content */}
            <form onSubmit={handleSubmit(onAssignTest)} className='mt-4'>
              {/* Details */}
              <div>
                <label className="text-dark text-base block mb-1 mt-5">
                  Additional file links / Tests details
                </label>
                <textarea rows={5}
                  className="rounded outline-none border border-dark/20 w-full px-3 py-2 focus:border-purple"
                  placeholder='Write Assessment Tests details / files link'
                  {...register("testsDetails")}
                />
              </div>

              {/* Save changes */}
              <div className="flex justify-end mt-4">
                <Button type="submit">Send Task</Button>
              </div>
            </form>
          </CustomModal>
        )}

        {isInterviewModalOpen && (
          <CustomModal
            isModalOpen={isInterviewModalOpen}
            setIsModalOpen={setIsInterviewModalOpen}
            handleModal={handleInterviewModal}
          >
            {/* Modal Heading */}
            <h2 className="text-purple text-2xl pb-2 drop-shadow-lg flex items-center gap-2 border-b border-purple/60">
              <BsCameraVideo size={24} />
              Take Interview
            </h2>

            {/* Modal content */}
            <form onSubmit={handleSubmit(onInterviewSubmit)}>
              <div className="flex items-center gap-5">
                {/* Interview Date */}
                <div className="w-full">
                  <label className="text-dark text-base block mb-1 mt-5">
                    Interview Date

                    <input
                      className="rounded outline-none border border-dark/20 w-full px-3 py-2 focus:border-purple"
                      type="date"
                      {...register("date", { required: true })}
                    />
                  </label>
                  {errors.date && (
                    <span className="text-red-700">Date is required</span>
                  )}
                </div>

                {/* Interview Time */}
                <div className="w-full">
                  <label className="text-dark text-base block mb-1 mt-5">
                    Interview Time
                    <input
                      className="rounded outline-none border border-dark/20 w-full px-3 py-2 focus:border-purple"
                      type="time"
                      {...register("time", { required: true })}
                    />
                  </label>
                  {errors.time && (
                    <span className="text-red-700">Time is required</span>
                  )}
                </div>
              </div>

              {/* Details */}
              <div>
                <label className="text-dark text-base block mb-1 mt-5">
                  Additional Details
                  <textarea
                    rows={4}
                    className="rounded outline-none border border-dark/20 w-full px-3 py-2 focus:border-purple"
                    placeholder='Write Additional details'
                    {...register("details")}
                  />
                </label>
              </div>

              {/* Save changes */}
              <div className="flex justify-end mt-4">
                <Button type="submit">Send Interview Invitation</Button>
              </div>
            </form>
          </CustomModal>
        )}
      </div>
    </section>
  );
};

export default ApplicationFormDetails;