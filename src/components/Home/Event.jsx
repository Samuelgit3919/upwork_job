import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Event1 from '../../assets/event1.jpg';
import Event2 from '../../assets/event2.jpg';
import Event3 from '../../assets/event3.jpg';
import { Link } from 'react-router-dom';

const events = [
    {
        img: Event1,
        title: 'UX Design Seminar - March 2022',
        description: `This seminar has been supported by the Ministry of Technology, Information, and Communications of Paraguay.
The seminar was addressed to people interested in UX design and covered basic topics in the field such as the definition of UX, the difference between UX and UI, accessibility, inclusive design, and design principles. `,
        link: '',
    },
    {
        img: Event2,
        title: 'KuñaTech Meet Up online - March 2022',
        description: `KuñaTech is an association in Paraguay that aims to help share knowledge and inspire other women in the tech field. I was invited to a Meet Up webinar where I gave a presentation on Inclusive Design.`,
        link: '',
    },
    {
        img: Event3,
        title: 'Girocast Podcast - May 2022',
        description: `Guest in the Girolabs podcast, where I spoke about my career, UX Design, challenges, perks of working in Europe, and a bit more.`,
        link: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    }
];

const Event = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <section style={{ padding: '0 1rem', margin: '0 auto' }} className="bg-white flex items-center justify-center mx-auto mr-0 font-[outfit]">
            <div className="max-w-[1241px] mx-auto text-center">
                <h2 className="text-[24px]  font-normal">UX Events</h2>
                <p style={{ marginTop: '1rem', marginBottom: '6rem', padding: '0 1rem' }} className="text-[#666666]  text-[24px]">
                    Whenever I have the chance I like to share my knowledge of UX as much as possible.
                    Below you can find some events I participated in.
                </p>

                <div className="space-y-16 w-full">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            data-aos="fade-up" // 👈 FADE UP effect here
                            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-start justify-center gap-26 sm:gap-32`}
                            style={{ marginTop: '1rem', marginBottom: '4rem' }}
                        >
                            <div className="w-full md:w-1/3 flex justify-center items-center">
                                <img
                                    src={event.img}
                                    alt={event.title}
                                    className="rounded-lg w-full max-w-md shadow-md"
                                    loading="lazy"
                                />
                            </div>
                            <div className="w-full h-56 md:h-auto md:w-1/2 text-center flex flex-col font-[outfit] items-center md:items-center justify-center md:justify-start">
                                <h3 style={{ marginTop: '1rem', marginBottom: '0.5rem' }} className="font-[400] text-[#000000] text-center  text-[24px]">{event.title}</h3>
                                <p style={{ marginTop: '1rem', marginBottom: '1rem' }} className="text-[#666666] text-[18px] whitespace-pre-line">{event.description}</p>
                                {index === 2 && (
                                    <p className='text-[#666666] text-[18px] whitespace-pre-line  max-w-[614px]'>Watch the YouTube video <Link className="underline underline-offset-2" to="https://www.youtube.com/watch?v=2akWBmjfEO4">here</Link>  or listen to it on <Link className="underline underline-offset-2 " to="https://open.spotify.com/episode/18dspn3Ah8xZGTLK3jrGh6?si=54441cfcf7ef4e71">Spotify</Link>.</p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Event;
