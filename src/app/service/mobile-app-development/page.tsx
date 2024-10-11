"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import fsdImage from "@/public/assests/images/image.png";
import Navbar from "@/components/Navbar";
import DownFooter from "@/components/DownFooter";
import { AiFillAndroid, AiFillApple, AiFillMobile } from 'react-icons/ai';
import { FaReact} from 'react-icons/fa';
import { SiFlutter } from 'react-icons/si';

import YourSvgIcon1 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon2 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon3 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon4 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon5 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon6 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon7 from '@/public/assests/icons/react-original.svg';
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
                className="relative bg-gradient-to-r from-green-400 to-green-800 text-white py-20 text-center h-[90vh] flex flex-col justify-center items-center overflow-hidden"
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
                    <FaReact />
                </div>
                {/* Android Icon */}
                <div className="absolute top-40 left-40 text-white text-5xl opacity-70">
                    <AiFillAndroid />
                </div>
                {/* iOS Icon */}
                <div className="absolute bottom-10 left-10 text-white text-5xl opacity-70">
                    <AiFillApple />
                </div>
                {/* Mobile Icon */}
                <div className="absolute bottom-20 right-40 text-white text-5xl opacity-70">
                    <AiFillMobile />
                </div>

                {/* Additional Icons for Wing Effect */}
                <div className="absolute top-5 left-1/4 text-white text-5xl opacity-70">
                    <SiFlutter />
                </div>

                {/* Text Content */}
                <h2 className="text-5xl font-bold">Mobile App Development</h2>
                <p className="mt-4 text-lg max-w-6xl mx-auto">
                    Elevate your business with my mobile app development expertise. I create intuitive and engaging
                    applications for both iOS and Android platforms, ensuring a seamless user experience. My approach
                    focuses on user-centered design and efficient performance, empowering your organization to connect
                    with customers on-the-go.
                </p>

            </motion.section>

            {/* Machine Learning Overview Section */}
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
                            src={fsdImage} // Replace with your mobile app-related image
                            alt="Mobile App Development"
                            width={900}
                            height={600}
                            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-green-500">What is Mobile App Development?</h3>
                        <p className="text-gray-200 text-lg mb-6 leading-relaxed text-justify">
                            Mobile app development involves creating software applications that run on mobile devices,
                            offering users a seamless experience. I specialize in building native and cross-platform apps
                            that cater to various business needs, ensuring functionality and performance across all devices.
                        </p>
                    </div>
                </div>

                {/* Why Choose Mobile App Development Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mt-10 md:mt-12">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-green-500">Why Choose Mobile App Development?</h3>
                        <p className="text-gray-200 text-lg leading-relaxed text-justify">
                            In a mobile-driven world, having a strong mobile presence is essential for engaging customers
                            and enhancing brand loyalty. My expertise in mobile app development helps businesses reach
                            a wider audience while delivering exceptional user experiences. I focus on integrating user
                            feedback and analytics to ensure continuous improvement and innovation in the apps I create.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src={fsdImage} // Replace with another mobile app-related image or the same one
                            alt="Why Choose Mobile App Development"
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
                <h3 className="text-center text-4xl font-bold mb-4 text-green-500">Technologies I Use in Mobile App Development</h3>
                <p className="text-center max-w-6xl mx-auto mb-12 text-white" style={{ lineHeight: "1.8" }}>
                    I utilize a variety of cutting-edge technologies to create high-quality mobile applications.
                    Leveraging frameworks like React Native and Flutter allows me to develop cross-platform apps that
                    deliver seamless user experiences on both iOS and Android. Additionally, I incorporate tools like
                    Firebase for real-time database solutions, along with various APIs for enhanced functionality.
                    My expertise in using version control systems like Git ensures efficient collaboration and code
                    management throughout the development process.
                </p>


                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    <Image src={YourSvgIcon1} alt="React Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon2} alt="Node.js Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon3} alt="React Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon4} alt="Node.js Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon5} alt="React Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon6} alt="Node.js Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon7} alt="React Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                </div>
            </motion.section>
            <WhyChoosePortfolio refProp={refWhyChoose} isInView={isWhyChooseInView}/>
            <CallToAction/>
            {/* Footer */}
            <DownFooter arrowBgColor="#38A169" />
        </div>
    );
};

export default FullStackDevelopment;
