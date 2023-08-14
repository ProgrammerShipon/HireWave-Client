import { Link } from 'react-router-dom';
import SectionTitle from '../Components/SectionTitle';
import useJobLocationData from '../Hooks/useJobLocationData';

const JobByLocation = () => {
    const [jobLocationData] = useJobLocationData();

    return (
        <section className='py-16 md:py-20 duration-300'>
            <div className="container">
                {/* section title */}
                <SectionTitle title='Job By Location' para='Your Dream Country' />

                {/* Job By Location content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16">
                    {jobLocationData.length > 0 && jobLocationData?.map((location) => (
                        <div key={location._id} >
                            <Link>
                                <div className='w-96 mx-auto relative border border-green p-3 rounded-2xl  hover:shadow-xl hover:shadow-green/20 duration-300'>
                                    <img src={location.image} className='h-48 w-full rounded-xl object-cover' alt="" />
                                    <span className='absolute top-5 left-5 px-4 rounded-md bg-purple/80 text-white'>{location.status}</span>

                                    <div className='my-2 px-2 rounded-md'>
                                        <h3 className='text-2xl font-medium text-dark'>{location.name}</h3>
                                        <div className='flex justify-between px-1 opacity-70'>
                                            <p>{location.vacancy} Vacancy</p>
                                            <p>{location.companies} companies</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobByLocation;