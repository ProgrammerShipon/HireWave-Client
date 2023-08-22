import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useEvents from '../Hooks/useEvents';
import Button from '../Components/Button';
import { BsFillEnvelopePaperFill } from 'react-icons/bs';
import { BiLogoFacebook, BiLogoLinkedin } from 'react-icons/bi';
import { AiOutlineArrowLeft, AiOutlineTwitter } from 'react-icons/ai';
import { space } from 'postcss/lib/list';

const EventDetails = () => {
    const params= useParams();
    console.log(params)
    const [eventData] = useEvents();
    const singleEvent= eventData.find(event=> event.event_name == params.name)
    console.log(singleEvent)

    return (
        <div className='pt-28'>
            <div className="container">

                {/* Top Section */}
                <div className='border rounded-lg lg:flex lg:flex-row-reverse'>
                    {/* Event Image */}
                    <img className='w-full lg:w-3/5' src={singleEvent.event_image} alt="" />

                    {/* Event type, date, name */}
                    <div className='px-5 py-3 my-5 lg:my-auto'>
                        <Link className='flex gap-3 items-center mb-5' to="/events"><AiOutlineArrowLeft/> Events</Link>
                        <p className='rounded-full border px-2 py-1 w-fit border-green bg-transparent hover:shadow-xl hover:shadow-green/20 duration-300'>{singleEvent.event_type}</p>
                        <p className='mt-8 mb-5'>{singleEvent.event_date}</p>
                        <p className='text-2xl lg:text-3xl font-semibold mb-6'>{singleEvent.event_name}</p>
                        <Button><div className='flex items-center gap-3'><BsFillEnvelopePaperFill/>Invite a Friend</div></Button>
                    </div>
                </div>

                {/* About */}
                <div>
                    <h1 className='text-3xl font-semibold text-center mt-20 mb-5'>About the Event</h1>
                    <p dangerouslySetInnerHTML={{ __html: singleEvent.about }}></p>
                    <p className='mt-8'><span className='font-semibold text-red-500'>Where: </span>{singleEvent.location}</p>
                </div>

                {/* Event Speakers */}
                <div>
                    <h1 className='text-3xl font-semibold text-center mt-20 mb-5'>Event Speakers</h1>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto '>
                        {
                            singleEvent.speakers.map(speaker=> <div key={speaker.name} className='relative'>
                                {/* Speaker image */}
                                <img src={speaker.image} alt="" />

                                {/* Speaker details */}
                                <div className='text-center rounded bg-green/60 text- mx-auto w-fit -mt-16 px-3 py-2 relative z-10'>
                                    <p className='text-xl font-semibold'>{speaker.name}</p>
                                    <p className='text-sm'>{speaker.position}</p>

                                    {/* Social media links */}
                                    <div className='flex items-center justify-center gap-3 mt-3'>
                                        <BiLogoFacebook className='cursor-pointer'/>
                                        <BiLogoLinkedin className='cursor-pointer'/>
                                        <AiOutlineTwitter className='cursor-pointer'/>
                                    </div>
                                </div>
                                
                            </div>)
                        }
                    </div>
                </div>

                {/* Why join */}
                <div>
                    <h1 className='text-3xl font-semibold text-center mt-20 mb-5'>Why join this seminar</h1>
                    <div className='grid sm:grid-cols-3 gap-8 mx-auto '>
                    {
                        singleEvent.reason_to_join.map((singleReason, index)=> <div key={singleReason.reason} className='border border-green rounded px-5 py-3'>
                            <p className='bg-white text-xl text-green p-2 -mt-8 w-fit'>{index+1}</p>
                            <p className='text-green text-2xl'>{singleReason.reason}</p>
                            <p>{singleReason.details}</p>
                        </div>)
                    }
                    </div>
                </div>

                {/* Who should register */}
                {
                    singleEvent.skills_required && 
                    
                    <div>
                    <h1 className='text-3xl font-semibold text-center mt-20 mb-5'>Who should register for this event?</h1>
                    <div className='flex flex-wrap gap-5 mx-auto '>
                        <p className='bg-green/10 text-green rounded-full px-3 py-1'>Years of experience: {singleEvent.years_of_experience_required}</p>
                        {
                            singleEvent.skills_required.map(skills=> <p key={skills} className='bg-green/10 text-green rounded-full px-3 py-1'>Work with: {skills}</p>)
                        }
                        <p className='bg-green/10 text-green rounded-full px-3 py-1'>English: {singleEvent.english_skill_required}</p>
                    </div>
                </div>
                }
            </div>
        </div>
    );
};

export default EventDetails;