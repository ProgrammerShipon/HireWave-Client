import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend
);

// react icons 
import { BsArrowUpShort } from 'react-icons/bs';

const LineChart = () => {
    const labels = [
        'Day 02', 'Day 03', 'Day 04', 'Day 05', 'Day 06', 'Day 07',
        'Day 08', 'Day 09', 'Day 10'
    ];

    const data = {
        labels: labels, // Dates
        datasets: [
            {
                fill: false,
                data: [10, 50, 30, 78, 45, 62, 40, 90, 53],
                borderColor: '#fff',
                backgroundColor: '#fff',
            },
        ]
    };

    const options = {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white'
                },
            },
            x: {
                ticks: {
                    color: 'white'
                },
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    title: () => null,
                },
            },
        },
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    return (
        <div className='shadow-xl shadow-gray/40 px-4 rounded-md'>
            <div className='h-56 bg-green rounded-md shadow-xl shadow-green/40 p-2 -my-4'>
                <Line data={data} options={options} />
            </div>
            <h3 className='text-dark text-xl mt-8'>Last 10 Days Application</h3>
            <p className='flex gap-1 text-lightGray pb-2'>
                <span className='text-green flex'>
                    <BsArrowUpShort /> 30
                </span> increase in today
            </p>
        </div>
    );
};

export default LineChart;