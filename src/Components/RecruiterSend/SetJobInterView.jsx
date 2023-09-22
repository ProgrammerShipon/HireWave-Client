import { useState } from "react";
import { useForm } from "react-hook-form";
import { BsCameraVideo } from "react-icons/bs";
import Button from "../Button";
import CustomModal from "../CustomModal";

const SetJobInterView = ({ handleInterviewModal }) => {
     const {
       register,
       handleSubmit,
       reset,
       formState: { errors },
     } = useForm();
     const [isInterviewModalOpen, setIsInterviewModalOpen] = useState(true);

  const onInterviewSubmit = (data) => {
    console.log(data);
    const interviewData = {
      interviewDate: data.date,
      interviewTime: data.time,
      interviewDetails: data.details,
    };
    console.log(interviewData);

    //TODO: Update education data
    setIsInterviewModalOpen(false);
    reset();
  };

   return (
     <>
       {handleInterviewModal && (
         <CustomModal
           isModalOpen={isInterviewModalOpen}
           setIsModalOpen={setIsInterviewModalOpen}
           handleModal={handleInterviewModal}
         >
           {/* Modal Heading */}
           <div className="text-purple text-2xl pb-2 drop-shadow-lg flex items-center gap-2 border-b border-purple/60">
             <BsCameraVideo size={24} />
             Take Interview
           </div>

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
                   placeholder="Write Additional details"
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
     </>
   );
};

export default SetJobInterView;