import { Link } from 'react-router-dom';

// react icons
import { HiOutlineExternalLink } from 'react-icons/hi';
import { BiSolidStar } from "react-icons/bi";

const AppliedCandidatesTable = ({ index, candidate }) => {
    const { _id, name, category, images, hourlyRate, status, location, skills, rating } = candidate;
    return (
        <tr
            key={candidate.id}
            className='even:bg-black/50 text-black even:text-white group'
        >
            <td className='px-5 py-3 text-green group-even:text-white'>{index + 1}</td>
            <td>
                <div className='w-14 h-14 mx-auto rounded-full overflow-hidden'>
                    <img className='w-full object-cover object-center' src={images} alt={name} />
                </div>
            </td>
            <td className='px-5 py-3'>{name}</td>
            <td className='px-5 py-3'>{category}</td>
            <td className='px-10 py-3'>{hourlyRate}$</td>
            <td className='px-5 py-3'>
                <p className='text-[#FDCC0D] font-medium flex items-center'>
                    {rating} <BiSolidStar />
                </p>
            </td>
            <td className='px-5 py-3'>{location}</td>
            <td className='px-2 py-3'>
                {/* button */}
                <Link state={candidate} title='View Details' to={`/candidate_details/${_id}`} className="bg-purple text-white py-3 rounded-md duration-300 hover:bg-green shadow-xl shadow-purple/20 hover:shadow-dark/20 flex items-center justify-center">
                    <HiOutlineExternalLink size='20px' />
                </Link>
            </td>
        </tr>
    );
};

export default AppliedCandidatesTable;