'use client';

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaGithub, FaLinkedin, FaTwitter, FaMedium, FaInstagram } from "react-icons/fa";
import profileImage from "@/public/assests/images/Graduate-Men.png";

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative h-screen bg-fixed bg-center bg-cover text-[#c3c3c0] flex flex-col items-center justify-center py-20"
            style={{
                backgroundImage: "url('https://images.alphacoders.com/108/1080156.jpg')",
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="absolute inset-0 bg-[#071015] opacity-50"></div>
            {/* Dark overlay for text contrast */}
            <div
                className="relative container mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col items-center md:flex-row md:items-center md:justify-between">
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start z-10">
                    <h1 className="font-bold mb-4">
                        <span className="block text-5xl sm:text-5xl md:text-6xl">𝐇𝐢, 𝐈❜𝐦</span>
                        <span
                            className="block text-5xl sm:text-6xl md:text-6xl text-[#fff]">Ravindran Dharshan</span>
                    </h1>
                    <div className="text-3xl sm:text-4xl md:text-4xl font-bold mb-6">
                        <TypeAnimation
                            sequence={[
                                'Software Developer', 1500,
                                'UI/UX Enthusiast', 1500,
                                'Full-Stack Engineer', 1500,
                                'Open-Source Contributor', 1500,
                            ]}
                            speed={30}
                            cursor={true}
                            repeat={Infinity}
                            deletionSpeed={20}
                            style={{ display: 'inline-block' }}
                        />
                    </div>
                    <p className="text-lg sm:text-xl md:text-lg mb-6 text-center md:text-left">
                        Passionate about building impactful software solutions and contributing to open-source projects.
                    </p>

                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6 mt-6">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                           className="hover:text-[#fff] transition-colors">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                           className="hover:text-[#fff] transition-colors">
                            <FaLinkedin size={28} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"
                           className="hover:text-[#fff] transition-colors">
                            <FaTwitter size={28} />
                        </a>
                        <a href="https://medium.com" target="_blank" rel="noopener noreferrer" aria-label="Medium"
                           className="hover:text-[#fff] transition-colors">
                            <FaMedium size={28} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                           className="hover:text-[#fff] transition-colors">
                            <FaInstagram size={28} />
                        </a>
                    </div>

                    {/* Call to Action Button */}
                    <div className="mt-8 md:mt-12 flex justify-center">
                        <a
                            href="/Ravindran_Dharshan_CV.pdf"
                            download
                            className="px-8 py-3 md:px-8 md:py-3 bg-[#c3c3c0] text-[#071015] font-semibold rounded-lg shadow-lg hover:bg-[#8f989b] transition-transform transform hover:scale-105 flex items-center gap-2"
                            aria-label="Download CV"
                        >
                            <FaDownload size={22} />
                            <span className="hidden md:inline">Download CV</span>
                        </a>
                    </div>
                </div>

                {/* Profile Image */}
                <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
                    <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80">
                        <Image
                            src={profileImage}
                            alt="Profile of Ravindran Dharshan"
                            layout="fill"
                            objectFit="cover"
                            quality={100} // Ensures high image quality
                            className="rounded-full shadow-lg"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
