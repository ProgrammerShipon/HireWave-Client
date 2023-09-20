import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLoaderData } from 'react-router-dom';
import LearningDetailsComment from './LearningDetailsComment';
import moment from 'moment';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useLearningData from '../Hooks/useLearningData';
import useCurrentCandidate from '../Hooks/useCurrentCandidate';

// react icons
import { BiDislike, BiLike } from "react-icons/bi";
import { CgComment } from 'react-icons/cg';
import CopyToClipboardLink from '../Components/CopyToClipboardLink';
import LearningCard from '../Components/LearningCard';
import { AiOutlineEye } from 'react-icons/ai';

const LearningDetailsBody = () => {
  const { learningData } = useLearningData();
  const [currentCandidate] = useCurrentCandidate()
  const loadData = useLoaderData();
  const [axiosSecure] = useAxiosSecure();
  const { title, createdAt, updatedAt, videoLink, description, authorImg, authorName, authorEmail, comments, disLike, like, views, _id } = loadData;
  const sidebarContent = learningData.filter(data => data._id !== _id).slice(0, 4)

  const [commentClick, setCommentClick] = useState('')
  const [allLike, setAllLike] = useState(like);
  const [allDisLike, setAllDisLike] = useState(disLike);

  const { control, register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = (data) => {
    console.log(data)
  }

  const increaseLike = (_id) => {
    axiosSecure.patch(`/learning/like/${_id}`)
      .then(res => {
        setAllLike(res.data.like)
      })
      .catch((err) => console.log(err));
  }
  const reduceLike = (_id) => {
    axiosSecure.patch(`/learning/dislike/${_id}`)
      .then(res => {
        setAllDisLike(res.data.disLike)
      })
      .catch((err) => console.log(err));
  }
  const url = window.location.protocol + '//' + window.location.host + window.location.pathname;

  return (
    <div className="py-20 md:py-[120px] duration-300">
      <div className="container">
        <div className="lg:grid grid-cols-3 gap-10 lg:gap-14">
          {/* left content */}
          <div className="lg:col-span-2">
            {/* Video */}
            <div className="rounded-lg overflow-hidden">
              <iframe
                className="w-full h-52 sm:h-[300px] md:h-[400px] lg:h-[450px] duration-300"
                src={videoLink}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            {/* Title */}
            <div className='mt-3 mb-6 px-4 md:px-0'>
              <h1 className="text-2xl md:text-3xl text-dark drop-shadow-lg">
                {title}
              </h1>
              <p>{views} Views  {moment((createdAt), "YYYYMMDD").fromNow()}</p>
            </div>

            <div className="flex flex-col-reverse md:flex-row items-start justify-between gap-4 mb-5 px-4 md:px-0">
              {/* Author Details */}
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-full overflow-hidden shadow-xl shadow-gray/40">
                  <img className="w-full h-full object-cover object-center" src={authorImg} alt={authorName} />
                </div>
                <div className="w-[150px] lg:w-auto">
                  <h3 className="lg:text-xl text-dark drop-shadow-lg line-clamp-1">{authorName}</h3>
                  <p className="text-sm text-lightGray line-clamp-1">{authorEmail}</p>
                </div>
              </div>

              {/* Like, Unlike, View, Share */}
              <div className='rounded-lg px-5 shadow-lg flex items-center mx-auto md:mx-0 gap-4 text-purple duration-300'>
                <p className=' my-2 flex items-center gap-2'>
                  <BiLike onClick={() => increaseLike(_id)} size='24' className='cursor-pointer' /> {allLike} </p>

                <p className=' my-2 flex items-center gap-2'><BiDislike onClick={() => reduceLike(_id)} size='24' className='cursor-pointer' /> {allDisLike} </p>
                <p className="flex items-center gap-2">
                  <AiOutlineEye size='24' /> {views}
                </p>
                <CopyToClipboardLink url={url} />
              </div>
            </div>

            {/* Description */}

            <div className='postJob text-lightGray mt-8 mb-5 h-40 overflow-hidden px-4 md:px-0' dangerouslySetInnerHTML={{ __html: description }}></div>


            {/* Divider */}
            <p className="border border-green"></p>

            <p className="flex items-center gap-3 mt-10 mb-3 px-4 md:px-0">
              <CgComment />
              <span>
                {comments?.length}{" "}
                {comments.length === 1 ? "Comment" : "Comments"}
              </span>
            </p>

            {/* Comment Box */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex items-center gap-3 mb-5 px-4 md:px-0">
                <img
                  className="rounded-full w-10"
                  src={currentCandidate?.image}
                  alt={currentCandidate?.name}
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

          {/* right part */}
          <div className='hidden lg:block col-span-1 space-y-4'>
            {
              sidebarContent.map((data) => (
                <LearningCard key={data._id} learning={data} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningDetailsBody;