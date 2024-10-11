// components/Modal.tsx

import React, { useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    message: string;
    type: 'success' | 'error';
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, message, type }) => {
    useEffect(() => {
        if (isOpen) {
            // Prevent background scrolling when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 relative">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 focus:outline-none"
                    aria-label="Close Modal"
                >
                    <FaTimesCircle size={24} />
                </button>
                <div className="flex flex-col items-center">
                    {type === 'success' ? (
                        <FaCheckCircle className="text-green-500 mb-4" size={48} />
                    ) : (
                        <FaTimesCircle className="text-red-500 mb-4" size={48} />
                    )}
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-center text-gray-700">{message}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
