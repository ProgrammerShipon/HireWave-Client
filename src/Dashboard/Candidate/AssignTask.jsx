import AssignTaskTableRow from "../../Components/DashComponents/AssignTaskTableRow";
import DashTitle from "../../Components/DashComponents/DashTitle";
import useTask from "../../Hooks/useTask";


const AssignTask = () => {
    const [taskData, loading] = useTask();
    console.log(taskData)

    return (
        <section className="m-5 rounded-md">
            <DashTitle title="Assign Task" />

            {/* task table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-10">
                <table className="table lg:w-full w-[800px] text-left">
                    <thead className="text-lg text-green border-b border-green/40">
                        <tr>
                            <th className="px-3 py-3 font-medium text-center">Image</th>
                            <th className="px-3 py-3 font-medium text-center">Name</th>
                            <th className="px-3 py-3 font-medium text-left">Job Title</th>
                            <th className="px-3 py-3 font-medium text-center">Submission Date</th>
                            <th className="px-3 py-3 font-medium text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!loading && taskData.length > 0 ?
                            taskData.map((task) => (
                                <AssignTaskTableRow
                                    key={task._id}
                                    task={task}
                                />
                            )) : <h2 className="py-4 text-lg text-center">No data available!</h2>
                        }
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default AssignTask;