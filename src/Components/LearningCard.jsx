import React from "react";

export default function LearningCard({ learning }) {
  return (
    <div className="cursor-pointer mx-auto md:w-auto w-96 duration-300 bg-[#ffffff]">
      <img
        className="rounded-lg pb-1 h-60 object-cover"
        src={learning.image}
        alt="learning-images"
      />
      <span className="hover:underline text-blue-700 ">
        {learning.category}
      </span>
      <h3 className="text-2xl hover:text-blue-700 py-1 text-slate-dark font-semibold">
        {learning.title.slice(0, 50)}...
      </h3>
      <p className="text-slate-950 text-lg">{learning.about.slice(0, 90)}...</p>
    </div>
  );
}
