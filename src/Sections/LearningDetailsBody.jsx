import { useState } from 'react';
import { useForm } from 'react-hook-form';
import LearningDetailsComment from './LearningDetailsComment';

const LearningDetailsBody = () => {
  const [commentClick, setCommentClick] = useState('')
  const loadData = useLoaderData();
  const { title, createdAt, updatedAt, videoLink, description, authorImg, authorName, authorEmail, comments, sidebar } = loadData;
  console.log(loadData);
  const { control, register, handleSubmit, watch, setValue, formState: { errors } } = useForm();
  const onSubmit = () => {
    console.log('okay')
  }
  return (
    <div className="pt-20 md:pt-[120px] duration-300">
      <div className="container">
        <div className="lg:grid grid-cols-4 gap-10">
          {/* Learning content */}
          <div className="lg:col-span-3">
            {/* Title & Created, updated date */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-green">
              {title}
            </h2>
            <p className="text-sm mt-3">
              Created: {createdAt} | Updated: {updatedAt}
            </p>

            {/* Video */}
            <div className="mt-10 mb-12 md:mb-16">
              <iframe
                className="w-96 md:w-[560px] lg:w-[800px] h-[216px] md:h-[315px] lg:h-[450px]"
                src={videoLink}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>

            {/* Description */}
            <h1 className="text-xl md:text-2xl font-medium text-green bg-green/10 w-fit px-4 rounded-full tracking-widest drop-shadow-lg capitalize">
              Short Description
            </h1>
            <p
              className="text-lightGray mt-4"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>

            {/* Author details */}
            <div className="flex items-center gap-5 my-10">
              <img
                className="rounded-full w-14"
                src={authorImg}
                alt=""
              />
              <div>
                <h3 className="text-xl text-dark">{authorName}</h3>
                <p className="">{authorEmail}</p>
              </div>
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

          {/* Sidebar */}
        
        </div>
      </div>
    </div>
  );
};

export default LearningDetailsBody;