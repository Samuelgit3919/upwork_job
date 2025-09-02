import { ArrowLeftIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import superly from '../../assets/superfly.png';
import sofatutor from '../../assets/sofatutor.com_.png';
import others from '../../assets/other-portfolio.png';

const Work = () => {
    const data = [
        {
            title: "Sofatutor.com",
            description: "",
            image: sofatutor,
            link: "/sofatutor-detail"
        },
        {
            title: "Superfly",
            description: "Superfly is a platform for creating and sharing videos.",
            image: superly,
            link: "/superfly-detail"
        },
        {
            title: "Other Projects",
            description: "",
            image: others,
            link: "/others-detail"
        }
    ];

    return (
        <div style={{ margin: '0 auto', marginTop: '6rem', padding: '0 1rem' }} className="min-h-screen max-w-[1220px] text-center py-10 px-4 md:px-8 lg:px-16 flex flex-col">
            {/* Back to Home Link */}
            <Link to="/" style={{ marginTop: '0rem', marginBottom: '2rem' }} className='text-[#DB7F97] text-[18px] text-center flex justify-center font-outfit font-normal items-center hover:text-pink-300 transition-colors'>
                <ArrowLeftIcon className='w-8 h-4' />
                Back to home
            </Link>

            {/* Page Heading */}
            <div style={{ margin: '0 auto' }} className="text-center  flex flex-col gap-6 items-center mb-12">
                <h1 className="text-[24px] font-normal font-outfit text-center mb-4 text-[#000000]">Work</h1>
                <h2 className="text-[24px] font-normal font-outfit text-[#666666]  mb-4">Let's Create Something Cool ⚡</h2>
                <p className="text-[#666666] font-normal font-outfit text-center text-[23px]">
                    Please be aware that I am unable to showcase certain designs due to non-disclosure agreements (NDAs). Feel free to contact me directly if you're interested in reviewing any newer designs that haven't been updated here yet.
                </p>
            </div>

            {/* Work Samples */}
            <div style={{ marginTop: "3rem" }}>

                <h2 style={{ margin: '2rem 0' }} className="text-[24px] font-[400] mt-4 md:mt-16 mb-6 md:mb-8 font-Nunito text-center">
                    Some samples of my work
                </h2>

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
                            <h3 className="mt-4 text-lg md:text-xl font-[400] text-[#000000] text-start ">
                                <Link
                                    to={item.link}
                                    className="text-[20px] text-[#000000] transition-colors"
                                >
                                    {item.title}
                                </Link>
                            </h3>
                        </div>
                    ))}
                </div>
            </div>

            {/* Call to Action */}
            <div style={{ margin: '0 auto', marginTop: '4rem' }} className='flex text-center items-center flex-col gap-6'>
                <div className="animate-fadeInUp">
                    <h3 className="text-[23px] text-[#000000] font-normal font-outfit">Let's Create Something Extraordinary ⚡</h3>
                </div>
                <div className="animate-fadeInUp w-full">
                    <p className="text-[18px] font-outfit text-[#000000]">
                        Ready to elevate your user experience? Let's collaborate! Reach out today and let's bring your vision to life.
                    </p>
                </div>
                <div style={{ marginTop: '1rem' }} className="animate-fadeInUp font-outfit">
                    <Link
                        style={{ padding: '8px 28px', fontSize: '20px', marginBottom: '3rem' }}
                        to="/realContact"
                        className="inline-block bg-[#DB7F97] text-white font-[700] rounded-md transition-colors duration-300"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Work;
