"use client";

import React from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import fsdImage from "@/public/assests/images/image.png";
import Navbar from "@/components/Navbar";
import DownFooter from "@/components/DownFooter";
import {
    FaArrowRight,
} from 'react-icons/fa';

import rIcon from '@/public/assests/icons/r-original.svg';
import pythonIcon from '@/public/assests/icons/python-original.svg';
import pytrouchIcon from '@/public/assests/icons/PyTorch.svg';
import tenserflowIcon from "@/public/assests/icons/Tensorflow_logo.svg";

import CallToAction from "@/components/CallToAction";
import WhyChoosePortfolio from "@/components/WhyChoosePortfolio";
import {FaBrain} from "react-icons/fa6";
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

                {/* Machine Learning Code Snippets */}
                <div className="absolute inset-0 flex justify-center items-center">
                    {/* Scikit-learn Code Snippet */}
                    <div
                        className="absolute top-10 left-16 z-0 text-green-400 opacity-70 font-mono text-lg md:text-xl animate-pulse"
                    >
            <pre>
                {`from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
model = RandomForestClassifier()
model.fit(X_train, y_train)
print("Accuracy:", model.score(X_test, y_test))`}
            </pre>
                    </div>

                    {/* TensorFlow Code Snippet */}
                    <div
                        className="absolute top-10 left-3/4 transform -translate-x-1/2 z-0 text-blue-400 opacity-70 font-mono text-lg md:text-xl animate-pulse"
                    >
            <pre>
                {`import tensorflow as tf
from tensorflow.keras import layers

model = tf.keras.Sequential([
    layers.Dense(128, activation='relu', input_shape=(input_dim,)),
    layers.Dense(64, activation='relu'),
    layers.Dense(1, activation='sigmoid')
])
model.compile(optimizer='adam', loss='binary_crossentropy', metrics=['accuracy'])
model.fit(X_train, y_train, epochs=10)`}
            </pre>
                    </div>

                    {/* PyTorch Code Snippet */}
                    <div
                        className="absolute bottom-32 right-16 z-0 text-orange-400 opacity-70 font-mono text-lg md:text-xl animate-pulse"
                    >
            <pre>
                {`import torch.nn as nn
import torch.optim as optim

class NeuralNet(nn.Module):
    def __init__(self, input_size):
        super(NeuralNet, self).__init__()
        self.fc1 = nn.Linear(input_size, 64)
        self.fc2 = nn.Linear(64, 32)
        self.out = nn.Linear(32, 1)

    def forward(self, x):
        x = torch.relu(self.fc1(x))
        x = torch.relu(self.fc2(x))
        return torch.sigmoid(self.out(x))`}
            </pre>
                    </div>

                    {/* Pandas and Data Processing Code Snippet */}
                    <div
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-0 text-teal-400 opacity-70 font-mono text-lg md:text-xl animate-pulse"
                    >
            <pre>
                {`import pandas as pd

data = pd.read_csv("data.csv")
data['processed'] = data['raw'].apply(lambda x: x.lower().strip())
X, y = data.drop(columns=['target']), data['target']
print("Data Ready for ML:", X.shape, y.shape)`}
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
                    <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight transform-gpu transition-all duration-1000 hover:scale-110 hover:text-orange-400">
                        Machine Learning & AI
                    </h2>

                    {/* Subheading with Smooth Fade-In */}
                    <motion.p
                        initial={{opacity: 0}}
                        animate={{opacity: isHeroInView ? 1 : 0}}
                        transition={{duration: 0.8, delay: 0.5, ease: "easeInOut"}}
                        className="mt-6 text-lg md:text-xl max-w-6xl mx-auto text-gray-300 leading-relaxed"
                        style={{lineHeight: "2.0"}}
                    >
                        Dive into the world of data-driven innovation. With expertise in frameworks like TensorFlow,
                        PyTorch, and Scikit-learn, I create intelligent systems that solve real-world challenges and
                        unlock actionable insights.
                    </motion.p>

                    {/* Call to Action Button with Hover Effect */}
                    <motion.a
                        href="#contact"
                        initial={{scale: 0.8}}
                        animate={{scale: 1}}
                        transition={{duration: 0.6, delay: 0.8, ease: "easeInOut"}}
                        className="mt-8 px-6 py-3 bg-orange-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-orange-600 transition-all duration-300 transform hover:scale-105"
                    >
                        Get In Touch
                    </motion.a>
                </motion.div>
            </motion.section>


            {/* Machine Learning Overview Section */}
            <motion.section
                ref={refOverview}
                initial={{opacity: 0, y: 50}}
                animate={{opacity: isOverviewInView ? 1 : 0, y: isOverviewInView ? 0 : 50}}
                transition={{duration: 0.6}}
                className="py-20 max-w-7xl mx-auto px-6 md:px-12"
            >
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h3 className="text-5xl font-extrabold text-orange-500">Empowering Innovation with Machine
                        Learning</h3>
                    <p
                        className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed"
                        style={{lineHeight: "2.0"}}
                    >
                        I develop intelligent solutions using cutting-edge machine learning algorithms to analyze data,
                        make
                        predictions, and unlock actionable insights.
                    </p>
                </div>

                {/* Content Section */}
                <div className="flex flex-col md:flex-row items-center gap-10">
                    {/* Left: Image */}
                    <div className="relative md:w-1/2">
                        <Image
                            src={fsdImage}
                            alt="Machine Learning Process"
                            width={600}
                            height={400}
                            className="rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                        />
                    </div>

                    {/* Right: Content */}
                    <div
                        className="md:w-1/2 space-y-8 h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-orange-500 scrollbar-track-orange-600"
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
                                className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold"
                            >
                                1
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Predictive Analytics</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Use predictive models to identify trends and forecast future outcomes, enhancing
                                    decision-making
                                    with data-driven insights.
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
                                className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold"
                            >
                                2
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Data Preprocessing</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Clean and preprocess raw data to optimize machine learning model performance through
                                    advanced
                                    techniques.
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
                                className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold"
                            >
                                3
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Deep Learning Solutions</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Implement state-of-the-art deep learning models for image recognition, NLP, and
                                    other complex
                                    applications.
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
                                className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold"
                            >
                                4
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Model Optimization</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Enhance model performance with techniques like hyperparameter tuning and feature
                                    engineering for
                                    superior results.
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
                                className="w-12 h-12 bg-gray-100 text-gray-700 rounded-full flex items-center justify-center text-2xl font-bold"
                            >
                                5
                            </div>
                            <div>
                                <h4 className="text-xl font-semibold text-gray-200">Real-Time Deployments</h4>
                                <p className="text-gray-300 leading-relaxed">
                                    Deploy scalable machine learning models in production to enable real-time analytics
                                    and decision
                                    support.
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>

                {/* Footer: CTA */}
                <div className="mt-16 text-center">
                    <Link
                        href="/#machine-learning-projects"
                        className="inline-flex items-center justify-center gap-3 text-gray-200 font-medium text-lg hover:text-gray-400 transition-colors"
                    >
                        <button
                            className="flex items-center justify-center gap-3 bg-orange-500 text-white py-3 px-6 rounded-lg hover:bg-orange-600 transition-colors">
                            {/* Icon before text */}
                            <FaBrain className="text-2xl"/>

                            {/* Text */}
                            Explore My Machine Learning Projects

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
                <h3 className="text-center text-4xl font-bold mb-4 text-orange-500">Technologies I Use in Machine
                    Learning</h3>
                <p className="text-center max-w-6xl mx-auto mb-12 text-white" style={{lineHeight: "1.8"}}>
                    I utilize a variety of powerful tools and frameworks to build machine learning models and
                    applications. Leveraging libraries such as TensorFlow and PyTorch for deep learning, alongside
                    Scikit-learn for traditional machine learning algorithms, I create robust predictive models.
                    Additionally, I incorporate data manipulation tools like Pandas and NumPy to preprocess and analyze
                    data effectively, ensuring that the solutions I develop are data-driven and scalable.
                </p>

                <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
                    <Image src={rIcon} alt="React Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={pythonIcon} alt="Node.js Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={pytrouchIcon} alt="Node.js Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>
                    <Image src={tenserflowIcon} alt="Node.js Icon" width={60} height={60}
                           className="transition-transform duration-300 hover:scale-110"/>

                </div>
            </motion.section>

            <WhyChoosePortfolio refProp={refWhyChoose} isInView={isWhyChooseInView}/>

            <CallToAction/>
            {/* Footer */}
            <DownFooter arrowBgColor="#ED8936"/>
        </div>
    );
};

export default FullStackDevelopment;
