import { useSortable } from '@dnd-kit/sortable';
import React from 'react';
import {CSS} from "@dnd-kit/utilities"
import { useEffect } from 'react';
import { useRef } from 'react';

const ResumeSection = ({sec, activeColor}) => {
    const containerRef = useRef();
    const {attributes, listeners, setNodeRef, transform, transition}= useSortable({id: sec.id})
    const style={
        transition,
        transform: CSS.Transform.toString(transform),
    }
    useEffect(() => {
        const container = containerRef.current;
        if (!activeColor || !container) return;
      }, [activeColor]);

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners} className='mb-3 cursor-grab'>
            {
                sec.data.length!= 0? 
                <>
                    <h3 ref={containerRef} className={`text-2xl font-semibold mb-3`} style={{ color: activeColor }}>{sec.title}</h3>
                    <p className='border border-dark'></p>
                    <div className={`${(sec.title == "Work Experience" || sec.title == "Education" )? "grid grid-cols-2 gap-5 -mt-3": "flex flex-wrap items-center gap-x-5"}`} >
                        {sec.data.map((item, index) => (
                            <div key={index}>
                                {sec.renderItem(item, index)}
                            </div>
                        ))}
                    </div>
                </> : ""
            }
        </div>
    );
};

export default ResumeSection;