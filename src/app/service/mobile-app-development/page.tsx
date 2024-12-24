"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import fsdImage from "@/public/assests/images/image.png";
import Navbar from "@/components/Navbar";
import DownFooter from "@/components/DownFooter";
import {FaArrowRight, FaMobileAlt} from 'react-icons/fa';

import YourSvgIcon1 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon2 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon3 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon4 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon5 from '@/public/assests/icons/react-original.svg';
import YourSvgIcon6 from '@/public/assests/icons/nodejs-original.svg';
import YourSvgIcon7 from '@/public/assests/icons/react-original.svg';
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

            {/* Hero Section */}
            <motion.section
                ref={refHero}
                initial={{opacity: 0, y: -50}}
                animate={{opacity: isHeroInView ? 1 : 0, y: isHeroInView ? 0 : -50}}
                transition={{duration: 0.8, ease: "easeInOut"}}
                className="relative bg-gradient-to-r from-[#2A2A3C] to-[#1F1F2E] text-white py-24 md:py-32 text-center h-[90vh] flex flex-col justify-center items-center overflow-hidden"
            >
                {/* Animated Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f1d] to-[#1f1f2e] opacity-30"></div>

                {/* Mobile Development Code Snippets */}
                <div className="absolute inset-0 flex justify-center items-center">
                    {/* Android Code Snippet */}
                    <div
                        className="absolute top-10 left-10 z-0 text-green-500 opacity-70 font-mono text-lg md:text-xl animate-pulse">
<pre>
{`import android.os.Bundle;
import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }
}`}
</pre>
                    </div>

                    {/* Swift (iOS) Code Snippet */}
                    <div
                        className="absolute top-5 -right-20 transform -translate-x-1/2 z-0 text-blue-500 opacity-70 font-mono text-lg md:text-xl animate-pulse">
<pre>
{`import SwiftUI

struct ContentView: View {
    var body: some View {
        Text("Hello, iOS Development!")
            .padding()
    }
}

@main
struct MyApp: App {
    var body: some Scene {
        WindowGroup {
            ContentView()
        }
    }
}`}
</pre>
                    </div>

                    {/* Flutter Code Snippet */}
                    <div
                        className="absolute bottom-1 left-20 transform -translate-x-1/2 z-0 text-teal-500 opacity-70 font-mono text-lg md:text-xl animate-pulse">
<pre>
{`import 'package:flutter/material.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return MaterialApp(
            home: Scaffold(
                appBar: AppBar(title: Text('Flutter Mobile App')),
                body: Center(child: Text('Hello, Flutter!')),
            ),
        );
    }
}`}
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
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight transform-gpu transition-all duration-1000 hover:scale-110 hover:text-green-400">
                        Mobile Development
                    </h2>

                    {/* Subheading with Smooth Fade-In */}
                    <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: isHeroInView ? 1 : 0}}
                        transition={{duration: 0.8, delay: 0.5, ease: "easeInOut"}}
                        className="mt-6 text-lg md:text-xl max-w-6xl mx-auto text-gray-300 leading-relaxed"
                        style={{lineHeight: "2.0"}}
                    >
                        Elevate your business with my mobile app development expertise. I create intuitive and engaging
                        applications for both iOS and Android platforms, ensuring a seamless user experience. My
                        approach
                        focuses on user-centered design and efficient performance, empowering your organization to
                        connect
                        with customers on-the-go.
                    </motion.p>

                    {/* Call to Action Button with Hover Effect */}
                    <motion.a
                        href="#contact"
                        initial={{scale: 0.8}}
                        animate={{scale: 1}}
                        transition={{duration: 0.6, delay: 0.8, ease: "easeInOut"}}
                        className="mt-8 px-6 py-3 bg-green-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </motion.section>

            {/* MobileApp Development Overview Section */}
            <motion.section
                ref={refOverview}
                initial={{opacity: 0, y: 50}}
                animate={{opacity: isOverviewInView ? 1 : 0, y: isOverviewInView ? 0 : 50}}
                transition={{duration: 0.6}}
                className="py-20 max-w-7xl mx-auto px-6 md:px-12"
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h3 className="text-5xl font-extrabold text-green-500">Transforming Ideas into Mobile Solutions</h3>
                    <p
                        className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
                        style={{lineHeight: "2.0"}}
                    >
                        I craft user-friendly, scalable mobile apps that blend design and functionality seamlessly,
                        ensuring exceptional performance and engaging user experiences.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Image */}
                    <div className="relative md:w-1/2">
                        <Image
                            src={fsdImage}
                            alt="Mobile App Development Process"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Right: Content */}
                    <div
                        className="md:w-1/2 space-y-8 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-green-500 scrollbar-track-green-600"
                        style={{lineHeight: "2.0"}}
                    >
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
                                <h4 className="text-xl font-semibold text-gray-200">Cross-Platform Solutions</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    I build mobile apps for both iOS and Android, ensuring seamless performance and
                                    consistent
                                    experiences across platforms.
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
                                <h4 className="text-xl font-semibold text-gray-200">User-First Design</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    My designs prioritize user experience, combining intuitive navigation with visually
                                    appealing
                                    layouts to maximize engagement.
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
                                <h4 className="text-xl font-semibold text-gray-200">Efficient Back-End Integration</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    I integrate back-end systems to provide apps with powerful functionalities, enabling
                                    features
                                    like real-time updates, analytics, and secure databases.
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
                                <h4 className="text-xl font-semibold text-gray-200">Advanced Analytics Integration</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Gain insights into user behavior with analytics tools that help businesses grow and
                                    adapt
                                    based on real-world data.
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
                                <h4 className="text-xl font-semibold text-gray-200">Cloud Integration</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    I leverage cloud technologies for app scalability, ensuring seamless data
                                    synchronization and
                                    remote accessibility.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer: CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/#mobile-development-projects"
                        className="inline-flex items-center justify-center gap-3 text-gray-200 font-medium text-lg hover:text-gray-400 transition-colors"
                    >
                        <button
                            className="flex items-center justify-center gap-3 bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors">
                            {/* Icon before text */}
                            <FaMobileAlt className="text-2xl"/>

                            {/* Text */}
                            Explore My Mobile Projects

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
                <h3 className="text-center text-4xl font-bold mb-4 text-green-500">Technologies I Use in Mobile App
                    Development</h3>
                <p className="text-center max-w-6xl mx-auto mb-12 text-white" style={{lineHeight: "1.8"}}>
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
            <DownFooter arrowBgColor="#38A169"/>
        </div>
    );
};

export default FullStackDevelopment;
