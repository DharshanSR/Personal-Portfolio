'use client';

import React from 'react';
import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const currentYear = new Date().getFullYear();  // Get the current year

    return (
        <footer className="bg-[#4D90A1] text-gray-100 px-8 py-20 md:px-20 lg:px-32">
            {/* Header Section */}
            <div className="text-center md:text-left space-y-6">
                <h1 className="text-4xl font-semibold leading-tight text-gray-50 md:max-w-lg">
                    Empowering innovation <br /> <span className="text-teal-400">through cutting-edge technology</span>
                </h1>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
                    <div className="text-gray-300 text-sm space-y-2">
                        <p>
                            Delivering <span className="text-teal-400 font-medium">tailored solutions</span> for modern challenges.
                        </p>
                        <p>
                            Combining <span className="text-teal-400 font-medium">expertise</span> in AI, machine
                            learning, and software development.
                        </p>
                        <p>
                            Committed to creating <span
                            className="text-teal-400 font-medium">global impact</span> through technology.
                        </p>
                    </div>
                    <button
                        className="bg-teal-400 text-gray-900 font-semibold py-2 px-6 rounded-lg hover:bg-teal-500 transition">
                        Let's Collaborate
                    </button>
                </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-gray-700 my-8"></div>

            {/* Links Section */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
                <div>
                    <h4 className="text-lg font-semibold mb-4">About Me</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>
                            <a href="#about" className="hover:text-gray-200">My Journey</a>
                        </li>
                        <li>
                            <a href="#projects" className="hover:text-gray-200">Projects</a>
                        </li>
                        <li>
                            <a href="#skills" className="hover:text-gray-200">Skills</a>
                        </li>
                        <li>
                            <a href="#contact" className="hover:text-gray-200">Contact</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Resources</h4>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li>
                            <a href="#blog" className="hover:text-gray-200">Blog</a>
                        </li>
                        <li>
                            <a href="#portfolio" className="hover:text-gray-200">Portfolio</a>
                        </li>
                        <li>
                            <a href="#resume" className="hover:text-gray-200">Resume</a>
                        </li>
                        <li>
                            <a href="#github" className="hover:text-gray-200">GitHub</a>
                        </li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
                    <div className="flex space-x-4 text-gray-400">
                        <a href="#" className="hover:text-gray-200">
                            <FaLinkedin size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-200">
                            <FaTwitter size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-200">
                            <FaGithub size={24} />
                        </a>
                        <a href="#" className="hover:text-gray-200">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Logo Section */}
            <div className="mt-6 text-center relative">
                {/* Transparent and larger personal brand text */}
                <p className="text-[12rem] font-bold text-gray-50 text-opacity-10 absolute inset-0 flex items-center justify-center pointer-events-none">
                    My Portfolio
                </p>
            </div>

            {/* Footer with current year */}
            <div className="text-center text-white text-lg mt-12">
                <p>&copy; {currentYear} My Portfolio. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
