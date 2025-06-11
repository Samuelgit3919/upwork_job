import { ArrowLeftIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Work = () => {
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
        <div style={{ margin: '0 auto', marginTop: '8rem', padding: '0 1rem' }} className="min-h-screen max-w-[1220px] text-center py-10 px-4 md:px-8 lg:px-16 flex flex-col">
            {/* Back to Home Link */}
            <Link to="/" style={{ marginTop: '0rem', marginBottom: '2rem' }} className='text-pink-400  text-center flex justify-center items-center hover:text-pink-300 transition-colors'>
                <ArrowLeftIcon className='w-8 h-4' />
                Back to home
            </Link>

            {/* Page Heading */}
            <div style={{ margin: '0 auto' }} className="text-center max-w-[1220px] flex flex-col gap-6 items-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">Work</h1>
                <h2 className="text-xl md:text-2xl font-semibold mb-4">Let's Create Something Cool ⚡</h2>
                <p className="text-gray-600 text-base md:text-lg">
                    Please be aware that I am unable to showcase certain designs due to non-disclosure agreements (NDAs). Feel free to contact me directly if you're interested in reviewing any newer designs that haven't been updated here yet.
                </p>
            </div>

            {/* Work Samples */}
            <h2 style={{ margin: '2rem 0' }} className="text-xl md:text-2xl font-medium text-center mb-8 font-serif">
                Some samples of my work
            </h2>

            <div style={{ margin: '0 auto' }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
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
                        <h3 className="mt-4 text-lg md:text-xl font-semibold text-gray-800 text-center">
                            <Link
                                to={item.link}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {item.title}
                            </Link>
                        </h3>
                    </div>
                ))}
            </div>

            {/* Call to Action */}
            <div style={{ margin: '0 auto', marginTop: '4rem' }} className='flex text-center items-center flex-col gap-6'>
                <div className="animate-fadeInUp">
                    <h3 className="text-3xl font-semibold">Let's Create Something Extraordinary ⚡</h3>
                </div>
                <div className="animate-fadeInUp max-w-2xl">
                    <p className="text-lg text-gray-600">
                        Ready to elevate your user experience? Let's collaborate! Reach out today and let's bring your vision to life.
                    </p>
                </div>
                <div style={{ marginTop: '1rem' }} className="animate-fadeInUp">
                    <Link
                        style={{ padding: '0.5rem 2rem', fontSize: '1rem', marginBottom: '3rem' }}
                        to="/realContact"
                        className="inline-block bg-pink-300 text-white font-medium rounded-md hover:bg-pink-400 transition-colors duration-300"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Work;
