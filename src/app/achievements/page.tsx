"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import Modal from "@/components/Modal"; // Import the Modal component
import certificates, { Certificate } from "@/data/certificates"; // Adjust the import path as necessary

const Achievements: React.FC = () => {
    const [hoveredCertificate, setHoveredCertificate] = useState<number | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCertificate, setSelectedCertificate] = useState<Certificate | null>(null);

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
        <section id="achievements" className="py-20 relative">
            <h2 className="text-6xl font-extrabold text-center sm:mb-10 text-[#00B5D8] z-20 relative justify-center">
                Achievements & Certificates
                <p className="text-lg font-bold text-[#9B4D96] text-center mb-8 z-10 relative">
                    A glimpse into my achievements and the credentials I’ve earned along the way in software and machine
                    learning.
                </p>
            </h2>


            <div
                className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
                {certificates.map((certificate, index) => {
                    const ref = React.useRef<HTMLDivElement>(null);
                    const inView = useInView(ref, { once: true });

                    return (
                        <motion.div
                            ref={ref}
                            key={index}
                            className={`relative overflow-hidden group cursor-pointer rounded-lg shadow-lg`}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            onMouseEnter={() => setHoveredCertificate(index)}
                            onMouseLeave={() => setHoveredCertificate(null)}
                            whileHover={{ scale: 1.05 }}
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
                            <div className="absolute bottom-4 left-4 bg-gradient-to-l from-purple-600 via-blue-500 to-teal-500 text-black bg-opacity-70 p-2 rounded text-center items-center">
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
            <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} certificate={selectedCertificate} />
        </section>
    );
};

export default Achievements;
