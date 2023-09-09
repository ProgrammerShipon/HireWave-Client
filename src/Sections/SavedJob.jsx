import PageLoader from '../Components/PageLoader';
import SavedJobsCard from '../Components/SavedJobsCard';
import useSavedJobs from '../Hooks/useSavedJobs';

const SavedJob = () => {
    const [savedJobs, loading, refetch] = useSavedJobs();
    if (loading) {
        return <PageLoader />
    }

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 duration-300">

                    {
                        savedJobs.map((job, index) => <SavedJobsCard key={index} job={job} refetch={refetch} />)
                    }

                </div>
            </div>
        </section>
    );
};

export default SavedJob;