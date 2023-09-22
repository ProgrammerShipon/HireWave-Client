import { useState } from 'react';
import { Link } from 'react-router-dom';
import usePaymentHistory from '../../Hooks/usePaymentHistory';
import CustomModal from '../CustomModal';

const HiredCandidatesTableRow = ({ offer }) => {
    const [isHiredCandidate, setIsHiredCandidate] = useState();
    const { applicant, position, salary } = offer;

    const [paymentHistory] = usePaymentHistory();
    const findCandidate = paymentHistory.find(can => can.applicantEmail === applicant.email);

      const handleHiredModel = (e) => {
        if (e == "edit") setIsHiredCandidate(true);
        else if (e == "cancel") setIsHiredCandidate(false);
      };

    console.log(offer);

    return (
      <>
        <tr className="border-b border-green/20 hover:bg-green/10 duration-300 group text-center">
          <td className="px-3 py-3 flex text-left gap-2">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img
                className="w-full object-cover object-center"
                src={applicant?.image}
                alt={applicant?.name}
              />
            </div>
            <div className="flex flex-col">
              <Link
                to={`/candidate_details/${findCandidate?._id}`}
                className="font-medium text-dark group-hover:text-green duration-300"
              >
                {applicant?.name}
              </Link>
              <p className="text-lightGray">{applicant?.email}</p>
            </div>
          </td>
          <td>{position}</td>
          <td>{salary} $</td>
          <td>
            <button
              onClick={() => handleHiredModel("edit")}
              className="border border-green text-dark px-5 py-2 rounded-md duration-300 hover:bg-green hover:text-white"
            >
              Contact
            </button>
          </td>
        </tr>
        {handleHiredModel && (
          <CustomModal
            isModalOpen={isHiredCandidate}
            setIsModalOpen={setIsHiredCandidate}
            handleModal={handleHiredModel}
          >
            {/* Modal Heading */}
            <div className="text-purple text-2xl pb-2 drop-shadow-lg flex items-center gap-2 border-b border-purple/60">
              Contact Details
            </div>

            {/* Modal content */}
            <div>Modal Details</div>
          </CustomModal>
        )}
      </>
    );
};

export default HiredCandidatesTableRow;