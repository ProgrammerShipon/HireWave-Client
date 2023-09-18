import React from 'react';
import CustomModal from './CustomModal';

const UserManual = () => {

    const [isManualModalOpen, setIsManualModalOpen] = useState(false);
    const handleManualModal = (e) => {
        if (e == "edit") setIsManualModalOpen(true)
        else if (e == "cancel") setIsManualModalOpen(false)
    }
    return (
        <CustomModal
            isModalOpen={isManualModalOpen}
            setIsModalOpen={isManualModalOpen}
            handleModal={handleManualModal}
        >
            {/* Modal Heading */}
            <div className="overflow-y-hidden">
                <h2 className="pt-2 pb-2 flex items-center gap-3 border-b border-dark/20 text-purple -mt-3">
                    <h3 className="text-2xl">Welcome to HireWave</h3>
                </h2>

                {/* Modal content */}
                <h2 className="text-xl text-dark mb-2 mt-3">Overview:</h2>
                <p className="text-lightGray ">Overview:
                    Describe Your Job Overview best ways. To create an impactful job overview,</p>

                <h2 className="text-xl mb-1 mt-3">Requirements:</h2>
                <ul className="list-disc pl-5 text-lightGray">
                    <li className="list-disc">Proficiency in blockchain programming languages</li>
                    <li className="list-disc">Experience with Ethereum and other blockchain platforms.</li>
                </ul>

                <h2 className="text-xl mb-1 mt-3">Skill & Experience:</h2>
                <ul className="list-disc pl-5 text-lightGray">
                    <li className="list-disc">Conduct research on AI ethics and its impact on society.</li>
                    <li className="list-disc">Analyze and address ethical dilemmas in AI development.</li>
                </ul>

                <h2 className="text-xl mb-1 mt-3">Benefits:</h2>
                <ul className="list-disc pl-5 text-lightGray">
                    <li className="list-disc">Collaborative and innovative work environment.</li>
                </ul>
            </div>
        </CustomModal>
    );
};

export default UserManual;