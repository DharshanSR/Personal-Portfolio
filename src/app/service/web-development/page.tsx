"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import fsdImage from "@/public/assests/images/image.png";
import Navbar from "@/components/Navbar";
import DownFooter from "@/components/DownFooter";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJava, FaGithub, FaDocker } from 'react-icons/fa';
// SVG Icons Import
import ReactIcon from '@/public/assests/icons/react-original.svg';
import TypeScriptIcon from '@/public/assests/icons/typescript-original.svg';
import NextJsIcon from '@/public/assests/icons/nextjs-original.svg';
import TailwindCssIcon from '@/public/assests/icons/tailwindcss-original.svg';
import Laravel from '@/public/assests/icons/laravel-2.svg';
import Threejs from '@/public/assests/icons/Threejs-logo.svg';
import PHPIcon from '@/public/assests/icons/PHP.png';
import AngularIcon from '@/public/assests/icons/angular-icon.svg';

import CallToAction from "@/components/CallToAction";
import WhyChoosePortfolio from "@/components/WhyChoosePortfolio";

const FullStackDevelopment = () => {
    // Create refs for in-view detection
    const refHero = useRef(null);
    const refOverview = useRef(null);
    const refTechnologies = useRef(null);
    const refWhyChoose = useRef(null);

    // Detect if elements are in view
    const isHeroInView = useInView(refHero);
    const isOverviewInView = useInView(refOverview);
    const isTechnologiesInView = useInView(refTechnologies);
    const isWhyChooseInView = useInView(refWhyChoose);

    return (
        <div className="min-h-screen bg-[#14141F]">
            {/* Navbar */}
            <div className="p-9 sticky top-0 z-50">
                <Navbar/>
            </div>

            {/* Hero Section */}
            <motion.section
                ref={refHero}
                initial={{opacity: 0, y: -50}}
                animate={{opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : -50}}
                transition={{duration: 0.6}}
                className="relative bg-gradient-to-r from-indigo-800 to-purple-900 text-white py-20 text-center h-[90vh] flex flex-col justify-center items-center overflow-hidden"
            >
                {/* Shapes */}
                <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-20 rounded-full"></div>
                <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                <div
                    className="absolute bottom-20 right-20 w-16 h-16 bg-white opacity-25 rounded-full animate-bounce"></div>
                <div
                    className="absolute bottom-0 left-0 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-white opacity-10 animate-spin-slide"></div>

                <div
                    className="absolute top-0 left-0 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-white opacity-10 animate-spin-slide"></div>

                {/* Programming Icons */}
                <div className="absolute top-20 right-20 text-white text-5xl opacity-70">
                    <FaReact/>
                </div>
                <div className="absolute top-40 left-40 text-white text-5xl opacity-70">
                    <FaNodeJs/>
                </div>
                <div className="absolute bottom-10 left-10 text-white text-5xl opacity-70">
                    <FaPython/>
                </div>
                <div className="absolute bottom-20 right-40 text-white text-5xl opacity-70">
                    <FaHtml5/>
                </div>

                {/* Additional Icons for Wing Effect */}
                <div className="absolute top-5 left-1/4 text-white text-5xl opacity-70">
                    <FaCss3Alt/>
                </div>
                <div className="absolute top-32 left-1/2 text-white text-5xl opacity-70">
                    <FaJava/>
                </div>
                <div className="absolute bottom-5 right-1/4 text-white text-5xl opacity-70">
                    <FaGithub/>
                </div>
                <div className="absolute bottom-32 right-1/2 text-white text-5xl opacity-70">
                    <FaDocker/>
                </div>

                {/* Text Content */}
                <h2 className="text-5xl font-bold">Full Stack Development</h2>
                <p className="mt-4 text-lg max-w-6xl mx-auto">
                    Set your vision, and I’ll bring it to life with my expertise in full-stack development. With a
                    strong foundation in modern technologies and a commitment to agile methodologies, I create
                    high-impact web applications that resonate with users. By focusing on both front-end aesthetics and
                    back-end functionality, I ensure seamless interactions and optimal performance.
                </p>
            </motion.section>


            {/* Full Stack Development Overview Section */}
            <motion.section
                ref={refOverview}
                initial={{opacity: 0, y: 50}}
                animate={{opacity: isOverviewInView ? 1 : 0, y: isOverviewInView ? 0 : 50}}
                transition={{duration: 0.6}}
                className="py-20 max-w-7xl mx-auto px-4 md:px-8 bg-[#14141F] container"
            >
                {/* First Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mt-10 mb-10">
                    <div className="md:w-1/2">
                        <Image
                            src={fsdImage}
                            alt="Full Stack Development"
                            width={900}
                            height={600}
                            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-purple-400">What is Full Stack Development?</h3>
                        <p className="text-gray-200 text-lg mb-6 leading-relaxed text-justify">
                            Full Stack Development involves building both front-end and back-end components of a web
                            application, ensuring seamless user experiences and robust server-side functionality. I
                            utilize
                            technologies like the MERN stack (MongoDB, Express, React, and Node.js), server-side
                            rendering,
                            microservices architecture, and more to create efficient and scalable solutions.
                        </p>
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mt-10 md:mt-12">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-purple-400">Why Choose Full Stack Development?</h3>
                        <p className="text-gray-200 text-lg leading-relaxed text-justify">
                            In today's fast-paced digital landscape, having a strong full stack development foundation
                            is crucial for delivering versatile solutions. By mastering both client-side and server-side
                            technologies,
                            I ensure that every aspect of an application is optimized for performance and user
                            engagement. My focus is
                            on creating applications that not only fulfill business requirements but also provide
                            seamless
                            interactions for users.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src={fsdImage}
                            alt="Why Choose Full Stack Development"
                            width={900}
                            height={600}
                            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                </div>
            </motion.section>

            {/* Technologies Section */}
            <motion.section
                ref={refTechnologies}
                initial={{opacity: 0, y: 50}}
                animate={{opacity: isTechnologiesInView ? 1 : 0, y: isTechnologiesInView ? 0 : 50}}
                transition={{duration: 0.6}}
                className="bg-[#14141F] text-black py-20 mt-10 mb-10"
            >
                <h3 className="text-center text-4xl font-bold mb-4 text-purple-400">Technologies I Work With</h3>
                <p className="text-center max-w-4xl mx-auto mb-12 font-light text-white" style={{ lineHeight: "1.8" }}>
                    We leverage cutting-edge frameworks like React.js and Next js, combined with robust back-end
                    solutions such as Node.js, Express and Laravel etc, to develop dynamic and user-centric web applications that
                    deliver exceptional performance and seamless user experiences.
                </p>
                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    <Image src={ReactIcon} alt="React Icon" width={60} height={60} className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={AngularIcon} alt="React Icon" width={60} height={60} className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={TypeScriptIcon} alt="Node.js Icon" width={60} height={60} className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={NextJsIcon} alt="React Icon" width={60} height={60} className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={TailwindCssIcon} alt="Node.js Icon" width={60} height={60} className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={Laravel} alt="React Icon" width={60} height={60} className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={ Threejs} alt="Node.js Icon" width={60} height={60} className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={PHPIcon} alt="React Icon" width={80} height={80} className="transition-transform duration-300 hover:scale-110"/>
                </div>
            </motion.section>

            <WhyChoosePortfolio refProp={refWhyChoose} isInView={isWhyChooseInView} />

            <CallToAction />

            {/* Footer */}
            <DownFooter arrowBgColor="#6B46C1" />
        </div>
    );
};

export default FullStackDevelopment;
