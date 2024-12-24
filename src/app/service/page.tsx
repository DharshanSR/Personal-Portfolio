'use client';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '@/components/ServiceCard';
import mobileAppDevelopment from '@/public/assests/images/mobileapp-development.png';
import webDevelopment from '@/public/assests/images/web-development.png';
import aiMl from '@/public/assests/images/ai-ml.png';
import blogWriter from '@/public/assests/images/blog-writting.png';
import cloudWork from "@/public/assests/images/cloud-working.png";

// Service data with shortened descriptions
const services = [
    {
        title: 'Full Stack Development',
        description:
            'Building responsive web apps using React, Next.js, and Node.js to create scalable solutions for seamless user experiences.',
        icon: webDevelopment.src,
        link: '/service/web-development',
    },
    {
        title: 'Mobile App Development',
        description:
            'Developing mobile apps for iOS and Android with a focus on user-friendly design and intuitive navigation.',
        icon: mobileAppDevelopment.src,
        link: '/service/mobile-app-development',
    },
    {
        title: 'Machine Learning & AI',
        description:
            'Creating intelligent systems with data analysis and predictive modeling to drive business growth and innovation.',
        icon: aiMl.src,
        link: '/service/machine-learning',
    },
    {
        title: 'Cloud Services',
        description:
            'Providing scalable cloud solutions to optimize data storage, processing, and infrastructure for businesses.',
        icon: cloudWork.src,
        link: '/service/cloud-services',
    },
    {
        title: 'Blog & Article Writing',
        description:
            'Writing engaging blog posts and articles to help brands establish their voice and drive community engagement.',
        icon: blogWriter.src,
        link: '/service/blog-writing',
    },
    {
        title: 'UI/UX Design',
        description:
            'Designing user-centric interfaces and experiences that enhance usability and aesthetics.',
        icon: blogWriter.src, // Assuming same icon for UI/UX, adjust if needed
        link: '/service/ui-ux',
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
        threshold: 0.2, // When 20% of the card is visible
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
    // Use the hook for each service card
    const animatedServices = services.map((service) => {
        const [ref, controls] = useAnimationControl(); // Individual animation control for each card
        return { service, ref, controls };
    });

    return (
        <section id="services" className="container mx-auto px-4 py-20 bg-[#2A2A3C] relative">

            {/* Main Heading */}
            <div className="relative z-10">
                <motion.h1
                    className="text-6xl font-extrabold mb-16 text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-teal-500"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h3 className="text-center text-2xl font-bold text-[#c4c6c4]">Service</h3>
                    My Expertise
                </motion.h1>
            </div>

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
                        <div className="bg-white rounded-lg shadow-lg p-6 hover:bg-gray-100 transition-all duration-300" style={{ lineHeight: "1.6" }}>
                            {/* 3D Gradient Triangle */}
                            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-400 via-green-400 to-purple-500 clip-triangle opacity-50 z-0"></div>

                            {/* 3D Gradient Triangle */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-400 via-green-400 to-purple-500 clip-triangle opacity-50 z-0"></div>

                            <ServiceCard
                                title={service.title}
                                description={service.description}
                                icon={service.icon}
                                link={service.link}
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicePage;
