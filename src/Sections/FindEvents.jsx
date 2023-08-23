import Button from "../Components/Button";
import useEvents from "../Hooks/useEvents";
import { Link } from "react-router-dom";

const FindEvents = () => {
    const [eventData] = useEvents();

    return (
        <section className="py-20 md:py-[120px] duration-300">
            {eventData?.length > 0 && (
                <div className="container">
                    <h1 className="text-3xl text-dark font-semibold mb-3">Seminar</h1>

                    {/* 1st Event: Seminar */}
                    <div className="border border-gray/40 hover:border-green duration-300 shadow-lg rounded-lg lg:flex lg:flex-row-reverse overflow-hidden">
                        {/* Event Image */}
                        <img
                            className="w-full lg:w-3/5"
                            src={eventData[0]?.event_image}
                            alt=""
                        />

                        {/* Event type, date, name, details button */}
                        <div className="px-5 py-3 my-5 lg:my-auto">
                            <p className="rounded-full border px-4 py-1 inline-block border-green hover:shadow-xl hover:shadow-green/20 duration-300">
                                {eventData[0]?.event_type}
                            </p>
                            <p className="mt-8 mb-2 text-lightGray">{eventData[0]?.event_date}</p>
                            <p className="text-dark text-2xl lg:text-3xl font-medium mb-8">
                                {eventData[0]?.event_name}
                            </p>
                            <Link to={`/event_details/${eventData[0]?.event_name}`}>
                                <Button>See Details</Button>
                            </Link>
                        </div>
                    </div>

                    {/* 2nd Event */}
                    <h1 className="text-3xl mt-10 font-semibold mb-3">Webinar</h1>
                    <div className="border border-gray/40 hover:border-green duration-300 shadow-lg rounded-lg lg:flex overflow-hidden">
                        {/* Event Image */}
                        <img
                            className="w-full lg:w-1/2"
                            src={eventData[1]?.event_image}
                            alt=""
                        />

                        {/* Event type, date, name, details button */}
                        <div className="px-5 py-3 my-5 lg:my-auto">
                            <p className="rounded-full border px-4 py-1 inline-block border-green hover:shadow-xl hover:shadow-green/20 duration-300">
                                {eventData[1]?.event_type}
                            </p>
                            <p className="mt-8 mb-2 text-lightGray">{eventData[1]?.event_date}</p>
                            <h3 className="text-dark text-2xl lg:text-3xl font-medium mb-8">
                                {eventData[1]?.event_name}
                            </h3>
                            <Link to={`/event_details/${eventData[1]?.event_name}`}>
                                <Button>See Details</Button>
                            </Link>
                        </div>
                    </div>

                    {/* 3rd Event */}
                    <div className="border border-gray/40 hover:border-green duration-300 shadow-lg rounded-lg lg:flex lg:flex-row-reverse mt-10 overflow-hidden">
                        {/* Event Image */}
                        <img
                            className="w-full lg:w-5/12"
                            src={eventData[2]?.event_image}
                            alt=""
                        />

                        {/* Event type, date, name, details button */}
                        <div className="px-5 py-3 my-5 lg:my-auto">
                            <p className="rounded-full border px-4 py-1 inline-block border-green hover:shadow-xl hover:shadow-green/20 duration-300">
                                {eventData[2]?.event_type}
                            </p>
                            <p className="mt-8 mb-2 text-lightGray">{eventData[2]?.event_date}</p>
                            <p className="text-dark text-2xl lg:text-3xl font-medium mb-8">
                                {eventData[2]?.event_name}
                            </p>
                            <Link to={`/event_details/${eventData[2]?.event_name}`}>
                                <Button>See Details</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
};

export default FindEvents;
