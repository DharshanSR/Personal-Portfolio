"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import fsdImage from "@/public/assests/images/image.png";
import Navbar from "@/components/Navbar";
import DownFooter from "@/components/DownFooter";
import {SiFigma, SiSketch} from 'react-icons/si';
import {FaUser, FaPalette} from 'react-icons/fa';

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
        <div className="min-h-screen bg-[#2A2A3C]">
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
                className="relative bg-gradient-to-r from-purple-400 to-pink-500 text-white py-20 text-center h-[90vh] flex flex-col justify-center items-center overflow-hidden"
            >
                {/* Shapes */}
                <div
                    className="absolute top-10 left-10 w-24 h-24 bg-white opacity-20 rounded-full animate-bounce"></div>
                <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                <div
                    className="absolute bottom-20 right-20 w-16 h-16 bg-white opacity-25 rounded-full animate-bounce"></div>
                <div
                    className="absolute bottom-0 left-0 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-white opacity-10 animate-spin-slide"></div>

                {/* Programming Icons */}
                <div className="absolute top-20 right-20 text-white text-5xl opacity-70">
                    <SiFigma/>
                </div>
                {/* Android Icon */}
                <div className="absolute top-40 left-40 text-white text-5xl opacity-70">
                    <SiSketch/>
                </div>
                {/* iOS Icon */}
                <div className="absolute bottom-10 left-10 text-white text-5xl opacity-70">
                    <FaUser/>
                </div>
                {/* Mobile Icon */}
                <div className="absolute bottom-20 right-40 text-white text-5xl opacity-70">
                    <FaPalette/>
                </div>

                {/* Text Content */}
                <h2 className="text-5xl font-bold">UI/UX Design</h2>
                <p className="mt-4 text-lg max-w-6xl mx-auto">
                    Transforming ideas into user-friendly designs, I specialize in creating intuitive interfaces and
                    seamless user experiences. My design process emphasizes user research, prototyping, and usability
                    testing, ensuring that every interaction is meaningful and engaging. By prioritizing both aesthetics
                    and functionality, I help brands establish a strong visual identity while enhancing user
                    satisfaction and retention.
                </p>
            </motion.section>

            {/* Machine Learning Overview Section */}
            <motion.section
                ref={refOverview}
                initial={{opacity: 0, y: 50}}
                animate={{opacity: isOverviewInView ? 1 : 0, y: isOverviewInView ? 0 : 50}}
                transition={{duration: 0.6}}
                className="py-20 max-w-7xl mx-auto px-4 md:px-8 bg-[#2A2A3C] container"
            >
                {/* First Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mt-10 mb-10">
                    <div className="md:w-1/2">
                        <Image
                            src={fsdImage} // Replace with your UI/UX-related image
                            alt="UI/UX Design"
                            width={900}
                            height={600}
                            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-pink-500">What is UI/UX Design?</h3>
                        <p className="text-gray-200 text-lg mb-6 leading-relaxed text-justify">
                            UI/UX Design is the process of enhancing user satisfaction by improving the usability,
                            accessibility,
                            and pleasure provided in the interaction between the user and the product. I specialize in
                            creating
                            intuitive and aesthetically pleasing interfaces that not only engage users but also drive
                            them
                            towards their goals with ease.
                        </p>
                    </div>
                </div>

                {/* Why Choose UI/UX Design Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mt-10 md:mt-12">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-pink-500">Why Choose UI/UX Design?</h3>
                        <p className="text-gray-200 text-lg leading-relaxed text-justify">
                            In a competitive digital landscape, effective UI/UX design is essential for creating
                            memorable
                            user experiences. My expertise allows businesses to connect with their audience through
                            thoughtfully
                            designed interfaces that enhance usability and foster customer loyalty. By understanding
                            user needs
                            and behaviors, I create designs that not only look great but also function seamlessly.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src={fsdImage} // Replace with another UI/UX-related image or the same one
                            alt="Why Choose UI/UX Design"
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
                <h3 className="text-center text-4xl font-bold mb-4 text-pink-500">Where I Apply My UI/UX Design Skills</h3>
                <p className="text-center max-w-6xl mx-auto mb-12 text-white" style={{ lineHeight: "1.8" }}>
                    I leverage various technologies to enhance my UI/UX design process. Utilizing tools like Figma and
                    Adobe XD
                    allows me to create intuitive and visually appealing interfaces. I also employ usability testing
                    platforms
                    to gather user feedback and refine designs for optimal user experience. My design process is
                    supported by
                    collaboration tools like Miro and Notion, ensuring efficient brainstorming and feedback.
                </p>


                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    <Image src={YourSvgIcon1} alt="Medium Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon2} alt="WordPress Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon3} alt="SEO Tool Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon4} alt="Google Docs Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon5} alt="Notion Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon6} alt="Analytics Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={YourSvgIcon7} alt="Content Strategy Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                </div>
            </motion.section>

            <WhyChoosePortfolio refProp={refWhyChoose} isInView={isWhyChooseInView}/>

            <CallToAction/>
            {/* Footer */}
            <DownFooter arrowBgColor="#D53F8C" />
        </div>
    );
};

export default FullStackDevelopment;
