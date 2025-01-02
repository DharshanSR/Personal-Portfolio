'use client';

import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram, FaMedium } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-gray-900 text-gray-300 px-8 py-16 md:px-20 lg:px-32">

            {/* Top Section */}
            <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div className="text-center md:text-left">
                    <h1 className="text-4xl font-extrabold text-white drop-shadow-lg group relative">
                        Let&apos;s Build Something Amazing Together
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </h1>
                    <p className="mt-2 text-gray-400 text-lg">
                        Combining innovation and technology to create impactful solutions.
                    </p>
                </div>
                <button
                    className="bg-gradient-to-r from-teal-500 to-blue-600 text-gray-900 font-semibold py-3 px-8 rounded-xl shadow-lg hover:scale-105 transition transform">
                    Contact Me
                </button>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-700 my-8"></div>

            {/* Links Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="group">
                    <h4 className="text-lg font-semibold mb-4 text-white relative group">
                        About
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="#about" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                                About Me
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                                Projects
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                                Skills
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="group">
                    <h4 className="text-lg font-semibold mb-4 text-white relative group">
                        Explore
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </h4>
                    <ul className="space-y-2">
                        <li>
                            <a href="#blog" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                                Blog
                            </a>
                        </li>
                        <li>
                            <a href="#portfolio" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                                Portfolio
                            </a>
                        </li>
                        <li>
                            <a href="#resume" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                                Resume
                            </a>
                        </li>
                        <li>
                            <a href="#github" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="group">
                    <h4 className="text-lg font-semibold mb-4 text-white relative group">
                        Follow Me
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-teal-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                    </h4>
                    <div className="flex justify-center md:justify-start space-x-6">
                        <a href="https://www.linkedin.com/in/yourprofile" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                            <FaLinkedin size={30} />
                        </a>
                        <a href="https://twitter.com/yourprofile" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                            <FaTwitter size={30} />
                        </a>
                        <a href="https://github.com/yourprofile" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                            <FaGithub size={30} />
                        </a>
                        <a href="https://instagram.com/yourprofile" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://medium.com/@yourprofile" className="group hover:text-teal-500 transition-all duration-300 transform hover:scale-110">
                            <FaMedium size={30} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-10 text-center text-sm text-gray-400">
                <p>&copy; {currentYear} Ravindran Dharshan. All rights reserved.</p>
            </div>

            {/* Back to Top Button */}
            <div className="absolute right-8 bottom-8">
                <button
                    className="bg-teal-600 text-white rounded-full p-4 hover:bg-teal-500 transition duration-300"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    ↑
                </button>
            </div>
        </footer>
    );
};

export default Footer;
