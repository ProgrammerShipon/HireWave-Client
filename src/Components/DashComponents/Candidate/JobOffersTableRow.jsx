import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const JobOffersTableRow = ({ offer, refetch }) => {
    const [axiosSecure] = useAxiosSecure();
    console.log(offer)
    const {
        _id,
        jobId,
        company,
        position,
        salary,
        status,
    } = offer;
    const [statusUpdate, setStatusUpdate] = useState(status);

    const statusChanges = () => {
        const statusData = {
            status: statusUpdate,
        };

        if (statusData != "undefined") {
            Swal.fire({
                title: "Are you sure?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Save Status",
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosSecure
                        .patch(`/job_offer/candidate-status/${_id}`, statusData) // Just Add Api Here
                        .then((data) => {
                            if (data.status == 200) {
                                refetch();
                                Swal.fire({
                                    icon: "success",
                                    title: "Updated Successfully!",
                                    showConfirmButton: false,
                                    timer: 1500,
                                });
                            }
                        })
                        .catch((err) => console.log(err));
                }
            });
        }
    };

    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
            <td className="py-3">
                <div className="w-12 h-12 mx-auto rounded-full overflow-hidden shadow-lg">
                    <img
                        className="w-full object-cover object-center"
                        src={company?.image}
                        alt={company?.name}
                    />
                </div>
            </td>

            <td>
                <Link
                    to={`/recruiters_details/${jobId}`}
                    className="font-medium text-dark group-hover:text-purple group-hover:underline duration-300"
                >
                    {company?.name}
                </Link>
            </td>

            <td>{position}</td>

            <td>{salary}$</td>

            <td className="px-3 py-4">
                <div
                    className={`relative flex gap-1 items-center justify-center px-2 rounded-full capitalize w-fit mx-auto 
            ${status === "accept" &&
                        "bg-green/10 text-green font-medium shadow-lg shadow-green/20"
                        } ${status === "open" && "bg-orange-300/10 text-orange-300"} 
              ${status === "reject" && "bg-red-500/20 text-red-500"} ${status === "expired" && "bg-red-500/10 text-red-500"
                        }
            `}
                >
                    {
                        status === 'open' ? <select
                            onChange={(e) => {
                                setStatusUpdate(e.target.value);
                            }}
                            name="status"
                            id="status"
                            defaultValue={statusUpdate}
                            className="focus:outline-none bg-transparent"
                        >
                            <option value="accept">Accept</option>
                            <option value="open">Open</option>
                            <option value="reject">Reject</option>
                        </select> : <span className='px-2'>{status}</span>
                    }
                </div>
            </td>

            <td className="px-3 py-4 text-center">
                <button
                    disabled={status === 'open' ? false : true}
                    onClick={() => statusChanges()}
                    className={`border border-green text-dark px-4 rounded-md duration-300 hover:bg-green hover:text-white ${status === 'open' ? "bg-transparent" : "bg-green text-white"
                        }`}
                >
                    {status === 'open' ? 'Save' : 'Saved'}
                </button>
            </td>
        </tr>
    );
};

export default JobOffersTableRow;