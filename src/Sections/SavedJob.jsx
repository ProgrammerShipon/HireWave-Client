import SaveJobsCard from '../Components/SaveJobsCard';
import useSavedJobs from '../Hooks/useSavedJobs';

const SavedJob = () => {
  const [savedJobs, loading, refetch] = useSavedJobs();
  if (loading || savedJobs.length === 0) {
    return <h1>Loading ...</h1>
  }
  console.log(savedJobs)
  return (
    <section className="py-20 md:py-[120px] duration-300">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-0 pt-12 md:pt-16  mx-auto duration-300 relative">

          {savedJobs.length > 0 &&
            savedJobs
              ?.slice(0, 4)
              .map((job, index) => <SaveJobsCard key={index} job={job} refetch={refetch} />)}

        </div>
      </div>
    </section>
  );
};

export default SavedJob;