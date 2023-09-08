import { Link } from "react-router-dom";

const ManageUserTableRow = ({ user }) => {
    const { _id, name, email, image, role, status } = user;
    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group">
            <td className="px-3 py-3 flex gap-2">
                <img src={image} alt={name}
                    className="w-12 h-12 rounded-full object-cover object-center overflow-hidden"
                />
                <div className="flex flex-col">
                    <Link to={`/candidate_details/${_id}`} className="font-medium text-dark group-hover:text-green duration-300">{name}</Link>
                    <p className="text-lightGray">{email}</p>
                </div>
            </td>

            <td className="px-3 py-4 text-center capitalize">{role}</td>

            <td className="px-3 py-4 text-center">
                <div className={`relative flex gap-1 items-center justify-center px-2 rounded-full capitalize w-fit mx-auto ${status === 'approved' && 'bg-green/10 text-green font-medium shadow-lg shadow-green/20'} ${status === 'pending' && 'bg-orange-300/10 text-orange-300'} ${status === 'rejected' && 'bg-red-500/10 text-red-500'}`}
                >
                    <select name="status" id="status" defaultValue={status}
                        className="focus:outline-none bg-transparent"
                    >
                        <option value="active">Approved</option>
                        <option value="pending">Pending</option>
                        <option value="rejected">Suspend</option>
                    </select>
                </div>
            </td>
            <td className="px-3 py-4 text-center">
                <button className="border border-green text-dark px-4 rounded-md hover:bg-green hover:text-white duration-300">Apply</button>
            </td>
        </tr>
    );
};

export default ManageUserTableRow;