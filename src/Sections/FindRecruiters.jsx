import { useEffect, useState } from "react";
import RecruiterCard from "../Components/RecruiterCard";
import useRecruiters from "../Hooks/useRecruiters";

// react icons
import { BiCheck } from 'react-icons/bi';
import { FaLocationCrosshairs } from 'react-icons/fa6';

const FindRecruiters = () => {
    const [recruiterData] = useRecruiters();
    const [filteredData, setFilteredData] = useState([]);
    const [location, setLocation] = useState('');
    const [checkBoxData, setCheckBoxData] = useState('');

    // main filtering
    useEffect(() => {
        if (checkBoxData.length > 0) {
            const filteredRecruiterData = recruiterData.filter(
                (recruiter) =>
                    recruiter.location.toLowerCase().includes(location.toLowerCase()) &&
                    checkBoxData.includes(recruiter.industry)
            );
            setFilteredData(filteredRecruiterData);
        } else if (location.length > 0) {
            const filterByLocation = recruiterData.filter((rql) =>
                rql.location.toLowerCase().includes(location.toLowerCase())
            );
            setFilteredData(filterByLocation);
        } else {
            setFilteredData(recruiterData);
        }
    }, [location, checkBoxData, recruiterData]);

    useEffect(() => {
        setFilteredData(recruiterData);
    }, [location, checkBoxData, recruiterData]);

    // industry filter
    const toggleCheckBox = (item) => {
        if (checkBoxData.includes(item)) {
            setCheckBoxData(checkBoxData.filter((data) => data !== item));
        } else {
            setCheckBoxData([...checkBoxData, item]);
        }
    };
    const industry = [...new Set(recruiterData.map(recruiter => recruiter.industry))]

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 space-y-6 md:space-y-0 md:gap-8">

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

                            {/* filter by industry */}
                            <div className="mt-6">
                                <h2 className="text-2xl capitalize mb-4">industry</h2>
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
                                                recruiterData.length
                                            }
                                        </span>
                                    </div>
                                    {
                                        industry.map((item, index) => <div
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
                                                    recruiterData.filter(i => i.industry === item).length
                                                }
                                            </span>
                                        </div>)
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* filtered recruiters card */}
                    <div className="col-span-2">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 duration-300">
                            {
                                filteredData.map((recruiter) => (
                                    <RecruiterCard key={recruiter._id} recruiter={recruiter} />
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FindRecruiters;