import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const navLinks = [
    { path: '/', label: 'HOME' },
    { path: '/work', label: 'WORK' },
    { path: '/about', label: 'ABOUT' },
    { path: '/realContact', label: 'CONTACT' },
];

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header className="w-full h-[70px] fixed items-center justify-around top-0 left-0 z-50 bg-white shadow-md  shadow-gray-200">
            <div style={{ margin: '0 auto', paddingLeft: '2rem' }} className="max-w-[1241px] flex justify-between sm:justify-between gap-2 sm:gap-24 items-center h-full px-4 md:px-0">
                {/* Logo / Name */}
                <Link to="/" className="flex items-center gap-2">
                    <h1 className="text-[20px]  tracking-tight ">
                        GALA JIMENEZ MARTINI
                    </h1>
                </Link>

                {/* Hamburger Icon (Mobile only) */}
                <button
                    className="md:hidden focus:outline-none z-50 relative"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                    style={{ paddingRight: '1rem' }}
                >
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Desktop Nav */}
                <nav style={{ paddingRight: '10rem' }} className="hidden text-[20px] md:flex space-x-8  items-center font-[400] h-full gap-6">
                    {navLinks.map(({ path, label }) => (
                        <NavLink
                            key={label}
                            to={path}
                            className={({ isActive }) =>
                                isActive
                                    ? 'text-pink-400 font-[700]'
                                    : 'text-gray-700 hover:text-pink-400'
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </nav>
            </div>

            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/30 z-40 md:hidden transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={() => setMenuOpen(false)}
            />

            {/* Mobile Nav sliding from right corner */}
            <nav
                style={{ padding: '1rem' }}
                className={`md:hidden fixed top-[70px] w-full bg-white shadow-lg z-50 flex flex-col items-center py-6 h-42 space-y-4 gap-2 transition-transform duration-300 ${menuOpen ? 'translate-x-0' : 'translate-x-[200%]'
                    }`}
            >
                {navLinks.map(({ path, label }) => (
                    <NavLink
                        key={label}
                        to={path}
                        className={({ isActive }) =>
                            `text-lg font-semibold py-3 w-full text-left transition ${isActive
                                ? 'text-pink-400'
                                : 'text-gray-700 hover:text-pink-400'
                            }`
                        }
                        onClick={() => setMenuOpen(false)}
                    >
                        {label}
                    </NavLink>
                ))}
            </nav>
        </header>
    );
};

export default Header;
