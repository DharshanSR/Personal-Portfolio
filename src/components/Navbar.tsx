'use client';

import {useState, useEffect} from 'react';
import {usePathname} from 'next/navigation';
import Link from 'next/link';
import {motion} from 'framer-motion'; // Importing Framer Motion
import '@/app/styles.css'; // Ensure this CSS file contains the .no-scroll class

const Navbar = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('');
    const pathname = usePathname();

    // Framer motion variants for entry animations
    const navbarVariants = {
        hidden: {opacity: 0, y: -50},
        visible: {opacity: 1, y: 0, transition: {duration: 0.6, ease: 'easeInOut'}},
    };

    const mobileMenuVariants = {
        hidden: {opacity: 0, x: '100%'},
        visible: {opacity: 1, x: 0, transition: {duration: 0.4, ease: 'easeInOut'}},
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            if (scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }

            const sections = ['hero', 'about', 'services', 'blogs', 'skills', 'projects', 'achievements', 'contact-me'];
            sections.forEach((section) => {
                const element = document.getElementById(section);
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

        if (isMobileMenuOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.classList.remove('no-scroll');
        };
    }, [isMobileMenuOpen]);

    return (
        <motion.nav
            initial="hidden"
            animate="visible"
            variants={navbarVariants}
            className={`fixed top-0 left-0 w-full p-4 z-50 transition-all duration-300 ${
                isScrolled ? 'bg-gray-800 opacity-100 shadow-lg' : 'bg-[#14141F] opacity-80'
            }`}
        >
            <div className="container mx-auto flex items-center justify-between">
                {/* Logo/Brand Name */}
                <div className="text-3xl font-bold text-white">
                    <Link href="/" className="hover:text-purple-500">
                        RD
                    </Link>
                </div>

                {/* Mobile View - Hamburger Menu Button */}
                <div className="block lg:hidden">
                    <button
                        onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-[#c3c3c0] focus:outline-none"
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
                <div className="hidden lg:flex space-x-6 font-bold p-2 text-1xl">
                    {['hero', 'about', 'services', 'blogs', 'skills', 'projects', 'achievements', 'contact-me'].map((item) => (
                        <Link
                            href={`/#${item}`}
                            key={item}
                            className={`relative inline-block overflow-hidden transition-all duration-500 ease-in-out transform-gpu ${
                                activeSection === item || pathname === `/${item}` ? 'text-purple-500' : 'text-white'} hover:text-purple-600 
    cursor-pointer transition-colors duration-100 ease-in-out after:absolute after:left-0 after:bottom-[-2px] 
    after:w-full after:h-1 after:bg-purple-300 after:scale-x-0 hover:after:scale-x-100 after:origin-left 
    hover:after:transition-transform hover:after:duration-300`}
                        >
      <span
          className="relative transition-all duration-300 ease-in-out"
      >
        {item === 'hero' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
      </span>
                            {/* Updated underline reveal animation */}
                            <span
                                className="absolute bottom-0 left-0 h-[2px] w-full bg-[#6b7b83] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-in-out"
                            />
                        </Link>
                    ))}
                </div>


                {/* Contact Button - Visible only on desktop */}
                <div className="hidden lg:flex">
                    <a
                        href="mailto:dharshanravindran8@gmail.com"
                        className="bg-purple-500 text-white rounded-lg transform transition-all duration-300 hover:scale-105 cursor-pointer px-4 py-2 font-bold hover:bg-cyan-700"
                    >
                        Get In Touch
                    </a>
                </div>
            </div>

            {/* Mobile Menu - Shown when mobile menu is open */}
            {isMobileMenuOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={mobileMenuVariants}
                    className="lg:hidden bg-gray-950 h-[80vh] animate-slideIn"
                >
                    <div className="container mx-auto relative">
                        {/* Close Button */}
                        <button
                            onClick={() => setMobileMenuOpen(false)}
                            className="absolute top-4 right-4 text-[#c3c3c0]"
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
                            {['hero', 'about', 'services', 'projects', 'skills', 'blogs', 'achievements', 'contact-me'].map((item) => (
                                <Link
                                    href={`/#${item}`}
                                    key={item}
                                    className={`block py-2 px-4 text-lg transition-colors duration-300 ${
                                        activeSection === item || pathname === `/${item}`
                                            ? 'text-[#ffffff] border-b-2 border-[#c3c3c0]'
                                            : 'text-[#ffffff] hover:bg-[#383835]'
                                    }`}
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item === 'hero' ? 'Home' : item.charAt(0).toUpperCase() + item.slice(1).replace('-', ' ')}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;