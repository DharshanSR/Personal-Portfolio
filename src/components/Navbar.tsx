'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Navbar = () => {
    // State to track if the mobile menu is open
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    // Hook to get the current pathname for active link indication
    const pathname = usePathname();

    return (
        <nav className="bg-gray-800 text-white p-4">
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
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)} // Toggle mobile menu on click
                        className="text-white focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Desktop View - Navigation Links */}
                <div className="hidden lg:flex space-x-6">
                    {['home', 'about', 'services', 'projects', 'skills', 'blogs', 'achievements', 'contact-me'].map((item) => (
                        <Link
                            href={`/${item}`}
                            key={item}
                            className={`hover:text-gray-300 ${
                                pathname === `/${item}` ? 'border-b-2 border-gray-300' : ''
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
                            onClick={() => setMobileMenuOpen(false)} // Close mobile menu on click
                            className="absolute top-4 right-4 text-white"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                        {/* Mobile Menu Links */}
                        <div className="flex flex-col space-y-4 p-4 mt-12 font-semibold"> {/* Margin top added for spacing */}
                            {['home', 'about', 'services', 'projects', 'skills', 'blogs', 'achievements', 'contact-me'].map((item) => (
                                <Link
                                    href={`/${item}`}
                                    key={item}
                                    className={`block py-2 px-4 text-lg transition-colors duration-300 ${
                                        pathname === `/${item}` ? 'text-gray-300 border-b-2 border-gray-300' : 'text-white hover:bg-gray-600'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)} // Close menu on item click
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
