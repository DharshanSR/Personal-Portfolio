'use client';
import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ServiceCard from '@/components/ServiceCard';
import { Tilt } from 'react-tilt';
import mobileAppDevelopment from '@/public/assests/images/mobileapp-development.png';
import webDevelopment from '@/public/assests/images/web-development.png';
import aiMl from '@/public/assests/images/ai-ml.png';
import blogWriter from '@/public/assests/images/blog-writting.png';
import cloudWork from "@/public/assests/images/cloud-working.png";

// Array of service data with src extracted from image imports
const services = [
    {
        title: 'Full Stack Development',
        description:
            'Building responsive web applications using React, Next.js, and Node.js for seamless user experiences. I specialize in creating robust and scalable solutions that ensure smooth interactions, enabling users to achieve their goals efficiently across all devices.',
        icon: webDevelopment.src, // Extract the `src` property
        link: '/service/web-development',
    },
    {
        title: 'Mobile App Development',
        description:
            'Developing dynamic mobile applications for iOS and Android with a focus on user-centric design. I ensure that every app not only looks great but also provides intuitive navigation and functionality, helping businesses connect with their users on the go.',
        icon: mobileAppDevelopment.src, // Extract the `src` property
        link: '/service/mobile-app-development',
    },
    {
        title: 'Machine Learning & AI',
        description:
            'Creating intelligent systems through data analysis and predictive modeling for informed decision-making. My expertise in machine learning helps organizations harness the power of their data, driving innovation insights that propel business growth.',
        icon: aiMl.src, // Extract the `src` property
        link: '/service/machine-learning',
    },
    {
        title: 'Cloud Services',
        description:
            'Leveraging scalable cloud solutions to enhance data storage, processing, and application deployment. I help businesses migrate to the cloud, optimizing their infrastructure for efficiency, ensuring they remain competitive in today’s fast-paced environment.',
        icon: cloudWork.src, // Extract the `src` property
        link: '/service/cloud-services',
    },
    {
        title: 'Blog & Article Writing',
        description:
            'Crafting insightful blog posts and articles for platforms like Medium and Stack Overflow. I focus on creating engaging content that not only informs but also drives engagement and community building, helping brands establish their voice in the digital landscape.',
        icon: blogWriter.src, // Extract the `src` property
        link: '/service/blog-writing',
    },
    {
        title: 'UI/UX Design',
        description:
            'Designing user interfaces and experiences that prioritize usability and aesthetics. I employ a user-centered design approach, conducting research and testing to create visually appealing and intuitive designs that enhance user satisfaction.',
        icon: blogWriter.src, // Extract the `src` property
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
    // Use the hook for each service
    const animatedServices = services.map((service) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [ref, controls] = useAnimationControl();
        return { service, ref, controls };
    });

    return (
        <section id="services" className="container mx-auto px-4 py-20 bg-[#14141F]">
            <motion.h1
                className="text-5xl font-extrabold mb-16 text-center text-white"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            >
                <h3 className="text-center text-2xl font-bold text-[#c4c6c4]">Service</h3>
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
                        <Tilt options={{ max: 25 }}>
                            <div className="tilt-card bg-white rounded-lg shadow-lg p-6 hover:bg-gray-100 transition-all duration-300" style={{lineHeight: "1.6"}}>
                                <ServiceCard
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    link={service.link}
                                />
                            </div>
                        </Tilt>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default ServicePage;
