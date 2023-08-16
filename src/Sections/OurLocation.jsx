import React from 'react'


const OurLocation = () => {


    return (
        <section className='pt-20 md:pt-[120px]'>
            <div className='container'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-y-10 md:gap-[121px] place-items-center pb-20 md:pb-[120px]'>

                    <div className="relative items-center overflow-hidden">
                        <iframe
                            className=" w-72 h-72 md:w-[500px] md:h-[500px] shadow-lg shadow-[#C5EDD8] center rounded-full"
                            title="map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5883.0758572185!2d90.2328906!3d24.0261625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755e7476bf143bd%3A0x294a5f0f54fd353a!2sZahid%20telecom%20%26%20electronicsStore!5e0!3m2!1sen!2sbd!4v1668667428200!5m2!1sen!2sbd"
                            style={{ filter: 'contrast(1.2)' }}
                            allowFullScreen
                        ></iframe>
                    </div>
                    {/* details  */}
                    <div className='max-w-[461px]'>

                        <h4 className="text-xl text-green bg-green/10 inline-block px-4 rounded-full tracking-widest drop-shadow-lg">
                            Find Us
                        </h4>

                        <h2 className='font-semibold text-dark-text mt-4 text-4xl leading-snug lg:text-5xl lg:leading-[62px]'>We'd love to hear from you</h2>

                        <p className='mt-12 text-[15px] leading-7 text-gray-text'>
                            Baraipara,Jalsuka Road & <br /> Candra, 1750 Gazipur, Bangladesh
                        </p>

                        <p className='mt-6 text-[15px] leading-7 text-gray-text'>
                            +88 01621 616959 <br />
                            hirewave607@gmail.com
                        </p>
                    </div>

                </div>
                {/* border */}
                <div className='border-b border-[#DFDFDF]'></div>

            </div>

        </section>

    );
}

export default OurLocation;