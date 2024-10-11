"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import fsdImage from "@/public/assests/images/image.png";
import Navbar from "@/components/Navbar";
import DownFooter from "@/components/DownFooter";
import {
    FaGithub,
    FaPython
} from 'react-icons/fa';
import { SiTensorflow, SiPytorch, SiScikitlearn, SiKaggle, SiNumpy, SiPandas } from 'react-icons/si';// SVG Icons Import

import rIcon from '@/public/assests/icons/r-original.svg';
import pythonIcon from '@/public/assests/icons/python-original.svg';
import pytrouchIcon from '@/public/assests/icons/PyTorch.svg';
import tenserflowIcon from "@/public/assests/icons/Tensorflow_logo.svg";

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
                className="relative bg-gradient-to-r from-yellow-500 to-orange-600 text-white py-20 text-center h-[90vh] flex flex-col justify-center items-center overflow-hidden"
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
                    <SiTensorflow/>
                </div>
                <div
                    className="absolute top-40 left-20 text-white text-5xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <SiPytorch/>
                </div>
                <div
                    className="absolute bottom-10 left-10 text-white text-5xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <FaPython/>
                </div>
                <div
                    className="absolute bottom-20 right-20 text-white text-5xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <SiScikitlearn/>
                </div>

                {/* Additional Icons for Wing Effect */}
                <div
                    className="absolute top-5 left-1/4 text-white text-5xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <SiKaggle/>
                </div>
                <div
                    className="absolute top-32 left-1/2 text-white text-5xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <SiNumpy/>
                </div>
                <div
                    className="absolute bottom-5 right-1/4 text-white text-5xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <SiPandas/>
                </div>
                <div
                    className="absolute bottom-32 right-1/2 text-white text-5xl opacity-70 hover:opacity-100 transition-opacity duration-300">
                    <FaGithub />
                </div>

                {/* Text Content */}
                <h2 className="text-5xl font-bold">Machine Learning & AI</h2>
                <p className="mt-4 text-lg max-w-6xl mx-auto">
                    Harness the power of data with my expertise in machine learning. I specialize in developing
                    predictive models and algorithms that transform raw data into actionable insights. By utilizing
                    advanced techniques and tools, I design solutions that enhance decision-making processes and drive
                    innovation. My approach combines statistical analysis with programming skills, ensuring robust and
                    efficient machine learning applications that meet real-world challenges.
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
                            src={fsdImage} // Change this to your machine learning image
                            alt="Machine Learning"
                            width={900}
                            height={600}
                            className="rounded-lg shadow-lg transition-transform duration-300 hover:scale-110"
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-orange-500">What is Machine Learning?</h3>
                        <p className="text-gray-200 text-lg mb-6 leading-relaxed text-justify">
                            Machine Learning is a branch of artificial intelligence that focuses on developing algorithms that enable systems to learn from and make decisions based on data. By employing techniques such as supervised learning, unsupervised learning, and reinforcement learning, I create models that analyze patterns and predict outcomes, driving data-driven decision-making in various domains.
                        </p>
                    </div>
                </div>

                {/* Second Section */}
                <div className="flex flex-col md:flex-row items-center gap-8 mt-10 md:mt-12">
                    <div className="md:w-1/2">
                        <h3 className="text-3xl font-bold mb-4 text-orange-500">Why Choose Machine Learning?</h3>
                        <p className="text-gray-200 text-lg leading-relaxed text-justify">
                            In the age of big data, leveraging machine learning is essential for gaining insights and improving processes. With my expertise, I build predictive models that enhance operational efficiency, automate tasks, and personalize user experiences. My approach is grounded in continuous learning and adaptation, ensuring that solutions remain relevant and effective in dynamic environments.
                        </p>
                    </div>
                    <div className="md:w-1/2">
                        <Image
                            src={fsdImage} // Change this to your machine learning image
                            alt="Why Choose Machine Learning"
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
                <h3 className="text-center text-4xl font-bold mb-4 text-orange-500">Technologies I Use in Machine Learning</h3>
                <p className="text-center max-w-6xl mx-auto mb-12 text-white" style={{ lineHeight: "1.8" }}>
                    I utilize a variety of powerful tools and frameworks to build machine learning models and applications. Leveraging libraries such as TensorFlow and PyTorch for deep learning, alongside Scikit-learn for traditional machine learning algorithms, I create robust predictive models. Additionally, I incorporate data manipulation tools like Pandas and NumPy to preprocess and analyze data effectively, ensuring that the solutions I develop are data-driven and scalable.
                </p>

                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    <Image src={rIcon} alt="React Icon" width={60} height={60} className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={pythonIcon} alt="Node.js Icon" width={60} height={60} className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={pytrouchIcon} alt="Node.js Icon" width={60} height={60} className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={tenserflowIcon} alt="Node.js Icon" width={60} height={60} className="transition-transform duration-300 hover:scale-110"/>

                </div>
            </motion.section>

            <WhyChoosePortfolio refProp={refWhyChoose} isInView={isWhyChooseInView} />

            <CallToAction />
            {/* Footer */}
            <DownFooter arrowBgColor="#ED8936" />
        </div>
    );
};

export default FullStackDevelopment;
