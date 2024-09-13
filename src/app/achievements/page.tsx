"use client";

import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Certificate {
    title: string;
    description: string;
    imageUrl: string;
}

const Achievements = () => {
    const [hoveredCertificate, setHoveredCertificate] = useState<number | null>(null);

    const certificates: Certificate[] = [
        {
            title: "JavaScript Mastery",
            description: "Completed the JavaScript Mastery course with honors.",
            imageUrl: "/path-to-your-certificate-image-1.png",
        },
        {
            title: "React.js Certification",
            description: "Certified in React.js development from XYZ platform.",
            imageUrl: "/path-to-your-certificate-image-2.png",
        },
        {
            title: "Full-Stack Developer Bootcamp",
            description: "Completed Full-Stack Developer Bootcamp with high distinction.",
            imageUrl: "/path-to-your-certificate-image-3.png",
        },
        {
            title: "Full-Stack Developer Bootcamp",
            description: "Completed Full-Stack Developer Bootcamp with high distinction.",
            imageUrl: "/path-to-your-certificate-image-3.png",
        },
        {
            title: "Full-Stack Developer Bootcamp",
            description: "Completed Full-Stack Developer Bootcamp with high distinction.",
            imageUrl: "/path-to-your-certificate-image-3.png",
        },
        // Add more certificates as needed
    ];

    return (
        <>
            <h2 id="achievements" className="text-3xl sm:text-5xl font-extrabold text-center mb-6 sm:mb-10 text-[#c3c3c0]">Achievements & Certificates</h2>
            <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 px-4 sm:px-6 lg:px-8">
                {certificates.map((certificate, index) => (
                    <div
                        key={index}
                        className="relative overflow-hidden group cursor-pointer rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
                        onMouseEnter={() => setHoveredCertificate(index)}
                        onMouseLeave={() => setHoveredCertificate(null)}
                    >
                        {/* Certificate Image */}
                        <Image
                            src={certificate.imageUrl}
                            alt={certificate.title}
                            width={400}
                            height={300}
                            className="object-cover w-full h-64 sm:h-80 rounded-lg transition-transform duration-300 group-hover:scale-110 bg-[#c3c3c0]"
                        />
                        {/* Overlay with Details */}
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={{ y: hoveredCertificate === index ? "0%" : "100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="absolute inset-0 bg-gradient-to-b from-transparent to-black text-white p-4 sm:p-6 flex flex-col justify-end"
                        >
                            <h3 className="text-lg sm:text-xl font-semibold">{certificate.title}</h3>
                            <p className="text-xs sm:text-sm mt-1 sm:mt-2">{certificate.description}</p>
                        </motion.div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Achievements;
