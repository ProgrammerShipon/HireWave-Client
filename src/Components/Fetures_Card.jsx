import React from 'react';

const Fetures_Card = ({ icon, title, discribtion }) => {
    return (
        <section className=' w-1/2  text-center border-2 border-blue-400 p-4 rounded-lg space-y-4'>
            <img className=' mx-auto' src={icon} alt="" />
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p>{discribtion}</p>
        </section>
    );
};

export default Fetures_Card;