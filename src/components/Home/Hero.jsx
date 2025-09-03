import React from 'react';
import HeroImg from "../../assets/heroImg.png";

const Hero = () => {
    return (
        <section style={{ margin: '0 auto', padding: '0 1rem' }} className="mt-10 min-h-screen sm:relative top-22 sm:top-2 px-4 sm:px-6 md:px-16 lg:px-32 py-12 bg-white rounded-2xl flex items-center justify-center font-[outfit]">
            <div style={{ margin: '0 auto' }} className="flex flex-col-reverse md:flex-row items-start sm:items-center justify-center sm:justify-start gap-12 md:gap-24 w-full ">
                {/* Text Content */}
                <article className="max-w-2xl w-full fadeInUp animationDelay-1 px-4 sm:px-0">
                    <h2 className="text-[28px] sm:text-[48px] font-[outfit] font-normal text-[#666666] leading-snug sm:leading-tight">
                        I’m <span className="text-[#DB7F97] font-[600]">Gala</span>, a Product <br className="hidden sm:block" />
                        Designer turning complex problems into <span className="text-[#666666] font-[600]">
                            simple,<br className="hidden sm:block" /> human-centered solutions.
                        </span>
                    </h2>
                </article>


                {/* Image Content */}
                <div className="w-[449px] h-[449px] max-w-xs sm:max-w-sm md:max-w-md flex justify-center items-center fadeInUp animationDelay-1">
                    <img
                        src={HeroImg}
                        alt="Portrait of Gala Jimenez Martini"
                        className="rounded-xl w-full h-auto object-cover"
                        loading="lazy"
                    />
                </div>
            </div>

        </section>


    );
};

export default Hero;
