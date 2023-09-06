import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend
);

import { PiChartLineUp } from 'react-icons/pi';


const AreaChart = ({ profileViewsData }) => {
    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        }
    };

    // Months as labels
    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'Profile Views',
                data: profileViewsData,
                borderColor: '#7c60d5',
                backgroundColor: '#7b60d557',
            },
        ],
    };
    return (
        <div className='md:col-span-2 shadow-4xl shadow-gray/40 px-4 sm:px-8 py-4 rounded-md'>
            <h2 className='flex items-center gap-2 text-dark text-2xl tracking-wider font-medium mt-2 mb-5 drop-shadow-xl'>
                <PiChartLineUp size='36' /> Profile Views
            </h2>

            <div className='w-full h-full'>
                <Line options={options} data={data} />
            </div>
        </div>
    );
};

export default AreaChart;