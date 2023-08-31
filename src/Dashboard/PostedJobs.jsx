import PostJobTable from "../Components/PostJobTable";
import DashTitle from "./DashTitle";
import useAllJobs from "./../Hooks/useAllJobs";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const PostedJobs = () => {
  const [allJobsData] = useAllJobs(); // No need to destructure as it's an array
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);
  const pageCount = Math.ceil(allJobsData.length / itemsPerPage);

  const handlePageChange = (selectedPage) => {
    setCurrentPage(selectedPage.selected);
  };

  const displayedItems = allJobsData.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  return (
    <section className="m-5 rounded-md">
      <DashTitle title="Posted Jobs" />

      <div className="grid grid-cols-1 gap-5 px-2 py-5 bg-white shadow-md gird md:grid-cols-2 lg:grid-cols-4 rounded-xl">
        {/* all job */}
        <div className="">
          <select
            name="filter"
            id="filter"
            className="w-full px-3 py-3 ml-1 bg-white border rounded-md text-lightGray border-slate-200"
          >
            <option value="Engineer">All Jobs</option>
          </select>
        </div>
        {/* location */}
        <div className="">
          <select
            name="filter"
            id="filter"
            className="w-full px-3 py-3 ml-1 bg-white border rounded-md text-lightGray border-slate-200"
          >
            <option value="Engineer">Location</option>
          </select>
        </div>
        {/* category */}
        <div className="">
          <select
            name="filter"
            id="filter"
            className="w-full px-3 py-3 ml-1 bg-white border rounded-md text-lightGray border-slate-200"
          >
            <option value="Engineer">Category</option>
          </select>
        </div>
        {/* date range */}
        <div className="">
          <select
            name="filter"
            id="filter"
            className="w-full px-3 py-3 ml-1 bg-white border rounded-md text-lightGray border-slate-200"
          >
            <option value="Engineer">Date Range</option>
          </select>
        </div>

        <div className="flex items-center ">
          <h2>Show All Filter:</h2>
          <select
            name="filter"
            id="filter"
            className="px-3 py-1 ml-1 bg-white border rounded-md border-slate-200"
          >
            <option value="Engineer">Recent</option>
            <option value="designer">Lasted</option>
          </select>
        </div>
      </div>

      {/* filtering option */}

      <div className="flex items-center justify-end mt-10">
        <h2>Filter By:</h2>
        <select
          name="filter"
          id="filter"
          className="px-3 py-1 ml-1 bg-white border rounded-md border-slate-200"
        >
          <option value="Engineer">Recent</option>
          <option value="designer">Lasted</option>
        </select>
      </div>
      <div className="w-full mt-5 overflow-x-scroll duration-300 hover:shadow-md lg:w-full lg:overflow-hidden rounded-xl ">
        {/* table */}
        <table className="table bg-white w-[900px] lg:w-full text-left ">
          <thead className="text-lg text-dark">
            <tr>
              <th className="px-5 py-3 ">Job</th>
              <th className="px-5 py-3 ">Category</th>
              <th className="px-5 py-3">Post & End Date</th>
              <th className="px-5 py-3">Applied</th>
              <th className="px-5 py-3 ">Status</th>
            </tr>
          </thead>
          <tbody>
            {allJobsData?.map((data) => (
              <PostJobTable key={data.id} PostJob={data} />
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-5">
        {/* filtering option */}
        <div className="flex items-center">
          <h2>Show</h2>
          <select
            name="filter"
            id="filter"
            className="px-3 py-1 ml-1 bg-white border rounded-md border-slate-200"
          >
            <option value="Engineer">10</option>
            <option value="designer">20</option>
          </select>
          <h3 className="ml-2 text-sm text-slate-800">of 100 result</h3>
        </div>
        {/* pagination option */}
        <div className="">
          <ReactPaginate
            className="flex items-center gap-4"
            displayedItems={3}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageChange}
            containerClassName={"pagination"}
            activeClassName={"active"}
          />
        </div>
      </div>
    </section>
  );
};

export default PostedJobs;
