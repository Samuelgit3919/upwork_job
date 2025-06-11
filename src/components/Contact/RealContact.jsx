import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';



const RealContact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section style={{ margin: '0 auto', marginTop: '6rem', marginBottom: '4rem', padding: '0 1rem' }} className="w-full min-h-screen  bg-white py-16 px-4 flex flex-col items-center justify-center gap-12">
            <div className="max-w-4xl text-center mx-auto px-4 flex flex-col gap-5">
                <h1 data-aos="fade-down" className="text-4xl font-bold">
                    Contact
                </h1>
                <h2 data-aos="fade-up" className="text-2xl font-semibold">
                    Let's Create Something Cool ⚡
                </h2>
                <p data-aos="fade-up" className="text-gray-600 leading-relaxed">
                    Feel free to reach out and let's kickstart a conversation – whether you have a project in mind,
                    questions about UX, or just want to connect. Your ideas and inquiries are always welcome!
                </p>
            </div>

            <div
                style={{ margin: '0 auto' }}
                className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 w-full max-w-6xl mt-8"
            >
                {/* Email */}
                <div data-aos="zoom-in" className="flex-1 min-w-[250px] flex flex-col items-center max-w-[300px]  text-center transition-transform hover:scale-105">
                    <img
                        src="https://galajm.com/wp-content/uploads/2024/02/email-address.png"
                        alt="Email"
                        width={100}
                        height={100}
                        className="mx-auto mb-4"
                        loading="lazy"
                    />
                    <h4 className="text-xl font-semibold mb-2">Email Address</h4>
                    <Link
                        to="mailto:galajimenezm@gmail.com"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        galajimenezm@gmail.com
                    </Link>
                </div>

                {/* Phone */}
                <div data-aos="zoom-in" data-aos-delay="200" className="flex-1 flex flex-col items-center min-w-[250px] max-w-[300px]  text-center transition-transform hover:scale-105">
                    <img
                        src="https://galajm.com/wp-content/uploads/2024/02/phone-icon.png"
                        alt="Phone"
                        width={100}
                        height={100}
                        className="mx-auto mb-4"
                        loading="lazy"
                    />
                    <h4 className="text-xl font-semibold mb-2">Phone</h4>
                    <Link
                        to="tel:+34744643220"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        +34 744 643 220
                    </Link>
                </div>

                {/* LinkedIn */}
                <div data-aos="zoom-in" data-aos-delay="400" className="flex-1 min-w-[250px] max-w-[300px] flex flex-col items-center  text-center transition-transform hover:scale-105">
                    <img
                        src="https://galajm.com/wp-content/uploads/2024/02/linkedin-icon.png"
                        alt="LinkedIn"
                        width={100}
                        height={100}
                        className="mx-auto mb-4"
                        loading="lazy"
                    />
                    <h4 className="text-xl font-semibold mb-2">LinkedIn</h4>
                    <Link
                        to="http://linkedin.com/in/galajimenezmartini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-800 transition-colors"
                    >
                        galajimenezmartini
                    </Link>
                </div>
            </div>


        </section>
    );
};

export default RealContact;
