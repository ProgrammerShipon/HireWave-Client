import { useRef } from "react";
import SectionTitle from "../Components/SectionTitle";
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";

const ContactForm = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_x57ut6b', 'template_pxiq1dk', form.current, 'DioDGFxS4AvpATgKp')
            .then((result) => {
                console.log('Message Sending status: ', result.text);
                e.target.reset()
                toast.success('Message sent successfully.');
            }, (error) => {
                console.log(error.text);
            });

    };
    return (
        <section className="py-20 md:py-[120px]">
            <div className='container'>
                {/* section title */}
                <SectionTitle title="Stay in Touch" para="Send Us a Message" />

                <div className='max-w-[752px] mx-auto text-center '>
                    <form ref={form} onSubmit={sendEmail} className='grid grid-cols-1 sm:grid-cols-2 gap-6 mt-12'>
                        <input
                            className='w-full px-6 py-[18px] rounded-lg border border-[#DFDFDF] outline-none focus:border-green'
                            type="text"
                            name="from_name"
                            placeholder="Enter your name" 
                            required
                        />

                        <input
                            className='w-full px-6 py-[18px] rounded-lg border border-[#DFDFDF] outline-none focus:border-green'
                            type="email"
                            name="from_email"
                            placeholder="Enter your email" 
                            required
                        />

                        <input
                            className='sm:col-span-2 w-full px-6 py-[18px] rounded-lg border border-[#DFDFDF] outline-none focus:border-green'
                            type="text"
                            name="subject"
                            placeholder="Type your subject" 
                            required
                        />

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