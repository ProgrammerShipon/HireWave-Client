import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsSendCheck } from "react-icons/bs";
import ArrayTextarea from "./ArrayTextarea";
import Button from "./Button";
import CustomModal from "./CustomModal";

const SendJobOffer = ({ handleSendOffer }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [offerLetter, setOfferLetter] = useState(false);
  const [isOfferModalOpen, setIsOfferModalOpen] = useState(true);

  const offerData = {
    candidate: {
      name: "John Doe",
      email: "johndoe@email.com",
      phone: "+1234567890",
    },
    job_offer: {
      position: "Software Developer",
      company: "TechCo, Inc.",
      location: "San Francisco, CA",
      salary: "$90,000 per year",
      start_date: "2023-10-01",
      benefits: ["Health insurance", "401(k) matching", "Paid time off"],
      responsibilities: [
        "Develop software applications",
        "Collaborate with cross-functional teams",
        "Troubleshoot and resolve software issues",
      ],
    },
  };

  // Job Offer Send
  const onJobOffer = (data) => {
    const offerData = {
      offerLetter
    }
    console.log("onJobOffer", data);

    // setIsOfferModalOpen(false);
    // reset();
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
            {/* Details */}
            <div>
              <label
                htmlFor="additionalFile"
                className="text-dark text-base block mb-1 mt-5"
              >
                Additional file links(doc, pdf, etc..)
              </label>
              <input
                id="additionalFile"
                className="rounded outline-none border border-dark/20 w-full px-3 py-2 focus:border-purple"
                placeholder="Write Assessment Tests details / files link"
                {...register("fileLinks")}
              />
            </div>

            <div>
              <label className="text-dark text-base block mb-1 mt-5">
                Offer letter
                <ArrayTextarea
                  setCoverLetter={setOfferLetter}
                  placeholder="Write a offer letter"
                />
              </label>
            </div>

            {/* Send Offer Letter */}
            <div className="flex justify-end mt-4">
              <Button type='submit'>
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