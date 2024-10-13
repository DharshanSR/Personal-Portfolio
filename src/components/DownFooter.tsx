'use client';

import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'; // Import FontAwesome React icons

interface DownFooterProps {
    arrowBgColor: string; // Prop for background color
}

const DownFooter: React.FC<DownFooterProps> = ({ arrowBgColor }) => {
    const currentYear = new Date().getFullYear();
    const [isVisible, setIsVisible] = useState(false);

    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling effect
        });
    };

    // Show the arrow when scrolled down a bit
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <footer className="relative text-center py-6 bg-[#14141F] text-gray-400 mt-16 border-t border-gray-700">
            <p className="text-sm md:text-base tracking-wide">
                © {currentYear}{' '}
                <span className="font-semibold text-gray-300">Ravindran Dharshan</span>. All rights reserved.
            </p>

            {/* Social media icons */}
            <div className="flex justify-center space-x-4 mt-4">
                <a
                    href="https://github.com/your-profile"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-500"
                >
                    <FaGithub className="w-6 h-6" />
                </a>
                <a
                    href="https://linkedin.com/in/your-profile"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-500"
                >
                    <FaLinkedin className="w-6 h-6" />
                </a>
                <a
                    href="https://twitter.com/your-profile"
                    aria-label="Twitter"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-gray-500"
                >
                    <FaTwitter className="w-6 h-6" />
                </a>
            </div>

            {/* Scroll to top button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-12 right-8 text-white p-3 rounded-full shadow-lg hover:opacity-90 transition-transform duration-500 transform translate-y-0 opacity-100"
                    style={{ backgroundColor: arrowBgColor }}
                    aria-label="Scroll to top"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                </button>
            )}
        </footer>
    );
};

export default DownFooter;
