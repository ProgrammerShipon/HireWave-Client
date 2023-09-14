import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LearningDetailsComment from './LearningDetailsComment';
import { Link, useLoaderData } from 'react-router-dom';
import ClipboardJS from 'clipboard';
import { FaEye } from "react-icons/fa";
import { BiDislike, BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import DOMPurify from 'dompurify';
// react icons
import { CgComment } from 'react-icons/cg'
import moment from 'moment';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { toast } from 'react-toastify';
import useLearningData from '../Hooks/useLearningData';
import useCandidatesRole from '../Hooks/useCandidatesRole';

const LearningDetailsBody = () => {
  const {learningData} = useLearningData();
  const [candidatesRole] = useCandidatesRole()
  console.log(candidatesRole);
  const loadData = useLoaderData();
  const [axiosSecure] = useAxiosSecure();
  const { title, createdAt, updatedAt, videoLink, description, authorImg, authorName, authorEmail, comments, disLike, like, views, _id } = loadData;
  const sidebarContent = learningData.filter(data => data._id !== _id).slice(0,4)
  console.log(loadData)
  const [commentClick, setCommentClick] = useState('')
  const [allLike, setAllLike] = useState(like);
  const [allDisLike, setAllDisLike] = useState(disLike);
  // const [seeAll, setSeeAll] = useState(false);


  const { control, register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  const increaseLike = (_id) => {
    console.log(_id)
    console.log(like)
    axiosSecure.patch(`/learning/like/${_id}`)
      .then(res => {
        setAllLike(res.data.like)
        console.log(res.data.like)
      })
      .catch((err) => console.log(err));
  }
  const reduceLike = (_id) => {
    console.log(_id)
    console.log(like)
    axiosSecure.patch(`/learning/dislike/${_id}`)
      .then(res => {
        setAllDisLike(res.data.disLike)
        console.log(res.data)
      })
      .catch((err) => console.log(err));
  }
  
  const shareLearningTutorial = () => {
    const url =
      window.location.protocol + '//' +
      window.location.host + window.location.pathname
    console.log(url)
    // Create a clipboard instance
    const clipboard = new ClipboardJS('.copy-button', {
      text: function () {
        return url;
      }
    });

    clipboard.on('success', function (e) {

      toast.success("Link copied to the Clipboard", {
        position: "top-right",
        autoClose: 2500,
        theme: "light",
    });
    });

    clipboard.on('error', function (e) {
      // Handle error (optional)
      console.error('Error copying to clipboard:', e);
    });

    clipboard.onClick({
      action: 'copy'
    });
  }


  return (
    <div className="pt-20 md:pt-[120px] duration-300">
      <div className="container">
        <div className="lg:grid grid-cols-4 gap-10">
          {/* Learning content */}
          <div className="lg:col-span-3">
            {/* Title & Created, updated date */}
            <h2 className="text-2xl md:text-3xl text-green">
              {title}
            </h2>
            <div>
              <p>{views} Views  {moment((createdAt), "YYYYMMDD").fromNow()}</p>
            </div>
            {/* Video */}
            <div className="my-8  md:mb-16">
              <iframe
                className="w-96 md:w-[560px] lg:w-[800px] h-[216px] md:h-[315px] lg:h-[450px]"
                src={videoLink}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            
            <div className="md:flex items-center justify-between mb-5">
              {/* Author Details */}
              <div className="flex items-center gap-3">
                <img className="rounded-full w-10" src={authorImg} alt="" />
                <div>
                  <h3 className="lg:text-xl text-dark">{authorName}</h3>
                  <p className="text-sm">{authorEmail}</p>
                </div>

              </div>

              {/* Like, Unlike, View, Share */}
              <div className="flex items-center gap-5 pr-0 md:pr-5 mt-5 md:mt-0">
                <div className=' rounded-lg px-5 shadow-sm hover:border-none flex items-center gap-4'>
                  <p className=' my-2 flex items-center gap-2'>
                    <BiLike onClick={() => increaseLike(_id)} className='text-xl cursor-pointer' /> {allLike} </p>

                  <p className=' my-2 flex items-center gap-2'><BiDislike onClick={() => reduceLike(_id)} className='text-xl cursor-pointer' /> {allDisLike} </p>
                </div>
                <p className="flex items-center gap-2 "><FaEye className='text-lg' /> {views} </p>
                <p onClick={shareLearningTutorial} className='cursor-pointer flex items-center gap-1 rounded-xl shadow-sm py-3 px-3 copy-button'>
                  <RiShareForwardLine className='text-xl' /> Share
                </p>
              </div>
            </div>

            {/* Description */}

            <p className='text-lightGray mt-8 mb-5' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}></p>


            {/* Divider */}
            <p className="border border-green"></p>

            <p className="flex items-center gap-3 mt-10 mb-3">
              <CgComment />
              <span>
                {comments.length}{" "}
                {comments.length === 1 ? "Comment" : "Comments"}
              </span>
            </p>

            {/* Comment Box */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center gap-3 mb-5">
                <img
                  className="rounded-full w-10"
                  src={candidatesRole?.image}
                  alt={candidatesRole?.name}
                />
                <input
                  className="rounded outline-none h-10 border-b border-dark/20 px-3 w-full"
                  type="text"
                  onClick={() => setCommentClick(true)}
                  placeholder="Add a Comment..."
                  {...register("added_comment")}
                />
                {commentClick && (
                  <div className="flex justify-end gap-3">
                    <p
                      className="bg-transparent text-dark hover:text-white px-1 md:px-3 py-1 md:py-3 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 mt-8"
                      onClick={() => setCommentClick(false)}
                    >
                      Cancel
                    </p>
                    <input
                      className="bg-transparent text-dark hover:text-white px-1 md:px-3 py-1 md:py-3 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 mt-8"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                )}
              </div>
            </form>

            {/* Comment */}
            {comments.map((comment) => (
              <LearningDetailsComment
                key={comment.commentId}
                comment={comment}
              />
            ))}
          </div>

           {/* Sidebar */}
           <div className='hidden lg:block col-span-1'>
              {
                  sidebarContent.map(sidebar => 
                  <div className="p-2 rounded-lg hover:shadow-xl hover:shadow-green/20 border border-dark/40 hover:border-green duration-300 mb-3">

                  {/* Thumbnail */}
                  <img
                      className="object-cover object-center w-full rounded-lg"
                      src={sidebar.thumbnail}
                      alt={sidebar.title}
                  />
      
                  {/* Content */}
                  <div className="flex flex-col justify-between px-2 mt-5 mb-2">
                      {/* Title & Description */}
                      <div>
                          <div className="text-purple duration-300 hover:underline"> {sidebar.category} </div>
                          <h3 className=" text-green font-semibold"> {sidebar.title} </h3>
                          <p className="line-clamp-3 mt-2 text-sm">{sidebar.description}</p>
                      </div>
      
                      {/* Author Details */}
                      <div className="flex items-center gap-3 my-3">
                          <img className="rounded-full w-6" src={sidebar.authorImg} alt="" />
                          <h3 className="text-dark">{sidebar.authorName}</h3>
                      </div>
  
                      {/* Detail Button */}
                      <Link to={`/learning/${sidebar._id}`} className="bg-purple text-white inline-block px-2 py-1 lg:px-3 lg:py-2 rounded-md duration-300 hover:bg-dark shadow-xl shadow-purple/20 hover:shadow-dark/20 mr-3 cursor-pointer text-center">Explore</Link>
                  </div>
              </div>
              )}
           </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDetailsBody;