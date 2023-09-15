import React from 'react';
import { AiOutlineDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const FavoritesTableRow = ({favorite}) => {
    const { candidateName, candidateImage, candidateCategory, candidateId, candidateRate } = favorite
    return (
    <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
        <td className='py-3'>
            <div className='w-12 h-12 mx-auto rounded-full overflow-hidden'>
                <img className='w-full object-cover object-center' src={candidateImage} alt={candidateName} />
            </div>
        </td>
        <td><Link to={`/candidate_details/${candidateId}`} className="font-medium text-purple hover:underline duration-300">{candidateName}</Link></td>
        <td>{candidateCategory}</td>
        <td>{candidateRate}</td>
        <td className='flex justify-center items-center mt-5 hover:bg-red-200 text-red-500 rounded-full p-1 cursor-pointer w-fit mx-auto'><AiOutlineDelete size={20}/></td>
    </tr>
    );
};

export default FavoritesTableRow;