import DashTitle from "./DashTitle";
import useAllJobs from "./../Hooks/useAllJobs";
import ManageJobTable from "../Components/ManageJobTable";

const ManageJobs = () => {
  const [allJobsData] = useAllJobs();

  return (
    <section className="m-5">
      <DashTitle title="Manage Jobs" />
      <div className=" hover:shadow-md w-full md:w-[600px] lg:w-full  overflow-x-scroll duration-300 mt-5 rounded-xl ">
        {/* festering option */}
        <div className="flex justify-between w-full md:w-[900px] lg:w-full bg-white text-dark px-5 py-3 font-medium">
          <div className="">
            <h2 className="text-3xl font-medium">
              Engineer <span className="text-sm text-lightGray">5 jobs</span>
            </h2>
          </div>

          <div className="flex items-center">
            <h2>Filter By:</h2>
            <select
              name="filter"
              id="filter"
              className="px-3 py-1 ml-1 bg-white border rounded-md border-slate-200"
            >
              <option value="Engineer">Engineer</option>
              <option value="designer">Designer</option>
              <option value="front-end">Front-End</option>
              <option value="back-end">Back-End</option>
            </select>

            <h2 className="ml-2">Category:</h2>
            <select
              name="filter"
              id="filter"
              className="px-3 py-1 ml-1 bg-white border rounded-md border-slate-200"
            >
              <option value="Engineer">Engineer</option>
              <option value="designer">Designer</option>
              <option value="front-end">Front-End</option>
              <option value="back-end">Back-End</option>
            </select>

            <select
              name="filter"
              id="filter"
              className="px-3 py-1 ml-1 bg-white border rounded-md border-slate-200"
            >
              <option value="Engineer">Recent</option>
              <option value="designer">Oldest</option>
            </select>
          </div>
        </div>
        {/* table */}
        <table className="table bg-green w-full md:w-[900px] lg:w-full text-left ">
          <thead className=" text-dark text-lg">
            <tr >
              <th className="px-5 py-3 ">Job Title</th>
              <th className="px-5 py-3 ">Category</th>
              <th className="px-5 py-3">Post Date</th>
              <th className="px-5 py-3 text-center ">Applied</th>
              <th className="px-5 py-3 ">Status</th>
            </tr>
          </thead>
          <tbody >
            {allJobsData?.map((data) => (
              <ManageJobTable key={data.id} managejobs={data} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ManageJobs;