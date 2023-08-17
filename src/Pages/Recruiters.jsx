import { Helmet } from 'react-helmet';
import Breadcrumbs from '../Components/Breadcrumbs';

import { useEffect, useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { CiLocationOn } from 'react-icons/ci';
import { Link } from 'react-router-dom';
import useRecruiters from '../Hooks/useRecruiters';
import FindRecruiters from '../Sections/FindRecruiters';

const Recruiters = () => {
    // const [recruiters, setRecruiters] = useState([]);
    // const [allChecked, setAllChecked] = useState(true);
    // const [selectedLocation, setSelectedLocation] = useState('');


    // // Filtering data according to industry
    // const handleCheckboxChange = event => {
    //     const checked = event.target.checked
    //     const name = event.target.name
    //     console.log(checked)
    //     console.log(name)

    //     if (name === 'all') {
    //         setAllChecked(checked);
    //         if (checked) {
    //             setRecruiters(data);
    //         } else {
    //             setRecruiters([]);
    //         }
    //     } else {
    //         // setAllChecked(false);
    //         if (checked) {
    //             setRecruiters((prevRecruiters) => [...prevRecruiters, ...data.filter((d) => d.industry === name)]);
    //         } else {
    //             setRecruiters((prevRecruiters) => prevRecruiters.filter((recruiter) => recruiter.industry !== name));
    //         }
    //     }

    // }

    // // Filtering data according to industry
    // const handleLocationChange = (event) => {
    //     const selectedValue = event.target.value;
    //     setSelectedLocation(selectedValue);

    //     if (selectedValue === '') {
    //         setRecruiters(data);
    //     } else {
    //         const filteredRecruiters = data.filter(recruiter => recruiter.companyLocation === selectedValue);
    //         setRecruiters(filteredRecruiters);
    //     }
    // };

    // // Get unique locations from data
    // const uniqueLocations = [...new Set(data.map(recruiter => recruiter.companyLocation))];

    return (
        <>
            {/* page title */}
            <Helmet>
                <title>Recruiters - HireWave</title>
            </Helmet>

            <Breadcrumbs title="Recruiters" />

            {/* sections */}
            <FindRecruiters />
        </>
    );
};

export default Recruiters;