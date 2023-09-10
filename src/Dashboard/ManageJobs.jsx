import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import DashTitle from "../Components/DashComponents/DashTitle";
import ManageJobTable from "../Components/DashComponents/ManageJobTable";
import PageLoader from "../Components/PageLoader";
import useAllJobs from "./../Hooks/useAllJobs";

const ManageJobs = () => {
    const [allJobsData, loading, refetch] = useAllJobs();
    console.log(allJobsData)
    const [filteredData, setFilteredData] = useState(allJobsData);

    const { register, watch, handleSubmit, reset } = useForm();
    const onSubmit = () => {
        reset();
    }

    const title = watch('title');
    const status = watch('status');
    const category = watch('category');
    const date = watch('date');

    useEffect(() => {
      let filter = allJobsData.filter(
        (user) =>
          (!title || user.title.toLowerCase().includes(title.toLowerCase())) &&
          (!status ||
            user.status.toLowerCase().includes(status.toLowerCase())) &&
          (!category ||
            user.category.toLowerCase().includes(category.toLowerCase()))
      );

      if (date === "recent") {
        filter = [...filter].sort(
          (a, b) => new Date(b.postedDate) - new Date(a.postedDate)
        );
      } else if (date === "oldest") {
        filter = [...filter].sort(
          (a, b) => new Date(a.postedDate) - new Date(b.postedDate)
        );
      }

      setFilteredData(filter);
    }, [title, status, category, date, !loading]);

    return (
      <>
        {/* page title */}
        <Helmet>
          <title>Manage Jobs - Dashboard | Hire Wave</title>
        </Helmet>
        <section className="m-5">
          <DashTitle title="Manage Jobs" />

          {/* filtering option */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col lg:flex-row items-center gap-3 justify-between bg-white p-4 rounded-md shadow-xl mt-10"
          >
            {/* search by title */}
            <div className="w-full sm:w-72">
              <input
                placeholder="Search job title"
                className="border border-gray/40 p-2 rounded-md bg-white focus:outline-none focus:border-green w-full"
                {...register("title")}
              />
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full sm:w-auto">
              <h2 className="text-lg text-dark">Filter By: </h2>

              {/* filter by status */}
              <select
                name="status"
                className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                {...register("status")}
              >
                <option value="">Status</option>
                <option value="approved">Approved</option>
                <option value="pending">Pending</option>
                <option value="rejected">Denied</option>
              </select>

              {/* filter by category */}
              <select
                name="category"
                className="py-1 border border-gray/40 text-lightGray focus:outline-none focus:border-green rounded-md px-2 w-full sm:w-auto"
                {...register("category")}
              >
                <option value="">Category</option>
                {Array.from(
                  new Set(allJobsData.map((item) => item.category))
                ).map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              {/* filter by date */}
              <select
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

          {/* manage jobs table */}
          <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-6">
            {!loading ? (
              <table className="table lg:w-full w-[800px] text-left">
                <thead className="text-lg text-green border-b border-green/40">
                  <tr>
                    <th className="px-3 py-3 font-medium">Job Title</th>
                    <th className="px-3 py-3 font-medium">Category</th>
                    <th className="px-3 py-3 font-medium">Post Date</th>
                    <th className="px-3 py-3 font-medium text-center">
                      Applied
                    </th>
                    <th className="px-3 py-3 font-medium text-center">
                      Status
                    </th>
                    <th className="py-3 text-center font-medium">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.map((job) => (
                    <ManageJobTable key={job._id} job={job} refetch={refetch} />
                  ))}
                </tbody>
              </table>
            ) : (
              <PageLoader />
            )}
          </div>
        </section>
      </>
    );
};

export default ManageJobs;