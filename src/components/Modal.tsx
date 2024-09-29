'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaTimes, FaSearchPlus, FaSearchMinus } from "react-icons/fa"; // Import the close and zoom icons from React Icons

interface Certificate {
    title: string;
    imageUrl: string;
    description: string;
}

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    certificate: Certificate | null;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, certificate }) => {
    const [zoom, setZoom] = useState(1); // State to manage zoom level

    const handleZoomIn = () => {
        setZoom((prevZoom) => Math.min(prevZoom + 0.2, 1.5)); // Max zoom level 1.5
    };

    const handleZoomOut = () => {
        setZoom((prevZoom) => Math.max(prevZoom - 0.2, 1)); // Min zoom level 1
    };

    if (!isOpen || !certificate) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
            <motion.div
                className="bg-white rounded-lg p-8 shadow-2xl relative transition-transform transform max-w-lg w-full"
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-3xl font-semibold mb-6 mt-10 text-center text-gray-800">{certificate.title}</h2>

                {/* Image with zoom effect */}
                <div className="flex justify-center mb-4">
                    <Image
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        width={600}
                        height={400}
                        className="object-cover rounded-lg shadow-md"
                        style={{ transform: `scale(${zoom})`, transition: 'transform 0.3s ease-in-out' }} // Apply zoom style
                    />
                </div>

                <p className="mt-4 text-gray-700 text-center transition-opacity duration-300 ease-in-out">{certificate.description}</p>

                {/* Zoom Controls */}
                <div className="flex justify-center mt-4">
                    <button onClick={handleZoomOut} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition">
                        <FaSearchMinus className="text-gray-700" size={20} />
                    </button>
                    <button onClick={handleZoomIn} className="p-2 rounded-full bg-gray-200 hover:bg-gray-300 transition mx-4">
                        <FaSearchPlus className="text-gray-700" size={20} />
                    </button>
                </div>

                {/* Close Icon */}
                <div
                    onClick={onClose}
                    className="absolute top-4 right-4 cursor-pointer p-2 rounded-full transition-transform transform hover:bg-gray-300 hover:scale-110"
                >
                    <FaTimes className="text-red-600" size={26} />
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
