import { useEffect, useState } from 'react';
import moment from 'moment';

const GetAgoTime = ({ datetime }) => {
    const [timeAgo, setTimeAgo] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const formattedTimeAgo = moment(datetime).fromNow();
            setTimeAgo(formattedTimeAgo);
        }, 1000);

        return () => clearInterval(interval);
    }, [datetime]);

    return <span>{timeAgo}</span>;
};

export default GetAgoTime;