import useCurrentRecruiter from '../../Hooks/useCurrentRecruiter';
import useAxiosSecure from '../../Hooks/useAxiosSecure';

const OffersSentTableRow = ({ offer }) => {
    const [currentRecruiter] = useCurrentRecruiter();
    const [axiosSecure] = useAxiosSecure();
    const {
        applicant,
        position,
        salary,
        status,
    } = offer;

    const payment = () => {
        const timestamp = new Date().getTime();
        const random = Math.floor(Math.random() * 1000);
        const tran_id = `${timestamp}_${random}`

        const paymentInfo = {
            recruiterEmail: currentRecruiter?.email,
            recruiterId: currentRecruiter?._id,
            receiver: applicant?.name,
            receiverImage: applicant?.image,
            position: position,
            applicantEmail: applicant?.email,
            amount: salary,
            recruiterName: currentRecruiter.name,
            companyLogo: currentRecruiter?.image,
            tran_id: tran_id,
        }

        axiosSecure.post('/payment', paymentInfo)
            .then(res => {
                console.log(res.data)
                window.location.replace(res.data.url)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
            <td className="py-3">
                <div className="w-12 h-12 mx-auto rounded-full overflow-hidden shadow-lg">
                    <img
                        className="w-full object-cover object-center"
                        src={applicant?.image}
                        alt={applicant?.name}
                    />
                </div>
            </td>

            <td>
                <div
                    className="font-medium text-dark group-hover:text-purple group-hover:underline duration-300"
                >
                    {applicant?.name}
                </div>
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
                    <span className='px-2'>{status}</span>
                </div>
            </td>

            <td className="px-3 py-4 text-center">
                {
                    status === 'accept' ? <button
                        onClick={payment}
                        className='bg-green text-white px-4 py-1 rounded-md duration-300 hover:bg-dark hover:text-white'
                    >Payment Now</button> : <button
                        disabled={status === 'open' ? false : true}
                        className={`border text-dark px-4 rounded-md duration-300 hover:text-white ${status === 'reject' || status === 'expire' ? "bg-gray/40 border-gray/40 text-white" : "bg-transparent border-green hover:bg-green"
                            }`}
                    >
                        {status === 'reject' || status === 'expire' ? 'Canceled' : 'Cancel'}
                    </button>
                }

            </td>
        </tr>
    );
};

export default OffersSentTableRow;