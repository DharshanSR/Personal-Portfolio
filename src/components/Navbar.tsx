'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['hero', 'about', 'services', 'blogs', 'skills', 'projects', 'achievements', 'testimonials', 'contact-me'];
            sections.forEach((section) => {
                const element = document.getElementById(section);
                const scrollY = window.scrollY;
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetHeight = element.offsetHeight;

                    if (
                        scrollY >= offsetTop - offsetHeight / 3 &&
                        scrollY < offsetTop + offsetHeight - offsetHeight / 3
                    ) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-0 left-0 w-full p-4 z-50 bg-[#212529]">
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-3xl font-bold text-white">
                    <Link href="/">RD</Link>
                </div>

                {/* Mobile Hamburger Button */}
                <div className="lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-[#c3c3c0] focus:outline-none"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </div>

                {/* Desktop Menu */}
                <div className="hidden lg:flex space-x-6 font-bold">
                    {['home', 'about', 'services', 'blogs', 'skills', 'projects', 'achievements', 'testimonials', 'contact'].map((item) => (
                        <Link
                            href={`/#${item}`}
                            key={item}
                            className={`text-white transition-all duration-300 ease-in-out ${
                                activeSection === item || pathname === `/${item}` ? 'text-purple-500' : ''
                            } 
                            hover:text-yellow-500 hover:scale-110 hover:font-medium`}
                        >
                            {item.charAt(0).toUpperCase() + item.slice(1)}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 bg-black bg-opacity-50 lg:hidden transition-opacity duration-300 ease-in-out ${
                    isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onClick={() => setMobileMenuOpen(false)}
            ></div>
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-[#212529] z-50 transform transition-transform duration-500 ease-in-out ${
                    isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
                }`}
            >
                <div className="container mx-auto relative p-6">
                    {/* Close Button */}
                    <button
                        onClick={() => setMobileMenuOpen(false)}
                        className="absolute top-4 right-4 text-[#c3c3c0]"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                    <div className="flex flex-col space-y-4 mt-12 font-semibold">
                        {['home', 'about', 'services', 'projects', 'skills', 'blogs', 'achievements', 'contact'].map((item) => (
                            <Link
                                href={`/#${item}`}
                                key={item}
                                className={`block py-2 px-4 text-lg text-white hover:bg-[#383835] hover:text-yellow-500 ${
                                    activeSection === item || pathname === `/${item}` ? 'border-b-2 border-[#c3c3c0]' : ''
                                }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
