import { ArrowLeftIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import super1 from '../../assets/superOriginal.png';
import super2 from '../../assets/fly1.png';
import super4 from '../../assets/fly2.png';
// import super2 from '../../assets/fly2.png';
import super3 from '../../assets/super3.png';

const SuperFlyDetail = () => {
    return (
        <div style={{ margin: '0 auto', marginTop: '6rem', padding: '0 1rem' }} className="container max-w-[1090px] mx-auto mt-32 px-4 flex flex-col items-center">
            {/* Back to Home Link */}
            <Link to="/work" style={{ marginTop: '0rem', marginBottom: '2rem' }} className='text-[#DB7F97] text-[18px] text-center flex justify-center items-center hover:text-pink-300 transition-colors'>
                <ArrowLeftIcon className='w-8 h-4' />
                Back to work
            </Link>

            {/* Main Heading */}
            <div style={{ margin: '0 auto' }} className="text-center flex flex-col gap-8 mb-12">
                <h4 className="text-[20px] font-[400] mb-4 text-[#000000]">White Hat Gaming</h4>
                <h4 style={{ marginBottom: '2rem' }} className="text-[20px] text-[#666666]  mb-4">Superfly - Rebranding (UI)</h4>
            </div>

            {/* Context Section */}
            <div className="w-full max-w-5xl text-left py-10">
                <h5 className="text-[20px] mb-4">Context:</h5>
                <p className="text-[20px]  text-[#000000] leading-relaxed">
                    Superfly partners was a website designed while I was working in White Hat Gaming.
                    The main goal of this project was the re-branding of the company's partner site.
                </p>

                {/* Full Design Image */}
                <div style={{ margin: '2rem auto' }} className="mt-6 w-full max-w-[635px] flex justify-center">
                    <img
                        src={super1}
                        alt="Superfly full design"
                        className="w-full mx-auto object-contain"
                        loading="lazy"
                        height={1650}
                        decoding="async"
                    />
                </div>
            </div>

            {/* Redesign Section */}
            <div style={{ margin: '4rem 0' }} className="w-full max-w-5xl text-left mt-16">
                <h5 className="text-[20px] md:text-xl mb-4">Redesign:</h5>
                <p className="text-[20px]  text-[#000000] leading-relaxed">
                    The brand was focusing on a 1970’s disco approach. I was in charge of creating the library,
                    the design system, and designing the site. Designs were provided for desktop and mobile and
                    were created in Figma. I was also responsible for building the library and components for this project.
                </p>
            </div>

            {/* Images Section */}
            <div className="w-full max-w-3xl mt-12 flex flex-col md:flex-row gap-12 items-start justify-start">
                {/* Mobile Design Image */}
                <img
                    src={super4}
                    alt="Superfly mobile homepage"
                    style={{ margin: '0 auto' }}
                    className="w-full md:w-1/2 object-contain"
                    loading="lazy"
                    decoding="async"
                    srcSet="https://galajm.com/wp-content/uploads/2024/02/superfly-homepage-264x1024.png 264w, https://galajm.com/wp-content/uploads/2024/02/superfly-homepage-77x300.png 77w"
                    sizes="(max-width: 585px) 100vw, 264px"
                />

                {/* Guidelines & Components */}
                <div className="flex flex-col gap-4 w-full md:w-1/2">
                    <img
                        src={super2}
                        alt="Superfly guidelines and components"
                        className="w-full object-contain"
                        loading="lazy"
                        decoding="async"
                        sizes="(max-width: 585px) 100vw, 1024px"
                    />
                    <img
                        src={super3}
                        className="w-full object-contain mt-4"
                        alt=""
                        loading="lazy"
                        width={585}
                        height={248}
                        decoding="async"
                    />
                </div>
            </div>

            {/* Call to Action */}
            <div style={{ margin: '0 auto', marginTop: '4rem' }} className='flex text-center items-center flex-col gap-6'>
                <div className="animate-fadeInUp">
                    <h3 className="text-[24px] text-[#000000] font-[400]">Let's Create Something Extraordinary ⚡</h3>
                </div>
                <div className="animate-fadeInUp w-full">
                    <p className="text-[18px] text-[#000000]">
                        Ready to elevate your user experience? Let's collaborate! Reach out today and let's bring your vision to life.
                    </p>
                </div>
                <div style={{ marginTop: '1rem' }} className="animate-fadeInUp">
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

export default SuperFlyDetail;
