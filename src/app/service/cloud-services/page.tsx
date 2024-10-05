"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import fsdImage from "@/public/assests/images/image.png";
import Navbar from "@/components/Navbar";
import DownFooter from "@/components/DownFooter";
import { AiFillCloud, AiOutlineCloud } from 'react-icons/ai'; // Add cloud icons if needed

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
                className="relative bg-gradient-to-r from-blue-900 to-indigo-500 text-white py-20 text-center h-[90vh] flex flex-col justify-center items-center overflow-hidden"
            >
                {/* Shapes */}
                <div className="absolute top-10 left-10 w-24 h-24 bg-white opacity-20 rounded-full"></div>
                <div className="absolute top-1/3 left-1/3 w-32 h-32 bg-white opacity-10 rounded-full"></div>
                <div
                    className="absolute bottom-20 right-20 w-16 h-16 bg-white opacity-25 rounded-full animate-bounce"></div>
                <div
                    className="absolute bottom-0 left-0 w-0 h-0 border-l-[50px] border-l-transparent border-r-[50px] border-r-transparent border-b-[100px] border-b-white opacity-10 animate-spin-slide"></div>

                {/* Programming Icons */}
                <div
                    className="absolute top-20 right-20 text-white text-5xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <AiFillCloud/>
                </div>
                <div
                    className="absolute top-40 left-20 text-white text-5xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <AiOutlineCloud/>
                </div>

                {/* Text Content */}
                <h2 className="text-5xl font-bold">Cloud Services</h2>
                <p className="mt-4 text-lg max-w-6xl mx-auto">
                    Transform your business with my cloud services expertise. I design scalable solutions using AWS,
                    Azure, and Google Cloud, ensuring security and cost-effectiveness. My approach guarantees seamless
                    integration and flexibility, empowering your organization to thrive in a dynamic environment.
                </p>
            </motion.section>


            {/* Machine Learning Overview Section */}
            <motion.section
                ref={refOverview}
                initial={{opacity: 0, y: 50}}
                animate={{opacity: isOverviewInView ? 1 : 0, y: isOverviewInView ? 0 : 50}}
                transition={{duration: 0.6}}
                className="py-20 max-w-7xl mx-auto px-4 md:px-8 bg-gray-200 container"
            >
                {/* First Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mt-10 mb-10">
                    <div className="md:w-1/2">
                        <Image
                            src={fsdImage} // Replace with your cloud-related image
                            alt="Cloud Services"
                            width={900}
                            height={600}
                            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-gray-900">What are Cloud Services?</h3>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            Cloud services provide on-demand computing resources and data storage over the internet,
                            allowing businesses to scale efficiently without the need for physical infrastructure. I
                            specialize in deploying and managing applications on leading cloud platforms such as AWS,
                            Google Cloud, and Azure, ensuring optimal performance and reliability.
                        </p>
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mt-10 md:mt-12">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Cloud Services?</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            In today’s digital landscape, leveraging cloud services is crucial for agility, scalability,
                            and cost-effectiveness. My expertise in cloud technologies enables businesses to optimize
                            their operations, enhance data security, and improve collaboration. I focus on creating
                            cloud-based solutions that are tailored to meet specific business needs and drive
                            innovation.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src={fsdImage} // Replace with another cloud-related image or the same one
                            alt="Why Choose Cloud Services"
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
                className="bg-white text-black py-20 mt-10 mb-10"
            >
                <h3 className="text-center text-4xl font-bold mb-4">Technologies I Use in Cloud Services</h3>
                <p className="text-center max-w-6xl mx-auto mb-12">
                    I leverage a range of robust tools and platforms to build effective cloud solutions. Utilizing
                    services like AWS for infrastructure, Azure for seamless integration, and Google Cloud for data
                    analytics, I ensure scalable and secure applications. Additionally, I incorporate containerization
                    technologies such as Docker and orchestration tools like Kubernetes to enhance deployment efficiency
                    and manageability in cloud environments.
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
            <DownFooter/>
        </div>
    );
};

export default FullStackDevelopment;
