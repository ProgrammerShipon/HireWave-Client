import { Link } from 'react-router-dom';

// react icons
import { useEffect, useState } from 'react';
import { BiSolidStar } from "react-icons/bi";
import { HiOutlineExternalLink } from 'react-icons/hi';
import useReview from '../Hooks/useReview';

const AppliedCandidatesTable = ({ index, candidate }) => {
    const [reviewData, loading] = useReview();
    const { _id, applicantId, applicantName, applicantEmail, applicantImage, expected_salary, location } = candidate;
    const [review, setReview] = useState([]);
    useEffect(() => {
        const getReview = reviewData.filter(rvl => rvl.email === applicantEmail);
        setReview(getReview)
    }, [!loading])
    return (
        <tr
            key={candidate._id}
            className='even:bg-black/50 text-black even:text-white group'
        >
            <td className='px-5 py-3 text-green group-even:text-white'>{index + 1}</td>
            <td>
                <div className='w-14 h-14 mx-auto rounded-full overflow-hidden'>
                    <img className='w-full object-cover object-center' src={applicantImage} alt={applicantName} />
                </div>
            </td>
            <td className='px-5 py-3'><Link className='cursor-pointer underline group-hover:text-green duration-300' to={`/candidate_details/${applicantId}`}>{applicantName}</Link></td>
            <td className='px-10 py-3 font-medium'>{expected_salary}$</td>
            <td className='px-5 py-3'>
                <p className='text-[#FDCC0D] font-medium flex items-center justify-center'>
                    {review.length > 0 ? review[0].rating : 'N/A'} <BiSolidStar />
                </p>
            </td>
            <td className='px-5 py-3'>{location}</td>
            <td className='px-2 py-3'>
                {/* button */}
                <Link state={candidate} title='View Details' to={`/application_form/${_id}`} className="bg-purple text-white py-3 rounded-md duration-300 hover:bg-green shadow-xl shadow-purple/20 hover:shadow-dark/20 flex items-center justify-center">
                    <HiOutlineExternalLink size='20px' />
                </Link>
            </td>
        </tr>
    );
};

export default AppliedCandidatesTable;