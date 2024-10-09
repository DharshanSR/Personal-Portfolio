'use client';

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaTimes } from "react-icons/fa"; // Import the close icon from React Icons

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
    if (!isOpen || !certificate) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-70">
            <motion.div
                className="bg-white rounded-lg p-8 shadow-2xl relative transition-transform transform max-w-3xl w-full" // Increased width
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ duration: 0.3 }}
            >
                <h2 className="text-3xl font-semibold mb-6 mt-10 text-center text-gray-800">{certificate.title}</h2>

                {/* Image Display */}
                <div className="flex justify-center mb-4">
                    <Image
                        src={certificate.imageUrl}
                        alt={certificate.title}
                        width={800}
                        height={500}
                        className="object-cover rounded-lg shadow-md"
                    />
                </div>

                <p className="mt-4 text-gray-700 text-center transition-opacity duration-300 ease-in-out">{certificate.description}</p>

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
