import { useEffect, useState } from 'react';
import CandidateCard from '../Components/CandidateCard';
import CandidatesSearchBar from '../Components/CandidatesSearchBar';
import useCandidatesData from '../Hooks/useCandidatesData';

const FindCandidate = () => {
    const [candidatesData] = useCandidatesData();

    const [searchName, setSearchName] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [searchCategory, setSearchCategory] = useState('');
    const [candidates, setCandidates] = useState(candidatesData);

    useEffect(() => {
        const filteredCandidates = candidatesData.filter(candidate =>
            candidate.name.toLowerCase().includes(searchName.toLowerCase()) &&
            candidate.location.toLowerCase().includes(searchLocation.toLowerCase()) &&
            candidate.category.toLowerCase().includes(searchCategory.toLowerCase())
        );
        setCandidates(filteredCandidates);
    }, [searchName, searchLocation, searchCategory, candidatesData]);

    return (
        <section className='py-20 md:py-[120px] duration-300'>
            <div className='container'>
                <CandidatesSearchBar
                    candidatesData={candidatesData}
                    candidates={candidates}
                    searchName={searchName}
                    setSearchName={setSearchName}
                    setSearchLocation={setSearchLocation}
                    setSearchCategory={setSearchCategory}
                />
                {
                    candidates.length > 0 ? <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-4 lg:gap-8 mt-8'>
                        {
                            candidates.map(candidate =>
                                <CandidateCard
                                    key={candidate.id}
                                    candidate={candidate}
                                ></CandidateCard>
                            )
                        }
                    </div> : <p className='text-center mt-16 text-2xl'>No candidates match!</p>
                }

            </div>
        </section>
    );
};

export default FindCandidate;