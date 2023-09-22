import { Link } from "react-router-dom";
import moment from 'moment';

const TaskTableRow = ({ task }) => {
    const { applicantId, applicantImage, applicantName, category, tasks } = task;

    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
            <td className="px-3 py-3">
                <div className='w-12 h-12 mx-auto rounded-full overflow-hidden'>
                    <img className='w-full object-cover object-center' src={applicantImage} alt={applicantName} />
                </div>
            </td>
            <td>
                <Link
                    to={`/candidate_details/${applicantId}`}
                    className="font-medium text-dark group-hover:text-green duration-300"
                >
                    {applicantName}
                </Link>
            </td>
            <td>{category}</td>
            <td>
                {moment(tasks[0].submissionTime).format("DD, MMM YYYY")}
            </td>
            <td>
                <button
                    className='border border-green text-dark px-5 py-2 rounded-md duration-300 hover:bg-green hover:text-white'
                >Submitted Task</button>
            </td>
        </tr>
    );
};

export default TaskTableRow;