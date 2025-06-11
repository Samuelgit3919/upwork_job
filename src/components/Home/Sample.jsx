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
        <section style={{ padding: '0 1rem' }} className="w-full min-h-screen px-4 md:px-6 py-10 md:py-16 flex flex-col items-center bg-white">
            {/* NDA Notice */}
            <div data-aos="fade-up" className="max-w-3xl mx-auto mb-8 md:mb-12 px-2 md:px-4 mt-4 md:mt-8">
                <p className="text-center text-base md:text-lg text-gray-700 leading-relaxed">
                    Please be aware that I am unable to showcase certain designs due to non-disclosure agreements (NDAs). Feel free to contact me directly if you're interested in reviewing any newer designs that haven't been updated here yet.
                </p>
            </div>

            {/* Section Heading */}
            <h2 data-aos="fade-up" className="text-xl md:text-3xl mt-4 md:mt-16 mb-6 md:mb-8 font-serif font-medium text-center">
                Some samples of my work
            </h2>

            {/* Sample Grid */}
            <div className="w-full max-w-6xl mx-auto flex flex-col p-0 md:p-2.5">
                <div className="flex flex-col gap-5">
                    {/* Portfolio Items Section */}
                    <div className="w-full">
                        <div className="portfolio-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                            {/* Superfly Project */}
                            {data.map((item, index) => (

                                <div key={index} className="portfolio-item group" data-aos="fade-up">
                                    <div className="portfolio-thumbnail overflow-hidden rounded-lg h-68 md:h-64">
                                        <Link
                                            to={item.link}
                                            title={item.title}
                                            className="block hover:opacity-90 transition-opacity h-full"
                                        >
                                            <img
                                                loading="lazy"
                                                decoding="async"
                                                width={396}
                                                height={268}
                                                src={item.image}
                                                className="w-full h-full object-contain transition-transform group-hover:scale-105"
                                                alt="Superfly project"
                                            />
                                        </Link>
                                    </div>
                                    <h2 className="portfolio-title mt-3 text-lg md:text-xl font-semibold text-start">
                                        <Link
                                            to={item.link}
                                            title="Superfly"
                                            className="text-gray-800 hover:text-blue-600 transition-colors"
                                        >
                                            {item.title}
                                        </Link>
                                    </h2>
                                </div>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sample;
