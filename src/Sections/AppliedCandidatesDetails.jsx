import React from 'react';
import useAppliedCandidates from '../Hooks/useAppliedCandidates';
import { useState } from 'react';
import AppliedCandidatesTable from '../Components/AppliedCandidatesTable';

const AppliedCandidatesDetails = () => {
    const [appliedCandidates]= useAppliedCandidates()
    // console.log(appliedCandidates)
    const [applicants, setApplicants] = useState(appliedCandidates);
    const [selectedSort, setSelectedSort] = useState(null);
    const [selectedFilters, setSelectedFilters] = useState([]);
  
    const handleSortChange = (key) => {
      setSelectedSort(key);
      sortData(key);
    };
  
    const handleFilterChange = (jobTitle) => {
      if (selectedFilters.includes(jobTitle)) {
        setSelectedFilters(selectedFilters.filter(filter => filter !== jobTitle));
      } else {
        setSelectedFilters([...selectedFilters, jobTitle]);
      }
      filterData(selectedFilters);
    };
  
    const sortData = (key) => {
      const sortedApplicants = [...applicants].sort((a, b) =>
        key === 'applicantRating'
          ? b.applicantRating - a.applicantRating
          : new Date(b.applicationDate) - new Date(a.applicationDate)
      );
      setApplicants(sortedApplicants);
    };
  
    const filterData = (filters) => {
      if (filters.length === 0) {
        setApplicants(applicantsData);
      } else {
        const filteredApplicants = applicantsData.filter(applicant =>
          filters.includes(applicant.jobTitle)
        );
        setApplicants(filteredApplicants);
      }
    };

    return (
        <div className='py-20 md:py-[120px] duration-300'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-4 space-y-6 md:space-y-0 md:gap-8 duration-300">

                    {/* Sort bar */}
                    <div className="lg:px-8 col-span-1">

                        {/* Sort by best match */}
                        <div className='flex gap-3 items-center mb-3'>
                            <input
                            type="checkbox"
                            className='h-5 w-5'
                            />
                            <label>Sort by Best Match</label>
                        </div>

                        {/* Sort by rating */}
                        <div className='flex gap-3 items-center mb-3'>
                            <input
                            type="checkbox"
                            className='h-5 w-5'
                            checked={selectedSort === 'applicantRating'}
                            onChange={() => handleSortChange('applicantRating')}
                            />
                            <label>Sort by Rating</label>
                        </div>

                        {/* Sort by application date */}
                        <div className='flex gap-3 items-center mb-3'>
                            <input
                            type="checkbox"
                            className='h-5 w-5'
                            checked={selectedSort === 'applicationDate'}
                            onChange={() => handleSortChange('applicationDate')}
                            />
                            <label>Sort by Application Date</label>
                        </div>

                        {/* filter by job title */}
                        <div className='mt-5'>
                            <h1 className='text-xl mb-3'>Filter by Job Title</h1>

                            <div className='pl-5 flex gap-3 items-center mb-2'>
                                <input
                                type="checkbox"
                                className='h-5 w-5'
                                checked={selectedFilters.includes('Software Developer')}
                                onChange={() => handleFilterChange('Software Developer')}
                                />
                                <label>Software Developers</label>
                            </div>

                            <div className='pl-5 flex gap-3 items-center mb-2'>
                                <input
                                type="checkbox"
                                className='h-5 w-5'
                                checked={selectedFilters.includes('Graphic Designer')}
                                onChange={() => handleFilterChange('Graphic Designer')}
                                />
                                <label>Graphic Designers</label>
                            </div>

                            <div className='pl-5 flex gap-3 items-center mb-2'>
                                <input
                                type="checkbox"
                                className='h-5 w-5'
                                checked={selectedFilters.includes('Sales Representative')}
                                onChange={() => handleFilterChange('Sales Representative')}
                                />
                                <label>Sales Representatives</label>
                            </div>
                        </div>
                    </div>

                    {/* Candidate Details */}
                    <AppliedCandidatesTable appliedCandidates={appliedCandidates} selectedSort={selectedSort}></AppliedCandidatesTable>
                    
                </div>
            </div>
        </div>
    );
};

export default AppliedCandidatesDetails;