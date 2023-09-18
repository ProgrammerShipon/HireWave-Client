import React from 'react';
import { Link } from 'react-router-dom';

const RequestedOffersTableRow = ({ offer }) => {
    const { name, image, category, _id, title, position, salary } = offer

    return (
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
            <td className='py-3'>
                <div className='w-12 h-12 mx-auto rounded-full overflow-hidden'>
                    <img className='w-full object-cover object-center' src={image} alt={name} />
                </div>
            </td>
            <td><Link to={`/candidate_details/${_id}`} className="font-medium text-purple hover:underline duration-300">{name}</Link></td>
            <td>{category}</td>
            <td>{title}</td>
            <td>{position}</td>
            <td>{salary}$</td>
            
        </tr>
    );
};

export default RequestedOffersTableRow;