import { useState } from "react";
import { useForm } from "react-hook-form";
import { MdOutlineAssignment } from "react-icons/md";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import ArrayTextarea from "../ArrayTextarea";
import Button from "../Button";
import CustomModal from "../CustomModal";
import Swal from "sweetalert2";

const SendJobTask = ({ handleAssignTest, candidateDetails }) => {
  const { currentUser } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [isSentTaskModalOpen, setIsSentTaskModalOpen] = useState(true);
  const [testDetails, setTestDetails] = useState([]);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { jobId,
    applicantId,
    applicantName,
    applicantEmail,
    applicantImage,
    category,
    companyName,
    companyLogo,
    companyEmail,
    title } = candidateDetails

  // Assign Test  Submit
  const onAssignTest = (data) => {
    // task Data
    const taskData = {
      jobId,
      applicantId,
      applicantName,
      applicantEmail,
      applicantImage,
      category,
      companyName,
      companyLogo,
      companyEmail,
      title,
      appliedId: candidateDetails?._id,
      companyId: currentUser?._id,
      tasks: [
        {
          given: testDetails,
          startTime: new Date(),
          submissionTime: data?.submissionData,
        },
      ],
    };

    // send data client or store database
    axiosSecure.post("/task", taskData)
      .then((res) => {
        if (res.status == 200) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Task Assign Send Success',
            showConfirmButton: false,
            timer: 1500
          })
          reset();
          setIsSentTaskModalOpen(false);
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      {/* send Assign Test */}
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
          <form onSubmit={handleSubmit(onAssignTest)} className="mt-4">
            {/* Details */}
            <div>
              {/* Interview Date */}
              <div className="w-full">
                <label className="text-dark text-base block mb-1 mt-5">
                  Submission Data
                  <input
                    className="rounded outline-none border border-dark/20 w-full px-3 py-2 focus:border-purple"
                    type="date"
                    {...register("submissionData", { required: true })}
                  />
                </label>
                {errors.date && (
                  <span className="text-red-700">Date is required</span>
                )}
              </div>

              {/* Additional File Links or data */}
              <label className="text-dark text-base block mb-1 mt-5">
                Additional file links / Tests details
              </label>
              <ArrayTextarea
                setCoverLetter={setTestDetails}
                placeholder="Write test details / Additional file links"
              />
            </div>

            {/* Save changes */}
            <div className="flex justify-end mt-4">
              <Button type="submit">Send Task</Button>
            </div>
          </form>
        </CustomModal>
      )}
    </>
  );
};

export default SendJobTask;