import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomModal from '../CustomModal';

const TasksReceivedTableRow = ({ task }) => {
    const { applicantName, applicantImage, submission, _id, submissionTime } = task
    const [isTaskModalOpen, setIsTaskModalOpen] = useState(false);
    const handleTaskModal = (e) => {
        if (e == "edit") setIsTaskModalOpen(true)
        else if (e == "cancel") setIsTaskModalOpen(false)
    }

    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
            <td className='py-3'>
                <div className='w-12 h-12 mx-auto rounded-full overflow-hidden'>
                    <img className='w-full object-cover object-center' src={applicantImage} alt={applicantName} />
                </div>
            </td>
            <td><Link to={`/recruiters_details/${_id}`} className="font-medium text-purple hover:underline duration-300">{applicantName}</Link></td>
            <td><a className='text-gray underline cursor-pointer' href={submission} target='_blank'>Submission Link</a></td>
            <td>{submissionTime}</td>
            <td>
                <button  onClick={() => handleTaskModal("edit")} className="bg-transparent text-dark hover:text-white px-3 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 m-auto">View Details</button>
            </td>
            {
                isTaskModalOpen && (
                    <CustomModal
                        isModalOpen={isTaskModalOpen}
                        setIsModalOpen={isTaskModalOpen}
                        handleModal={handleTaskModal}
                    >
                        {/* Modal Heading */}
                        <div className="overflow-y-hidden">
                            <div className="pt-2 pb-2 flex items-center gap-3 border-b border-dark/20 text-purple -mt-3">
                                <h3 className="text-xl">Task Overview</h3>
                            </div>

                            {/* Modal content */}
                            <p className='mt-5'>Details content goes here</p>
                        </div>
                    </CustomModal>
                )
            }
        </tr>
    );
};

export default TasksReceivedTableRow;