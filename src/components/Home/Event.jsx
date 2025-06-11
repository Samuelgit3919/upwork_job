import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Event1 from '../../assets/event1.jpg';
import Event2 from '../../assets/event2.jpg';
import Event3 from '../../assets/event3.jpg';

const events = [
    {
        img: Event1,
        title: 'UX Design Seminar - March 2022',
        description: `This seminar has been supported by the Ministry of Technology, Information, and Communications of Paraguay.
The seminar was addressed to people interested in UX design and covered basic topics in the field such as the definition of UX, the difference between UX and UI, accessibility, inclusive design, and design principles.`,
        link: '',
    },
    {
        img: Event2,
        title: 'KunaTech Meet Up online - March 2022',
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
        <section style={{ padding: '0 1rem', margin: '0 auto', marginTop: '3rem' }} className="bg-white flex items-center justify-center mx-auto mr-0">
            <div className="max-w-screen-lg mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-serif">UX Events</h2>
                <p style={{ marginTop: '1rem', marginBottom: '4rem' }} className="text-gray-700 text-lg">
                    Whenever I have the chance I like to share my knowledge of UX as much as possible.
                    Below you can find some events I participated in.
                </p>

                <div className="space-y-16 w-full">
                    {events.map((event, index) => (
                        <div
                            key={index}
                            data-aos="fade-up" // 👈 FADE UP effect here
                            className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} items-start justify-center gap-32`}
                            style={{ marginTop: '1rem', marginBottom: '4rem' }}
                        >
                            <div className="w-full md:w-1/3 flex justify-center items-center">
                                <img
                                    src={event.img}
                                    alt={event.title}
                                    className="rounded-lg w-full max-w-md shadow-md"
                                />
                            </div>
                            <div className="w-full h-56 md:h-auto md:w-1/2 text-center flex flex-col items-center md:items-center justify-center md:justify-start">
                                <h3 style={{ marginTop: '1rem', marginBottom: '1rem' }} className="font-semibold text-center text-lg">{event.title}</h3>
                                <p style={{ marginTop: '1rem', marginBottom: '1rem' }} className="text-gray-600 whitespace-pre-line max-w-xl">{event.description}</p>
                                <a href={event.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 text-center hover:text-blue-700">
                                    {event.link ? 'Watch the YouTube video here or listen on Spotify' : ''}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Event;
