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
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <motion.div
                className="bg-white rounded-lg p-6 shadow-lg relative" // Add relative positioning for the close icon
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0 }}
            >
                <h2 className="text-2xl font-bold mb-4">{certificate.title}</h2>
                <Image
                    src={certificate.imageUrl}
                    alt={certificate.title}
                    width={600}
                    height={400}
                    className="object-cover w-full h-64 rounded-lg"
                />
                <p className="mt-2">{certificate.description}</p>
                {/* Close Icon */}
                <div
                    onClick={onClose}
                    className="absolute top-2 right-2 cursor-pointer p-2 rounded-full hover:bg-gray-200" // Styling for the close icon
                >
                    <FaTimes className="text-red-500" size={24} /> {/* Close icon */}
                </div>
            </motion.div>
        </div>
    );
};

export default Modal;
