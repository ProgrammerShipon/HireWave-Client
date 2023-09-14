import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

// react icons 
import { BsArrowUpShort } from 'react-icons/bs';


const BarChart = () => {
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
            legend: {
                display: false,
            },
        },
        maintainAspectRatio: false,
    };

    const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

    // Replace this with your own data
    const postedJob = [120, 150, 90, 200, 80, 250, 180];

    const data = {
        labels,
        datasets: [
            {
                data: postedJob,
                backgroundColor: '#fff',
            }
        ],
    };
    return (
        <div className='shadow-xl shadow-gray/40 px-4 rounded-md'>
            <div className='h-56 bg-purple rounded-md shadow-xl shadow-purple/40 p-2 -my-4'>
                <Bar data={data} options={options} />
            </div>
            <h3 className='text-dark text-xl mt-8'>Last 10 Days Posted Jobs</h3>
            <p className='flex gap-1 text-lightGray pb-2'>
                <span className='text-green flex'>
                    <BsArrowUpShort /> 20
                </span> increase in today
            </p>
        </div>
    );
};

export default BarChart;