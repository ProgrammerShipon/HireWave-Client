import React from 'react';
import HiredCandidatesTableRow from '../Components/DashComponents/HiredCandidatesTableRow';
import DashTitle from '../Components/DashComponents/DashTitle';

const HiredCandidates = () => {
    const hiredCandidates =[
        {
            id: "1",
            name: "Saiful Islam",
            image: "https://randomuser.me/api/portraits/men/22.jpg",
            title: "React.js Developer",
            category: "Web Development",
            position: "Junior web developer",
            salary: 2000
        },
        {
            id: "2",
            name: "Alamgir Bhuiyan",
            image: "https://randomuser.me/api/portraits/men/80.jpg",
            title: "Business Analyst",
            category: "Business",
            position: "Manager",
            salary: 3000
        },
        {
            id: "3",
            name: "S.M. Anik Mahmud",
            image: "https://randomuser.me/api/portraits/men/10.jpg",
            title: "Ui/UX Designer",
            category: "Web Development",
            position: "Front-End Developer",
            salary: 25000
        },
    ]
    return (
        <section className='m-5 rounded-md'>
            <DashTitle title='Hired Candidates' />

            {/* Hired Candidates table */}
            <div className="w-full overflow-x-auto duration-300 rounded-md shadow-4xl shadow-gray/40 bg-white mt-4">
                <table className="table lg:w-full w-[800px] text-left">
                    <thead className="text-lg text-green border-b border-green/40">
                        <tr>
                            <th className="px-3 py-3 font-medium text-center">Image</th>
                            <th className="px-3 py-3 font-medium text-center">Name</th>
                            <th className="px-3 py-3 font-medium text-center">Category</th>
                            <th className="px-3 py-3 font-medium text-center">Title</th>
                            <th className="px-3 py-3 font-medium text-center">Position</th>
                            <th className="px-3 py-3 font-medium text-center">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hiredCandidates.map((candidate) => (
                            <HiredCandidatesTableRow key={candidate.id} candidate={candidate} />
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    );
};

export default HiredCandidates;