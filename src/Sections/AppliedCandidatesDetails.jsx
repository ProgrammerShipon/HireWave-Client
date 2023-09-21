import { useState, useEffect } from 'react';
import AppliedCandidatesTable from '../Components/AppliedCandidatesTable';

// react icons
import { FaLocationCrosshairs } from 'react-icons/fa6';
import { BiCheck } from 'react-icons/bi';
import useMyAppliedCandidates from '../Hooks/useMyAppliedCandidates';

const AppliedCandidatesDetails = ({ appliedData }) => {
    const [myAppliedCandidates] = useMyAppliedCandidates();
    const [filteredData, setFilteredData] = useState(myAppliedCandidates);
    const [location, setLocation] = useState('');
    const [checkBoxData, setCheckBoxData] = useState('');

    // main filtering
    useEffect(() => {
        if (checkBoxData.length > 0) {
            const filteredCandidatesData = myAppliedCandidates.filter(
                (candidate) =>
                    candidate.location.toLowerCase().includes(location.toLowerCase()) &&
                    checkBoxData.includes(candidate.category)
            );
            setFilteredData(filteredCandidatesData);
        } else if (location.length > 0) {
            const filterByLocation = myAppliedCandidates.filter((rql) =>
                rql.location.toLowerCase().includes(location.toLowerCase())
            );
            setFilteredData(filterByLocation);
        } else {
            setFilteredData(myAppliedCandidates);
        }
    }, [location, checkBoxData, myAppliedCandidates]);

    useEffect(() => {
        setFilteredData(myAppliedCandidates);
    }, [myAppliedCandidates]);

    // category filter
    const toggleCheckBox = (item) => {
        if (checkBoxData.includes(item)) {
            setCheckBoxData(checkBoxData.filter((data) => data !== item));
        } else {
            setCheckBoxData([...checkBoxData, item]);
        }
    };
    
    const category = [...new Set(myAppliedCandidates.map(candidate => candidate.category))]

    return (
        <div className='py-20 md:py-[120px] duration-300'>
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-4 duration-300">

                    {/* filter bar */}
                    <div className="lg:px-8">
                        {/* filter by location */}
                        <div className="sticky top-28 bg-white">
                            <div className='border border-gray/60 flex items-center py-4 md:py-3 rounded-md'>
                                <label htmlFor="location" className='pl-2 text-green'>
                                    <FaLocationCrosshairs size='20px' className="animate-spin" />
                                </label>
                                <input
                                    id='location'
                                    className='w-full border text-lg border-none focus:outline-none bg-transparent pl-2 text-gray placeholder:text-gray/60 placeholder:bg-transparent'
                                    placeholder="Search by Location"
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>

                            {/* filter by Category */}
                            <div className="mt-6">
                                <h2 className="text-2xl capitalize mb-4">Category</h2>
                                <div className="space-y-2">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center gap-2 relative"
                                            onClick={() => setCheckBoxData([])}
                                        >
                                            <input id='all' type="checkbox" className="h-6 w-full opacity-0 absolute" />
                                            <span
                                                className={`flex items-center justify-center h-6 w-6 rounded-md border border-gray/50 text-white ${checkBoxData.length === 0 ? 'bg-purple' : ''}`}>
                                                <BiCheck size='22' />
                                            </span>
                                            <label htmlFor='all'
                                                className="text-lg text-gray"
                                            >All</label>
                                        </div>

                                        <span className="w-10 h-6 flex text-purple items-center justify-center bg-purple/30 rounded-lg">
                                            {
                                                myAppliedCandidates.length
                                            }
                                        </span>
                                    </div>
                                    {
                                        category.map((item, index) => <div
                                            key={index}
                                            className="flex items-center justify-between gap-2"
                                        >
                                            <div className="flex items-center gap-2 relative"
                                                onClick={() => toggleCheckBox(item)}
                                            >
                                                <input id={'industry' + index} type="checkbox" className="h-6 w-full opacity-0 absolute" />

                                                <span
                                                    className={`flex items-center justify-center h-6 w-6 rounded-md border border-gray/50 text-white ${checkBoxData.includes(item) ? 'bg-purple' : ''}`}>
                                                    <BiCheck size='22' />
                                                </span>

                                                <label htmlFor={'industry' + index}
                                                    className="text-lg text-gray"
                                                >{item}</label>
                                            </div>
                                            <span className="w-10 h-6 flex text-purple items-center justify-center bg-purple/30 rounded-lg">
                                                {
                                                    myAppliedCandidates.filter(i => i.category === item).length
                                                }
                                            </span>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* candidate table */}
                    <div className='lg:col-span-3 relative overflow-x-auto'>
                        <table className='table w-[900px] md:w-full text-center border border-gray/40'>
                            <thead className='bg-green text-white text-lg'>
                                <tr>
                                    <th className='px-2 py-3 font-medium'>#</th>
                                    <th className='px-2 py-3 font-medium'>Image</th>
                                    <th className='px-2 py-3 font-medium'>Applicant</th>
                                    <th className='px-2 py-3 font-medium'>Salary</th>
                                    <th className='px-2 py-3 font-medium'>Rating</th>
                                    <th className='px-10 py-3 font-medium'>Location</th>
                                    <th className='px-2 py-3 font-medium'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredData.map((candidate, index) => <AppliedCandidatesTable
                                        key={index}
                                        index={index}
                                        candidate={candidate}
                                    />)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppliedCandidatesDetails;