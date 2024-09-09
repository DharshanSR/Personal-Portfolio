'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();

    // Handle scroll event to change navbar appearance and active section
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // Change navbar appearance when scrolled
            if (scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            // Determine active section by scroll position
            const sections = ['home', 'about', 'services', 'blogs', 'skills', 'projects',  'achievements', 'contact-me'];
            sections.forEach((section) => {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (scrollY >= offsetTop - offsetHeight / 3 && scrollY < offsetTop + offsetHeight - offsetHeight / 3) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 w-full bg-gray-800 text-white p-4 z-50 transition-all duration-300 ${
                isScrolled ? 'shadow-lg bg-gray-900' : 'bg-gray-800'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo/Brand Name */}
                <div className="text-2xl font-bold">
                    <Link href="/" className="hover:text-gray-300">
                        My Portfolio
                    </Link>
                </div>

                {/* Mobile View - Hamburger Menu Button */}
                <div className="block lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop View - Navigation Links */}
                <div className="hidden lg:flex space-x-6">
                    {['home', 'about', 'services', 'blogs', 'skills', 'projects',  'achievements', 'contact-me'].map((item) => (
                        <Link
                            href={`/#${item}`}
                            key={item}
                            className={`hover:text-gray-300 ${
                                activeSection === item || pathname === `/${item}` ? 'border-b-2 border-gray-300' : ''
                            }`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                        </Link>
                    ))}
                </div>

                {/* Contact Button - Visible only on desktop */}
                <div className="hidden lg:flex">
                    <Link
                        href="/contact-me"
                        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                    >
                        Contact Me
                    </Link>
                </div>
            </div>

            {/* Mobile Menu - Shown when mobile menu is open */}
            {isMobileMenuOpen && (
                <div className="lg:hidden bg-gray-700 animate-slideIn">
                    <div className="container mx-auto relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-4 right-4 text-white"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                ></path>
                            </svg>
                        </button>
                        {/* Mobile Menu Links */}
                        <div className="flex flex-col space-y-4 p-4 mt-12 font-semibold">
                            {['home', 'about', 'services', 'projects', 'skills', 'blogs', 'achievements', 'contact-me'].map((item) => (
                                <Link
                                    href={`/#${item}`}
                                    key={item}
                                    className={`block py-2 px-4 text-lg transition-colors duration-300 ${
                                        activeSection === item || pathname === `/${item}`
                                            ? 'text-gray-300 border-b-2 border-gray-300'
                                            : 'text-white hover:bg-gray-600'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
