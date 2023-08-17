
const JobByLocationCard = ({ location }) => {
    const { name, image, status, vacancy, companies } = location;

    return (
        <div className='w-full relative border border-green p-3 rounded-2xl  hover:shadow-xl hover:shadow-green/20 duration-300 cursor-pointer'>
            <img src={image} className='h-48 w-full rounded-xl shadow-lg' alt="" />
            <span className='absolute top-5 left-5 px-4 rounded-md bg-purple/80 text-white'>{status}</span>

            <div className='my-2 px-2 rounded-md'>
                <h3 className='text-2xl font-medium text-dark'>{name}</h3>
                <div className='flex justify-between px-1 opacity-70'>
                    <p>{vacancy} Vacancy</p>
                    <p>{companies} companies</p>
                </div>
            </div>
        </div>
    );
};

export default JobByLocationCard;