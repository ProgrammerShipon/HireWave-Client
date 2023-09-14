import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import Divider from "./Divider";
import GetAgoTime from "./GetAgoTime";
import JobCard from "./JobCard";

// react icons
import { AiOutlineCalendar, AiOutlineShareAlt } from "react-icons/ai";
import { BiHeart, BiMap } from "react-icons/bi";
import { BsBuildingGear } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import {
  HiOutlineCurrencyDollar,
  HiOutlineFilter,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { toast } from "react-toastify";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useAuth from "../Hooks/useAuth";
import useMySavedJobs from "../Hooks/useMySavedJobs";
import useMyAppliedJobs from "../Hooks/useMyAppliedJobs";

const FindJobBody = ({ allJobsData }) => {
  const [jobDetails, setJobDetails] = useState(allJobsData[0]);
  const [axiosSecure] = useAxiosSecure();
  const [myAppliedJobs] = useMyAppliedJobs();
  const [mySavedJobs, , refetch] = useMySavedJobs();
  let [alreadyApplied, setAlreadyApplied] = useState(false);
  let [alreadySaved, setAlreadySaved] = useState(false);
  const { user } = useAuth();
  const {
    _id,
    title,
    companyName,
    companyLogo,
    category,
    location,
    jobType,
    salary,
    postedDate,
    closingDate,
    experience,
    quantity,
    description,
    skills,
  } = jobDetails;

  const jobInfo = { selectJob: _id, companyLogo, title, companyName, postedDate, location, jobType, salary, skills, candidateMail: user?.email }

  // check already applied
  useEffect(() => {
    const checkExists = myAppliedJobs.filter((job) =>
      job.appliedJobId.includes(_id)
    );

    if (checkExists.length) {
      setAlreadyApplied(true)
    } else {
      setAlreadyApplied(false)
    }
  }, [jobDetails, myAppliedJobs.length])

  // check saved job
  useEffect(() => {
    const checkExists = mySavedJobs.filter((job) =>
      job.selectJob.includes(_id)
    );

    if (checkExists.length) {
      setAlreadySaved(true)
    } else {
      setAlreadySaved(false)
    }
  }, [jobDetails, mySavedJobs.length])

  const handleSaveJob = () => {
    axiosSecure.post("/savedjob", jobInfo)
      .then((data) => {
        if (data.status === 200) {
          refetch()
          toast.success("Saved Successfully", {
            position: "top-right",
            autoClose: 2500,
            theme: "light",
          });
        }
        else {
          toast.warning("Already Saved", {
            position: "top-right",
            autoClose: 2500,
            theme: "light",
          });
        }
      })
      .catch((err) => console.log(err));
  }
  return (
    <div className="grid grid-cols-1 gap-5 mt-16 lg:grid-cols-10">
      {/* left content  */}
      <div className="lg:col-span-4">
        {/* filter bar */}
        <div className="flex justify-between pb-5">
          <div className="flex items-center gap-5">
            <button className="flex items-center gap-1 text-xl text-gray">
              <HiOutlineFilter size="22px" /> Filter
            </button>
            <h3 className="text-xl text-dark">{allJobsData?.length} Jobs</h3>
          </div>

          {/* sort */}
          <div className="flex items-center gap-2 text-gray">
            <label htmlFor="select">Sort by</label>
            <select
              id="select"
              className="px-2 py-1 border rounded-md cursor-pointer border-purple focus:outline-none"
            >
              <option>Newest</option>
              <option>Oldest</option>
              <option>Features</option>
            </select>
          </div>
        </div>

        {/* job card */}
        <div className="grid grid-cols-1 gap-5">
          {allJobsData.map((job, index) => (
            <JobCard key={index} job={job} setJobDetails={setJobDetails} mySavedJobs={mySavedJobs} refetch={refetch} />
          ))}
        </div>
      </div>

      {/* right content */}
      <div className="lg:col-span-6">
        <div className="p-4 border rounded-lg border-purple">
          <div className="flex items-start justify-between">
            <div>
              <Link to={`/job_details/${_id}`} className="text-2xl font-medium text-dark">{title}</Link>
              <p className="text-sm italic text-gray">
                Posted <GetAgoTime datetime={postedDate} />
              </p>
            </div>

            <div className="flex items-center gap-2">
              <AiOutlineShareAlt size="24px" className="text-green" />
              {
                !alreadySaved ? <>
                  {
                    user?.email ? <button onClick={handleSaveJob}>
                      <BiHeart size="24px" className="text-green" />
                    </button> : <Link to='/login'>
                      <BiHeart size="24px" className="text-green" />
                    </Link>
                  }
                </> : <button disabled>
                  <FaHeart size="24px" className="text-red-400" />
                </button>
              }
            </div>
          </div>

          {/* company details */}
          <div className="flex items-center gap-2 mt-6">
            <div className="w-16 h-16 overflow-hidden rounded-lg shadow-xl">
              <img
                className="object-cover object-center w-full"
                src={companyLogo}
                alt={companyName}
              />
            </div>
            <div className="mt-1">
              <Link
                to={`/recruiters_details/${_id}`}
                className="text-xl font-medium duration-300 text-dark drop-shadow-lg hover:text-green line-clamp-2"
              >
                {companyName}
              </Link>
              <p className="text-gray">{category}</p>
            </div>
          </div>

          {/* job details */}
          <div className="flex flex-col items-start justify-between gap-2 mt-4 duration-300 sm:flex-row sm:items-end">
            <div className="flex items-center gap-2">
              <p className="text-purple bg-purple/10 px-4 py-[2px] shadow-lg shadow-purple/20 rounded-full capitalize">
                {jobType}
              </p>

              <p className="text-purple bg-purple/10 px-4 py-[2px] rounded-full shadow-lg shadow-purple/20 flex items-center gap-1">
                <BiMap /> {location}
              </p>
            </div>
            {
              !alreadyApplied ?
                <Link to={`/apply_job/${_id}`} >
                  <Button>Apply Now</Button>
                </Link> : <Link to={`/view_application/${_id}`} className="bg-green text-white px-5 py-2 rounded-lg border border-green shadow-xl shadow-green/20">View Application</Link>
            }
          </div>

          <div className="flex flex-col items-start mb-6 md:flex-row md:gap-8">
            <div className="mt-5">
              <p className="flex items-center gap-1 text-dark">
                <HiOutlineCurrencyDollar /> Salary:{" "}
                <span className="ml-1 text-gray">${salary}/month</span>
              </p>
              <p className="flex items-center gap-1 mt-1 text-dark">
                <AiOutlineCalendar /> Closing date:{" "}
                <span className="ml-1 text-gray">{closingDate}</span>
              </p>
            </div>
            <div className="mt-1 md:mt-5">
              <p className="flex items-center gap-1 text-dark">
                <BsBuildingGear /> Experience:{" "}
                <span className="ml-1 text-gray">{experience}</span>
              </p>
              <p className="flex items-center gap-1 mt-1 text-dark">
                <HiOutlineUserGroup /> Quantity:{" "}
                <span className="ml-1 text-gray">{quantity} Person</span>
              </p>
            </div>
          </div>

          <Divider />

          {/* job description */}
          <div className="my-6">
            <h2 className="text-3xl font-medium text-dark mb-5">Description</h2>
            <p className="postJob" dangerouslySetInnerHTML={{ __html : description}}></p>
          </div>

          <Divider />

          {/* skills */}
          <div className="mt-6">
            <h2 className="text-3xl font-medium text-dark">Skills</h2>
            <div className="flex flex-wrap items-center gap-2 mt-4 duration-300">
              {skills.map((skill, index) => (
                <p
                  key={index}
                  className="bg-purple/20 hover:bg-white text-purple px-4 py-[2px] shadow-lg shadow-purple/10 hover:shadow-dark/20 rounded-md cursor-pointer duration-300 capitalize"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindJobBody;
