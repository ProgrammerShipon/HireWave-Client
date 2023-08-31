import { useEffect, useState } from "react";
import CandidateCard from "../Components/CandidateCard";
import useCandidatesData from "../Hooks/useCandidatesData";
import { useForm } from "react-hook-form";

// react icons
import { BiSearchAlt, BiCategory } from "react-icons/bi";
import { FaBriefcase } from "react-icons/fa";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { AiOutlineClear } from "react-icons/ai";

const FindCandidate = () => {
  const [candidatesData] = useCandidatesData();
  const [filteredData, setFilteredData] = useState([]);

  const { register, watch, handleSubmit, reset } = useForm();
  const onSubmit = () => {
    reset();
  };

  const searchTerm = watch("searchTerm");
  const location = watch("location");
  const category = watch("category");

  useEffect(() => {
    const searchTitle = searchTerm ? searchTerm.toLowerCase() : "";
    const searchLocation = location ? location.toLowerCase() : "";
    const searchCategory = category ? category.toLowerCase() : "";

    const filter = candidatesData.filter(
      (cds) =>
        (!searchTitle || cds.name.toLowerCase().includes(searchTitle)) &&
        (!searchLocation ||
          cds.location.toLowerCase().includes(searchLocation)) &&
        (!searchCategory || cds.category.toLowerCase().includes(searchCategory))
    );

    setFilteredData(filter);
  }, [searchTerm, location, category, candidatesData]);

  useEffect(() => {
    setFilteredData(candidatesData);
  }, [candidatesData]);

  return (
    <section className="py-20 md:py-[120px] duration-300">
      <div className="container">
        {/* search bar */}
        <div className="w-full duration-300">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid items-center grid-cols-1 p-2 duration-300 bg-white border shadow-2xl border-green shadow-green/20 md:grid-cols-7 rounded-xl"
          >
            {/* Search */}
            <div className="flex items-center col-span-2 border-b md:border-none border-green">
              <label htmlFor="search" className="pl-2 text-green">
                <FaBriefcase size="20px" className="animate-bounce" />
              </label>
              <input
                id="search"
                className="w-full py-2 pl-2 text-lg bg-white border border-none focus:outline-none text-dark placeholder:text-gray"
                placeholder="Search Candidates Name"
                {...register("searchTerm")}
              />
            </div>

            {/* location */}
            <div className="flex items-center col-span-2 md:border-s border-green">
              <label htmlFor="location" className="pl-2 text-green">
                <FaLocationCrosshairs size="20px" className="animate-spin" />
              </label>
              <input
                id="location"
                className="w-full py-2 pl-2 text-lg bg-transparent border border-none focus:outline-none text-dark placeholder:text-gray placeholder:bg-transparent"
                placeholder="Search by Location"
                {...register("location")}
              />
            </div>

            {/* categories */}
            <div className="flex items-center col-span-2 md:border-s border-green md:border-e">
              <label htmlFor="categories" className="pl-2 text-green">
                <BiCategory size="20px" className="animate-pulse" />
              </label>
              <select
                name="category"
                id="category"
                {...register("category")}
                className="w-full py-2 pl-2 text-lg bg-transparent border border-none focus:outline-none text-dark placeholder:text-gray placeholder:bg-transparent"
              >
                <option value="">Select Category</option>
                {Array.from(
                  new Set(candidatesData.map((item) => item.category))
                ).map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* search button */}
            <div className="w-full md:pl-2 border-green">
              <button
                type="submit"
                className="flex items-center justify-center w-full gap-2 px-6 py-2 text-lg text-white duration-300 rounded-full bg-dark hover:bg-green hover:shadow-xl hover:shadow-green/20"
              >
                {searchTerm || location || category ? (
                  <>
                    <AiOutlineClear className="text-[#ea2b33]" /> Clear
                  </>
                ) : (
                  <>
                    <BiSearchAlt /> Search
                  </>
                )}
              </button>
            </div>
          </form>
        </div>
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-4 lg:gap-8">
            {filteredData.map((candidate) => (
              <CandidateCard
                key={candidate._id}
                candidate={candidate}
              ></CandidateCard>
            ))}
          </div>
        ) : (
          <p className="mt-16 text-2xl text-center">No candidates match!</p>
        )}
      </div>
    </section>
  );
};

export default FindCandidate;
