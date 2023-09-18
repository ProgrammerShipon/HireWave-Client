import React from 'react';
import DashTitle from '../Components/DashComponents/DashTitle';
import TasksReceivedTableRow from '../Components/DashComponents/TasksReceivedTableRow';

const TasksReceived = () => {
    const tasks =[
        {
            _id: "1",
            applicantName: "Raiyan Hossain",
            applicantImage: "https://i.ibb.co/jDPFM9F/req-1.jpg",
            submission: "https://netlify-submission.com",
            submissionTime: "23 June, 2023"
        },
        {
            _id: "2",
            applicantName: "Munna Mia",
            applicantImage: "https://i.ibb.co/nbjYRxQ/req-5.jpg",
            submission: "https://netlify-submission.com",
            submissionTime: "08 July, 2023"
        },
        {
            _id: "3",
            applicantName: "Linkon",
            applicantImage: "https://digity.netlify.app/assets/images/team/1.png",
            submission: "https://netlify-submission.com",
            submissionTime: "28 May, 2023"
        },
    ]
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Tasks Received' />

            {/* posted jobs table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-4">
                <table className="table lg:w-full w-[800px] text-left">
                    <thead className="text-lg text-green border-b border-green/40">
                        <tr>
                            <th className="px-3 py-3 font-medium text-center">Image</th>
                            <th className="px-3 py-3 font-medium text-center">Company</th>
                            <th className="px-3 py-3 font-medium text-center">Submission</th>
                            <th className="px-3 py-3 font-medium text-center">Deadline</th>
                            <th className="px-3 py-3 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tasks.map((task) => (
                            <TasksReceivedTableRow key={task._id} task={task} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default TasksReceived;