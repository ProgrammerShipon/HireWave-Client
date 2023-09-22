import DashTitle from '../Components/DashComponents/DashTitle';
import TasksReceivedTableRow from '../Components/DashComponents/TasksReceivedTableRow';

const TasksReceived = () => {

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