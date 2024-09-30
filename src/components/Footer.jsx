'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaGithub, FaLinkedin, FaMedium, FaTwitter, FaInstagram } from 'react-icons/fa';
import { MdEmail, MdPhone } from 'react-icons/md';
import { FiArrowUp } from 'react-icons/fi';
import {IoIosArrowUp} from "react-icons/io";

// Automatically get the current year
const currentYear = new Date().getFullYear();

const Footer = () => {
    const [showScrollTopButton, setShowScrollTopButton] = useState(false);

    // Handle scroll events
    const handleScroll = () => {
        if (window.scrollY > 200) {
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
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <footer className="bg-gray-900 text-gray-200 py-10">
                <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">

                    {/* About Me */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">About Me</h3>
                        <p className="text-gray-400 leading-relaxed text-justify">
                            I am Ravindran Dharshan, a full-stack developer specializing in modern web technologies like
                            Next.js, TypeScript, and Tailwind CSS. Passionate about delivering elegant solutions.
                        </p>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Contact</h3>
                        <ul>
                            <li className="flex items-center space-x-3 mb-2">
                                <MdEmail className="w-6 h-6 text-indigo-400"/>
                                <a href="mailto:dharshanravindran8@gmail.com"
                                   className="hover:text-indigo-300 transition-colors duration-300">
                                    dharshanravindran8@gmail.com
                                </a>
                            </li>
                            <li className="flex items-center space-x-3">
                                <MdPhone className="w-6 h-6 text-indigo-400"/>
                                <a href="tel:+94 776285156"
                                   className="hover:text-indigo-300 transition-colors duration-300">
                                    +94 77 628 156
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Useful Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Quick Links</h3>
                        <ul className="space-y-3">
                            {[
                                { path: 'hero', label: 'Home' },
                                { path: 'about', label: 'About' },
                                { path: 'services', label: 'Services' },
                                { path: 'projects', label: 'Projects' },
                                { path: 'skills', label: 'Skills' },
                                { path: 'blogs', label: 'Blogs' },
                                { path: 'achievements', label: 'Achievements' },
                                { path: 'contact-me', label: 'Contact Me' }
                            ].map(({ path, label }) => (
                                <li key={path} className="group">
                                    <Link
                                        href={`/#${path}`}
                                        className="flex items-center space-x-2 text-indigo-400 hover:text-indigo-300 transition-colors duration-300"
                                    >
                                        <span
                                            className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                            &gt;
                                        </span>
                                        <span className="transition-transform duration-300 group-hover:translate-x-1">
                                            {label}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4 text-white">Follow Me</h3>
                        <div className="flex space-x-4">
                            <a href="https://github.com/yourgithub" className="group">
                                <FaGithub
                                    className="w-7 h-7 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300"/>
                                <span className="sr-only">Github</span>
                            </a>
                            <a href="https://linkedin.com/in/yourlinkedin" className="group">
                                <FaLinkedin
                                    className="w-7 h-7 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300"/>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a href="https://medium.com/@yourmedium" className="group">
                                <FaMedium
                                    className="w-7 h-7 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300"/>
                                <span className="sr-only">Medium</span>
                            </a>
                            <a href="https://twitter.com/yourtwitter" className="group">
                                <FaTwitter
                                    className="w-7 h-7 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300"/>
                                <span className="sr-only">Twitter</span>
                            </a>
                            <a href="https://instagram.com/yourinstagram" className="group">
                                <FaInstagram
                                    className="w-7 h-7 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300"/>
                                <span className="sr-only">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Second Section - Copyright */}
                <div className="mt-10 text-center text-gray-500 text-sm font-bold">
                    &copy; {currentYear} Ravindran Dharshan. All rights reserved.
                </div>
            </footer>

            {/* Scroll to Top Button */}
            {showScrollTopButton && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-500 via-pink-500 to-red-500 text-white rounded-full p-4 transition-all duration-300 transform hover:scale-110 hover:bg-gradient-to-l hover:from-red-500 hover:via-pink-500 hover:to-purple-500"
                    aria-label="Scroll to top"
                >
                    <IoIosArrowUp className="w-8 h-8" />
                </button>
            )}


        </>
    );
};

export default Footer;
