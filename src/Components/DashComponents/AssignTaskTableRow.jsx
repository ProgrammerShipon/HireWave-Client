import { useState } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import CustomModal from "../CustomModal";
import { MdOutlineAssignment } from "react-icons/md";

const AssignTaskTableRow = ({ task }) => {
    const { companyId, jobId, companyLogo, companyName, title, tasks } = task;
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const handleViewTask = (e) => {
        if (e == "edit") setIsTaskModalOpen(true);
        else if (e == "cancel") setIsTaskModalOpen(false);
    };

    const formattedTasks = tasks[0]?.given?.map((pa) =>
        pa === "" ? "\u00A0" : pa
    );

    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
            <td className="px-3 py-3">
                <div className='w-12 h-12 mx-auto rounded-full overflow-hidden'>
                    <img className='w-full object-cover object-center' src={companyLogo} alt={companyName} />
                </div>
            </td>
            <td>
                <Link
                    to={`/candidate_details/${jobId}`}
                    className="font-medium text-dark group-hover:text-green duration-300"
                >
                    {companyName}
                </Link>
            </td>
            <td className="text-left">
                <Link
                    to={`/candidate_details/${companyId}`}
                    className="font-medium text-dark group-hover:text-green duration-300 line-clamp-2 w-44"
                >
                    {title}
                </Link>
            </td>
            <td>
                {moment(tasks[0].submissionTime).format("DD, MMM YYYY")}
            </td>
            <td className="space-x-2">
                <button
                    onClick={() => handleViewTask('edit')}
                    className='border border-green text-dark px-3 py-1 rounded-md duration-300 hover:bg-green hover:text-white'
                >View Task</button>
                {/* <button
                    className='border border-green text-dark px-3 py-1 rounded-md duration-300 hover:bg-green hover:text-white'
                >Submit Task</button> */}
            </td>
            {handleViewTask && (
                <CustomModal
                    isModalOpen={isTaskModalOpen}
                    setIsModalOpen={setIsTaskModalOpen}
                    handleModal={handleViewTask}
                >
                    {/* Modal Heading */}
                    <div className="text-purple text-2xl pb-2 drop-shadow-lg flex items-center gap-2 border-b border-purple/60">
                        <MdOutlineAssignment size={24} />
                        Task Details
                    </div>
                    <div className="mt-3 text-left">
                        {formattedTasks.length > 0 &&
                            formattedTasks.map((ab, index) => (
                                <p key={index} className="text-lightGray tracking-wide">
                                    {ab}
                                </p>
                            ))}
                    </div>
                </CustomModal>
            )}
        </tr>
    );
};

export default AssignTaskTableRow;