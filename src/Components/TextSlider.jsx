import { useEffect, useState } from 'react';
import TextTransition, { presets } from 'react-text-transition';

const titles = ['Find The Job That Fits Your Life', 'Lorem ipsum dolor sit amet', 'Find The Job That Fits Your Life'];

const TextSlider = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            4000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);
    return (
        <h1 className='text-dark text-4xl md:text-6xl font-semibold leading-10 md:leading-[64px] mb-3 overflow-hidden text-center'>
            <TextTransition springConfig={presets.wobbly}>{titles[index % titles.length]}</TextTransition>
        </h1>
    );
};

export default TextSlider;