"use client"

import { useEffect } from "react"
import { Link } from "react-router-dom"
import AOS from "aos"
import "aos/dist/aos.css"

const RealContact = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            easing: "ease-in-out",
        })
    }, [])

    return (
        <section style={{ padding: '0 1rem' }} className="w-full min-h-screen bg-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16 flex flex-col relative top-22 sm:top-0 items-center justify-center gap-8 md:gap-12 max-w-[1600px] mx-auto mb-8 md:mb-16">
            <div className="max-w-4xl text-[#5E5E5E] text-center mx-auto px-4 flex flex-col  gap-5">
                <h1 data-aos="fade-down" className="text-[24px] text-[#000000]  font-[400]">
                    Contact
                </h1>
                <h2 data-aos="fade-up" className="text-[20px] text-[#666666] font-[400]">
                    Let's Create Something Cool ⚡
                </h2>
                <p data-aos="fade-up" className="text-[#000000] text-[20px] font-[400]  leading-relaxed">
                    Feel free to reach out and let's kickstart a conversation – whether you have a project in mind,
                    questions about UX, or just want to connect. Your ideas and inquiries are always welcome!
                </p>
            </div>

            <div
                style={{ margin: '0 auto' }}
                className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-10 w-full max-w-6xl mt-8"
            >
                {/* Email */}
                <div data-aos="zoom-in" className="flex-1 min-w-[250px] flex flex-col items-center max-w-[300px]  text-center transition-transform hover:scale-105">
                    <img
                        src="https://galajm.com/wp-content/uploads/2024/02/email-address.png"
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
                <div data-aos="zoom-in" data-aos-delay="200" className="flex-1 flex flex-col items-center min-w-[250px] max-w-[300px]  text-center transition-transform hover:scale-105">
                    <img
                        src="https://galajm.com/wp-content/uploads/2024/02/phone-icon.png"
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
                <div data-aos="zoom-in" data-aos-delay="400" className="flex-1 min-w-[250px] max-w-[300px] flex flex-col items-center  text-center transition-transform hover:scale-105">
                    <img
                        src="https://galajm.com/wp-content/uploads/2024/02/linkedin-icon.png"
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
        </section>
    )
}

export default RealContact
