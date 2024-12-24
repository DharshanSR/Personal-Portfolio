import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobileAlt, FaLaptopCode, FaUsers, FaLightbulb, FaCheckCircle } from 'react-icons/fa';

const WhyChoosePortfolio = ({ refProp, isInView }) => {
    const cardData = [
        {
            icon: <FaCode />,
            title: 'Expertise in Multiple Technologies',
            description: 'I excel in a wide range of technologies, ensuring holistic and effective development.',
        },
        {
            icon: <FaMobileAlt />,
            title: 'Responsive & Modern Design',
            description: 'Designs that adapt effortlessly to all screens and deliver top-notch aesthetics.',
        },
        {
            icon: <FaLaptopCode />,
            title: 'Lifelong Learning',
            description: 'I’m committed to staying ahead with the latest tech trends and solutions.',
        },
        {
            icon: <FaUsers />,
            title: 'User-Centric Thinking',
            description: 'Crafting intuitive designs that prioritize exceptional user experiences.',
        },
        {
            icon: <FaLightbulb />,
            title: 'Innovative Problem Solving',
            description: 'Bringing fresh ideas and solutions to the table for complex challenges.',
        },
        {
            icon: <FaCheckCircle />,
            title: 'Proven Track Record',
            description: 'Delivering projects that demonstrate quality, creativity, and results.',
        },
    ];

    return (
        <motion.div
            ref={refProp}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 50 }}
            transition={{ duration: 0.6 }}
            className="relative py-20 bg-[#2A2A3C] text-white"
        >
            {/* Section Heading */}
            <h3 className="text-4xl font-bold text-center mb-12 text-white">
                Why Choose Me?
            </h3>

            {/* Glassmorphic Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto relative">
                {cardData.map((card, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-white/10 backdrop-blur-lg rounded-xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-3 transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        {/* Icon */}
                        <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full mb-4 shadow-md">
                            <i className="text-2xl">{card.icon}</i>
                        </div>

                        {/* Title */}
                        <h4 className="text-xl font-semibold text-white mb-3">
                            {card.title}
                        </h4>

                        {/* Description */}
                        <p className="text-sm text-gray-300">
                            {card.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default WhyChoosePortfolio;
