import React, { useState } from 'react';
import { AiFillCaretRight, AiFillCaretUp } from 'react-icons/ai';
import Fetures_Card from '../Components/Fetures_Card';

const Special_Featurs = () => {
    const [q1, setQ1] = useState(false)
    const [q2, setQ2] = useState(false)
    const [q3, setQ3] = useState(false)

    return (
        <section className="featured-bg bg-fixed text-white  pt-8 my-20 ">
            <div className="container bg-opacity-40 bg-black ">

                <div className="gird grid-cols-1 md:grid-cols-2">
                    <div className=' w-auto md:w-2/5 pt-8'>
                        <h3 className='text-xl text-blue-600 bg-gray-800 inline rounded-2xl px-2 mb-12 font-semibold my-5'>Special Fetures</h3>
                        <h1 className='text-5xl font-bold my-4'>Bridge for industrial and corporate development.</h1>
                        <p className='text-lg font-semibold text-gray-600'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae</p>

                        <div className='space-y-3 mt-5'>
                            <div>
                                <p className='text-flex cursor-pointer ' onClick={() => setQ1(!q1)} >
                                    {q1 ? <AiFillCaretUp className='text-blue-800' /> : <AiFillCaretRight />} Best Hiring Agency</p>
                                {
                                    q1 && <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam quia vitae sed harum sit?</p>
                                }
                            </div>
                            <div>
                                <p className='text-flex cursor-pointer' onClick={() => setQ2(!q2)} >
                                    {q2 ? <AiFillCaretUp className='text-blue-800' /> : <AiFillCaretRight />} Quality Opportunities</p>
                                {
                                    q2 && <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam quia vitae sed harum sit?</p>
                                }
                            </div>
                            <div>
                                <p className='text-flex cursor-pointer' onClick={() => setQ3(!q3)} >
                                    {q3 ? <AiFillCaretUp className='text-blue-800' /> : <AiFillCaretRight />} Career Coaching</p>
                                {
                                    q3 && <p className='my-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quibusdam quia vitae sed harum sit?</p>
                                }
                            </div>
                        </div>

                    </div>

                    <div className='flex flex-col w-auto md:w-3/5 gap-8 justify-center items-center '>
                        <div className='flex gap-8'>
                            <Fetures_Card
                                icon={'https://i.ibb.co/sC134Jy/Screenshot7.png'}
                                title={'Fast Recognition'}
                                discribtion={'Ridiculus cras molestie lectus nullam ullamcorper mus'}
                            ></Fetures_Card>
                            <Fetures_Card
                                icon={'https://i.ibb.co/R3X2sks/Screenshot.png'}
                                title={'Job For Everyone'}
                                discribtion={'Ridiculus cras molestie lectus nullam ullamcorper mus'}
                            ></Fetures_Card>
                        </div>
                        <div className='flex gap-8'>
                            <Fetures_Card
                                icon={'https://i.ibb.co/8md0mLJ/Screensht-287.png'}
                                title={'Best Treatment to Worker'}
                                discribtion={'Ridiculus cras molestie lectus nullam ullamcorper mus'}
                            ></Fetures_Card>

                            <Fetures_Card
                                icon={'https://i.ibb.co/f2tmxx7/Screenshot-287.png'}
                                title={'Big Company'}
                                discribtion={'Dediculus cras molestie lectus nullam ullamcoper'}
                            ></Fetures_Card>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Special_Featurs;