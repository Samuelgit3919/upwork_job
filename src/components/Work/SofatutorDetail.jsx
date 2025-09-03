import { ArrowLeftIcon } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import resofa1 from '../../assets/resofa1.png';
import resofa2 from '../../assets/resofa2.png'
import Finalui from "../../assets/reOthers_6.png"
import originalInfo from "../../assets/reOthers1.png"
import mobileInfo from "../../assets/reOthers_3.png"
import sof7 from '../../assets/sofa7.png';
import Originan_2 from "../../assets/original_2.png"


const SofaDetail = () => {
    return (
        <div style={{ margin: '0 auto', marginTop: '6rem', padding: '0 1rem' }} className="container font-[outfit] max-w-[1090px] mx-auto mt-32 px-4 flex flex-col items-center">

            {/* Back to Home Link */}
            <Link to="/work" style={{ marginTop: '0rem', marginBottom: '2rem' }} className='text-[#DB7F97] text-[18px] text-center flex justify-center font-outfit items-center hover:text-pink-300 transition-colors'>
                <ArrowLeftIcon className='w-8 h-4' />
                Back to work
            </Link>

            {/* Main Heading */}
            <div style={{ margin: '0 auto', paddingBottom: '2rem' }} className="text-center mb-12 flex flex-col items-center gap-6">
                <h2 className="text-[32px] text-[#000000] font-normal  mb-2">sofatutor.com</h2>
                <h3 className="text-[24px] font-[medium] text-[#666666]">Infopage - Effective Numbers redesign (UX-UI)</h3>
            </div>

            {/* Context Section */}
            <div className="w-full font-outfit max-w-5xl text-left py-10">
                <div className="flex flex-col gap-8">
                    <div>
                        <h5 className="text-[24px] font-normal">Context:</h5>
                        <p className="text-[20px]  font-normal text-gray-700 leading-relaxed">
                            Periodically, sofatutor.com perform research studies to see the effectiveness of our platform on our users, the results are shown in a page called the Infopage.
                        </p>
                        <p className="text-[20px]  font-normal text-gray-700 leading-relaxed">
                            A <span className="font-[600]">new research was done in between December 2022 and February 2023</span> and so we decided to <span className="font-[600]">update the Infopage with the new numbers from this research</span>.
                        </p>
                    </div>
                </div>

                {/* Main Image */}
                <div style={{ margin: "2rem auto" }} className="mt-6 gap-8 flex flex-col justify-center items-center">
                    <div className="w-full flex flex-col md:flex-row justify-center items-start gap-8">
                        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                            <h5 className="text-[24px] font-normal">Ideation Session:</h5>
                            <p className="text-[20px] font-normal text-gray-700 leading-relaxed">
                                We created an ideation session to get some ideas on how to improve the product. We involved different team members (not only designers) to participate and share their point of view.
                                In this session, we benchmarked and brainstormed ideas to improve the Infopage.
                            </p>
                        </div>
                        <img
                            src={resofa2}
                            alt="Sofa design concept"
                            className="w-full md:w-1/2 max-w-[95%] sm:max-w-5xl h-auto mt-8 md:mt-0 rounded-lg shadow-md"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>

                    <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
                        <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                            <h5 className="text-[24px] font-normal">User Journey:</h5>
                            <p className="text-[20px] font-normal text-gray-700 leading-relaxed">
                                I mapped the user journey to understand <span className="font-[600]">how users navigated to a specific section of the site</span>, uncovering insights into how effectively our platform supported children’s learning, while also <span className="font-[600]">evaluating the ease of conversion from that point.</span>
                            </p>
                        </div>
                        <img
                            src={resofa1}
                            alt=""
                            className="w-full md:w-1/2"
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                </div>
            </div>

            {/* Low fedality ui Section */}
            <div style={{ margin: '3rem 0' }} className='flex flex-col gap-8'>
                <div className="w-full max-w-5xl text-left mt-16">
                    <h5 className="text-[24px] font-normal mb-4">Low-Fidelity UI:</h5>
                    <p className="text-[20px] font-normal text-gray-700 leading-relaxed">
                        Taking in consideration all the information gathered from the ideation session, I prepared a low fidelity UI with all <span className='font-[600]'>the key elements that the new Infopage should have.</span>
                    </p>
                </div>

                <div className="w-full max-w-5xl text-left mt-16">
                    <h5 className="text-[24px] font-normal mb-4">Final UI:</h5>
                    <p className='text-[20px] font-normal text-gray-700 leading-relaxed'>After the approval of the low-fi mockup I worked on a high fidelity design.</p>
                    <p className="text-[20px] font-[600] text-gray-700 leading-relaxed">
                        This design took in consideration all the elements that answered the main goal we had during the ideation session
                    </p>
                </div>
            </div>

            {/* Responsive Design Images */}
            <div className="flex flex-col lg:flex-row items-start justify-center gap-6 mt-8 w-full max-w-6xl flex-wrap">
                <div className="flex flex-col sm:flex-row lg:flex-row justify-center items-center lg:items-start gap-6 w-full">
                    {/* Left Column */}
                    <div className="flex flex-col sm:flex-row lg:flex-col gap-6 items-center lg:items-start">
                        <div className="w-full sm:w-auto">
                            <h2 style={{ marginBottom: '1rem' }} className="text-center text-[#666666] font-normal  text-[14px] sm:text-[16px] font-[outfit] mb-4">
                                1. Original Infopage
                            </h2>
                            <img
                                src={originalInfo}
                                alt="Low Fi UI 1"
                                className="w-full max-w-[307px] rounded-md"
                            />
                        </div>
                        <div className="w-full sm:w-auto">
                            <h2 style={{ marginBottom: '1rem' }} className="text-center text-[#666666] font-normal text-[14px] sm:text-[16px] font-[outfit] mb-4">
                                2. First Wireframe
                            </h2>
                            <img
                                src={Originan_2}
                                alt="Low Fi UI 1"
                                className="w-full max-w-[307px] border-[2px] border-[#666666]"
                            />
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="w-full">
                        <h2 style={{ marginBottom: '1rem' }} className="text-center text-[#666666] font-normal text-[14px] sm:text-[16px] font-[outfit] mb-4">
                            3. Final UI
                        </h2>
                        <div className="flex flex-col sm:flex-row gap-6 items-center">
                            <div className="w-full max-w-[246px] h-auto overflow-hidden">
                                <img
                                    src={mobileInfo}
                                    alt="Responsive 2"
                                    className="w-full border-[5px] border-[#DB7FA4] rounded-[8px] shadow-md"
                                />
                            </div>
                            <div className="relative w-full max-w-[503px]">
                                <img
                                    src={Finalui}
                                    alt="Responsive 1"
                                    className="w-full border-[5px] border-[#DB7FA4] rounded-[8px] shadow-md"
                                />
                                <Link
                                    to="https://www.sofatutor.com/erfahrungen"
                                    target="_blank"
                                    className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6  md:top-144 md:transform md:translate-x-28"
                                >
                                    <img
                                        src={sof7}
                                        alt="Back to Home"
                                        className="w-[150px] sm:w-[200px] md:w-[250px] h-auto z-10"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Call to Action */}
            <div style={{ margin: '0 auto', marginTop: '4rem' }} className='flex text-center items-center flex-col gap-6'>
                <div className="animate-fadeInUp">
                    <h3 className="text-[24px] text-[#000000] font-normal">Let's Create Something Extraordinary ⚡</h3>
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
