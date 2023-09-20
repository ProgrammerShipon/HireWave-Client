import moment from 'moment';
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import GetAgoTime from "../Components/GetAgoTime";
import JobCard from "../Components/JobCard";
import RecentReviewSlider from "../Components/RecentReviewSlider";
import useAllJobs from "../Hooks/useAllJobs";
import useReview from "../Hooks/useReview";

// react rating
import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

// react icons
import { BiMap } from 'react-icons/bi';
import { FaStar } from 'react-icons/fa';
import { LuExternalLink } from "react-icons/lu";
import { SlUserFollow, SlUserFollowing } from "react-icons/sl";
import { toast } from 'react-toastify';
import useAuth from "../Hooks/useAuth";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import useUsers from "../Hooks/useUsers";

export default function RecruitersDetailsContent({ recruiterData }) {
  const { currentUser } = useAuth();
  const [reviewData] = useReview();
  const [allJobsData, loading] = useAllJobs();
  const [follow, setFollow] = useState(false);
  const [followData, setFollowData] = useState(false);
  const [postedJob, setPostedJob] = useState([]);
  const [userData] = useUsers();
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();
  const {
    _id,
    name,
    email,
    image,
    banner,
    category,
    location,
    address,
    industry,
    about,
    joinDate,
    specialties,
    followers,
    website,
  } = recruiterData[0];

  const [review, setReview] = useState([]);
  const [receiverId, setReceiverId] = useState("");
  useEffect(() => {
    const user = userData?.find((user) => user.email === email);
    // setReceiverId(user)
    setReceiverId(user?._id);
  }, [userData]);

  useEffect(() => {
    const getReview = reviewData.filter(
      (rvw) => rvw.email.toLowerCase() === email.toLowerCase()
    );
    setReview(getReview);
  }, [reviewData.length]);

  useEffect(() => {
    const filter = allJobsData.filter((job) => job.companyEmail === email);
    setPostedJob(filter);
  }, [loading]);

  // rating style
  const myStyles = {
    itemShapes: Star,
    activeFillColor: "#ffb33e",
    inactiveFillColor: "#a78f6d",
  };

  // check follow
  useEffect(() => {
    if (currentUser?.email) {
      axiosSecure
        .get(`/follow/candidate_email/${currentUser?.email}`)
        .then((res) => {
          if (res.status == 200 && res.data != "") {
            setFollow(true);
            setFollowData(res?.data);
          }
        })
        .catch((err) => console.log(err));
    }
  }, [currentUser, follow]);

  const handleFollow = () => {
    if (!follow) {
      const newData = {
        recruiterImage: image,
        recruiterEmail: email,
        recruiterName: name,
        candidateEmail: currentUser?.email,
        candidateName: currentUser?.name,
        candidateImage: currentUser?.image,
      };
      console.log(newData);

      if (newData) {
        axiosSecure.post("/follow", newData).then((res) => {
          if (res.status == 200) {
            toast.success("Favorite Added Success");
            setFollow(true);
            setFollowData(res?.data);
          }
        });
      }
    } else if (follow) {
      if (followData) {
        axiosSecure
          .delete(`/follow/${followData._id}`)
          .then((res) => {
            if (res.status == 200) {
              setFollow(false);
              toast.success("Favorite remove Success");
            }
          })
          .catch((err) => console.log(err));
      }
    }
  };

  const createChat = () => {
    const chatMembers = {
      sender: currentUser?._id,
      receiver: receiverId,
    };
    console.log(chatMembers);
    axiosSecure
      .post("/chat", chatMembers)
      .then((res) => {
        navigate("/dashboard/messages");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <section className="py-20 md:py-[120px] duration-300">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-11 gap-6">
          {/* left side */}
          <div className="lg:col-span-8 shadow-4xl shadow-gray/40 rounded-lg overflow-hidden">
            {/* banner */}
            <div className="w-full h-40 overflow-hidden">
              <img
                src={banner}
                className="object-cover object-center w-full h-full"
                alt={name}
              />
            </div>

            {/* image & rating */}
            <div className="flex flex-row gap-4">
              <div className="-mt-16 ml-5 md:ml-10 w-40 h-40 rounded-md p-2 border border-purple overflow-hidden duration-300 shadow-4xl shadow-gray/40">
                <img
                  src={image}
                  className="object-cover object-center w-full h-full shadow-3xl shadow-white rounded-md"
                  alt={name}
                />
              </div>

              {/* rating */}
              <div>
                <div className="flex items-center gap-1 mt-5">
                  <p className="px-2 text-purple bg-purple/30">
                    {" "}
                    {review.length > 0 && review[0].rating}{" "}
                  </p>

                  <Rating
                    className="max-w-[110px] hidden sm:flex"
                    readOnly
                    value={review.length > 0 && review[0].rating}
                    itemStyles={myStyles}
                  />

                  <FaStar size="21" className="text-[#ffb33e] sm:hidden" />

                  <span className="text-gray">({review.length})</span>
                </div>

                {/* followers */}
                <p className="mt-1 font-light text-lightGray">
                  <span>{followers}</span> Followers
                </p>
              </div>
            </div>

            {/* content */}
            <div className="mx-5 md:mx-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4 sm:gap-0 mb-6 mt-4">
              <div className="duration-300">
                <h1 className="text-4xl font-medium text-dark drop-shadow-xl">
                  {name}
                </h1>
                <button onClick={createChat}>Contact</button>

                <div className="flex items-center gap-2">
                  <h3 className="text-xl font-light text-lightGray">
                    {industry}
                  </h3>

                  <p className="hidden md:flex items-center gap-[2px] font-light text-dark">
                    <BiMap className="text-lightGray" />
                    {location}
                  </p>
                </div>
              </div>

              {/* button */}
              <div className="flex sm:inline-block sm:flex-col items-center justify-between">
                <a
                  target="_blank"
                  href={website}
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 px-5 py-1 text-xl bg-green text-white rounded-md sm:mb-3 hover:bg-dark shadow-lg shadow-green/40 hover:shadow-dark/50 duration-300"
                >
                  Website <LuExternalLink size="20" />
                </a>
                <button
                  onClick={handleFollow}
                  className={`flex items-center gap-2 px-5 py-1 text-xl text-white rounded-md sm:mb-3 shadow-lg shadow-green/40 hover:shadow-dark/50 duration-300 w-full ${!follow ? "bg-green hover:bg-dark" : "bg-dark"
                    }`}
                >
                  {!follow ? (
                    <>
                      <p>Follow </p>
                      <SlUserFollow />
                    </>
                  ) : (
                    <>
                      <p>Following </p>
                      <SlUserFollowing />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="lg:col-span-3 p-3 shadow-4xl shadow-gray/40 rounded-lg overflow-hidden">
            <h3 className="text-2xl font-medium text-dark drop-shadow-lg">
              Locations
            </h3>
            <h6 className="text-dark font-medium bg-gray/30 w-fit px-3 rounded-full mt-4">
              Primary
            </h6>
            <p className="text-sm text-lightGray mt-2">{address}</p>
            <iframe
              className="mt-5"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58313.32936238924!2d89.208406036506!3d24.010495144173714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fe84d98fa5bf3d%3A0xb038902617eb9884!2sPabna!5e0!3m2!1sen!2sbd!4v1692681736855!5m2!1sen!2sbd"
              width="100%"
              height="200"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        {/* recruiter about */}
        <div className="grid grid-cols-1 gap-5 mt-10 duration-300 lg:grid-cols-3 lg:gap-10">
          {/* left part */}
          <div className="flex flex-col gap-5 p-6  shadow-4xl shadow-gray/40 rounded-lg overflow-hidden">
            {/* Recent Review */}
            <div>
              <h3 className="text-xl mb-2">
                Recent Review (0{review?.length})
              </h3>
              <RecentReviewSlider recentReview={review} />
            </div>

            {/* Member since */}
            <div className="mt-3">
              <h3 className="text-lg">Member since</h3>
              <p className="text-lightGray tracking-wider">
                {moment(joinDate).format("MMM DD, YYYY")}{" "}
              </p>
            </div>

            {/* Open Jobs */}
            <div>
              <h3 className="text-lg">Open Jobs (02)</h3>
            </div>

            {/* Last Jobs Posted */}
            <div>
              <h3 className="text-lg">Last Jobs Posted</h3>
              <p className="text-lightGray tracking-wider">
                <GetAgoTime datetime={joinDate} />
              </p>
            </div>
          </div>

          {/* right part */}
          <div className="col-span-2 p-8 shadow-4xl shadow-gray/40 rounded-lg overflow-hidden">
            {/* about */}
            <div>
              <h2 className="mb-1 text-2xl font-medium text-dark">About</h2>
              <p className="text-lightGray mt-3">{about}</p>
            </div>

            <div className="mt-8">
              <h2 className="mb-1 text-2xl font-medium text-dark">
                Specialties
              </h2>
              <p className="text-lightGray mt-3">{specialties}</p>
            </div>
          </div>
        </div>

        {/* latest jobs */}
        <div className="mt-10">
          <h2 className="text-3xl text-dark font-medium mb-4 drop-shadow-xl">
            Latest Jobs
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {postedJob.length > 0 &&
              postedJob.map((job, index) => (
                <JobCard key={index} job={job} setJobDetails={null} />
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
