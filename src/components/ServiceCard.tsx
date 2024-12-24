import React from 'react';
import Image from 'next/image';
import { FiArrowRight } from 'react-icons/fi';
import Link from 'next/link';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: string;
    link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
    return (
        <Link
            href={link}
            className="relative flex flex-col items-center text-center group transition-transform duration-300 transform hover:scale-90 hover:shadow-xl rounded-xl overflow-hidden hover:border-purple-500 border-2"
        >
            {/* Card Content */}
            <div className="relative z-10 flex flex-col items-center p-8 bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform group-hover:scale-105 group-hover:translate-y-2 border-2 border-black">
                {/* Service Icon */}
                <div className="mb-6 transform transition-all duration-300">
                    <Image
                        src={icon}
                        alt={title}
                        width={240}
                        height={240}
                        // className="border-4 border-gray-300 rounded-full transform transition-all duration-300 group-hover:scale-110"
                    />
                </div>

                {/* 3D Gradient Triangle */}
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-blue-400 via-green-400 to-purple-500 clip-triangle opacity-50 z-0"></div>

                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-gray-700 group-hover:text-gray-500 transition-colors duration-300 mb-4">
                    {description}
                </p>

                {/* Arrow Icon */}
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-y-1 group-hover:animate-bounce">
                    <FiArrowRight size={28} className="text-blue-600" />
                </div>
            </div>



            {/* Additional 3D Shapes inside the Card */}

        </Link>
    );
};

export default ServiceCard;
