'use client';

import React from 'react';
import Link from 'next/link';
import {
    FaLinkedin,
    FaTwitter,
    FaGithub,
    FaInstagram,
    FaMedium,
    FaWhatsapp,
    FaStackOverflow,
} from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-[#212529] text-gray-300 px-8 py-16 md:px-20 lg:px-32">
            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-semibold text-white tracking-wide leading-snug">
                        Empowering Innovation Through Code and Creativity
                    </h1>
                    <p className="mt-2 text-gray-400 text-lg">
                        Combining innovation and technology to create impactful solutions.
                    </p>
                </div>
                <button
                    className="bg-gradient-to-r from-purple-500 to-purple-600 text-gray-900 font-semibold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition transform">
                    Contact Me
                </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-700 my-8"></div>

            {/* Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="group">
                    <h4 className="text-lg font-semibold mb-4 text-white relative group transition-all duration-300 transform">
                        About
                        <span
                            className="absolute left-0 bottom-0 w-full md:w-1/3 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#about"
                                className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            >
                                About Me
                            </a>
                        </li>
                        <li>
                            <a
                                href="#projects"
                                className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#skills"
                                className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            >
                                Skills
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="group">
                    <h4 className="text-lg font-semibold mb-4 text-white relative group transition-all duration-300 transform">
                        Explore
                        <span
                            className="absolute left-0 bottom-0 w-full md:w-1/3 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="#blog"
                                className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            >
                                Blog
                            </a>
                        </li>
                        <li>
                            <a
                                href="#portfolio"
                                className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            >
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a
                                href="#resume"
                                className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            >
                                Resume
                            </a>
                        </li>
                        <li>
                            <a
                                href="#github"
                                className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            >
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="group">
                    <h4 className="text-lg font-semibold mb-4 text-white relative group transition-all duration-300 transform">
                        Follow Me
                        <span
                            className="absolute left-0 bottom-0 w-full md:w-1/3 h-0.5 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </h4>
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        <a
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedin size={30}/>
                        </a>
                        <a
                            href="https://twitter.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            aria-label="Twitter"
                        >
                            <FaTwitter size={30}/>
                        </a>
                        <a
                            href="https://github.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            aria-label="GitHub"
                        >
                            <FaGithub size={30}/>
                        </a>
                        <a
                            href="https://instagram.com/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            aria-label="Instagram"
                        >
                            <FaInstagram size={30}/>
                        </a>
                        <a
                            href="https://medium.com/@yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            aria-label="Medium"
                        >
                            <FaMedium size={30}/>
                        </a>
                        <a
                            href="https://wa.me/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            aria-label="Whatsapp"
                        >
                            <FaWhatsapp size={30}/>
                        </a>
                        <a
                            href="https://stackoverflow.com/users/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-purple-500 transition-all duration-300 transform hover:scale-110"
                            aria-label="Stack Overflow"
                        >
                            <FaStackOverflow size={30}/>
                        </a>
                    </div>
                </div>

            </div>

            {/* Divider */}
            <div className="h-px bg-gray-700 my-8"></div>

            {/* Bottom Section */}
            <div
                className="mt-10 flex flex-col md:flex-row justify-between items-center text-sm text-white space-y-4 md:space-y-0">
                {/* Left Section */}
                <div className="text-center md:text-left">
                    <p>&copy; {currentYear} Ravindran Dharshan. All rights reserved.</p>
                </div>

                {/* Divider */}
                <div className="w-full md:hidden border-t border-gray-700 my-2"></div>

                {/* Right Section with Links */}
                <div
                    className="w-full md:w-auto flex flex-col md:flex-row justify-center md:justify-end md:items-center text-center md:text-right space-y-4 md:space-y-0">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-2">
                        <Link href="/privacy" className="block hover:text-purple-500 transition-all duration-300">Privacy
                            Policy</Link>

                        {/* Separator on Desktop */}
                        <span className="hidden md:inline text-white px-2">|</span>

                        <Link href="/terms" className="block hover:text-purple-500 transition-all duration-300">Terms of
                            Service</Link>

                        {/* Separator on Desktop */}
                        <span className="hidden md:inline text-white px-2">|</span>

                        <Link href="/cookie-policy" className="block hover:text-purple-500 transition-all duration-300">Cookie
                            Policy</Link>

                        <span className="hidden md:inline text-white px-2">|</span>

                        <Link href="/copyright" className="block hover:text-purple-500 transition-all duration-300">Copy Rights</Link>

                    </div>
                </div>
            </div>

            {/* Back to Top Button */}
            <div className="absolute right-8 bottom-8">
                <button
                    className="bg-purple-600 text-white rounded-full p-4 hover:bg-purple-500 transition duration-300"
                    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                >
                    ↑
                </button>
            </div>
        </footer>
    );
};

export default Footer;
