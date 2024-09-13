'use client';

import React, { useEffect } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { FaDownload, FaGithub, FaLinkedin, FaMedium, FaInstagram } from "react-icons/fa";
import { FaThreads } from "react-icons/fa6";
import profileImage from "@/public/assests/images/Graduate-Men.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Hero = () => {
    // Control animations
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: 0.1, // Adjust to trigger when 10% of the element is visible
    });

    // Start animation when element is in view
    useEffect(() => {
        if (inView) {
            controls.start("visible");
        } else {
            controls.start("hidden");
        }
    }, [controls, inView]);

    // Animation variants for scroll-triggered animations
    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 1.2, ease: "easeOut" },
        },
    };

    const imageVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1.2, ease: "easeOut" },
        },
    };

    const socialIconsVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 1, ease: "easeOut", delay: 0.8 },
        },
    };

    const buttonVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: "easeOut", delay: 1.2 },
        },
    };

    return (
        <section
            id="hero"
            ref={ref}
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
            <div className="relative container mx-auto px-4 sm:px-6 py-12 md:py-20 flex flex-col items-center md:flex-row md:items-center md:justify-between">
                {/* Text Content */}
                <motion.div
                    className="md:w-1/2 text-center md:text-left flex flex-col items-center md:items-start z-10"
                    variants={textVariants}
                    initial="hidden"
                    animate={controls}
                >
                    <motion.h1 className="font-bold mb-4"
                               initial={{ y: -50, opacity: 0 }}
                               animate={{ y: 0, opacity: 1 }}
                               transition={{ duration: 1.2, ease: "easeOut" }}
                    >
                        <span className="block text-5xl sm:text-5xl md:text-6xl">𝐇𝐢, 𝐈❜𝐦</span>
                        <span className="block text-5xl sm:text-6xl md:text-6xl text-[#fff]">Ravindran Dharshan</span>
                    </motion.h1>

                    <div className="text-3xl sm:text-4xl md:text-4xl font-bold mb-6">
                        <TypeAnimation
                            sequence={[
                                'Software Developer', 1500,
                                'UI/UX Enthusiast', 1500,
                                'Mobile App Developer', 1500,
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

                    <motion.p
                        className="text-lg sm:text-xl md:text-lg mb-6 text-center md:text-left text-white font-bold"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.5, ease: "easeOut" }}
                    >
                        Driven by a passion for crafting innovative software solutions that leave a lasting impact, I thrive on turning complex problems into streamlined digital experiences.
                    </motion.p>

                    {/* Social Media Icons */}
                    <motion.div
                        className="flex justify-center space-x-6 mt-6"
                        variants={socialIconsVariants}
                        initial="hidden"
                        animate={controls}
                    >
                        <a href="https://github.com/DharshanSR" target="_blank" rel="noopener noreferrer" aria-label="GitHub"
                           className="hover:text-[#fff] transition-colors">
                            <FaGithub size={28} />
                        </a>
                        <a href="https://www.linkedin.com/in/ravindran-dharshan/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"
                           className="hover:text-[#fff] transition-colors">
                            <FaLinkedin size={28} />
                        </a>
                        <a href="https://www.threads.net/@iam_dharshan_ravindran?xmt=AQGzpVkYlxQOdyClvp8s6k61D8RekgVWW40D7tKmLKEfS3c" target="_blank" rel="noopener noreferrer" aria-label="Threads"
                           className="hover:text-[#fff] transition-colors">
                            <FaThreads size={28} />
                        </a>
                        <a href="https://medium.com/@dharshanravindran8" target="_blank" rel="noopener noreferrer" aria-label="Medium"
                           className="hover:text-[#fff] transition-colors">
                            <FaMedium size={28} />
                        </a>
                        <a href="https://www.instagram.com/iam_dharshan_ravindran/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"
                           className="hover:text-[#fff] transition-colors">
                            <FaInstagram size={28} />
                        </a>
                    </motion.div>

                    {/* Call to Action Button */}
                    <motion.div className="mt-8 md:mt-12 flex justify-center"
                                variants={buttonVariants}
                                initial="hidden"
                                animate={controls}
                    >
                        <a
                            href="/Ravindran_Dharshan_CV.pdf"
                            download
                            className="px-8 py-3 md:px-8 md:py-3 bg-[#c3c3c0] text-[#071015] font-semibold rounded-lg shadow-lg hover:bg-[#8f989b] transition-transform transform hover:scale-105 flex items-center gap-2"
                            aria-label="Download CV"
                        >
                            <FaDownload size={22} />
                            <span className="hidden md:inline">Download CV</span>
                        </a>
                    </motion.div>
                </motion.div>

                {/* Profile Image */}
                <motion.div
                    className="md:w-1/2 mt-12 md:mt-0 flex justify-center"
                    variants={imageVariants}
                    initial="hidden"
                    animate={controls}
                >
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
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
