'use client';

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Modal from "@/components/Modal"; // Import the Modal component

interface Certificate {
    title: string;
    description: string;
    imageUrl: string;
    institutionLogo: string;
    institutionName: string;
    date: string;
    reason: string;
}

const Achievements: React.FC = () => {
    const [hoveredCertificate, setHoveredCertificate] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

    const certificates: Certificate[] = [
        {
            title: "JavaScript Mastery",
            description: "Completed the JavaScript Mastery course with honors.",
            imageUrl: "/images/certificates/javascript-mastery.png",
            institutionLogo: "/images/logos/javascript-logo.png",
            institutionName: "XYZ Academy",
            date: "March 2023",
            reason: "Demonstrated proficiency in JavaScript through hands-on projects.",
        },
        {
            title: "React.js Certification",
            description: "Certified in React.js development from XYZ platform.",
            imageUrl: "/images/certificates/react-certification.png",
            institutionLogo: "/images/logos/react-logo.png",
            institutionName: "ABC Institute",
            date: "April 2023",
            reason: "Completed comprehensive training on React.js and its ecosystem.",
        },
        {
            title: "Full-Stack Developer Bootcamp",
            description: "Completed Full-Stack Developer Bootcamp with high distinction.",
            imageUrl: "/images/certificates/fullstack-bootcamp.png",
            institutionLogo: "/images/logos/fullstack-logo.png",
            institutionName: "Tech School",
            date: "May 2023",
            reason: "Acquired skills in both front-end and back-end development.",
        },
        {
            title: "Node.js Developer Certification",
            description: "Achieved certification in Node.js development.",
            imageUrl: "/images/certificates/nodejs-certification.png",
            institutionLogo: "/images/logos/nodejs-logo.png",
            institutionName: "Node School",
            date: "June 2023",
            reason: "Gained practical experience in building server-side applications.",
        },
        {
            title: "CSS Mastery",
            description: "Completed advanced CSS course with practical projects.",
            imageUrl: "/images/certificates/css-mastery.png",
            institutionLogo: "/images/logos/css-logo.png",
            institutionName: "Design Academy",
            date: "July 2023",
            reason: "Developed advanced skills in styling and layout techniques.",
        },
        {
            title: "JavaScript Mastery",
            description: "Completed the JavaScript Mastery course with honors.",
            imageUrl: "/images/certificates/javascript-mastery.png",
            institutionLogo: "/images/logos/javascript-logo.png",
            institutionName: "XYZ Academy",
            date: "March 2023",
            reason: "Demonstrated proficiency in JavaScript through hands-on projects.",
        },
        {
            title: "React.js Certification",
            description: "Certified in React.js development from XYZ platform.",
            imageUrl: "/images/certificates/react-certification.png",
            institutionLogo: "/images/logos/react-logo.png",
            institutionName: "ABC Institute",
            date: "April 2023",
            reason: "Completed comprehensive training on React.js and its ecosystem.",
        },
        {
            title: "Full-Stack Developer Bootcamp",
            description: "Completed Full-Stack Developer Bootcamp with high distinction.",
            imageUrl: "/images/certificates/fullstack-bootcamp.png",
            institutionLogo: "/images/logos/fullstack-logo.png",
            institutionName: "Tech School",
            date: "May 2023",
            reason: "Acquired skills in both front-end and back-end development.",
        },
        {
            title: "Node.js Developer Certification",
            description: "Achieved certification in Node.js development.",
            imageUrl: "/images/certificates/nodejs-certification.png",
            institutionLogo: "/images/logos/nodejs-logo.png",
            institutionName: "Node School",
            date: "June 2023",
            reason: "Gained practical experience in building server-side applications.",
        },
        {
            title: "CSS Mastery",
            description: "Completed advanced CSS course with practical projects.",
            imageUrl: "/images/certificates/css-mastery.png",
            institutionLogo: "/images/logos/css-logo.png",
            institutionName: "Design Academy",
            date: "July 2023",
            reason: "Developed advanced skills in styling and layout techniques.",
        },
        {
            title: "JavaScript Mastery",
            description: "Completed the JavaScript Mastery course with honors.",
            imageUrl: "/images/certificates/javascript-mastery.png",
            institutionLogo: "/images/logos/javascript-logo.png",
            institutionName: "XYZ Academy",
            date: "March 2023",
            reason: "Demonstrated proficiency in JavaScript through hands-on projects.",
        },
        {
            title: "React.js Certification",
            description: "Certified in React.js development from XYZ platform.",
            imageUrl: "/images/certificates/react-certification.png",
            institutionLogo: "/images/logos/react-logo.png",
            institutionName: "ABC Institute",
            date: "April 2023",
            reason: "Completed comprehensive training on React.js and its ecosystem.",
        },
        {
            title: "Full-Stack Developer Bootcamp",
            description: "Completed Full-Stack Developer Bootcamp with high distinction.",
            imageUrl: "/images/certificates/fullstack-bootcamp.png",
            institutionLogo: "/images/logos/fullstack-logo.png",
            institutionName: "Tech School",
            date: "May 2023",
            reason: "Acquired skills in both front-end and back-end development.",
        },
        {
            title: "Node.js Developer Certification",
            description: "Achieved certification in Node.js development.",
            imageUrl: "/images/certificates/nodejs-certification.png",
            institutionLogo: "/images/logos/nodejs-logo.png",
            institutionName: "Node School",
            date: "June 2023",
            reason: "Gained practical experience in building server-side applications.",
        },
        {
            title: "CSS Mastery",
            description: "Completed advanced CSS course with practical projects.",
            imageUrl: "/images/certificates/css-mastery.png",
            institutionLogo: "/images/logos/css-logo.png",
            institutionName: "Design Academy",
            date: "July 2023",
            reason: "Developed advanced skills in styling and layout techniques.",
        },
        {
            title: "JavaScript Mastery",
            description: "Completed the JavaScript Mastery course with honors.",
            imageUrl: "/images/certificates/javascript-mastery.png",
            institutionLogo: "/images/logos/javascript-logo.png",
            institutionName: "XYZ Academy",
            date: "March 2023",
            reason: "Demonstrated proficiency in JavaScript through hands-on projects.",
        },
        {
            title: "React.js Certification",
            description: "Certified in React.js development from XYZ platform.",
            imageUrl: "/images/certificates/react-certification.png",
            institutionLogo: "/images/logos/react-logo.png",
            institutionName: "ABC Institute",
            date: "April 2023",
            reason: "Completed comprehensive training on React.js and its ecosystem.",
        },
        {
            title: "Full-Stack Developer Bootcamp",
            description: "Completed Full-Stack Developer Bootcamp with high distinction.",
            imageUrl: "/images/certificates/fullstack-bootcamp.png",
            institutionLogo: "/images/logos/fullstack-logo.png",
            institutionName: "Tech School",
            date: "May 2023",
            reason: "Acquired skills in both front-end and back-end development.",
        },
        {
            title: "Node.js Developer Certification",
            description: "Achieved certification in Node.js development.",
            imageUrl: "/images/certificates/nodejs-certification.png",
            institutionLogo: "/images/logos/nodejs-logo.png",
            institutionName: "Node School",
            date: "June 2023",
            reason: "Gained practical experience in building server-side applications.",
        },
        {
            title: "CSS Mastery",
            description: "Completed advanced CSS course with practical projects.",
            imageUrl: "/images/certificates/css-mastery.png",
            institutionLogo: "/images/logos/css-logo.png",
            institutionName: "Design Academy",
            date: "July 2023",
            reason: "Developed advanced skills in styling and layout techniques.",
        },
        {
            title: "JavaScript Mastery",
            description: "Completed the JavaScript Mastery course with honors.",
            imageUrl: "/images/certificates/javascript-mastery.png",
            institutionLogo: "/images/logos/javascript-logo.png",
            institutionName: "XYZ Academy",
            date: "March 2023",
            reason: "Demonstrated proficiency in JavaScript through hands-on projects.",
        },
        {
            title: "React.js Certification",
            description: "Certified in React.js development from XYZ platform.",
            imageUrl: "/images/certificates/react-certification.png",
            institutionLogo: "/images/logos/react-logo.png",
            institutionName: "ABC Institute",
            date: "April 2023",
            reason: "Completed comprehensive training on React.js and its ecosystem.",
        },
        {
            title: "Full-Stack Developer Bootcamp",
            description: "Completed Full-Stack Developer Bootcamp with high distinction.",
            imageUrl: "/images/certificates/fullstack-bootcamp.png",
            institutionLogo: "/images/logos/fullstack-logo.png",
            institutionName: "Tech School",
            date: "May 2023",
            reason: "Acquired skills in both front-end and back-end development.",
        },
        {
            title: "Node.js Developer Certification",
            description: "Achieved certification in Node.js development.",
            imageUrl: "/images/certificates/nodejs-certification.png",
            institutionLogo: "/images/logos/nodejs-logo.png",
            institutionName: "Node School",
            date: "June 2023",
            reason: "Gained practical experience in building server-side applications.",
        },
        {
            title: "CSS Mastery",
            description: "Completed advanced CSS course with practical projects.",
            imageUrl: "/images/certificates/css-mastery.png",
            institutionLogo: "/images/logos/css-logo.png",
            institutionName: "Design Academy",
            date: "July 2023",
            reason: "Developed advanced skills in styling and layout techniques.",
        },
        // Add more certificates as needed
    ];

    const handleClick = (certificate: Certificate) => {
        setSelectedCertificate(certificate);
        setIsModalOpen(true);
    };

    // Effect to prevent body scroll when modal is open
    useEffect(() => {
        if (isModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isModalOpen]);

    return (
        <section id="achievements" className="py-20">
            <h2 className="text-3xl sm:text-5xl font-extrabold text-center mb-4 sm:mb-10 text-[#c3c3c0]">Achievements &
                Certificates</h2>
            <p className="text-lg font-medium text-center text-gray-500 mb-8 mt-0">
                A glimpse into my achievements and the credentials I’ve earned along the way in software and machine
                learning.
            </p>

            <div
                className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
                {certificates.map((certificate, index) => {
                    const ref = React.useRef<HTMLDivElement>(null);
                    const inView = useInView(ref, {once: true}); // Check if the element is in view

                    return (
                        <motion.div
                            ref={ref}
                            key={index}
                            className={`relative overflow-hidden group cursor-pointer rounded-lg shadow-lg`}
                            initial={{opacity: 0, scale: 0.9}} // Initial state before animation
                            animate={inView ? {opacity: 1, scale: 1} : {opacity: 0, scale: 0.9}} // Animate when in view
                            transition={{duration: 0.5}} // Animation duration
                            onMouseEnter={() => setHoveredCertificate(index)}
                            onMouseLeave={() => setHoveredCertificate(null)}
                            whileHover={{scale: 1.05}} // Scale effect on hover
                            onClick={() => handleClick(certificate)}
                        >
                            {/* Certificate Image */}
                            <Image
                                src={certificate.imageUrl}
                                alt={certificate.title}
                                width={400}
                                height={300}
                                className="object-cover w-full h-64 rounded-lg transition-transform duration-300 group-hover:scale-110 bg-[#c3c3c0]"
                            />
                            {/* Institution Logo and Details */}
                            <div className="absolute top-4 left-4 flex items-center space-x-2">
                                <Image
                                    src={certificate.institutionLogo}
                                    alt={certificate.institutionName}
                                    width={40}
                                    height={40}
                                    className="rounded-full"
                                />
                                <div className="text-white">
                                    <h4 className="text-sm font-semibold">{certificate.institutionName}</h4>
                                    <p className="text-xs">{certificate.date}</p>
                                </div>
                            </div>
                            {/* Reason for the Certificate */}
                            <div
                                className="absolute bottom-4 left-4 text-white bg-black bg-opacity-50 p-2 rounded text-center items-center">
                                <p className="text-xs">{certificate.reason}</p>
                            </div>
                            {/* Overlay for Hover Effect */}
                            {hoveredCertificate === index && (
                                <motion.div
                                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white text-lg"
                                >
                                    View Certificate
                                </motion.div>
                            )}
                        </motion.div>
                    );
                })}
            </div>
            {/* Modal Component */}
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} certificate={selectedCertificate}/>
        </section>
    );
};

export default Achievements;
