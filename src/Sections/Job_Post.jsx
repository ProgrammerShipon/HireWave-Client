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
        <div className='card-class'>
            {
                jobData?.map(data=> 
                <Job_card 
                key={data._id}
                data={data}
                ></Job_card>)
            }
        </div>
    );
};

export default Job_Post;