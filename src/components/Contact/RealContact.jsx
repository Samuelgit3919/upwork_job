"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"
import linkednIcon from "../../assets/linkedin-icon.png"
import emailIcon from "../../assets/email-address.png"
import phoneIcon from "../../assets/phone-icon.png"
import HeroImg from "../../assets/heroImg.png";
import Event from "../Home/Event"
import superly from '../../assets/superfly.png';
import sofatutor from '../../assets/sofatutor.com_.png';
import others from '../../assets/other-portfolio.png';


const RealContact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        })
    }, [])
    const style = {
        margin: "5rem auto",
        padding: "0 1rem"
    }

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
        <section style={style} className="w-full  font-[outfit] min-h-screen bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-10 flex flex-col relative top-22 sm:top-0 items-center justify-center gap-8 md:gap-12 max-w-[1241px] mx-auto mb-8 md:mb-16">
            <div className=" text-[#5E5E5E] text-center mx-auto px-4 flex flex-col  gap-3">
                <h1 data-aos="fade-up" className="text-[24px] text-[#666666]  font-[700]">
                    Contact
                </h1>
                <h2 data-aos="fade-up" className="text-[20px] sm:text-[24px] text-[#666666]  font-[700]">
                    Let's Create Something Cool <span className="text-[32px]">⚡</span>
                </h2>
                <p data-aos="fade-up" className="text-[#666666] text-[18px] font-normal  leading-relaxed">
                    Feel free to reach out and let's kickstart a conversation ... whether you have a project in mind, questions about UX, or just want to connect, I'm here and ready to chat! Your ideas and inquiries are always welcome.
                </p>
            </div>

            <div
                style={{ margin: '0 auto' }}
                className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 w-full max-w-[1241px] mt-8"
            >
                {/* Email */}
                <div data-aos="zoom-in" className="flex-1 min-w-[250px] flex flex-col items-center max-w-[396px] max-h-[300px]  text-center transition-transform hover:scale-105">
                    <img
                        src={emailIcon}
                        alt="Email"
                        width={100}
                        height={100}
                        className="mx-auto mb-4"
                        loading="lazy"
                    />
                    <h4 className="text-[#666666] text-[20px] font-semibold mb-2">Email Address</h4>
                    <Link
                        to="mailto:galajimenezm@gmail.com"
                        className="text-[#000000] text-[20px] transition-colors"
                    >
                        galajimenezm@gmail.com
                    </Link>
                </div>

                {/* Phone */}
                <div data-aos="zoom-in" data-aos-delay="200" className="flex-1 flex flex-col items-center min-w-[250px] max-w-[396px] max-h-[300px  text-center transition-transform hover:scale-105">
                    <img
                        src={phoneIcon}
                        alt="Phone"
                        width={100}
                        height={100}
                        className="mx-auto mb-4"
                        loading="lazy"
                    />
                    <h4 className="text-[20px] text-[#666666] font-semibold mb-2">Phone</h4>
                    <Link
                        to="tel:+34744643220"
                        className="text-[#000000] text-[20px] transition-colors"
                    >
                        +34 744 643 220
                    </Link>
                </div>

                {/* LinkedIn */}
                <div data-aos="zoom-in" data-aos-delay="400" className="flex-1 min-w-[250px] max-w-[396px] max-h-[300px flex flex-col items-center  text-center transition-transform hover:scale-105">
                    <img
                        src={linkednIcon}
                        alt="LinkedIn"
                        width={100}
                        height={100}
                        className="mx-auto mb-4"
                        loading="lazy"
                    />
                    <h4 className="text-[20px] text-[#666666] font-semibold mb-2">LinkedIn</h4>
                    <Link
                        to="http://linkedin.com/in/galajimenezmartini"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#000000] text-[20px] transition-colors"
                    >
                        galajimenezmartini
                    </Link>
                </div>
            </div>

            <div style={{ marginTop: '0rem' }} className="">

                <section style={{ margin: '0 auto', padding: '0 1rem' }} className="min-h-screen sm:relative top-22 sm:top-6 px-4 sm:px-6  md:px-14 lg:px-30 py-12 bg-white  rounded-2xl flex flex-col items-center justify-center">
                    <h2 style={{ marginBottom: '1rem' }} className="text-[36px] font-normal text-center">A Bit More About Myself</h2>

                    <div style={{ margin: '0 auto' }} className="flex flex-col-reverse md:flex-row items-start sm:items-start justify-center sm:justify-start gap-10 md:gap-10 w-full ">

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
                            <p className="text-[18px] sm:text-[20px] text-gray-700 mb-8">
                                Let's cut to the chase — here's what you're probably looking for:
                            </p>
                            <ul className="space-y-4 text-gray-800 text-[20px] flex flex-col gap-[8px] pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-16">
                                <li className="flex items-start gap-2 fadeInUp animationDelay-2">
                                    <span role="img" aria-label="brain">🧠</span>
                                    <span> <b>Senior Product Designer </b>with 6+ <b>years of experience</b></span>
                                </li>
                                <li className="flex items-start gap-2 fadeInUp animationDelay-3">
                                    <span role="img" aria-label="globe">🌍</span>
                                    <span>Worked in <b>LATAM, Greece, Spain, and Japan</b></span>
                                </li>
                                <li className="flex items-start gap-2 fadeInUp animationDelay-4">
                                    <span role="img" aria-label="puzzle">🧩</span>
                                    <span>Designed for <b>sports betting, EdTech, and food & beverage industries</b></span>
                                </li>
                                <li className="flex items-start gap-2 fadeInUp animationDelay-5">
                                    <span role="img" aria-label="team">🤝</span>
                                    <span>Collaborated with <b>global, cross-functional teams</b></span>
                                </li>
                                <li className="flex items-start gap-2 fadeInUp animationDelay-6">
                                    <span role="img" aria-label="speech">💬</span>
                                    <span>I speak <b>Spanish, English, and Italian</b></span>
                                </li>
                                <li className="flex items-start gap-2 fadeInUp animationDelay-7">
                                    <span role="img" aria-label="paintbrush">🎨</span>
                                    <span>
                                        I believe <b>design should be intuitive, inclusive, and have a purpose</b>
                                    </span>
                                </li>
                            </ul>
                        </article>

                        {/* Image Content */}
                        <div className="w-[429px] h-[429px] max-w-xs sm:max-w-sm md:max-w-md flex justify-center items-center fadeInUp animationDelay-1">
                            <img
                                src={HeroImg}
                                alt="Portrait of Gala Jimenez Martini"
                                className="rounded-xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>
            </div>

            <div>
                <Event />
            </div>

            <div>

                {/* Section Heading */}
                <h2 style={{ margin: '2rem 0' }} data-aos="fade-up" className="text-[24px] font-normal font-[outfit] text-[#000000] md:text-[24px] mt-4 md:mt-16 mb-6 md:mb-8 font-Nunito text-start">
                    Some samples of my work
                </h2>

                {/* Sample Grid */}
                <div style={{ margin: '0 auto', marginBottom: "2rem" }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full ">
                    {data.map((item, index) => (
                        <div data-aos="zoom-in" data-aos-delay={
                            index === 0 ? "0" : index === 1 ? "200" : index === 2 ? "400" : "0"
                        } key={index} className="group">
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
                            <h3 className="mt-4 text-lg md:text-xl font-normal text-[#000000] text-start ">
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
        </section>
    )
}

export default RealContact
