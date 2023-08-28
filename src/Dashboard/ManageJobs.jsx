import DashTitle from "./DashTitle";
import useAllJobs from "./../Hooks/useAllJobs";
import ManageJobTable from "../Components/ManageJobTable";
import { FaRegStar } from "react-icons/fa";

const ManageJobs = () => {
  const [allJobsData] = useAllJobs();

  return (
    <section className="m-5">
      <DashTitle title="Job Management" />
      <div className="w-[1000px] overflow-x-auto hover:shadow-md duration-300 mt-5 rounded-xl bg-green">
        {/* festering option */}
        <div className="flex justify-between  w-full bg-white text-dark px-5 py-3 font-medium">
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
              className="py-1 bg-white border border-slate-200 ml-1 rounded-md px-3"
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
              className="py-1 bg-white border border-slate-200 ml-1 rounded-md px-3"
            >
              <option value="Engineer">Engineer</option>
              <option value="designer">Designer</option>
              <option value="front-end">Front-End</option>
              <option value="back-end">Back-End</option>
            </select>

            <select
              name="filter"
              id="filter"
              className="py-1  bg-white border border-slate-200 ml-1 rounded-md px-3"
            >
              <option value="Engineer">Recent</option>
              <option value="designer">Oldest</option>
            </select>
          </div>
        </div>
        {/* table */}
        <table className="table  text-left ">
          <thead className="bg-green border text-dark text-lg">
            <tr>
              <th className="px-5 py-3 ">Job Title</th>
              <th className="px-5 py-3 ">Category</th>
              <th className="px-5 py-3">Post Date</th>
              <th className="text-center px-5 py-3 ">Applied</th>
              <th className="px-5 py-3 ">Status</th>
            </tr>
          </thead>
          <tbody>
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
