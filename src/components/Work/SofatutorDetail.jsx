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
            <Link to="/work" style={{ marginTop: '0rem', marginBottom: '2rem' }} className='text-[#DB7F97] text-[18px] text-center flex justify-center items-center hover:text-pink-300 transition-colors'>
                <ArrowLeftIcon className='w-8 h-4' />
                Back to work
            </Link>

            {/* Main Heading */}
            <div style={{ margin: '0 auto', marginTop: '2rem', paddingBottom: '2rem' }} className="text-center mb-12 flex flex-col items-center gap-6">
                <h2 className="text-[20px] text-[#000000] font-[400]  mb-2">sofatutor.com</h2>
                <h3 className="text-[20px] font-[medium] text-[#666666]">Infopage - Effective Numbers redesign (UX-UI)</h3>
            </div>

            {/* Context Section */}
            <div className="w-full max-w-5xl text-left py-10">
                <div className='flex flex-col gap-8'>
                    <div>
                        <h5 className="text-[20px] font-[400]">Context:</h5>
                        <p className="text-[20px] font-[400] text-gray-700 leading-relaxed">
                            Periodically, sofatutor.com perform research studies to see the effectiveness of our platform on our users, the results are shown in a page called the Infopage.
                            A new research was done in between December 2022 and February 2023 and so we decided to update the Infopage with the new numbers from this research.
                        </p>
                    </div>

                    <div>
                        <h5 className="text-[20px] font-[400]">Ideation Session:</h5>
                        <p className="text-[20px] font-[400] text-gray-700 leading-relaxed">
                            We created an ideation session to get some ideas on how to improve the product. We involved different team members (not only designers) to participate and share their point of view.
                            In this session, we benchmarked and brainstormed ideas to improve the Infopage.
                        </p>
                    </div>
                </div>

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

            {/* Low fedality ui Section */}
            <div style={{ margin: '3rem 0' }} className='flex flex-col gap-8'>
                <div className="w-full max-w-5xl text-left mt-16">
                    <h5 className="text-[20px] font-[400] mb-4">Low-Fidelity UI:</h5>
                    <p className="text-[20px] font-[400] text-gray-700 leading-relaxed">
                        Taking in consideration all the information gathered from the ideation session, I prepared a low fidelity UI with all the key elements that the new Infopage should have.
                    </p>
                </div>

                <div className="w-full max-w-5xl text-left mt-16">
                    <h5 className="text-[20px] font-[400] mb-4">Final UI:</h5>
                    <p className="text-[20px] font-[400] text-gray-700 leading-relaxed">
                        After the approval of the low-fi mockup I worked on a high fidelity design. This design took in consideration all the elements that answered the main goal we had during the ideation session
                    </p>
                </div>
            </div>

            {/* Lo-fi Images */}
            <div style={{ margin: '0 auto' }} className='flex flex-col sm:flex-row  items-center sm:items-start justify-center gap-8 mt-12 flex-wrap'>
                <img src={sof1} alt="Low Fi UI 1" className="w-full max-w-[307px] sm:w-1/3  max-h-[710px] rounded-md" />
                <img src={sofa2} alt="Low Fi UI 2" className="w-full max-w-[304px] sm:w-1/3  h-[1104px] rounded-md" />
                <img src={sofa3} alt="Low Fi UI 3" className="w-full max-w-[503px] sm:w-1/3  h-[1104px] rounded-md" />
            </div>

            {/* Responsive Design Section */}
            <div style={{ margin: '4rem 0' }} className="w-full max-w-5xl text-left mt-16">
                <h5 className="text-[20px] text-[#000000] text-center font-[400] mb-4">Responsive Design:</h5>
                {/* <p className="text-lg font-[400]  text-gray-700 leading-relaxed">
                    The design adapts gracefully to different screen sizes, ensuring a seamless experience on mobile, tablet, and desktop devices.
                </p> */}
            </div>

            {/* Responsive Design Images */}
            <div className='flex flex-col lg:flex-row items-start justify-center gap-8 mt-8 w-full max-w-6xl flex-wrap'>
                <div style={{ margin: '0 auto' }} className='flex flex-col sm:flex-row justify-center items-center sm:items-start gap-12 w-full lg:w-auto'>
                    <img src="https://galajm.com/wp-content/uploads/2024/02/original-info-ipad.png" alt="Responsive 1" className="w-[374px] h-[2354px] rounded-md shadow-md" />
                    <img src="https://galajm.com/wp-content/uploads/2024/02/original-info-mobile.png" alt="Responsive 2" className="w-[246px] h-[2518px] rounded-md shadow-md" />
                </div>

                {/* Back to Home Image Link */}
                <Link to="/" className='mt-8 lg:mt-0 w-full sm:w-auto flex justify-center'>
                    <img src={sof7} alt="Back to Home" className="w-[290.85px] h-[290.85px] rounded-md" />
                </Link>
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

export default SofaDetail;
