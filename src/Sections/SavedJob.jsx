import SavedJobsCard from '../Components/SavedJobsCard';
import useAllJobs from '../Hooks/useAllJobs';

const SavedJob = () => {
   const [allJobsData] = useAllJobs();
   
   return (
     <section className="py-20 md:py-[120px] duration-300">
       <div className="container">
         {/* Saved jobs content */}
         <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-5 lg:gap-0 pt-12 md:pt-16 lg:max-w-4xl mx-auto duration-300 relative">
           {allJobsData.length > 0 &&
             allJobsData
               ?.slice(0, 4)
               .map((job, index) => <SavedJobsCard key={index} job={job} />)}
         </div>
       </div>
     </section>
   );
};

export default SavedJob;