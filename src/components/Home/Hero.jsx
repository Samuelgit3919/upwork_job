import React from 'react';
import HeroImg from "../../assets/heroImg.png";

const Hero = () => {
    return (
        <section style={{ margin: '0 auto', padding: '0 1rem' }} className="mt-12 min-h-screen sm:relative top-22 sm:top-0 px-4 sm:px-6 md:px-16 lg:px-32 py-12 bg-white rounded-2xl flex items-center justify-center">
            <div style={{ margin: '0 auto' }} className="flex flex-col-reverse md:flex-row items-start sm:items-start justify-center sm:justify-start gap-12 md:gap-24 w-full ">

                {/* Text Content */}
                <article className="max-w-2xl  w-full fadeInUp animationDelay-1">
                    <div className="mb-2">
                        <span className="text-[28px] font-light text-gray-400">hi <span role='img' aria-label='wave'>👋</span></span>
                    </div>
                    <h1 style={{ marginTop: '1.5rem', marginBottom: '1.5rem' }} className="leading-tight mt-8 mb-12">
                        <span className="block text-4xl sm:text-5xl md:text-6xl  text-gray-700">
                            I'm <span className="text-[#DB7F97]">Gala</span>
                        </span>
                    </h1>
                    <p className="text-[20px] text-gray-700 mb-8">
                        Let's cut to the chase — here's what you're probably looking for:
                    </p>
                    <ul className="space-y-4 text-gray-800 text-[20px] flex flex-col gap-[8px] pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-16">
                        <li className="flex items-start gap-2 fadeInUp animationDelay-2">
                            <span role="img" aria-label="brain">🧠</span>
                            <span>Senior Product Designer with 5+ years of experience</span>
                        </li>
                        <li className="flex items-start gap-2 fadeInUp animationDelay-3">
                            <span role="img" aria-label="globe">🌍</span>
                            <span>Worked in Greece, Spain, and Japan</span>
                        </li>
                        <li className="flex items-start gap-2 fadeInUp animationDelay-4">
                            <span role="img" aria-label="puzzle">🧩</span>
                            <span>Designed for sports betting, EdTech, and food & beverage industries</span>
                        </li>
                        <li className="flex items-start gap-2 fadeInUp animationDelay-5">
                            <span role="img" aria-label="team">🤝</span>
                            <span>Collaborated with global, cross-functional teams (yes, I've mastered the art of timezone math)</span>
                        </li>
                        <li className="flex items-start gap-2 fadeInUp animationDelay-6">
                            <span role="img" aria-label="speech">💬</span>
                            <span>I speak Spanish, English, and Italian</span>
                        </li>
                        <li className="flex items-start gap-2 fadeInUp animationDelay-7">
                            <span role="img" aria-label="paintbrush">🎨</span>
                            <span>
                                I believe design should be intuitive, inclusive, and have a purpose
                                <br className="hidden md:block" />
                                <em className="text-sm text-gray-500"> (preferably not "because the CEO liked it")</em>
                            </span>
                        </li>
                        <li className="flex items-start gap-2 fadeInUp animationDelay-8">
                            <span role="img" aria-label="coffee">🤓</span>
                            <span>Fueled by curiosity, coffee, and the occasional "what if we tried this..." moment</span>
                        </li>
                    </ul>
                </article>

                {/* Image Content */}
                <div className="w-[449px] h-[449px] max-w-xs sm:max-w-sm md:max-w-md flex justify-center items-center fadeInUp animationDelay-1">
                    <img
                        src={HeroImg}
                        alt="Portrait of Gala Jimenez Martini"
                        className="rounded-xl w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
