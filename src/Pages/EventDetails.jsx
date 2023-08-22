import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useEvents from '../Hooks/useEvents';
import Button from '../Components/Button';
import { BsFillEnvelopePaperFill } from 'react-icons/bs';
import { AiOutlineArrowLeft } from 'react-icons/ai';

const EventDetails = () => {
    const params= useParams();
    console.log(params)
    const [eventData] = useEvents();
    const singleEvent= eventData.find(event=> event.event_name == params.name)
    console.log(singleEvent)

    return (
        <div className='pt-28'>
            <div className="container">
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
                    <h1 className='text-3xl font-semibold text-center mt-8 mb-5'>About the Event</h1>
                    <p>{singleEvent.about}</p>
                    <p className='mt-5'><span className='font-semibold text-red-500'>Where: </span>{singleEvent.location}</p>
                </div>

                {/* Why join */}
                <div>
                    <h1 className='text-3xl font-semibold text-center mt-8 mb-5'>Why join this seminar</h1>
                    <div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;