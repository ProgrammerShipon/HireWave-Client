import AppliedJobTable from "../Components/AppliedJobTable";
import useAllJobs from "../Hooks/useAllJobs";
import DashTitle from "./DashTitle";

const AppliedJobs = () => {
  const [allJobsData] = useAllJobs();

  return (
    <section className="m-5 rounded-md">
      <DashTitle title="Applied Jobs" />

      <div className="w-full mt-5 overflow-x-scroll duration-300 hover:shadow-md lg:w-full lg:overflow-hidden rounded-xl ">
        {/* table */}
        <table className="table bg-white w-[900px] lg:w-full text-left">
          <thead className="text-lg text-dark">
            <tr>
              <th className="px-5 py-3 ">Company</th>
              <th className="px-5 py-3 ">Title</th>
              <th className="px-5 py-3 ">Category</th>
              <th className="px-5 py-3">Applied On</th>
              <th className="px-5 py-3">Applications</th>
              <th className="px-5 py-3 ">Status</th>
              <th className="py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {allJobsData?.map((data) => (
              <AppliedJobTable key={data.id} AppliedJobs={data} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default AppliedJobs;
