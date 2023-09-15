import SectionTitle from '../Components/SectionTitle';
import useJobLocationData from '../Hooks/useJobLocationData';
import JobByLocationCard from '../Components/JobByLocationCard';

const JobByLocation = () => {
    const [jobLocationData] = useJobLocationData();

    return (
        <section className='py-20 md:py-[120px] duration-300'>
            <div className="container">
                {/* section title */}
                <SectionTitle title='Job By Location' para='Your Dream Country' />

                {/* Job By Location content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 md:mt-16">
                    {
                        jobLocationData?.map((location, index) => <JobByLocationCard key={index} location={location} />)
                    }
                </div>
            </div>
        </section>
    );
};

export default JobByLocation;