import React, { useEffect, useState } from 'react';
import Job_card from '../Components/Job_card';

const Job_Post = () => {
    const [jobData, setJobData] = useState([])
    useEffect(() => {
        fetch('job.json')
            .then(res => res.json())
            .then(data => setJobData(data))

    }, []);
    console.log(jobData)
    return (
      <section>
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobData?.map((data) => (
              <Job_card key={data._id} data={data}></Job_card>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Job_Post;