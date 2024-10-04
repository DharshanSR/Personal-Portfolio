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
import YourSvgIcon1 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon2 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon3 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon4 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon5 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon6 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon7 from '@/public/assests/icons/react-original.svg';

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
        <div className="min-h-screen bg-gray-200">
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
                className="relative bg-gradient-to-r from-blue-600 to-blue-400 text-white py-20 text-center h-[90vh] flex flex-col justify-center items-center overflow-hidden"
            >
                {/* Shapes */}
                <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-20 rounded-full"></div>
                <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                <div
                    className="absolute bottom-20 right-20 w-16 h-16 bg-white opacity-25 rounded-full animate-bounce"></div>
                <div
                    className="absolute bottom-0 left-0 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-white opacity-10 animate-spin-slide"></div>

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
                className="py-20 max-w-7xl mx-auto px-4 md:px-8 bg-gray-200 container"
            >
                {/* First Section */}
                <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="md:w-1/2">
                        <Image
                            src={fsdImage}
                            alt="Full Stack Development"
                            width={900}
                            height={600}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-gray-900">What is Full Stack Development?</h3>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
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
                        <h3 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Full Stack Development?</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
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
                            className="rounded-lg shadow-lg"
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
                className="bg-gray-400 py-20 mt-10 mb-10"
            >
                <h3 className="text-center text-4xl font-bold mb-4">Technologies I Use</h3>
                <p className="text-center max-w-4xl mx-auto mb-12">
                    We leverage cutting-edge frameworks like React.js and Angular.js, combined with robust back-end
                    solutions such as Node.js and Django, to develop dynamic and user-centric web applications that
                    deliver exceptional performance and seamless user experiences.
                </p>
                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    <Image src={YourSvgIcon1} alt="React Icon" width={60} height={60}/>
                    <Image src={YourSvgIcon2} alt="Node.js Icon" width={50} height={50}/>
                    <Image src={YourSvgIcon3} alt="React Icon" width={50} height={50}/>
                    <Image src={YourSvgIcon4} alt="Node.js Icon" width={50} height={50}/>
                    <Image src={YourSvgIcon5} alt="React Icon" width={50} height={50}/>
                    <Image src={YourSvgIcon6} alt="Node.js Icon" width={50} height={50}/>
                    <Image src={YourSvgIcon7} alt="React Icon" width={50} height={50}/>
                </div>
            </motion.section>

            {/* Why Choose My Portfolio Section */}
            <motion.div
                ref={refWhyChoose}
                initial={{opacity: 0, y: 50}}
                animate={{opacity: isWhyChooseInView ? 1 : 0, y: isWhyChooseInView ? 0 : 50}}
                transition={{duration: 0.6}}
                className="container mx-auto text-center py-16 bg-gray-200 text-black"
            >
                <h3 className="text-3xl font-bold mb-8">Why Choose My Portfolio?</h3>

                <div className="flex flex-col md:flex-row md:justify-around">
                    {/* Card 1 */}
                    <div
                        className="bg-gradient-to-r from-blue-500 to-blue-300 p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3 md:mx-2 transition-transform transform hover:scale-105">
                        <div className="mb-4">
                            {/* Unique Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-white"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10 2a8 8 0 00-7.464 11.154A7.972 7.972 0 0110 20a7.972 7.972 0 017.464-6.846A8 8 0 0010 2zm0 14a5.985 5.985 0 01-4.898-2.637 7.017 7.017 0 012.631-3.006 3.985 3.985 0 002.267-.61 3.985 3.985 0 002.267.61 7.017 7.017 0 012.631 3.006A5.985 5.985 0 0110 16z"/>
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Expertise in Multiple Technologies</h4>
                        <p className="text-white">I have a strong foundation in a diverse set of technologies, ensuring
                            that I can handle any aspect of web development.</p>
                    </div>

                    {/* Card 2 */}
                    <div
                        className="bg-gradient-to-r from-green-500 to-green-300 p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3 md:mx-2 transition-transform transform hover:scale-105">
                        <div className="mb-4">
                            {/* Unique Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-white"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10 2a8 8 0 00-7.464 11.154A7.972 7.972 0 0110 20a7.972 7.972 0 017.464-6.846A8 8 0 0010 2zm0 14a5.985 5.985 0 01-4.898-2.637 7.017 7.017 0 012.631-3.006 3.985 3.985 0 002.267-.61 3.985 3.985 0 002.267.61 7.017 7.017 0 012.631 3.006A5.985 5.985 0 0110 16z"/>
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Responsive Design Principles</h4>
                        <p className="text-white">I apply responsive design principles to ensure that my applications
                            are accessible on any device.</p>
                    </div>

                    {/* Card 3 */}
                    <div
                        className="bg-gradient-to-r from-red-500 to-red-300 p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3 md:mx-2 transition-transform transform hover:scale-105">
                        <div className="mb-4">
                            {/* Unique Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-white"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10 2a8 8 0 00-7.464 11.154A7.972 7.972 0 0110 20a7.972 7.972 0 017.464-6.846A8 8 0 0010 2zm0 14a5.985 5.985 0 01-4.898-2.637 7.017 7.017 0 012.631-3.006 3.985 3.985 0 002.267-.61 3.985 3.985 0 002.267.61 7.017 7.017 0 012.631 3.006A5.985 5.985 0 0110 16z"/>
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Commitment to Continuous Learning</h4>
                        <p className="text-white">I am always learning and adapting to new technologies and trends in
                            web development.</p>
                    </div>
                </div>

                {/* New Reasons */}
                <div className="flex flex-col md:flex-row md:justify-around mt-10">
                    {/* Card 4 */}
                    <div
                        className="bg-gradient-to-r from-purple-500 to-purple-300 p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3 md:mx-2 transition-transform transform hover:scale-105">
                        <div className="mb-4">
                            {/* Unique Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-white"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10 2a8 8 0 00-7.464 11.154A7.972 7.972 0 0110 20a7.972 7.972 0 017.464-6.846A8 8 0 0010 2zm0 14a5.985 5.985 0 01-4.898-2.637 7.017 7.017 0 012.631-3.006 3.985 3.985 0 002.267-.61 3.985 3.985 0 002.267.61 7.017 7.017 0 012.631 3.006A5.985 5.985 0 0110 16z"/>
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">User-Centric Approach</h4>
                        <p className="text-white">I prioritize user experience and design to create engaging and
                            effective applications.</p>
                    </div>

                    {/* Card 5 */}
                    <div
                        className="bg-gradient-to-r from-orange-500 to-orange-300 p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3 md:mx-2 transition-transform transform hover:scale-105">
                        <div className="mb-4">
                            {/* Unique Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-white"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10 2a8 8 0 00-7.464 11.154A7.972 7.972 0 0110 20a7.972 7.972 0 017.464-6.846A8 8 0 0010 2zm0 14a5.985 5.985 0 01-4.898-2.637 7.017 7.017 0 012.631-3.006 3.985 3.985 0 002.267-.61 3.985 3.985 0 002.267.61 7.017 7.017 0 012.631 3.006A5.985 5.985 0 0110 16z"/>
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Strong Problem-Solving Skills</h4>
                        <p className="text-white">I have a knack for troubleshooting and finding efficient solutions to
                            complex challenges.</p>
                    </div>

                    {/* Card 6 */}
                    <div
                        className="bg-gradient-to-r from-teal-500 to-teal-300 p-6 rounded-lg shadow-lg mb-6 md:mb-0 md:w-1/3 md:mx-2 transition-transform transform hover:scale-105">
                        <div className="mb-4">
                            {/* Unique Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mx-auto text-white"
                                 viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M10 2a8 8 0 00-7.464 11.154A7.972 7.972 0 0110 20a7.972 7.972 0 017.464-6.846A8 8 0 0010 2zm0 14a5.985 5.985 0 01-4.898-2.637 7.017 7.017 0 012.631-3.006 3.985 3.985 0 002.267-.61 3.985 3.985 0 002.267.61 7.017 7.017 0 012.631 3.006A5.985 5.985 0 0110 16z"/>
                            </svg>
                        </div>
                        <h4 className="text-xl font-semibold mb-2">Proven Track Record</h4>
                        <p className="text-white">I have successfully completed various projects that demonstrate my
                            skills and dedication.</p>
                    </div>
                </div>
            </motion.div>

            {/* Footer */}
            <DownFooter/>
        </div>
    );
};

export default FullStackDevelopment;
