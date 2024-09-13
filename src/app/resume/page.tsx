import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';

const ResumePage = () => {
    return (
        <section
            id="resume"
            className="relative h-[500px] bg-fixed bg-cover bg-center"
            style={{
                backgroundImage: 'url("https://images.alphacoders.com/108/1080156.jpg")',
                backgroundAttachment: "fixed",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div className="container max-w-4xl mx-auto py-20 relative z-10">
                <h1 className="text-5xl font-bold text-center mb-6 text-white">My Resume</h1>
                <div className="flex justify-center">
                    <a
                        href="/path-to-your-resume.pdf"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full flex items-center"
                        download
                    >
                        <FaDownload className="mr-2" />
                        Download Resume
                    </a>
                </div>
            </div>

            {/* Overlay for parallax effect */}
            <div className="absolute inset-0 bg-black opacity-50"></div>
        </section>
    );
};

export default ResumePage;
