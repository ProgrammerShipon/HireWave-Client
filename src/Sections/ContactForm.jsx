import SectionTitle from "../Components/SectionTitle";

const ContactForm = () => {
    return (
        <section className="py-20 md:py-[120px]">
            <div className='container'>
                {/* section title */}
                <SectionTitle title="Stay in Touch" para="Send Us a Message" />

                <div className='max-w-[752px] mx-auto text-center '>
                    <form action="#" className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12'>
                        <input
                            className='w-full px-6 py-[18px] rounded-lg border border-[#DFDFDF] outline-none focus:border-green'
                            type="text"
                            name="name"
                            placeholder="Enter your name" />

                        <input
                            className='w-full px-6 py-[18px] rounded-lg border border-[#DFDFDF] outline-none focus:border-green'
                            type="email"
                            name="email"
                            placeholder="Enter your email" />

                        <input
                            className='sm:col-span-2 w-full px-6 py-[18px] rounded-lg border border-[#DFDFDF] outline-none focus:border-green'
                            type="text"
                            name="subject"
                            placeholder="Type your subject" />

                        <textarea
                            className='sm:col-span-2 w-full px-6 py-[18px] rounded-lg border border-[#DFDFDF] outline-none focus:border-green'
                            name="message"
                            rows="6"
                            placeholder='Write your message'></textarea>
                        <button type='submit' className='bg-transparent text-dark hover:text-white px-5 py-[18px] rounded-lg border border-green hover:bg-green duration-300 shadow-xl hover:shadow-green/20 w-full inline-block sm:col-span-2'>Send message</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;