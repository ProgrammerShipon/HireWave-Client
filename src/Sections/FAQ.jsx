import { useEffect, useState } from 'react';
import SectionTitle from '../Components/SectionTitle';
import { TECollapse } from 'tw-elements-react';

// react icons
import { IoIosArrowDown } from 'react-icons/io';
import useFaqs from '../Hooks/useFaqs';

const FAQ = () => {
    const [activeElement, setActiveElement] = useState('');
    const [faqsData, loading, refetch] = useFaqs();

    const handleClick = (index) => {
        if (index === activeElement) {
            setActiveElement('');
        } else {
            setActiveElement(index);
        }
    };

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                <SectionTitle title="F A Q S" para="Frequently Asked Questions" />

                <div id="accordionExample" className="space-y-4 max-w-4xl mx-auto  mt-12 md:mt-16">
                    {faqsData.map((faq, index) => (
                        <div
                            key={index}
                            className={`rounded-lg border border-green drop-shadow-sm ease-in-out duration-300 hover:drop-shadow-lg ${index === activeElement
                                ? 'border-primary bg-white'
                                : 'border-purple'
                                }`}
                        >
                            <h2 className="mb-0" id={`heading${index}`}>
                                <button
                                    className={`text-dark text-xl bg-white w-full flex items-center text-left rounded-md hover:rounded-md px-5 py-4 focus:outline-non ${index === activeElement ? 'text-green' : ''}`}

                                    onClick={() => handleClick(index)}
                                    aria-expanded={index === activeElement}
                                    aria-controls={`collapse${index}`}
                                >
                                    {faq.question}
                                    <span
                                        className={`ml-auto h-5 w-5 shrink-0 duration-300 ease-in-out ${index === activeElement ? 'rotate-[-180deg]' : ''}`}
                                    >
                                        <IoIosArrowDown
                                            className={`${index === activeElement ? 'text-green' : 'text-purple'} duration-300`}
                                            size='22'
                                        />
                                    </span>
                                </button>
                            </h2>
                            <TECollapse
                                show={index === activeElement}
                                className="!mt-0 !rounded-b-none !shadow-none duration-300"
                            >
                                <div className="px-5 pb-4 text-lightGray text-justify text-lg">
                                    <strong>{faq.answerTitle}</strong>{faq.answer}
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
