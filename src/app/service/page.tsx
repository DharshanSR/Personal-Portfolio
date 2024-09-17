'use client';

import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '@/components/ServiceCard';
import mobileAppDevelopment from '@/public/assests/images/mobileapp-development.png';
import webDevelopment from '@/public/assests/images/web-development.png';
import aiMl from '@/public/assests/images/ai-ml.png';
import blogWriter from '@/public/assests/images/blog-writting.png';

// Array of service data with src extracted from image imports
const services = [
    {
        title: 'Full Stack Development',
        description: "Developing responsive, high-performance web applications with React, Next.js, TypeScript, Tailwind CSS, Node.js, and Express. Utilizing MongoDB, PostgreSQL, Docker, and CI/CD for robust, scalable solutions.",
        icon: webDevelopment.src, // Extract the `src` property
        link: '/web-development',
    },
    {
        title: 'Mobile App Development',
        description: "Creating dynamic and scalable mobile applications for both iOS and Android using React Native and Flutter. Prioritizing user-centric design and robust performance.",
        icon: mobileAppDevelopment.src, // Extract the `src` property
        link: '/mobile-app-development',
    },
    {
        title: "Machine Learning & AI",
        description: "Developing advanced machine learning models and intelligent systems through data analysis and predictive modeling.",
        icon: aiMl.src, // Extract the `src` property
        link: "/machine-learning",
    },
    {
        title: "Blog & Article Writing",
        description: "Crafting compelling and insightful blog posts and articles for platforms such as Medium and Stack Overflow.",
        icon: blogWriter.src, // Extract the `src` property
        link: "/blog-writing",
    },
];

// Animation variants for each service card
const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// Custom hook to handle animation control
const useAnimationControl = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({
        triggerOnce: false, // Trigger animation only once when the element is in view
        threshold: 0.2,    // When 20% of the card is visible
    });

    React.useEffect(() => {
        if (inView) {
            controls.start('visible');
        } else {
            controls.start('hidden');
        }
    }, [controls, inView]);

    return [ref, controls] as const;
};

const ServicePage: React.FC = () => {
    // Use the hook for each service
    const animatedServices = services.map((service) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ref, controls] = useAnimationControl();
        return { service, ref, controls };
    });

    return (
        <div id="services" className="container mx-auto px-4 py-20 bg-[#6B7579]">
            <motion.h1
                className="text-5xl font-extrabold mb-10 text-center text-[#c4c6c4]"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                My Expertise
            </motion.h1>

            {/* Grid Layout for Service Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {animatedServices.map(({ service, ref, controls }, index) => (
                    <motion.div
                        ref={ref} // Attach the reference to each service card for visibility detection
                        key={index}
                        initial="hidden"
                        animate={controls} // Controlled by inView state
                        variants={cardVariants} // Defined animation variants
                    >
                        <ServiceCard
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                            link={service.link}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default ServicePage;
