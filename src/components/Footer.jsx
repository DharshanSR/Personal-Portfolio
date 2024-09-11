'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';

// Automatically get the current year
const currentYear = new Date().getFullYear();

const Footer = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    // Handle scroll events
    const handleScroll = () => {
        if (window.scrollY > 200) { // Show button after scrolling down 200px
            setShowScrollTopButton(true);
        } else {
            setShowScrollTopButton(false);
        }
    };

    // Scroll to top when button is clicked
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <footer className="bg-gray-800 text-white py-6 mt-12">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Me */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">About Me</h3>
                        <p className="text-gray-400">
                            I am Ravindran Dharshan, a passionate developer focused on building modern web applications using Next.js, TypeScript, and Tailwind CSS.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Contact</h3>
                        <ul>
                            <li className="flex items-center space-x-2">
                                <MdEmail className="w-5 h-5" />
                                <a href="mailto:dharshanravindran8@gmail.com" className="hover:text-gray-300">
                                    dharshanravindran8@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-2 mt-2">
                                <MdPhone className="w-5 h-5" />
                                <a href="tel:+94 776285156" className="hover:text-gray-300">
                                    +94 77 628 156
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Useful Links</h3>
                        <ul className="space-y-2">
                            {['hero', 'about', 'services', 'projects', 'skills', 'blogs', 'achievements', 'contact-me'].map((item) => (
                                <li key={item}>
                                    <Link href={`/${item}`} className="hover:text-gray-300 text-indigo-400 underline transition-colors duration-300">
                                        {item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media Icons */}
                    <div>
                        <h3 className="text-lg font-bold mb-2">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/yourgithub" className="hover:text-gray-300">
                                <FaGithub className="w-6 h-6" />
                            </a>
                            <a href="https://linkedin.com/in/yourlinkedin" className="hover:text-gray-300">
                                <FaLinkedin className="w-6 h-6" />
                            </a>
                            <a href="https://medium.com/@yourmedium" className="hover:text-gray-300">
                                <FaMedium className="w-6 h-6" />
                            </a>
                            <a href="https://twitter.com/yourtwitter" className="hover:text-gray-300">
                                <FaTwitter className="w-6 h-6" />
                            </a>
                            <a href="https://instagram.com/yourinstagram" className="hover:text-gray-300">
                                <FaInstagram className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Second Section - Copyright */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    &copy; {currentYear} Ravindran Dharshan. All rights reserved.
                </div>
            </footer>

            {/* Scroll to Top Button */}
            {showScrollTopButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-colors duration-300"
                    aria-label="Scroll to top"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7-7-7 7"></path>
                    </svg>
                </button>
            )}
        </>
    );
};

export default Footer;
