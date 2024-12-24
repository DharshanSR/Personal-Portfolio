"use client";

import React from 'react';
import Image from 'next/image';
import {motion, useInView} from 'framer-motion';
import {useRef} from 'react';
import fsdImage from "@/public/assests/images/image.png";
import Navbar from "@/components/Navbar";
import DownFooter from "@/components/DownFooter";
import {FaBriefcase, FaArrowRight} from "react-icons/fa";
import ReactIcon from '@/public/assests/icons/react-original.svg';
import TypeScriptIcon from '@/public/assests/icons/typescript-original.svg';
import NextJsIcon from '@/public/assests/icons/nextjs-original.svg';
import TailwindCssIcon from '@/public/assests/icons/tailwindcss-original.svg';
import Laravel from '@/public/assests/icons/laravel-2.svg';
import AngularIcon from '@/public/assests/icons/angular-icon.svg';

import CallToAction from "@/components/CallToAction";
import WhyChoosePortfolio from "@/components/WhyChoosePortfolio";
import Link from "next/link";

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

            <motion.section
                ref={refHero}
                initial={{opacity: 0, y: -50}}
                animate={{opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : -50}}
                transition={{duration: 0.8, ease: "easeInOut"}}
                className="relative bg-gradient-to-r from-[#2A2A3C] to-[#1F1F2E] text-white py-24 md:py-32 text-center h-[90vh] flex flex-col justify-center items-center overflow-hidden"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f1d] to-[#1f1f2e] opacity-30"></div>

                {/* Full Stack Development Code Snippets */}
                <div className="absolute inset-0 flex justify-center items-center">
                    {/* Angular Code Snippet */}
                    <div
                        className="absolute top-10 left-16 z-0 text-green-500 opacity-70 font-mono text-lg md:text-xl animate-pulse">
            <pre>
                {`import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<h1>Full Stack Development with Angular</h1>',
})
export class AppComponent { title = 'Angular Full Stack App'; }`}
            </pre>
                    </div>

                    {/* React Code Snippet */}
                    <div
                        className="absolute top-10 left-3/4 transform -translate-x-1/2 z-0 text-blue-500 opacity-70 font-mono text-lg md:text-xl animate-pulse">
            <pre>
                {`import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>React + Full Stack Development</h1>
      <button onClick={() => setCount(count + 1)}>Count: {count}</button>
    </div>
  );
}`}
            </pre>
                    </div>

                    {/* Node.js Code Snippet */}
                    <div
                        className="absolute bottom-32 right-16 z-0 text-yellow-500 opacity-70 font-mono text-lg md:text-xl animate-pulse">
            <pre>
                {`const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello, Full Stack!');
});

app.listen(3000, () => console.log('Server running on port 3000'));`}
            </pre>
                    </div>

                    {/* MongoDB Code Snippet */}
                    <div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0 text-teal-500 opacity-70 font-mono text-lg md:text-xl animate-pulse">
            <pre>
                {`const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fullstack_db', { useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log('MongoDB Error:', err));`}
            </pre>
                    </div>
                </div>

                {/* Intro Animation with Minimalistic Styling */}
                <motion.div
                    initial={{scale: 0.8, opacity: 0}}
                    animate={{scale: 1, opacity: 1}}
                    transition={{duration: 0.8, delay: 0.3, ease: "easeInOut"}}
                    className="relative flex flex-col items-center px-6 md:px-12 z-10"
                >
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight transform-gpu transition-all duration-1000 hover:scale-110 hover:text-blue-400">
                        Full Stack Development
                    </h2>

                    {/* Subheading with Smooth Fade-In */}
                    <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: isHeroInView ? 1 : 0}}
                        transition={{duration: 0.8, delay: 0.5, ease: "easeInOut"}}
                        className="mt-6 text-lg md:text-xl max-w-6xl mx-auto text-gray-300 leading-relaxed"
                        style={{lineHeight: "2.0"}}
                    >
                        Transform your vision into reality with my expertise in full-stack development. I specialize in
                        creating impactful web applications with cutting-edge technologies, balancing exceptional design
                        and robust functionality to deliver a seamless user experience.
                    </motion.p>

                    {/* Call to Action Button with Hover Effect */}
                    <motion.a
                        href="#contact"
                        initial={{scale: 0.8}}
                        animate={{scale: 1}}
                        transition={{duration: 0.6, delay: 0.8, ease: "easeInOut"}}
                        className="mt-8 px-6 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </motion.section>

            {/* Full Stack Development - Modern UI */}
            <motion.section
                ref={refOverview}
                initial={{opacity: 0, y: 50}}
                animate={{opacity: isOverviewInView ? 1 : 0, y: isOverviewInView ? 0 : 50}}
                transition={{duration: 0.6}}
                className="py-20 max-w-7xl mx-auto px-6 md:px-12"
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h3 className="text-5xl font-extrabold text-blue-600">Crafting Seamless Digital Solutions</h3>
                    <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
                       style={{lineHeight: "2.0"}}>
                        I combine creativity and technical expertise to design and develop complete digital ecosystems
                        that prioritize user experience and scalability.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Image */}
                    <div className="relative md:w-1/2">
                        <Image
                            src={fsdImage}
                            alt="Full Stack Development Process"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Right: Content */}
                    <div
                        className="md:w-1/2 space-y-8 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-blue-600 scrollbar-track-blue-500"
                        style={{lineHeight: "2.0"}}>
                        {/* Feature 1 */}
                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: isOverviewInView ? 1 : 0, x: isOverviewInView ? 0 : 50}}
                            transition={{duration: 0.4}}
                            className="flex gap-4"
                        >
                            <div
                                className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
                                1
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">User-Centric Design</h4>
                                <p className="text-gray-300 leading-relaxed" style={{lineHeight: "2.0"}}>
                                    Each project begins with a focus on the user. From intuitive interfaces to smooth
                                    interactions, my designs ensure accessibility and engagement.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 2 */}
                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: isOverviewInView ? 1 : 0, x: isOverviewInView ? 0 : 50}}
                            transition={{duration: 0.4}}
                            className="flex gap-4"
                        >
                            <div
                                className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
                                2
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Scalable Architecture</h4>
                                <p className="text-gray-300 leading-relaxed" style={{lineHeight: "2.0"}}>
                                    Using best practices, I ensure back-end systems are built to handle growth
                                    seamlessly, supporting your future ambitions.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 3 */}
                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: isOverviewInView ? 1 : 0, x: isOverviewInView ? 0 : 50}}
                            transition={{duration: 0.4}}
                            className="flex gap-4"
                        >
                            <div
                                className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
                                3
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Performance Optimization</h4>
                                <p className="text-gray-300 leading-relaxed" style={{lineHeight: "2.0"}}>
                                    By prioritizing efficiency, I develop applications that perform exceptionally well,
                                    ensuring fast load times and smooth operations.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 4 */}
                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: isOverviewInView ? 1 : 0, x: isOverviewInView ? 0 : 50}}
                            transition={{duration: 0.4}}
                            className="flex gap-4"
                        >
                            <div
                                className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
                                4
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Robust Security</h4>
                                <p className="text-gray-300 leading-relaxed" style={{lineHeight: "2.0"}}>
                                    Security is a top priority in every project, ensuring user data and systems are
                                    protected against potential threats.
                                </p>
                            </div>
                        </motion.div>

                        {/* Feature 5 */}
                        <motion.div
                            initial={{opacity: 0, x: 50}}
                            animate={{opacity: isOverviewInView ? 1 : 0, x: isOverviewInView ? 0 : 50}}
                            transition={{duration: 0.4}}
                            className="flex gap-4"
                        >
                            <div
                                className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold">
                                5
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Advanced Analytics</h4>
                                <p className="text-gray-300 leading-relaxed" style={{lineHeight: "2.0"}}>
                                    Gain valuable insights with analytics that help you make informed decisions and
                                    drive innovation.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer: CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/#projects"
                        className="inline-flex items-center justify-center gap-3 text-gray-200 font-medium text-lg hover:text-gray-400 transition-colors"
                    >
                        <button
                            className="flex items-center justify-center gap-3 bg-blue-500 text-white py-3 px-6 rounded-lg hover:bg-blue-600 transition-colors">
                            {/* Icon before text */}
                            <FaBriefcase className="text-2xl"/>

                            {/* Text */}
                            Explore My Work

                            {/* Icon after text */}
                            <FaArrowRight className="text-2xl animate-bounce"/>
                        </button>
                    </Link>
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
                <h3 className="text-center text-4xl font-bold mb-4 text-blue-500">Technologies I Work With</h3>
                <p className="text-center max-w-5xl mx-auto mb-12 font-light text-white" style={{ lineHeight: "1.8" }}>
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
                </div>
            </motion.section>

            <WhyChoosePortfolio refProp={refWhyChoose} isInView={isWhyChooseInView}/>

            <CallToAction/>

            {/* Footer */}
            <DownFooter arrowBgColor="#6B46C1"/>
        </div>
    );
};

export default FullStackDevelopment;