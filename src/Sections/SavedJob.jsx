import PageLoader from '../Components/PageLoader';
import SavedJobsCard from '../Components/SavedJobsCard';
import useMySavedJobs from '../Hooks/useMySavedJobs';

import heartImg from '../Assets/heart.gif';
import { Link } from 'react-router-dom';
const SavedJob = () => {
    const [mySavedJobs, loading, refetch] = useMySavedJobs();
    if (loading) {
        return <PageLoader />
    }

    return (
        <section className="py-20 md:py-[120px] duration-300">
            <div className="container">
                {
                    mySavedJobs.length > 0 && <h1 className='text-lightGray text-3xl font-medium drop-shadow-lg mb-7'>Saved jobs 0{mySavedJobs.length}</h1>
                }
                {
                    !mySavedJobs.length > 0 && <div className='-mt-36 text-center'>
                        <div className='h-96 mx-auto w-fit -z-10 relative'>
                            <img src={heartImg} alt="heart" />
                        </div>

                        <h2 className='mt-4 text-xl font-medium max-w-lg mx-auto'>Keep track of jobs you're interested in. Select the heart icon on a job post to save it for later.</h2>
                        <Link to='/browse_jobs' className='mt-6 block text-purple underline'>Browse Jobs</Link>
                    </div>
                }
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