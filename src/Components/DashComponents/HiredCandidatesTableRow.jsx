import React from 'react';
import { Link } from 'react-router-dom';

const HiredCandidatesTableRow = ({ candidate }) => {
    const { name, image, title, id, salary, category, position } = candidate
    
    return (
    <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
        <td className='py-3'>
            <div className='w-12 h-12 mx-auto rounded-full overflow-hidden'>
                <img className='w-full object-cover object-center' src={image} alt={name} />
            </div>
        </td>
        <td><Link to={`/candidate_details/${id}`} className="font-medium text-purple hover:underline duration-300">{name}</Link></td>
        <td>{category}</td>
        <td>{title}</td>
        <td>{position}</td>
        <td>{salary} $</td>
    </tr>
    );
};

export default HiredCandidatesTableRow;