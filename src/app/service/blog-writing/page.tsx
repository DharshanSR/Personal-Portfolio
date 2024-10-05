"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import fsdImage from "@/public/assests/images/image.png";
import Navbar from "@/components/Navbar";
import DownFooter from "@/components/DownFooter";
import { FaMedium } from 'react-icons/fa'; // Medium icon for blogs
import { SiBloglovin } from 'react-icons/si'; // Bloglovin icon for blogs

import YourSvgIcon1 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon2 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon3 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon4 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon5 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon6 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon7 from '@/public/assests/icons/react-original.svg';
import CallToAction from "@/components/CallToAction";
import WhyChoosePortfolio from "@/components/WhyChoosePortfolio";
import ExploreMore from "@/components/ExploreMore";

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
                className="relative bg-gradient-to-r from-teal-500 to-cyan-700 text-white py-20 text-center h-[90vh] flex flex-col justify-center items-center overflow-hidden"
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
                    <FaMedium />
                </div>
                {/* Android Icon */}
                <div className="absolute top-40 left-40 text-white text-5xl opacity-70">
                    <SiBloglovin />
                </div>

                {/* Text Content */}
                <h2 className="text-5xl font-bold">Blog and Article Writing</h2>
                <p className="mt-4 text-lg max-w-6xl mx-auto">
                    Enhance your brand’s voice with my expertise in blog and article writing. I craft compelling,
                    informative,
                    and engaging content tailored to resonate with your target audience. My approach focuses on thorough
                    research
                    and clear communication, ensuring your message is delivered effectively while driving engagement and
                    building
                    trust with readers.
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
                            src={fsdImage} // Replace with your blog-related image
                            alt="Blog and Article Writing"
                            width={900}
                            height={600}
                            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-gray-900">What is Blog and Article Writing?</h3>
                        <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                            Blog and article writing involves creating engaging and informative content for online
                            platforms,
                            tailored to attract and retain readers. I specialize in crafting articles that resonate with
                            audiences
                            on platforms like Medium, ensuring clarity and engagement through well-researched insights
                            and a
                            compelling narrative style.
                        </p>
                    </div>
                </div>

                {/* Why Choose Blog and Article Writing Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mt-10 md:mt-12">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-gray-900">Why Choose Blog and Article Writing?</h3>
                        <p className="text-gray-700 text-lg leading-relaxed">
                            In today's digital landscape, quality content is crucial for building brand authority and
                            driving
                            engagement. My expertise in blog and article writing allows businesses to connect with their
                            audience,
                            share valuable insights, and enhance their online presence. I prioritize understanding
                            target audiences
                            to create tailored content that fosters community and encourages discussion.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src={fsdImage} // Replace with another blog-related image or the same one
                            alt="Why Choose Blog and Article Writing"
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
                <h3 className="text-center text-4xl font-bold mb-4">Where I am Writing Blog and Article</h3>
                <p className="text-center max-w-6xl mx-auto mb-12">
                    I leverage various technologies to enhance my blog and article writing process. Utilizing platforms like
                    Medium and WordPress allows me to publish engaging content effectively. I also employ SEO tools to optimize
                    my articles for better visibility and reach. My writing process is supported by collaboration tools like
                    Google Docs and Notion, ensuring efficient brainstorming and feedback. Furthermore, I use analytics
                    platforms to track engagement and refine my content strategy based on audience insights.
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

            <ExploreMore />

            <WhyChoosePortfolio refProp={refWhyChoose} isInView={isWhyChooseInView}/>

            <CallToAction/>
            {/* Footer */}
            <DownFooter/>
        </div>
    );
};

export default FullStackDevelopment;
