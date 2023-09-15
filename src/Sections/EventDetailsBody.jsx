import { Link, useParams } from 'react-router-dom';
import Button from '../Components/Button';
// import DOMPurify from 'dompurify';

// react icons
import { BsFillEnvelopePaperFill } from 'react-icons/bs';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { AiOutlineArrowLeft, AiOutlineTwitter } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const EventDetailsBody = ({ eventData }) => {
    const [singleEvent, setSingleEvent] = useState({});
    const { name } = useParams();

    useEffect(() => {
        const findEvent = eventData.find(event => event.event_name == name)
        setSingleEvent(findEvent)
    }, [eventData.length > 0, name])

    return (
        <div className='py-20 md:py-[120px] duration-300'>
            <div className="container">

                {/* Top Section */}

                <div className='border border-gray/40 hover:border-green duration-300 shadow-lg rounded-lg lg:flex lg:flex-row-reverse justify-between overflow-hidden'>
                    {/* Event Image */}
                    <img className='w-full lg:w-3/5' src={singleEvent.event_image} alt="" />

                    {/* Event type, date, name */}
                    <div className='px-5 py-3 my-5 lg:my-auto ml-3 md:ml-6'>
                        <Link className='flex gap-3 items-center mb-5' to="/events"><AiOutlineArrowLeft /> Events</Link>
                        <p className='rounded-full border px-4 py-1 inline-block border-green hover:shadow-xl hover:shadow-green/20 duration-300'>{singleEvent.event_type}</p>
                        <p className='mt-8 mb-2 text-lightGray'>{singleEvent.event_date}</p>
                        <p className='text-dark text-2xl lg:text-3xl font-medium mb-10'>{singleEvent.event_name}</p>
                        <Button><div className='flex items-center gap-3'><BsFillEnvelopePaperFill />Invite a Friend</div></Button>
                    </div>
                </div>


                {/* About */}
                <div className='mt-20'>
                    <h1 className='text-xl md:text-2xl font-medium text-green bg-green/10 w-fit px-4 rounded-full tracking-widest drop-shadow-lg mt-20 capitalize'>About the Event</h1>

                    <div className='max-w-4xl mt-4'>
                        <p className='text-lightGray' dangerouslySetInnerHTML={{ __html: DOMPuryify.sanitize(singleEvent.about) }}></p>
                        <p className='mt-8'><span className='font-semibold text-red-500'>Where: </span>{singleEvent.location}</p>
                    </div>
                </div>

                {/* Event Speakers */}
                <div>
                    <h1 className='text-xl md:text-2xl font-medium text-green bg-green/10 w-fit px-4 rounded-full tracking-widest drop-shadow-lg mx-auto mt-20 capitalize'>Event Speakers</h1>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12'>
                        {
                            singleEvent.speakers && singleEvent?.speakers?.map(speaker => <div key={speaker.name} className='relative'>
                                {/* Speaker image */}
                                <img src={speaker.image} alt="" />

                                {/* Speaker details */}
                                <div className='text-center rounded bg-dark/70 text-white mx-auto w-fit -mt-16 px-3 py-2 relative z-10'>
                                    <p className='text-xl font-semibold'>{speaker.name}</p>
                                    <p className='text-sm'>{speaker.position}</p>

                                    {/* Social media links */}
                                    <div className='flex items-center justify-center gap-3 mt-3'>
                                        <BiLogoFacebook className='cursor-pointer' />
                                        <BiLogoLinkedin className='cursor-pointer' />
                                        <AiOutlineTwitter className='cursor-pointer' />
                                    </div>
                                </div>

                            </div>)
                        }
                    </div>
                </div>

                {/* Why join */}
                <div>
                    <h1 className='text-xl md:text-2xl font-medium text-green bg-green/10 w-fit px-4 rounded-full tracking-widest drop-shadow-lg mx-auto mt-20 capitalize'>Why join this seminar</h1>
                    <div className='grid sm:grid-cols-3 gap-8 mx-auto mt-12'>
                        {
                            singleEvent.reason_to_join && singleEvent.reason_to_join.map((singleReason, index) => <div key={singleReason.reason} className='border border-green rounded px-5 py-3'>
                                <p className='bg-white text-xl text-green p-2 -mt-8 w-fit'>0{index + 1}</p>
                                <h3 className='text-green text-2xl'>{singleReason.reason}</h3>
                                <p className='text-lightGray mt-1'>{singleReason.details}</p>
                            </div>)
                        }
                    </div>
                </div>

                {/* Who should register */}
                {
                    singleEvent.skills_required && singleEvent.skills_required &&
                    <div className='max-w-4xl mx-auto'>
                        <h1 className='text-xl md:text-2xl font-medium text-green bg-green/10 w-fit px-4 rounded-full tracking-widest drop-shadow-lg mx-auto mt-20 capitalize'>Who should register for this event?</h1>
                        <div className='flex flex-wrap items-center justify-center gap-5 mx-auto mt-12'>
                            <p className='bg-purple/10 text-purple rounded-full px-3 py-1'>Years of experience: {singleEvent.years_of_experience_required}</p>
                            {
                                singleEvent.skills_required.map(skills => <p key={skills} className='bg-purple/10 text-purple rounded-full px-3 py-1'>Work with: {skills}</p>)
                            }
                            <p className='bg-purple/10 text-purple rounded-full px-3 py-1'>English: {singleEvent.english_skill_required}</p>
                        </div>
                    </div>
                }
            </div>
        </div>
    );
};

export default EventDetailsBody;