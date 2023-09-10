import PageLoader from '../Components/PageLoader';
import SavedJobsCard from '../Components/SavedJobsCard';
import useMySavedJobs from '../Hooks/useMySavedJobs';

const SavedJob = () => {
    const [mySavedJobs, loading, refetch] = useMySavedJobs();
    if (loading) {
        return <PageLoader />
    }

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 duration-300">

                    {
                        mySavedJobs.map((job, index) => <SavedJobsCard key={index} job={job} refetch={refetch} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default SavedJob;