import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);

// react icons
import { BsBriefcase } from 'react-icons/bs';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { AiOutlineFundView } from 'react-icons/ai';

const DoughnutChart = ({ labels, chartData }) => {

    const data = {
        labels: labels,
        datasets: [
            {
                label: 'Data',
                data: chartData,
                backgroundColor: [
                    '#33e2a0',
                    '#FF9671',
                    '#7c60d5',
                ],
                borderColor: [
                    '#33e2a0',
                    '#FF9671',
                    '#7c60d5',
                ],
                borderWidth: 0
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // This will hide the legend (labels)
            },
        },
    };

    return (
        <div className='shadow-4xl shadow-gray/40 px-4 sm:px-8 py-4 rounded-md'>
            <div className='w-full h-52 sm:h-72'>
                <Doughnut data={data} options={options} />
            </div>

            <div className='flex flex-col gap-1'>
                <p className='flex items-center gap-2 text-lightGray tracking-wider font-medium'>
                    <BsBriefcase size='19' className='text-purple' /> {labels[2]}
                </p>
                <p className='flex items-center gap-2 text-lightGray tracking-wider font-medium'>
                    <IoDocumentTextOutline size='20' className='text-green' /> {labels[0]}
                </p>
                <p className='flex items-center gap-2 text-lightGray tracking-wider font-medium'>
                    <AiOutlineFundView size='20' className='text-[#FF9671]' /> {labels[1]}
                </p>
            </div>
        </div>
    );
};

export default DoughnutChart;