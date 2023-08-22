import React from 'react';
import useEvents from '../Hooks/useEvents';
import Button from '../Components/Button';

const FindEvents = () => {
    const [eventData] = useEvents();
    console.log(eventData[0])

    return (
        <section>
            <div className="container">

                <h1 className='text-3xl mt-10 font-semibold mb-5'>Seminar</h1>

                {/* 1st Event: Seminar */}
                <div className='border rounded-lg lg:flex lg:flex-row-reverse'>
                    {/* Event Image */}
                    <img className='w-full lg:w-3/5' src={eventData[0].event_image} alt="" />

                    {/* Event type, date, name, details button */}
                    <div className='px-5 py-3 my-5 lg:my-auto'>
                        <p className='rounded-full border px-2 py-1 w-fit border-green bg-transparent hover:shadow-xl hover:shadow-green/20 duration-300'>{eventData[0].event_type}</p>
                        <p className='mt-8 mb-5'>{eventData[0].event_date}</p>
                        <p className='text-2xl lg:text-3xl font-semibold mb-6'>{eventData[0].event_name}</p>
                        <Button>See Details</Button>
                    </div>
                </div>
                

                <h1 className='text-3xl mt-10 font-semibold mb-5'>Webinar</h1>

                {/* 2nd Event */}  
                <div className='border rounded-lg lg:flex'>
                    {/* Event Image */}
                    <img className='w-full lg:w-1/2' src={eventData[1].event_image} alt="" />

                    {/* Event type, date, name, details button */}
                    <div className='px-5 py-3 my-5 lg:my-auto'>
                        <p className='rounded-full border px-2 py-1 w-fit border-green bg-transparent hover:shadow-xl hover:shadow-green/20 duration-300'>{eventData[1].event_type}</p>
                        <p className='mt-8 mb-5'>{eventData[1].event_date}</p>
                        <p className='text-2xl lg:text-3xl font-semibold mb-6'>{eventData[1].event_name}</p>
                        <Button>See Details</Button>
                    </div>
                </div>


                {/* 3rd Event */}

                <div className='border rounded-lg lg:flex lg:flex-row-reverse mt-10'>
                    {/* Event Image */}
                    <img className='w-full lg:w-5/12' src={eventData[2].event_image} alt="" />

                    {/* Event type, date, name, details button */}
                    <div className='px-5 py-3 my-5 lg:my-auto'>
                        <p className='rounded-full border px-2 py-1 w-fit border-green bg-transparent hover:shadow-xl hover:shadow-green/20 duration-300'>{eventData[2].event_type}</p>
                        <p className='mt-8 mb-5'>{eventData[2].event_date}</p>
                        <p className='text-2xl lg:text-3xl font-semibold mb-6'>{eventData[2].event_name}</p>
                        <Button>See Details</Button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default FindEvents;