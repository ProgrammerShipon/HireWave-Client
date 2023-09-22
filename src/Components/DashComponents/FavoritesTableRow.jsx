import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { BiMessageDetail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const FavoritesTableRow = ({favorite}) => {
    const { candidateName, candidateImage, candidateId, candidateHourlyRate } = favorite
    
    return (
    <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
        <td className='py-3'>
            <div className='w-12 h-12 mx-auto rounded-full overflow-hidden'>
                <img className='w-full object-cover object-center' src={candidateImage} alt={candidateName} />
            </div>
        </td>
        <td><Link to={`/candidate_details/${candidateId}`} className="font-medium text-purple hover:underline duration-300">{candidateName}</Link></td>
        <td>{candidateHourlyRate}</td>
        <td className='flex justify-center items-center gap-5 lg:gap-8 mt-5 cursor-pointer mx-auto'>
            <AiOutlineDelete className='hover:bg-red-100 text-red-500 rounded-full text-3xl p-1'/>
            <BiMessageDetail className='hover:bg-green/20 text-green rounded-full text-3xl p-1' />
        </td>
    </tr>
    );
};

export default FavoritesTableRow;