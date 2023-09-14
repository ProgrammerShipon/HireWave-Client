import React from 'react';

const Pagination = ({ jobsPerPage, totalJobs, paginate, currentPage }) => {
    const pageNumbers= [];

    for(let i=1; i<= Math.ceil(totalJobs / jobsPerPage); i++){
        pageNumbers.push(i)
    }
    return (
        <nav>
            <ul className='flex justify-center items-center gap-3 mt-5'>
                {pageNumbers.map(number=> (
                    <li key={number} className={`border border-green rounded-full px-3 py-1 cursor-pointer ${currentPage === number ? 'bg-green/80 text-white' : 'text-dark'}`}>
                        <a onClick={() => paginate(number)}>{number}</a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Pagination;