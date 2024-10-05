// WhyChoosePortfolio.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaLaptopCode, FaUsers, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const WhyChoosePortfolio = ({ refProp, isInView }) => {
    const cardData = [
        {
            icon: <FaCode />,
            title: 'Expertise in Multiple Technologies',
            description: 'I have strong knowledge in various technologies to handle different aspects of development.',
        },
        {
            icon: <FaMobileAlt />,
            title: 'Responsive Design Principles',
            description: 'Creating adaptable designs that work seamlessly across devices.',
        },
        {
            icon: <FaLaptopCode />,
            title: 'Continuous Learning',
            description: 'Staying up-to-date with the latest technologies to provide cutting-edge solutions.',
        },
        {
            icon: <FaUsers />,
            title: 'User-Centric Approach',
            description: 'My design focuses on ensuring a delightful user experience with every interaction.',
        },
        {
            icon: <FaLightbulb />,
            title: 'Problem Solving Skills',
            description: 'Capable of solving complex challenges with creative and efficient solutions.',
        },
        {
            icon: <FaCheckCircle />,
            title: 'Proven Success',
            description: 'My portfolio showcases projects that demonstrate my expertise and commitment.',
        },
    ];

    return (
        <motion.div
            ref={refProp}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            className="container mx-auto text-center py-20 bg-gray-200"
        >
            <h3 className="text-4xl font-bold mb-12 text-white">Why Choose My Portfolio?</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        className="relative p-8 rounded-xl shadow-lg transition-transform transform hover:scale-105 bg-white bg-opacity-70 backdrop-blur-lg"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg">
                            <i className="text-4xl">{card.icon}</i>
                        </div>
                        <h4 className="text-xl font-semibold mt-10 mb-2 text-gray-800">{card.title}</h4>
                        <p className="text-gray-700">{card.description}</p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default WhyChoosePortfolio;
