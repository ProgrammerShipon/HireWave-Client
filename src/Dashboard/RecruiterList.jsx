import { useEffect, useState } from "react";
import DashTitle from "../Components/DashComponents/DashTitle";
import RecruiterListTableRow from "../Components/DashComponents/RecruiterListTableRow";
import PageLoader from "../Components/PageLoader";
import useRecruiters from "../Hooks/useRecruiters";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { Tooltip } from "react-tooltip";

const RecruiterList = () => {
    const [recruiterData, loading] = useRecruiters();

    const [filteredData, setFilteredData] = useState(recruiterData);

    const { register, watch, handleSubmit, reset } = useForm();
    const onSubmit = () => {
        reset();
    }

    const name = watch('name');
    const status = watch('status');
    const industry = watch('industry');
    const date = watch('date');

    useEffect(() => {
        let filter = recruiterData.filter((user) =>
            (!name || user.name.toLowerCase().includes(name.toLowerCase())) &&
            (!status || user.status.toLowerCase().includes(status.toLowerCase())) &&
            (!industry || user.industry.toLowerCase().includes(industry.toLowerCase()))
        );

        if (date === 'recent') {
            filter = [...filter].sort(
                (a, b) => new Date(b.joinDate) - new Date(a.joinDate)
            );
        } else if (date === 'oldest') {
            filter = [...filter].sort(
                (a, b) => new Date(a.joinDate) - new Date(b.joinDate)
            );
        }

        setFilteredData(filter);
    }, [name, status, industry, date, !loading]);

    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Recruiter List - Dashboard | Hire Wave</title>
            </Helmet>
            <section className='m-5 rounded-md'>
                <DashTitle title='Recruiter List' />

                {/* filtering option */}
                <form onSubmit={handleSubmit(onSubmit)}
                    className="flex flex-col lg:flex-row items-center gap-3 justify-between bg-white p-4 rounded-md shadow-xl mt-10">
                    {/* search by name */}
                    <Tooltip id="name" />
                    <div
                        data-tooltip-id="name" data-tooltip-content="Search recruiter name!" className="w-full sm:w-72">
                        <input
                            placeholder="Search recruiter name"
                            className="border border-gray/40 p-2 rounded-md bg-white focus:outline-none focus:border-green w-full"
                            {...register("name")}
                        />
                    </div>

                    <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
                        <h2 className="text-lg text-dark">Filter By: </h2>

                        {/* filter by status */}
                        <Tooltip id="status" />
                        <select data-tooltip-id="status" data-tooltip-content="Select recruiter status!"
                            name="status"
                            className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                            {...register("status")}
                        >
                            <option value="">Status</option>
                            <option value="approved">Approved</option>
                            <option value="pending">Pending</option>
                            <option value="rejected">Suspend</option>
                        </select>

                        {/* filter by Industry */}
                        <Tooltip id="Industry" />
                        <select
                            data-tooltip-id="Industry" data-tooltip-content="Select recruiter industry!"
                            name="Industry"
                            className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                            {...register("industry")}
                        >
                            <option value="">Industry</option>
                            {
                                Array.from(new Set(recruiterData.map(item => item.industry))).map((industry, index) => (
                                    <option key={index} value={industry}>
                                        {industry}
                                    </option>
                                ))
                            }
                        </select>

                        {/* filter by date */}
                        <Tooltip id="date" />
                        <select
                            data-tooltip-id="date" data-tooltip-content="Select date!"
                            name="date"
                            className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                            {...register("date")}
                        >
                            <option value="">Date</option>
                            <option value="recent">Recent</option>
                            <option value="oldest">Oldest</option>
                        </select>
                    </div>
                </form>

                {/* table */}
                <div className="mt-6 w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white">
                    {
                        !loading ? <table className="table lg:w-full w-[800px] text-left">
                            <thead className="text-lg text-green border-b border-green/40">
                                <tr>
                                    <th className="px-3 py-3 font-medium">Recruiters Info</th>
                                    <th className="px-3 py-3 font-medium">Industry</th>
                                    <th className="px-3 py-3 font-medium text-center">Open Jobs</th>
                                    <th className="px-3 py-3 font-medium text-center">Status</th>
                                    <th className="py-3 text-center font-medium">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredData.map((recruiter) => (
                                        <RecruiterListTableRow key={recruiter._id} recruiter={recruiter} />))
                                }
                            </tbody>
                        </table> : <PageLoader />
                    }
                </div>
            </section>
        </>
    );
};

export default RecruiterList;