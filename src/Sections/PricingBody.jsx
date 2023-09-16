import { useState } from 'react';
import CheckIcon from '../assets/images/check.png';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useCurrentRecruiter from '../Hooks/useCurrentRecruiter';

const PricingBody = () => {
    const [onOff, setOnOff] = useState(true);
    const [currentRecruiter, loadingRecruiters, refetchRecruiters] = useCurrentRecruiter();
    const [axiosSecure] = useAxiosSecure();
    // console.log(currentUser)
    const handlePayment71 = () => {
        const paymentInfo = {
            recruiterId: currentRecruiter?._id,
            receiver: "HireWave",
            amount: 71,
            paymentTimeline: "monthly",
            recruiterName: currentRecruiter.name,
            companyLogo: currentRecruiter?.image
        }
        console.log(paymentInfo)
        axiosSecure.post('/payment', paymentInfo)
            .then(res => {
                console.log(res.data)
                window.location.replace(res.data.url)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handlePayment121 = () => {
        const paymentInfo = {
            recruiterId: currentRecruiter?._id,
            receiver: "HireWave mahfuz",
            amount: 121,
            paymentTimeline: "monthly",
            recruiterName: currentRecruiter.name,
            companyLogo: currentRecruiter?.image
        }
        console.log(paymentInfo)
        axiosSecure.post('/payment', paymentInfo)
            .then(res => {
                console.log(res.data)
                window.location.replace(res.data.url)
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <section className='pt-20 md:pt-[120px]'>
            <div className='container'>
                {/* pricing card top */}
                <div className='flex items-center justify-center gap-4'>
                    <p className='text-gray-text text-[15px]'>Monthly</p>

                    <button onClick={() => setOnOff(!onOff)} className={`block h-8 w-[58px] bg-green ${onOff ? 'bg-opacity-100' : 'bg-opacity-50'} rounded-[20px] relative duration-300 ease-in-out`}>
                        <span className={`absolute top-1/2 ${onOff ? '-right-[9px]' : 'right-[15px]'} -translate-x-1/2 -translate-y-1/2 block h-[26px] w-[26px] bg-white rounded-full duration-300 ease-in-out`}></span>
                    </button>

                    <div>
                        <p className='text-dark text-[15px] leading-[22px]'>Annual Billing</p>
                        <p className='text-primary text-[15px] leading-[22px]'>Save 30%</p>
                    </div>
                </div>

                {/* pricing card */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-0 mt-16 pb-20 md:pb-[136px] md:mx-10'>

                    {/* single card */}
                    <div className='p-8 bg-white shadow-4xl shadow-gray/20 hover:shadow-green/20 duration-300 rounded-2xl md:rounded-s-2xl z-10 self-center'>

                        <h1 className='text-[22px] leading-8 font-semibold text-dark'>Basic</h1>
                        <h2 className='mt-4 text-[56px] leading-[72px] text-dark font-semibold'>Free</h2>

                        <p className='text-[15px] leading-[22px] text-gray-text'>Per agent per month</p>

                        <ul className='flex flex-col gap-2 mt-16'>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> More than 100+ components
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> Five ready demos
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> Coming Soon page
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> List with check left icon
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> And much more...
                            </li>
                        </ul>

                        <button className='bg-green py-4 border border-green text-white uppercase rounded-md hover:bg-white hover:text-dark shadow-lg duration-300 w-full mt-8'>Free</button>
                    </div>

                    {/* single card */}
                    <div className='px-8 py-12 bg-white shadow-4xl shadow-gray/20 hover:shadow-green/20 duration-300 rounded-2xl z-30 self-center'>

                        <div className='flex items-center justify-between'>
                            <h1 className='text-[22px] leading-8 font-semibold text-dark'>Professional </h1>
                            <span className='px-4 py-1 text-purple bg-purple/20 drop-shadow-xl tracking-wider font-medium rounded-2xl shadow-lg'>Popular</span>
                        </div>
                        <h2 className='mt-4 text-[56px] leading-[72px] text-dark font-semibold'>$71</h2>

                        <p className='text-[15px] leading-[22px] text-gray-text'>Per agent per month</p>

                        <ul className='flex flex-col gap-2 mt-16'>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> More than 100+ components
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> Five ready demos
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> Coming Soon page
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> List with check left icon
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> And much more...
                            </li>
                        </ul>

                        <button onClick={handlePayment71} className='bg-green py-4 border border-green text-white uppercase rounded-md hover:bg-white hover:text-dark shadow-lg duration-300 w-full mt-8'>Buy Now</button>
                    </div>

                    {/* single card */}
                    <div className='p-8 bg-white shadow-4xl shadow-gray/20 hover:shadow-green/20 duration-300 rounded-2xl md:rounded-e-2xl z-10 self-center'>

                        <h1 className='text-[22px] leading-8 font-semibold text-dark'>Enterprise</h1>
                        <h2 className='mt-4 text-[56px] leading-[72px] text-dark font-semibold'>$121</h2>

                        <p className='text-[15px] leading-[22px] text-gray-text'>Per agent per month</p>

                        <ul className='flex flex-col gap-2 mt-16'>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> More than 100+ components
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> Five ready demos
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> Coming Soon page
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> List with check left icon
                            </li>
                            <li className='flex items-center gap-2 text-[15px] text-dark leading-[22px]'>
                                <img src={CheckIcon} alt="checked" /> And much more...
                            </li>
                        </ul>

                        <button onClick={handlePayment121} className='bg-green py-4 border border-green text-white uppercase rounded-md hover:bg-white hover:text-dark shadow-lg duration-300 w-full mt-8'>Buy Now</button>
                    </div>


                </div>

                {/* border */}
                <div className='border-b border-[#DFDFDF]'></div>
            </div>
        </section>
    );
};

export default PricingBody;