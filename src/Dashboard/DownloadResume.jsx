import { Helmet } from "react-helmet";
import { useRef, useState } from 'react';
import { DndContext, closestCenter } from '@dnd-kit/core';
import { SortableContext, arrayMove, verticalListSortingStrategy } from '@dnd-kit/sortable';
import DashTitle from "../Components/DashComponents/DashTitle";
import generatePDF from 'react-to-pdf';
import useCurrentCandidate from "../Hooks/useCurrentCandidate";
import ResumeSection from "../Components/ResumeSection";

// react icons
import { FiDownload } from 'react-icons/fi';
import { useEffect } from "react";
import { AiOutlineEye } from "react-icons/ai";

const DownloadResume = () => {
    const [currentCandidate, loading] = useCurrentCandidate();

    const { name, title, location, phone, languages, education, experience, skills, email } = currentCandidate;

    const colors = ["#1b0e3d", "#7c60d5", "#33e2a0", "#0bc5ea", "#ed8936"];
    const [activeColor, setActiveColor] = useState(colors[0]);
    const targetRef = useRef();

    const allSections = [
        {
            id: 1,
            title: 'Work Experience',
            data: experience,
            renderItem: (exp, index) => (
                <div key={index} className='p-3'>
                    <h3 className='text-dark font-medium text-xl'>{exp.position} <span className='text-sm text-lightGray'>- {exp.jobType}</span></h3>
                    <p className='text-lightGray'>{exp.companyName}, {exp.location}</p>
                    <p className='flex items-center gap-1 text-gray mt-1 font-light'>
                        <span className='text-sm'>📅</span> {exp.startDate} - {exp.endDate !== '' ? exp.startDate : 'Present'}
                    </p>
                </div>
            ),
        },
        {
            id: 2,
            title: 'Education',
            data: education,
            renderItem: (edu, index) => (
                <div key={index} className='p-3'>
                    <h3 className='text-dark font-medium text-xl'>{edu.subject}</h3>
                    <p className='text-lightGray'>{edu.institute}</p>
                    <p className='flex items-center gap-1 text-gray mt-1 font-light'>
                        <span className='text-sm'>📅</span> {edu.startDate} - {edu.endDate !== "" ? edu.endDate : 'Present'}
                    </p>
                </div>
            ),
        },
        {
            id: 3,
            title: 'Languages',
            data: languages,
            renderItem: (language, index) => (
                <ul key={index} className='ml-5'>
                    <li>▪️ {language.name} - {language.level}</li>
                </ul>
            ),
        },
        {
            id: 4,
            title: 'Skills',
            data: skills,
            renderItem: (skill, index) => (
                <div key={index} className='ml-5'>
                    <p>▪️ {skill}</p>
                </div>
            ),
        },
    ];

    const [sections, setSections] = useState(allSections)
    const onDragEnd = event => {
        const { active, over } = event
        if (active.id == over.id) return;

        setSections(sections => {
            const oldIndex = sections.findIndex(user => user.id === active.id)
            const newIndex = sections.findIndex(user => user.id === over.id)
            return arrayMove(sections, oldIndex, newIndex)
        })
    }

    useEffect(() => {
        setSections(allSections)
    }, [!loading])

    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Download Resume - Dashboard | Hire Wave</title>
            </Helmet>

            <section className='m-5 rounded-md'>
                <DashTitle title='Download Resume' />

                {/* Modal Heading */}
                <div className="mt-10 bg-white p-4 rounded-md shadow-lg">
                    <div className="-mt-1 pb-2 flex items-center gap-3  text-purple border-b border-dark/20">
                        <AiOutlineEye size={20} />
                        <h3 className="text-xl">Resume Preview</h3>
                    </div>

                    <div className='flex justify-between gap-5 items-center mt-3 px-5 border-b border-dark/20 pb-2'>
                        {/* Color choice */}
                        <div>
                            <div className="flex gap-5">
                                {colors.map((item) => (
                                    <span
                                        key={item}
                                        style={{ backgroundColor: item }}
                                        className={`h-5 w-5 cursor-pointer rounded-full bg-[#239ce2] ${activeColor === item ? "border border-black" : ""
                                            }`}
                                        onClick={() => setActiveColor(item)}
                                    />
                                ))}
                            </div>
                            <p className='mt-2 text-sm'>N.B. Sections of the resume are <span className='font-semibold text-purple'>draggable</span>. You can drag them to preferred position.</p>
                        </div>

                        {/* Download Button */}
                        <button
                            onClick={() => generatePDF(targetRef, { filename: `${name}'s resume.pdf` })}
                            className="bg-transparent text-dark hover:text-white px-3 py-1 rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 flex items-center gap-3 w-fit cursor-pointer"
                        >
                            <FiDownload className='text-2xl' />
                            <p>Download</p>
                        </button>
                    </div>

                    {/* Modal content */}
                    <div ref={targetRef} className='p-5 max-w-[780px]'>
                        {/* name and title */}
                        <h3 className='text-4xl' style={{ color: activeColor }}>{name}</h3>
                        <p className='text-xl mt-3 font-semibold'>{title}</p>

                        {/* Contact Details */}
                        <div className='flex items-center gap-5 mb-5'>
                            <p>✉️ {email}</p>
                            <p>☎ {phone}</p>
                            <p>📍 {location}</p>
                        </div>

                        <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
                            <SortableContext items={sections} strategy={verticalListSortingStrategy}>
                                {
                                    !loading && sections.map((sec) => (
                                        <ResumeSection key={sec.id} sec={sec} activeColor={activeColor} />
                                    ))
                                }
                            </SortableContext>
                        </DndContext>
                    </div>
                </div>
            </section>
        </>
    );
};

export default DownloadResume;