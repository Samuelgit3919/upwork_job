import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Sample = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const data = [
        {
            title: "Superfly",
            description: "Superfly is a platform for creating and sharing videos.",
            image: "https://galajm.com/wp-content/uploads/2024/02/superfly.png",
            link: "/superfly-detail"
        },
        {
            title: "Sofatutor.com",
            description: "",
            image: "https://galajm.com/wp-content/uploads/2024/02/sofatutor.com_.png",
            link: "/sofatutor-detail"
        },
        {
            title: "Other Projects",
            description: "",
            image: "https://galajm.com/wp-content/uploads/2024/02/other-portfolio.png",
            link: "/others-detail"
        }
    ];
    return (
        <section style={{ padding: '0 1rem', margin: '3rem 0' }} className="w-full sm:h-[80vh] px-4 md:px-6 py-10 md:py-16 flex flex-col items-center bg-white">
            {/* NDA Notice */}
            <div data-aos="fade-up" className="max-w-3xl mx-auto mb-8 md:mb-12 px-2 md:px-4 mt-4 md:mt-8">
                <p className="text-center text-[20px] text-gray-700 leading-relaxed">
                    Please be aware that I am unable to showcase certain designs due to non-disclosure agreements (NDAs). Feel free to contact me directly if you're interested in reviewing any newer designs that haven't been updated here yet.
                </p>
            </div>

            {/* Section Heading */}
            <h2 style={{ margin: '2rem 0' }} data-aos="fade-up" className="text-[24px] font-[400] mt-4 md:mt-16 mb-6 md:mb-8 font-serif text-center">
                Some samples of my work
            </h2>

            {/* Sample Grid */}
            <div style={{ margin: '0 auto' }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full ">
                {data.map((item, index) => (
                    <div key={index} className="group">
                        <div className="overflow-hidden rounded-md">
                            <Link to={item.link} title={item.title} className="block">
                                <img
                                    loading="lazy"
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-60 object-cover transform group-hover:scale-105 transition-transform duration-300"
                                />
                            </Link>
                        </div>
                        <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-800 text-start ">
                            <Link
                                to={item.link}
                                className="text-[24px] text-[#666666] transition-colors"
                            >
                                {item.title}
                            </Link>
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Sample;
