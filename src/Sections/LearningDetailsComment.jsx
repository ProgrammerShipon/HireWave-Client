import React from 'react';

const LearningDetailsComment = ({ comment }) => {
    const { commenterImg, commenterName, commenterEmail, commentText, commentTime, commentId } = comment
    return (
        <div className='flex gap-6 my-3 border-b border-dark/20 pb-5'>
            <img className='w-12 h-12 rounded-full' src={commenterImg} alt="" />
            <div>
                <div className='flex items-center gap-3'>
                    <p className='font-semibold'>{commenterName}</p>
                    <p className='text-sm text-slate-500'>{commentTime}</p>
                </div>
                <p>{commentText}</p>
                <p className='text-sm'>{commenterEmail}</p>
            </div>
        </div>
    );
};

export default LearningDetailsComment;