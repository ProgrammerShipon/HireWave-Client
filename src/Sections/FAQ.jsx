import React, { useEffect, useState } from 'react';
import SectionTitle from '../Components/SectionTitle';
import { TECollapse } from 'tw-elements-react';
import { IoIosArrowDown } from 'react-icons/io';

const FAQ = () => {
    const [questions, setQuestions] = useState([]);
    const [activeElement, setActiveElement] = useState('');

    useEffect(() => {
        fetch('faqs.json')
            .then(res => res.json())
            .then(data => setQuestions(data));
    }, []);

    const handleClick = (index) => {
        if (index === activeElement) {
            setActiveElement('');
        } else {
            setActiveElement(index);
        }
    };

    return (
        <section className="pt-16">
            <div className="container">
                <SectionTitle title="Q & A" para="Frequently Asked Questions" />

                <div id="accordionExample" className="space-y-3 max-w-4xl mx-auto  mt-12 md:mt-16">
                    {questions.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-lg border  drop-shadow-sm  ease-in-out duration-300 hover:drop-shadow-lg border-green ${index === activeElement
                                ? 'border-primary bg-white'
                                : 'border-neutral-200 dark:border-neutral-600 dark:bg-neutral-800'
                                }`}
                        >
                            <h2 className="mb-0" id={`heading${index}`}>
                                <button
                                    className={`group relative flex w-full items-center rounded-t-[15px] border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800  dark:text-white ${index === activeElement ? 'text-primary' : ''
                                        }`}
                                    type="button"
                                    onClick={() => handleClick(index)}
                                    aria-expanded={index === activeElement}
                                    aria-controls={`collapse${index}`}
                                > <span className='text-green font-medium px-1 '>Q: </span>
                                    {faq.question}
                                    <span
                                        className={`ml-auto h-5 w-5 shrink-0 fill-[#336dec] transition-transform duration-200 ease-in-out ${index === activeElement ? 'rotate-[-180deg]' : ''
                                            }`}
                                    >
                                        <IoIosArrowDown />
                                    </span>
                                </button>
                            </h2>
                            <TECollapse
                                show={index === activeElement}
                                className="!mt-0 !rounded-b-none !shadow-none"
                            >
                                <div className="px-5 py-4 text-justify ">
                                    <strong>{faq.answerTitle}</strong> <span className='font-medium text-green'>Ans:</span> {faq.answer}
                                </div>
                            </TECollapse>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default FAQ;
