
import useAuth from './useAuth';
import useCurrentCandidate from './useCurrentCandidate';
import useCurrentRecruiter from './useCurrentRecruiter';
import { useState } from 'react';

const useCurrentUserId = () => {
    const { currentUser } = useAuth();
    const [currentCandidate] = useCurrentCandidate();
    const [currentRecruiter] = useCurrentRecruiter();
    const [userId, setUserId] = useState();
    if (currentUser?.role === 'recruiter') {
        setUserId(currentRecruiter?._id)
        // console.log(userId)
    }
    else {
        setUserId(currentCandidate?._id)
    }

    return userId
};

export default useCurrentUserId;