import { ArrowLeftIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import sofa1 from '../../assets/sofa1.png';
import sof1 from "../../assets/sof1origial.png";
import sofa2 from "../../assets/sofa2.png";
import sofa3 from "../../assets/sof3.png";
import sof7 from '../../assets/sofa7.png';

const SofaDetail = () => {
    return (
        <div style={{ margin: '0 auto', marginTop: '6rem', padding: '0 1rem' }} className="container max-w-[1090px] mx-auto mt-32 px-4 flex flex-col items-center">

            {/* Back to Home Link */}
            <Link
                to="/work"
                className="text-pink-400 flex items-center gap-2 hover:text-pink-300 transition-colors mb-8"
            >
                <ArrowLeftIcon className="w-5 h-5" />
                Back to work
            </Link>

            {/* Main Heading */}
            <div style={{ margin: '0 auto', marginTop: '2rem' }} className="text-center mb-12 flex flex-col items-center gap-6">
                <h2 className="text-[24px] text-[#3F3F3F]  mb-2">sofatutor.com</h2>
                <h3 className="text-[24px] font-medium text-[#666666]">Infopage - Effective Numbers redesign (UX-UI)</h3>
            </div>

            {/* Context Section */}
            <div className="w-full max-w-5xl text-left py-10">
                <h5 className="text-2xl mb-4">Context:</h5>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Sofa is a design concept application focused on providing a delightful user experience for home furniture shopping. This case study outlines the design process, challenges, and solutions.
                </p>

                {/* Main Image */}
                <div style={{ margin: '2rem auto' }} className="mt-6 flex justify-center">
                    <img
                        src={sofa1}
                        alt="Sofa design concept"
                        className="w-full max-w-[95%] sm:max-w-5xl h-auto mt-8 rounded-lg shadow-md"
                        loading="lazy"
                        decoding="async"
                    />
                </div>
            </div>

            {/* Lo-fi Wireframes Section */}
            <div style={{ margin: '4rem 0' }} className="w-full max-w-5xl text-left mt-16">
                <h5 className="text-2xl mb-4">Lo-fi Wireframes:</h5>
                <p className="text-lg text-gray-700 leading-relaxed">
                    Initial wireframes were sketched to determine the application's flow, focusing on user-friendly navigation and layout.
                </p>
            </div>

            {/* Lo-fi Images */}
            <div style={{ margin: '0 auto' }} className='flex flex-col sm:flex-row  items-center sm:items-start justify-center gap-8 mt-12 flex-wrap'>
                <img src={sof1} alt="Low Fi UI 1" className="w-full max-w-[80%] sm:w-1/3 max-w-xs h-auto rounded-md shadow-md" />
                <img src={sofa2} alt="Low Fi UI 2" className="w-full max-w-[80%] sm:w-1/3 max-w-xs h-auto rounded-md shadow-md" />
                <img src={sofa3} alt="Low Fi UI 3" className="w-full max-w-[80%] sm:w-1/3 max-w-sm h-auto rounded-md shadow-md" />
            </div>

            {/* Responsive Design Section */}
            <div style={{ margin: '4rem 0' }} className="w-full max-w-5xl text-left mt-16">
                <h5 className="text-2xl mb-4">Responsive Design:</h5>
                <p className="text-lg text-gray-700 leading-relaxed">
                    The design adapts gracefully to different screen sizes, ensuring a seamless experience on mobile, tablet, and desktop devices.
                </p>
            </div>

            {/* Responsive Design Images */}
            <div className='flex flex-col lg:flex-row items-start justify-center gap-8 mt-8 w-full max-w-6xl flex-wrap'>
                <div style={{ margin: '0 auto' }} className='flex flex-col sm:flex-row justify-center items-center sm:items-start gap-12 w-full lg:w-auto'>
                    <img src="https://galajm.com/wp-content/uploads/2024/02/original-info-ipad.png" alt="Responsive 1" className="w-full  sm:w-1/2 max-w-xs h-auto rounded-md shadow-md" />
                    <img src="https://galajm.com/wp-content/uploads/2024/02/original-info-mobile.png" alt="Responsive 2" className="w-full  sm:w-1/2 max-w-xs h-auto sm:max-h-[1650px] rounded-md shadow-md" />
                </div>

                {/* Back to Home Image Link */}
                <Link to="/" className='mt-8 lg:mt-0 w-full sm:w-auto flex justify-center'>
                    <img src={sof7} alt="Back to Home" className="w-full max-w-[80%] sm:max-w-xs h-auto rounded-md" />
                </Link>
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
                        to="/contact"
                        className="inline-block bg-pink-300 text-white font-medium rounded-md hover:bg-pink-400 transition-colors duration-300"
                    >
                        Contact
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SofaDetail;
