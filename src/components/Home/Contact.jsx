import React, { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/work', label: 'WORK' },
    { path: '/realContact', label: 'CONTACT' },
];

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section className="w-full  bg-white py-16 px-3 flex flex-col items-center justify-center gap-12">

            <div style={{ marginTop: '6rem', marginBottom: "1.5rem", paddingRight: '10rem' }} className='flex w-full text-[20px] justify-end items-center'>
                <nav className="hidden md:flex space-x-8 items-center  h-full gap-8">
                    {navLinks.map(({ path, label }) => (
                        <NavLink
                            key={label}
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-pink-400 font-bold'
                                    : 'text-gray-700 hover:text-pink-400'
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>
        </section>
    );
};

export default Contact;
