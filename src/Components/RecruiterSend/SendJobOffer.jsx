import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsSendCheck } from "react-icons/bs";
import { toast } from "react-toastify";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ArrayTextarea from "../ArrayTextarea";
import Button from "../Button";
import CustomModal from "../CustomModal";

const SendJobOffer = ({ handleSendOffer, candidateDetails }) => {
  const [ axiosSecure ] = useAxiosSecure()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [offerLetter, setOfferLetter] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(true);

  // Job Offer Send
  const onJobOffer = (data) => {
  const {
    applicantName,
    applicantImage,
    category,
    applicantEmail,
    jobId,
    jobType,
    companyLogo,
    companyEmail,
    companyName,
    title,
  } = candidateDetails;
    
    console.log("candidateDetails", candidateDetails);
    console.log("from data -> ", data);

    // offer data object
    const offerData = {
      jobId,
      jobType,
      category,
      title,
      position: data?.position,
      salary: data?.salary,
      status: "open", // ['open', 'accept', 'reject', 'expired'],
      offerDetails: offerLetter || [],
      applicant: {
        name: applicantName,
        email: applicantEmail,
        image: applicantImage,
      },
      company: {
        name: companyName,
        email: companyEmail,
        image: companyLogo,
      },
      read: true,
      sendedDate: new Date(),
    };
    
    console.log("onJobOffer", offerData);

    axiosSecure.post("job_offer", offerData)
      .then(res => {
        if (res.status == 200) {
          toast.success("Sending Offer...");
          reset();
          setIsOfferModalOpen(false);
        }
      }).catch(err => {
      console.log(err)
    })
  };

  return (
    <>
      {/* Send Offer Letter */}
      {handleSendOffer && (
        <CustomModal
          isModalOpen={isOfferModalOpen}
          setIsModalOpen={setIsOfferModalOpen}
          handleModal={handleSendOffer}
        >
          {/* Modal Heading */}
          <h2 className="text-purple text-2xl pb-2 drop-shadow-lg flex items-center gap-2 border-b border-purple/60">
            <BsSendCheck size={24} />
            Send Offer
          </h2>

          {/* Modal content */}
          <form onSubmit={handleSubmit(onJobOffer)} className="mt-4">
            {/* Salary */}
            <div>
              <label
                htmlFor="additionalFile"
                className="text-dark text-base block mb-1 mt-5"
              >
                Your Salary :
              </label>
              <input
                id="additionalFile"
                className="rounded outline-none border border-dark/20 w-full px-3 py-2 focus:border-purple"
                placeholder="Salary Amount"
                {...register("salary", { required: true })}
              />
            </div>

            {/* Position */}
            <div>
              <label
                htmlFor="additionalFile"
                className="text-dark text-base block mb-1 mt-5"
              >
                Job Position :
              </label>
              <input
                id="additionalFile"
                className="rounded outline-none border border-dark/20 w-full px-3 py-2 focus:border-purple"
                placeholder="e.g. Senior Full Stack Developer"
                {...register("position", { required: true })}
              />
            </div>

            {/* Additional attachment or files links */}
            <div>
              <label className="text-dark text-base block mb-1 mt-5">
                Offer letter :
                <ArrayTextarea
                  setCoverLetter={setOfferLetter}
                  placeholder="Write Assessment Tests details / files link"
                />
              </label>
            </div>

            {/* Send Offer Letter */}
            <div className="flex justify-end mt-4">
              <Button type="submit">
                {/* <button type="submit" onClick={() => onJobOffer()}> */}
                Send Offer
                {/* </button> */}
              </Button>
            </div>
          </form>
        </CustomModal>
      )}
    </>
  );
};

export default SendJobOffer;