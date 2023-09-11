import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LearningDetailsComment from './LearningDetailsComment';
import { useLoaderData } from 'react-router-dom';
import Button from "../Components/Button";
import { FaEye } from "react-icons/fa";
import { BiDislike, BiLike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
// react icons
import { CgComment } from 'react-icons/cg'
import moment from 'moment';

const LearningDetailsBody = () => {
  const [commentClick, setCommentClick] = useState('')
  const [seeAll, setSeeAll] = useState(false);
  const loadData = useLoaderData();
  const { title, createdAt, updatedAt, videoLink, description, authorImg, authorName, authorEmail, comments, like, disLike, views , _id } = loadData;
  const { control, register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const onSubmit = () => {
    console.log('okay')
  }

  const increaseLike = () => {
    console.log(_id)
  }


  return (
    <div className="pt-20 md:pt-[120px] duration-300">
      <div className="container">
        <div className="lg:grid grid-cols-4 gap-10">
          {/* Learning content */}
          <div className="lg:col-span-3">
            {/* Title & Created, updated date */}
            <h2 className="text-2xl text-green">
              {title}
            </h2>
            <div>
              <p>{views} Views  {moment((createdAt), "YYYYMMDD").fromNow()}</p>
            </div>
            {/* Video */}
            <div className="my-8  md:mb-16">
              <iframe
                className="w-96 md:w-[560px] lg:w-full h-[216px] md:h-[315px] lg:h-[450px]"
                src={videoLink}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
            {/* Author Details */}
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <img className="rounded-full w-10" src={authorImg} alt="" />
                <div>
                  <h3 className="lg:text-xl text-dark">{authorName}</h3>
                  <p className="text-sm">{authorEmail}</p>
                </div>

              </div>

              <div className="flex items-center gap-5 px-5">
                <div className=' rounded-lg px-5 shadow-sm hover:border-none flex items-center gap-2'>
                  <p className=' my-2 flex items-center gap-2'>
                    <BiLike onClick={increaseLike} className='text-xl cursor-pointer' /> {like} </p>

                  <p className=' my-2 flex items-center gap-2'><BiDislike className='text-xl' /> {disLike} </p>
                </div>
                <p className="flex items-center gap-2"><FaEye className='text-lg' /> {views} </p>
                <p className='flex items-center gap-1 rounded-xl shadow-sm py-3 px-3'>
                  <RiShareForwardLine className='text-xl' /> Share
                </p>
              </div>

            </div>

            {/* Description */}

            <div className='flex items-center'>
              {
                seeAll ?
                  <p
                    className="text-lightGray mt-4"
                    dangerouslySetInnerHTML={{ __html: description }}
                    onClick={() => { setSeeAll(!seeAll) }}
                  ></p> :

                  <> <p
                    className="text-lightGray mt-4"
                    onClick={() => { setSeeAll(!seeAll) }}
                    dangerouslySetInnerHTML={{ __html: description.slice(0, 300) }}
                  ></p></>

              }
            </div>


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
                  src={authorImg}
                  alt=""
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
        </div>
      </div>
    </div>
  );
};

export default LearningDetailsBody;